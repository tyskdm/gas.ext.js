/**
 * @fileoverview parse GAS reference web pages and create
 * extern files for google closure compiler.
 * @author tsuyoshi kodama / tsuyoshi.kodama@gmail.com
 */


var GLOBAL_OBJECT;

function init(global) {
  GLOBAL_OBJECT = global;

  GLOBAL_OBJECT.func0001 = getClassList;
  GLOBAL_OBJECT.func0002 = getClassInfo;
  GLOBAL_OBJECT.func0003 = exportExternfile;
}

function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      menuEntries = [
        {name: 'get Class List', functionName: 'func0001'},
        {name: 'get Class Info', functionName: 'func0002'},
        {name: 'export extern.js', functionName: 'func0003'}
      ];

  ss.addMenu('GAS-API', menuEntries);
}


var GAS_SERVICE_PREFIX = '_';


function getClassList() {

  namespace.require('WIL.Spreadsheet.sheetDb');
  var sheetDb = WIL.Spreadsheet.sheetDb;

  namespace.require('WIL.Spreadsheet.config');
  var config = WIL.Spreadsheet.config;

  var list = sheetDb.getTable('ClassFiles');

  var settings = config.getSettings('GAS');
  if ((! settings.URL) || (! settings.URL.indexPage)) {
    return;
  }
  var url = settings.URL.indexPage;

  var classList = parseClassList(url);

  var c, s, p, r = 1;
  for (c = 0; c < classList.categories.length; c++) {
    var category = classList.categories[c];

    list.setValue(r, 'Category', category.name);

    for (s = 0; s < category.services.length; s++) {
      var service = category.services[s];

      list.setValue(r, 'Service.name', service.name);
      list.setValue(r, 'Service.status', service.status);

      for (p = 0; p < service.classPages.length; p++) {
        var cPage = service.classPages[p];

        list.setValue(r, 'Class.name', cPage.name);
        list.setValue(r, 'Class.status', cPage.status);
        list.setValue(r, 'Class.URL', cPage.url);
        list.setValue(r, 'Class.obj', (cPage.instanceObject ? 'yes' : ''));

        r++;
      }
    }
  }
}


function getClassInfo() {

  namespace.require('WIL.Spreadsheet.sheetDb');
  var sheetDb = WIL.Spreadsheet.sheetDb;

  namespace.require('WIL.Spreadsheet.RowsList');
  var RowsList = WIL.Spreadsheet.RowsList;

  namespace.require('WIL.Spreadsheet.config');
  var config = WIL.Spreadsheet.config;

  var list = sheetDb.getTable('ClassFiles');

  var settings = config.getSettings('GAS');
  if ((! settings.URL) || (! settings.URL.domain)) {
    return;
  }

  var records = new RowsList(list, function(table, row) {
    return (table.getValue(row, 'Class.URL') !== '');
  });

  // データがなければ帰る
  var num = records.getNumRows();
  var msg = 'Class URL: ' + num + ' pages.';
  var ret = Browser.msgBox(msg, Browser.Buttons.OK_CANCEL);
  if ((ret !== 'ok') || (num === 0)) {
    return;
  }

  var path = '';
  // forEach records
  records.forEach(function(table, row) {
    var url = settings.URL.domain + table.getValue(row, 'Class.URL');
    if (table.getValue(row, 'Service.name') !== '') {
      path = table.getValue(row, 'Service.name');
    }

    if (table.getValue(row, 'externfile.auto-generated') !== '') {
      return;
    }

    var html = UrlFetchApp.fetch(url).getContentText();
    var classInfo = parseClassPage(html, /** @type {string} */ (path), GAS_SERVICE_PREFIX);

    table.setValue(row, 'Class.type', classInfo.type);
    table.setValue(row, 'Class.Properties', classInfo.properties.length);
    table.setValue(row, 'Class.Methods', classInfo.methods.length);
    table.setValue(row, 'Class.Deprecated', classInfo.deprecatedMethods.length);
    table.setValue(row, 'Class.update', classInfo.lastUpdate);

    var extFile = generateExternContent(classInfo, GAS_SERVICE_PREFIX);
    table.setValue(row, 'externfile.auto-generated', extFile);

    SpreadsheetApp.flush();
  });

  Browser.msgBox('Complete.');
}


function exportExternfile() {

  namespace.require('WIL.Spreadsheet.sheetDb');
  var sheetDb = WIL.Spreadsheet.sheetDb;

  namespace.require('WIL.Spreadsheet.RowsList');
  var RowsList = WIL.Spreadsheet.RowsList;

  var list = sheetDb.getTable('ClassFiles');

  var records = new RowsList(list, function(table, row) {
    return (table.getValue(row, 'Class.URL') !== '');
  });

  // データがなければ帰る
  var num = records.getNumRows();
  var msg = 'Class URL: ' + num + ' pages.';
  var ret = Browser.msgBox(msg, Browser.Buttons.OK_CANCEL);
  if ((ret !== 'ok') || (num === 0)) {
    return;
  }

  var content = '';
  var service = '';

  // forEach records
  records.forEach(function(table, row) {

    var sName = table.getValue(row, 'Service.name');
    if (sName !== '') {

      if ((table.getValue(row, 'UseThisService') !== 'no') &&
          (table.getValue(row, 'Service.status') !== 'deprecated')) {
        // starting new Service block.
        service = sName;

        content +=
          '\n' +
          '/**\n' +
          ' * ' + GAS_SERVICE_PREFIX + service + ' Services\n' +
          ' */\n' +
          'var ' + GAS_SERVICE_PREFIX + service + ' = {};\n' +
          '\n';

      } else {
        service = '';
      }
    }

    if (service === '') {       // Out of service.
      return;
    }

    // In service.
    if (table.getValue(row, 'Class.status') !== 'deprecated') {
      content += table.getValue(row, 'externfile.auto-generated');

      if (table.getValue(row, 'Class.obj') === 'yes') {

        // add Global object.
        var className = table.getValue(row, 'Class.name');
        content +=
          '\n' +
          '/**\n' +
          ' * @type {' + GAS_SERVICE_PREFIX + service + '.' + className + '}\n' +
          ' */\n' +
          'var ' + className +
              ' = new ' + GAS_SERVICE_PREFIX + service + '.' + className + '();\n' +
          '\n';
      }
    }
  });

  // Create extern file.
  var nowdate = new Date(),
  timeStamp = Utilities.formatDate(nowdate, 'GMT+9', 'yyyy/MM/dd HH:mm:ss');
  DriveApp.createFile('externfile(' + timeStamp + ').js', content);

  Browser.msgBox('Complete.');
}
