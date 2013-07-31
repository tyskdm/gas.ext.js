/**
 * @fileoverview parse GAS reference web pages and create
 * extern files for google closure compiler.
 * @author tsuyoshi kodama / tsuyoshi.kodama@gmail.com
 */


var GLOBAL_OBJECT;

function init(global) {
  GLOBAL_OBJECT = global;
}

function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      menuEntries = [
        {name: 'get Class List', functionName: 'getClassList'},
        {name: 'get Class Info', functionName: 'getClassInfo'}
      ];

  GLOBAL_OBJECT.getClassList = getClassList;
  GLOBAL_OBJECT.getClassInfo = getClassInfo;

  ss.addMenu('GAS-API', menuEntries);
}


function getClassList() {
  var sheetDb = namespace.require('WIL.Spreadsheet.sheetDb');
  var config = namespace.require('WIL.Spreadsheet.config');

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

      list.setValue(r, 'Service', service.name);

      for (p = 0; p < service.classPages.length; p++) {
        var cPage = service.classPages[p];

        list.setValue(r, 'Class.name', cPage.name);
        list.setValue(r, 'Class.URL', cPage.url);

        r++;
      }
    }
  }
}


function getClassInfo() {
  var sheetDb = namespace.require('WIL.Spreadsheet.sheetDb');
  var RowsList = namespace.require('WIL.Spreadsheet.RowsList');
  var config = namespace.require('WIL.Spreadsheet.config');

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

  // forEach records
  records.forEach(function(table, row) {
    var url = settings.URL.domain + table.getValue(row, 'Class.URL');
    var html = UrlFetchApp.fetch(url).getContentText();
    var classInfo = parseClassPage(html);

    table.setValue(row, 'Class.Properties', classInfo.properties.length);
    table.setValue(row, 'Class.Methods', classInfo.methods.length);
    table.setValue(row, 'Class.update', classInfo.lastUpdate);

    SpreadsheetApp.flush();
  });

  Browser.msgBox('Complete.');
}


/*

    var settings = config.getSettings('Table', optSpreadsheetId);

    // No setting information about tableId.
    if (! settings[tableId]) {
      return null;
    }




  namespace.require('WIL.Spreadsheet.Table');
  namespace.require('WIL.Spreadsheet.sheetDb');
  namespace.require('WIL.Spreadsheet.RowsList');

  // アクティブシートからテーブルを開く
  var sheetName = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();
  var depositList = WIL.Spreadsheet.sheetDb.getTable('入金データ', { sheetName : sheetName });

  // SELECT
  var records = new WIL.Spreadsheet.RowsList(depositList, function (table, row) {
    return (table.getValue(row, '入金データ.#') !== '') &&         // 先頭行 of 3
           (table.getValue(row + 2, '入金データ.入力欄') !== '')    // データ有り
  });

  // データがなければ帰る
  var num = records.getNumRows();
  var msg = "入力済みの入金データは：" + num +"件です。";
  var ret = Browser.msgBox(msg, Browser.Buttons.OK_CANCEL);
  if ((ret !== "ok") || (num === 0)) {
    return;
  }

  // forEach records
  records.forEach(function (table, row) {
    table.setValue(row + 0, '入金データ.正規化', normalizeId(table.getValue(row + 0, '入金データ.入力欄')));
    table.setValue(row + 1, '入金データ.正規化', normalizeName(table.getValue(row + 1, '入金データ.入力欄')));
    table.setValue(row + 2, '入金データ.正規化', normalizeAmount(table.getValue(row + 2, '入金データ.入力欄')));
  });

  Browser.msgBox("完了しました。");
}

*/