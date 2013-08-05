/*
getGasExternFiles:
version 0.7.0
build 231 - 2013/08/06 21:55:30
Copyright (c) 2013 Tsuyoshi Kodama

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/**
 * @param {string} str
 * @constructor
 */
function SourceText(str) {
  this.text = str;
}

SourceText.prototype = {
  /**
   * @param {string} str
   */
  moveBefore: function(str) {
    var index = this.text.indexOf(str);
    this.text = index < 0 ? '' : this.text.substring(index);
  },

  /**
   * @param {string} str
   */
  moveAfter: function(str) {
    var index = this.text.indexOf(str);
    this.text = index < 0 ? '' : this.text.substring(index + str.length);
  },

  /**
   * @param {string} start
   * @param {string} end
   * @return {string}
   */
  getBetween: function(start, end) {

    var s = this.text.indexOf(start);
    if (s < 0) {
      s = 0;
    } else {
      s += start.length;
    }

    var str = '';
    var e = this.text.indexOf(end);
    if (e < 0) {
      str = this.text.substring(s);
    } else {
      str = this.text.substring(s, e);
    }

    return str;
  },

  /**
   * @param {string} str
   * @return {number}
   */
  indexOf: function(str) {
    return this.text.indexOf(str);
  }
};
/**
 * @constructor
 */
function ClassInfo() {
  this.type = '';
  this.name = '';
  this.path = '';
  this.description = '';
  this.properties = [];
  this.methods = [];
  this.deprecatedMethods = [];
  this.lastUpdate = '';
}

/**
 * @constructor
 */
function Property() {
  this.name = '';
  this.type = '';
  this.description = '';
}

/**
 * @constructor
 */
function Method() {
  this.name = '';
  this.paramString = '';
  this.description = '';
  this.parameters = [];
  this.returnValue = {
      type: '',
      description: ''
  };
}

/**
 * @constructor
 */
function Parameter() {
  this.name = '';
  this.type = '';
  this.description = '';
}


/**
 * @param {string} classPath
 * @param {string} currentPath
 * @param {string} PREFIX
 * @return {string}
 */
function getClassType(classPath, currentPath, PREFIX) {
  var type = classPath;
  var path = '';

  var CLASS_PREFIX = PREFIX;

  if (classPath.indexOf('<a') === 0) {
    // classPath = ex. '<a href="../awesome-calendar/color.htm">Color</a>'

    type = classPath.substring(                     // 'Color'
        (classPath.indexOf('">') + '">'.length),
        classPath.indexOf('</a>')
    );

    path = classPath.substring(
        (classPath.indexOf('href="') + 'href="'.length),
        classPath.indexOf('">')
    );                                              // '../awesome-calendar/color.htm'

    if (path.indexOf('../') !== 0) {
      type = currentPath + '.' + type;              // currentPath.Color

    } else {
      path = path.substring('../'.length);          // 'awesome-carendar/color.htm'
      path = path.substring(0, path.indexOf('/'));  // 'awesome-carendar'

      var part, parts = path.split('-');            // [ 'awesome', 'carendar' ]

      path = '';
      while (parts.length) {                        // += 'Awesome' += 'Carendar'
        part = parts.shift();
        var charCode = part.charCodeAt(0) + ('A'.charCodeAt(0) - 'a'.charCodeAt(0));
        path += String.fromCharCode(charCode) + part.substring(1);
      }
      type = path + '.' + type;                     // 'AwesomeCarendar.Color'
      type = CLASS_PREFIX + type;
    }

  } else {
    // Table of Gas original types but no url link.
    var HAND_PICK_TABLE = {
        MenuBar: 'Ui.MenuBar',
        MenuItem: 'Ui.MenuItem',
        MenuItemSeparator: 'Ui.MenuItemSeparator',
        TreeItem: 'Ui.TreeItem'
    };

    if (HAND_PICK_TABLE[type]) {
      type = HAND_PICK_TABLE[type];
      type = CLASS_PREFIX + type;
    }
  }

  return type;
}

/**
 * @param {Object} html
 * @param {string} currentPath
 * @param {string} PREFIX
 * @return {Object}
 */
function parseMethod(html, currentPath, PREFIX) {
  var method = new Method();

  // Method name
  html.moveAfter('<h3 class="showalways">');
  var fName = html.getBetween('<code>', '</code>');
  method.name = fName.substring(0, fName.indexOf('('));
  method.paramString = fName.substring(fName.indexOf('('));

  // Method description
  var next_p = html.indexOf('</p>');
  var next_pre = html.indexOf('<pre');
  var next_h4 = html.indexOf('<h4');
  var last = html.indexOf('</div>');
  var term = '</div>';

  if ((next_h4 >= 0) && (next_h4 < last)) {
    last = next_h4;
    term = '<h4';
  }
  if ((next_pre >= 0) && (next_pre < last)) {
    last = next_pre;
    term = '<pre';
  }
  if ((next_p >= 0) && (next_p < last)) {
    last = next_p;
    term = '</p>';
  }
  method.description = html.getBetween('<p>', term);

  if (term === '</p>') {
    html.moveAfter('</p>');
  }
  if (term === '<pre') {
    html.moveAfter('</pre>');
  }
  if (term === '<h4') {
    html.moveBefore('<h4');
  }
  if (term === '</div') {
    html.moveBefore('</div');
  }

  // IF sample code
  if (html.indexOf('<pre') === 0) {
    html.moveAfter('</pre>');
  }

  // IF 'Parameters'
  if (html.indexOf('<h4>Parameters</h4>') === 0) {
    html.moveAfter('<table class="function param">');
    html.moveAfter('<tr>');     // skip header row
    html.moveAfter('</tr>');

    while (html.indexOf('<tr>') === 0) {
      var parameter = new Parameter();
      var classType;

      parameter.name = html.getBetween('<td><code>', '</code></td>');
      html.moveAfter('</td>');

      classType = html.getBetween('<td><code>', '</code></td>');
      classType = getClassType(classType, currentPath, PREFIX);
      parameter.type = classType;
      html.moveAfter('</td>');

      parameter.description = html.getBetween('<td>', '</td>');
      html.moveAfter('</tr>');

      method.parameters.push(parameter);
    }
    html.moveAfter('</table>');
  }

  // IF 'Advanced parameters', skip it.
  if (html.indexOf('<h4>Advanced parameters</h4>') === 0) {
    html.moveAfter('</table>');
  }

  // Return value
  if (html.indexOf('<h4>Return</h4>') === 0) {
    html.moveAfter('<h4>Return</h4>');

    if ((html.indexOf('</p>') >= 0) && (html.indexOf('</p>') < html.indexOf('</div>'))) {
      method.returnValue.description = html.getBetween('<p>', '</p>');
    } else {
      method.returnValue.description = html.getBetween('<p>', '</div>');
    }
  }

  // ignore 'See also'
  // move to block-end
  html.moveAfter('</div>');

  return method;
}


/**
 * @param {string} src
 * @param {string} path
 * @param {string} PREFIX
 * @return {Object}
 */
function parseClassPage(src, path, PREFIX) {

  var html = new SourceText(src);
  var classInfo = new ClassInfo();
  var classType;
  var className;

  classInfo.path = path;
  if (path.indexOf('<sup>') >= 0) {
    classInfo.path = path.substring(0, path.indexOf('<sup>'));
  }
  classInfo.path = PREFIX + classInfo.path;

  html.moveAfter('<div id="gc-content"');

  className = html.getBetween('<h1 itemprop="name" class="page-title" >', '</h1>');
  classInfo.type = className.substring(0, className.indexOf(' '));

  className = className.substring(className.indexOf(' ') + ' '.length);
  if (className.indexOf('<sup>') >= 0) {
    className = className.substring(0, className.indexOf('<sup>'));
  }
  classInfo.name = className;

  html.moveAfter('<div itemprop="articleBody"');
  classInfo.description = html.getBetween('<div class="type doc"><p>', '</div>');

  html.moveAfter('<div class="type toc">');

  // IF 'Properties'
  if (html.indexOf('<section ><h3 class="showalways">Properties</h3>') === 0) {
    html.moveAfter('<table');
    html.moveAfter('<tr>');
    html.moveAfter('</tr>');

    while (html.indexOf('<tr>') === 0) {
      var property = new Property();

      property.name = html.getBetween('<td><code>', '</code></td>');
      html.moveAfter('</td>');

      classType = html.getBetween('<td><code>', '</code></td>');
      classType = getClassType(classType, classInfo.path, PREFIX);
      property.type = classType;

      html.moveAfter('</td>');
      property.description = html.getBetween('<td>', '</td>');
      html.moveAfter('</tr>');

      classInfo.properties.push(property);
    }

    html.moveAfter('</table></section>');
  }

  // IF 'Methods'
  if (html.indexOf('<section ><h3 class="showalways">Methods</h3>') === 0) {

    // Create list of Return Value from methods.

    var returnValues = [];

    html.moveAfter('<table');
    html.moveAfter('</tr>');

    while (html.indexOf('<tr>') === 0) {        // Methods list
      var tempMethod = new Method();

      html.moveAfter('<td><code><a href=');
      var fName = html.getBetween('>', '</a></code></td>');  // method name
      tempMethod.name = fName.substring(0, fName.indexOf('('));
      tempMethod.paramString = fName.substring(fName.indexOf('('));

      html.moveAfter('</td>');
      tempMethod.returnValue.type = html.getBetween('<td><code>', '</code></td>');
      html.moveAfter('</td>');
      tempMethod.description = html.getBetween('<td>', '</td>');
      html.moveAfter('</tr>');

      returnValues.push(tempMethod);
    }
    html.moveAfter('</section>');

    if (html.indexOf('<section') === 0) {       // Deprecated methods
      html.moveAfter('<table');
      html.moveAfter('</tr>');

      while (html.indexOf('<tr>') === 0) {
        var tempMethod = new Method();

        html.moveAfter('<td><code><s><a href=');
        var fName = html.getBetween('>', '</a></s></code></td>');    // method name
        tempMethod.name = fName.substring(0, fName.indexOf('('));
        tempMethod.paramString = fName.substring(fName.indexOf('('));
        html.moveAfter('</td>');
        tempMethod.returnValue.type = html.getBetween('<td><code>', '</code></td>');
        html.moveAfter('</td>');
        tempMethod.description = html.getBetween('<td>', '</td>');
        html.moveAfter('</tr>');

        returnValues.push(tempMethod);
      }
    }

    html.moveAfter('<h2>Detailed documentation</h2>');
    var cnt = 0;
    do {
      var method = parseMethod(html, classInfo.path, PREFIX);
      if (method.name === returnValues[cnt].name) {     // method name
        classType = returnValues[cnt].returnValue.type;
        classType = getClassType(classType, classInfo.path, PREFIX);
        method.returnValue.type = classType;
      } else {
        method.returnValue.type = 'not found';
      }
      classInfo.methods.push(method);
      cnt++;
    } while (html.indexOf('<hr />') === 0);

    // IF 'Deprecated methods'
    if (html.indexOf('<h2>Deprecated methods</h2>') === 0) {

      do {
        var method = parseMethod(html, classInfo.path, PREFIX);
        if (method.name === returnValues[cnt].name) {
          classType = returnValues[cnt].returnValue.type;
          classType = getClassType(classType, classInfo.path, PREFIX);
          method.returnValue.type = classType;
        } else {
          method.returnValue.type = 'not found';
        }
        classInfo.deprecatedMethods.push(method);
        cnt++;
      } while (html.indexOf('<hr />') === 0);
    }
  }

  html.moveAfter('<div itemprop="datePublished"');
  classInfo.lastUpdate = html.getBetween('id="gc-content-last-updated">', '</div>');

  return classInfo;
}
/**
 * @constructor
 */
function ClassList() {
  this.url = '';
  this.categories = [];
}

/**
 * @constructor
 */
function Category() {
  this.name = '';
  this.services = [];
}

/**
 * @constructor
 */
function Service() {
  this.name = '';
  this.url = '';
  this.classPages = [];
}

/**
 * @constructor
 */
function ClassPage() {
  this.name = '';
  this.url = '';
  this.classInfo = {};
}



/**
 * @param {string} url
 * @return {Object}
 */
function parseClassList(url) {

  var src = UrlFetchApp.fetch(url).getContentText();
  var html = new SourceText(src);
  var classList = new ClassList();

  classList.url = url;

  html.moveAfter('<div id="gc-sidebar"');
  html.moveAfter('<span');

  while (html.getBetween('>', '</span>') !== 'REFERENCE') {
    html.moveAfter('<hr/>');
    html.moveAfter('<span');
  }
  html.moveAfter('</span></li>');

  while (html.indexOf('<li') === 0) {
    var category = new Category();

    html.moveAfter('<span class="tlw-title" data-title=');
    category.name = html.getBetween('>', '</span>');            // Category name.
    html.moveAfter('<ul>');

    while (html.indexOf('<li') === 0) {
      var service = new Service();

      html.moveAfter('<li class=');
      service.url = html.getBetween('<a href="', '" data-title');
      html.moveAfter('<a href="');

      service.name = html.getBetween('<span>', '</span>');      // Service name.
      html.moveAfter('</span></a><ul>');

      while (html.indexOf('<li') === 0) {
        html.moveAfter('<li class="">');
        if (html.indexOf('<a') !== 0) {
          html.moveAfter('</li>');
          continue;
        }

        var classPage = new ClassPage();
        classPage.url = html.getBetween('<a href="', '" data-title');
        classPage.name = html.getBetween('<span>', '</span>');  // Class name.
        html.moveAfter('</li>');

        service.classPages.push(classPage);
      }
      html.moveAfter('</ul></li>');

      category.services.push(service);
    }
    html.moveAfter('</ul></li>');

    classList.categories.push(category);
  }

  return classList;
}
var CLASS_PATH = '';    // class path prefix : But don't use. it doesn't work, should be removed.


/**
 * @constructor
 */
var ExtContent = function() {
  this.text = '';
};

ExtContent.prototype = {
  b_start: function() {
    this.text += '/**\n';
  },

  b_addString: function(str) {
    this.text += ' * ' + str + '\n';
  },

  b_param: function(type, name) {
    this.b_addString('@param {' + type + '} ' + name);
  },

  b_return: function(type) {
    this.b_addString('@return {' + type + '}');
  },

  b_type: function(type) {
    this.b_addString('@type {' + type + '}');
  },

  b_end: function() {
    this.text += ' */\n';
  },

  add_class: function(name) {
    this.text += CLASS_PATH + name + ' = function() {};\n';
  },

  add_function: function(cName, fName, fPara) {
//    var name = fName.substring(0, fName.indexOf('('));
//    var para = fName.substring(fName.indexOf('('));

    this.text += CLASS_PATH + cName + '.prototype.' + fName + ' = function' + fPara + ' {};\n';
  },

  add_property: function(cName, pName) {
    this.text += CLASS_PATH + cName + '.prototype.' + pName + ';\n';
  },

  add_br: function() {
    this.text += '\n';
  }
};

var typeTable = {
  'String': 'string',
  'String[]': 'Array.<string>',
  'String[][]': 'Array.<Array.<string>>',

  // Char is string but it's length is always 1.
  'Char': 'string',
  'Char[]': 'Array.<string>',
  'Char[][]': 'Array.<Array.<string>>',

  'Integer': 'number',
  'Integer[]': 'Array.<number>',
  'Integer[][]': 'Array.<Array.<number>>',

  //Byte is number but it's always used only lower 8-bits.
  'Byte': 'number',
  'Byte[]': 'Array.<number>',
  'Byte[][]': 'Array.<Array.<number>>',

  'Object': 'Object',
  'Object[]': 'Array.<Object>',
  'Object[][]': 'Array.<Array.<Object>>',
  'Object...': '...Object',

  'Boolean': 'boolean',
  'Boolean[]': 'Array.<boolean>',
  'Boolean[][]': 'Array.<Array.<boolean>>'
};

/**
 * @param {string} type
 * @return {string}
 */
var getNotation = function(type) {
  var notation = '';

  if (typeTable[type]) {
    return typeTable[type];
  }

  notation = getCompilerTypeNotation(type);
  return notation;
};


/**
 * @param {string} type
 * @return {string}
 */
var getCompilerTypeNotation = function(type) {
  var notation = type;

  var index = type.lastIndexOf('[]');
  if (index >= 0) {
    var typeString = type.substring(0, index);
    typeString = getCompilerTypeNotation(typeString);
    notation = 'Array.<' + typeString + '>';
  }

  return notation;
};


/**
 * @param {Object} cInfo
 * @param {number} index
 * @return {Object}
 */
var mergeSameNameMethods = function(cInfo, index) {
  var method = new Method();
  method.name = cInfo.methods[index].name;
  method.paramString = cInfo.methods[index].paramString;

  if ((cInfo.methods.length - index > 1) &&
      (cInfo.methods[index].name === cInfo.methods[index + 1].name)) {
    // This method and next one have same name.

    // get all parameters of all same-named methods, into params[][].
    var params = [];
    var paramMax = 0;
    var retTypes = [];
    var noReturn = '';
    var next = index;

    do {
      // Store parameters.
      var param = [];
      for (var p = 0; p < cInfo.methods[next].parameters.length; p++) {
        param.push({
            name: cInfo.methods[next].parameters[p].name,
            type: cInfo.methods[next].parameters[p].type
        });
      }
      params.push(param);
      paramMax = p > paramMax ? p : paramMax;

      // Store return type.
      var rtype = cInfo.methods[next].returnValue.type;
      for (var i = 0; i < retTypes.length; i++) {
        if (rtype === retTypes[i]) {
          break;
        }
      }
      if (i === retTypes.length) {
        if (rtype === 'void') {
          noReturn = '=';
        } else {
          retTypes.push(rtype);
        }
      }

      next++;
    } while ((next < cInfo.methods.length) &&
              (cInfo.methods[index].name === cInfo.methods[next].name));
    method.nextIndex = next - 1;    // last index to merge.

    // compare parameters between each methods.
    for (var p = 0; p < paramMax; p++) {

      var paramName = null;
      var noParam = '';
      var types = [];

      for (var m = 0; m < params.length; m++) {
        if (params[m][p] === undefined) {
          // mark as no-parameter.
          noParam = '=';

        } else {
          if (paramName === null) {
            paramName = params[m][p].name;
            types[0] = params[m][p].type;

          } else {
            if (paramName !== params[m][p].name) {
              paramName = '';   // mark as 'not same name'
            }

            for (var i = 0; i < types.length; i++) {
              if (params[m][p].type === types[i]) {
                break;
              }
            }
            if (i === types.length) {
              types.push(params[m][p].type);
            }
          }
        }
      }
      // create typeNotation string.
      var typeNotation = '';

      if (types.length > 1) typeNotation += '(';
      for (var i = 0; i < types.length; i++) {
        if (i > 0) {
          typeNotation += '|';
        }
        typeNotation += getNotation(types[i]);
      }
      if (types.length > 1) typeNotation += ')';
      if (typeNotation.indexOf('...') !== 0) {
        typeNotation += noParam;
      }

      // Set method.parameter[p]
      method.parameters.push({
        name: ((paramName !== '') ? paramName : ('arg' + (p + 1))),
        type: typeNotation
      });
    }
    // Set paramString like as '(arg1, arg2, arg3)'
    var paramString = '(';
    for (var i = 0; i < method.parameters.length; i++) {
      paramString += i > 0 ? ', ' : '';
      paramString += method.parameters[i].name;
    }
    paramString += ')';
    method.paramString = paramString;

    // create return type notation string.
    typeNotation = '';
    if (retTypes.length === 0) {
      typeNotation = 'void';
    } else {
      if (retTypes.length > 1) typeNotation += '(';
      for (var i = 0; i < retTypes.length; i++) {
        if (i > 0) {
          typeNotation += '|';
        }
        typeNotation += getNotation(retTypes[i]);
      }
      if (retTypes.length > 1) typeNotation += ')';
      typeNotation += noReturn;
    }
    method.returnValue.type = typeNotation;

  } else {
    // Parameters
    for (var i = 0; i < cInfo.methods[index].parameters.length; i++) {
      method.parameters.push({
        name: cInfo.methods[index].parameters[i].name,
        type: getNotation(cInfo.methods[index].parameters[i].type)
      });
    }
    // Return type
    if (cInfo.methods[index].returnValue.type === 'void') {
      method.returnValue.type = 'void';
    } else {
      method.returnValue.type = getNotation(cInfo.methods[index].returnValue.type);
    }
    method.nextIndex = index;
  }

  return method;
};


/**
 * @param {Object} cInfo
 * @param {string} PREFIX
 * @return {string}
 */
var generateExternContent = function(cInfo, PREFIX) {
  var con = new ExtContent();
  PREFIX = '';

  // Header block
  con.b_start();
  con.b_addString(cInfo.type + ' ' + cInfo.name);
  con.b_addString(cInfo.lastUpdate);
  con.b_addString('@constructor');
  con.b_end();
  // Class definition
  con.add_class(PREFIX + cInfo.path + '.' + cInfo.name);
  con.add_br();

  // Properties
  for (var p = 0; p < cInfo.properties.length; p++) {
    con.b_start();

    if (cInfo.properties[p].type === 'Enum') {
      con.b_type(PREFIX + cInfo.path + '.' + cInfo.name);
    } else {
      con.b_type(getNotation(cInfo.properties[p].type));
    }
    con.b_end();

    con.add_property((PREFIX + cInfo.path + '.' + cInfo.name), cInfo.properties[p].name);
    con.add_br();
  }

  // Methods
  for (var m = 0; m < cInfo.methods.length; m++) {
    var method = mergeSameNameMethods(cInfo, m);
    m = method.nextIndex;

    con.b_start();
    // Parameters
    for (var i = 0; i < method.parameters.length; i++) {
      con.b_param(
          method.parameters[i].type,
          method.parameters[i].name
        );
    }
    // Return type
    if (method.returnValue.type !== 'void') {
      con.b_return(method.returnValue.type);
    }
    con.b_end();

    con.add_function((PREFIX + cInfo.path + '.' + cInfo.name), method.name, method.paramString);
    con.add_br();
  }

  // Deprecated methods
  // [ note ] for some reasons, can't include deprecated methods.

  return con.text;
};


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

  var path = '';
  // forEach records
  records.forEach(function(table, row) {
    var url = settings.URL.domain + table.getValue(row, 'Class.URL');
    if (table.getValue(row, 'Service') !== '') {
      path = table.getValue(row, 'Service');
    }

    if (table.getValue(row, 'externfile.auto-generated') !== '') {
      return;
    }

    var html = UrlFetchApp.fetch(url).getContentText();
    var classInfo = parseClassPage(html, path, GAS_SERVICE_PREFIX);

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
  var sheetDb = namespace.require('WIL.Spreadsheet.sheetDb');
  var RowsList = namespace.require('WIL.Spreadsheet.RowsList');

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

    var sName = table.getValue(row, 'Service');
    if (sName !== '') {
      if (sName.indexOf('<sup>') >= 0) {
        sName = sName.substring(0, sName.indexOf('<sup>'));
      }

      if (table.getValue(row, 'UseThisService') !== 'no') {
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
    content += table.getValue(row, 'externfile.auto-generated');

    if (table.getValue(row, 'InstanceObject') === 'yes') {

      // add Global object.
      var className = table.getValue(row, 'Class.name');
      if (className.indexOf('<sup>') >= 0) {
        className = className.substring(0, className.indexOf('<sup>'));
      }
      content +=
        '\n' +
        '/**\n' +
        ' * @type {' + GAS_SERVICE_PREFIX + service + '.' + className + '}\n' +
        ' */\n' +
        'var ' + className + ';\n' +
        '\n';
    }
  });

  // Create extern file.
  var nowdate = new Date(),
  timeStamp = Utilities.formatDate(nowdate, 'GMT+9', 'yyyy/MM/dd HH:mm:ss');
  DriveApp.createFile('externfile(' + timeStamp + ').js', content);

  Browser.msgBox('Complete.');
}


/** 
 * My next step of "Hello javascript world."</br>
 * namespace functions for Google apps script.
 * @namespace holds namespace control methods.
 */
var namespace = (function (globalObject) {
  var global_ = globalObject;
  var definedNamespaces_ = {};

  /**
   * create namespace.
   * @param {string} nsString name space
   * @param {object} nsObject object to set name space
   * @returns {object} new namespace
   */
  var namespace = function (nsString, nsObject) {
    var parent = global_,
        parts = nsString.split('.'),
        i, l;

    for (i = 0, l = parts.length; i < l; i++) {
      if (typeof parent[parts[i]] === "undefined") {
        parent[parts[i]] = (i < l-1) ? {} : (nsObject || {});
      }
      parent = parent[parts[i]];
    }
  
    return parent; // at last, parent is the leaf.
  };

  /**
   * define namespace with constructor.
   * @param {string} namespace name
   * @param {function} namespace constructor
   */
  var define = function (nsString, nsFunction) {

    if (definedNamespaces_[nsString]) {
      throw new Error("namespce.define MultiPlexed.");
    } else {
      definedNamespaces_[nsString] = {
          func: nsFunction,
          constructing: false
      };
    }
  };


  /**
   * require namespace
   * @param {string} required namespace
   * @returns {object} required object
   */
  var require = function (nsString) {

    if (!definedNamespaces_[nsString]) {
      var parent = global_,
          parts = nsString.split('.'),
          i, l;

      for (i = 0, l = parts.length; i < l; i++) {
        if (typeof parent[parts[i]] === "undefined") {
          throw new Error("required namespce is not defined.");
        }
        parent = parent[parts[i]];
      }
      definedNamespaces_[nsString] = {obj : parent};
      return parent; // at last, parent is the leaf.
    }

    if (definedNamespaces_[nsString].obj) {
      return definedNamespaces_[nsString].obj;
    }
    if (definedNamespaces_[nsString].constructing) {
      throw new Error("loop.");
    }

    constructing = true;
    definedNamespaces_[nsString].obj = namespace(nsString, definedNamespaces_[nsString].func());
    return definedNamespaces_[nsString].obj;
  };

  var reset_ = function() {
    definedNamespaces_ = {};
  };

  var exports = namespace;
  exports.define = define;
  exports.require = require;
  exports.reset_ = reset_;
  
  return exports;

})(this); // 'this' is global object



// this function for running debug mode.
function executeJasmine() {
  Rajah.executeJasmine();
}


/** 
* WIL.Spreadsheet.Table class</br>
* provide methods to access range as a table with headers, index.
* @fileoverview includes WIL.Spreadsheet.Table Class.
*/

/**
* @namespace provide methods to access range as a table with headers, index.
*/
namespace.define("WIL.Spreadsheet.Table", function () {
  
  /**
  * Constractor.
  * @param {string} nsString name space
  * @param {object} nsObject object to set name space
  * @returns {object} new namespace
  */
  function Table (sheet, topRow, topCol, endRow, endCol) {
    var sheetMaxRows = sheet.getMaxRows(),
        sheetMaxColumns = sheet.getMaxColumns();
    
    endRow = (typeof endRow !== 'undefined') ? endRow : -1;
    endCol = (typeof endCol !== 'undefined') ? endCol : -1;
    
    this.sheet_ = sheet;
    this.tRow_ = topRow > 0 ? topRow : (sheetMaxRows + 1) + topRow;
    this.tCol_ = topCol > 0 ? topCol : (sheetMaxColumns + 1) + topCol;
    this.eRow_ = endRow > 0 ? endRow : (sheetMaxRows + 1) + endRow;
    this.eCol_ = endCol > 0 ? endCol : (sheetMaxColumns + 1) + endCol;
    this.numRows_ = this.eRow_ - this.tRow_ + 1;
    this.numColumns_ = this.eCol_ - this.tCol_ + 1;
    
    if ((this.tRow_ < 1) || (this.tRow_ > sheetMaxRows))  throw new Error("Table: invalid parameter(s).");
    if ((this.tCol_ < 1) || (this.tCol_ > sheetMaxColumns))  throw new Error("Table: invalid parameter(s).");
    if ((this.numRows_ <= 0) || (this.eRow_ > sheetMaxRows))  throw new Error("Table: invalid parameter(s).");
    if ((this.numColumns_ <= 0) || (this.eCol_ > sheetMaxColumns))  throw new Error("Table: invalid parameter(s).");
    
    this.tableRange_ = this.sheet_.getRange(this.tRow_, this.tCol_, this.numRows_, this.numColumns_);
    this.tableValues_ = this.tableRange_.getValues();
    
    return this;
  };
  
  Table.prototype = (function () {
    
    var getNumRows = function () {
      return this.numRows_;
    };
    
    var getNumColumns = function () {
      return this.numColumns_;
    };
    
    var getValue = function (row, col) {
      if (typeof col !== 'number') col = this.getColumn(col);

      if ((row > this.numRows_) || (row <= 0)) throw new Error("Table: invalid parameter(s).");
      if ((col > this.numColumns_) || (col <= 0)) throw new Error("Table: invalid parameter(s).");

      return this.tableValues_[row-1][col-1];
    };
    
    var setValue = function (row, col, val) {
      if (typeof col !== 'number') col = this.getColumn(col);

      if ((row > this.numRows_) || (row <= 0)) throw new Error("Table: invalid parameter(s).");
      if ((col > this.numColumns_) || (col <= 0)) throw new Error("Table: invalid parameter(s).");

      if (val === undefined) throw new Error("Table: No value to set.");

      this.tableValues_[row-1][col-1] = val;
      this.tableRange_.getCell(row, col).setValue(val);
    };
    
    var addRowHeader = function () {
      
      if (arguments.length == 0) throw new Error('invalid parameter(s)');
      
      // todo : check more error case here.
      
      var args = [ 0, 1, this.numColumns_ ];
      for (var i =0; i < arguments.length; i++) args.push(arguments[i]);
      
      this.rowHeader_ = setupRowHeaderTree_.apply(this, args);

      return this;
    };
    
    var setupRowHeaderTree_ = function (currentDepth, startCol, endCol) {
      /* Rows : Sheet offset
       * Cols : Table offset
       */
      var headerRows = [];
      for (var i = 3; i < arguments.length; i++) headerRows.push(arguments[i]);
      var currentRow = headerRows.shift();

      this.rowHeaderData_ = this.rowHeaderData_ || [];
      
      if ( ! this.rowHeaderData_[currentDepth]) {
        var headerRange = this.sheet_.getRange(currentRow, this.tCol_, 1, this.numColumns_);
        this.rowHeaderData_[currentDepth] = headerRange.getValues()[0];
        for (var c = 0; c < this.rowHeaderData_[currentDepth].length; c++) {
          switch (typeof this.rowHeaderData_[currentDepth][c]) {
            case 'string':
              if (this.rowHeaderData_[currentDepth][c].match(/^\./)) {
                this.rowHeaderData_[currentDepth][c] = '';
              }
              break;
            case 'number':
              this.rowHeaderData_[currentDepth][c] = this.rowHeaderData_[currentDepth][c].toString(10);
              break;
            default:
              // Date object.
              this.rowHeaderData_[currentDepth][c] = this.rowHeaderData_[currentDepth][c].toString();
              break;
          }
        }
      }
      
      var header = this.rowHeaderData_[currentDepth];
      var tree = [];
      
      if (headerRows.length) {    // more nested header row(s) exist.
        var currentCol = startCol;
        
        while (currentCol <= endCol) {
          // Get next header block.
          var nextCol, indexStr = header[currentCol-1];
          
          for (nextCol = currentCol + 1; nextCol <= endCol; nextCol++) {
            if (header[nextCol-1] !== '') break;
          }
          
          // Setup tree[indexStr] with next depth sub headers.
          // Sub headers range starts currentCol to (nextCol - 1).
          var args = headerRows.concat();
          args.unshift(nextCol - 1);
          args.unshift(currentCol);
          args.unshift(currentDepth + 1);
          
          tree[indexStr] = tree[indexStr] || [];  // if same string header exists, not overwrite but add sub headers.
          var subTree = setupRowHeaderTree_.apply(this, args);
          for (var i in subTree) tree[indexStr][i] = subTree[i];
          
          currentCol = nextCol;
        }
        
      } else {
        // no more nested sub header,
        // Fill tree with column numbers.
        var currentCol = startCol;
        
        while (currentCol <= endCol) {
          var indexStr = header[currentCol-1];
          tree[indexStr] = currentCol++;
        }
      }
      return tree;
    };
    
    var getColumn = function (headerIndex) {
      var args;
      if (typeof headerIndex === 'string') {
        args = headerIndex.split('.');
      } else {
        args = headerIndex;
      }
      
      var index, arg = 0;
      var header = this.rowHeader_;
      
      while (header) {
        index = args[arg++] || '';
        header = header[index];
        if (typeof header === 'number') {
          return header;
        }
      }
      return -1;    // not found.
    };
    
    var getNumData = function (headerIndex) {
      var c = this.getColumn(headerIndex) - 1;
      if (c < 0) {
        return 0;
      }

      var count = 0, r;
      for (r = 0; r < this.tableValues_.length; r++) {
        if (this.tableValues_[r][c] !== '') {
          count++;
        }
      }
      
      return count;
    };
    
    var exports = {
      getNumRows:       getNumRows,
      getNumColumns:    getNumColumns,
      getValue:	        getValue,
      setValue:         setValue,
      addRowHeader:     addRowHeader,
      getColumn:        getColumn,
      getNumData:       getNumData
    };
    
    return exports;
  })();
  
  return Table;
});
// this function for running debug mode.
function executeJasmine() {
  Rajah.executeJasmine();
}


/** 
* WIL.Spreadsheet.RowIndex class
* @fileoverview includes WIL.Spreadsheet.RowIndex Class.
*/

namespace.define("WIL.Spreadsheet.RowIndex", function () {
  
  namespace.require("WIL.Spreadsheet.Table");
  
  /**
  * Constractor.
  * @param {object} WIL.spreadsheet.Table
  * @param {string} Column to create index with.
  * @returns {object} new RowIndex
  */
  function RowIndex (table, column) {

    var col = table.getColumn(column);
    if (col < 0) return undefined;
    col = col -1;

    this.col_ = column;
    this.table_ = table;
    this.lastRow_ = 0;
    this.index_ = [];
    this.rowsData_ = [];

    var max = table.numRows_;
    for (var row = 0; row < max; row++) {

      var val = table.tableValues_[row][col];
      if (typeof val !== 'string') {
        val = val.toString();
      }
      if (val !== '') {
        this.lastRow_ = row + 1;
      }

      this.index_[val] = this.index_[val] || [];
      this.index_[val].push(row + 1);
      this.rowsData_.push(val);
    }

    return this;
  };
  
  RowIndex.prototype = (function () {
    
    var getRows = function (key) {
      return (this.index_[key] || []);
    };

    var getLast = function () {
      return this.lastRow_;
    };

    var updateRow = function(row) {
      var c = this.col_ - 1,
          r = row -1;

      var val = table.tableValues_[r][c];
      if (typeof val !== 'string') {
        val = val.toString();
      }

      if (this.rowsData_[r] === val) return;

      // Delete old entry.
      var i, oldEntry = this.rowsData_[r];
      for (i = 0; i < this.index_[oldEntry].length; i++) {
        if (this.index_[oldEntry][i] === row) break;
      }
      this.index_[oldEntry].splice(i, 1);
      
      if ((row === this.lastRow_) && (val === '')) {
        for (i = r - 1; i >= 0; i--) {
          if (this.rowsData_[i] !== '') {
            this.lastRow_ = i + 1;
            break;
          }
        }
      }

      // Add new entry.
      this.index_[val] = this.index_[val] || [];
      this.index_[val].push(row);
      this.rowsData_[r] = val;
      if (val !== '' && row > this.lastRow_) {
        this.lastRow_ = row;
      }
    };

    var getTable = function () {
      return this.table_;
    };

    var exports = {
      getRows:    getRows,
      getLast:    getLast,
      updateRow:  updateRow,
      getTable:   getTable
    };
    
    return exports;
  })();
  
  return RowIndex;
});
// this function for running debug mode.
function executeJasmine() {
  Rajah.executeJasmine();
}


/** 
* WIL.Spreadsheet.RowsList class
* @fileoverview includes WIL.Spreadsheet.RowsList Class.
*/

namespace.define("WIL.Spreadsheet.RowsList", function () {
  
  namespace.require("WIL.Spreadsheet.Table");
  
  /**
  * Constractor.
  * @param {object} WIL.spreadsheet.Table
  * @param {function} Matcher function to select rows, returns if the row is match.
  * @returns {object} new RowsList
  */
  function RowsList (table, func) {
    
    if ( ! table) throw new Error("RowsList: create without table.")
    
    this.table_ = table;
    this.rowsList_ = [];
    
    if (func) {
      var max = this.table_.numRows_;
      for (var row = 1; row <= max; row++) {
        if (func(this.table_, row)) {
          this.rowsList_.push(row);
        }
      }
    }
    return this;
  };
  
  RowsList.prototype = (function () {
    
    var select = function (func) {
      if (func) {
        for (var i = 0; i < this.rowsList_.length; i++) {
          if ( ! func(this.table_, this.rowsList_[i])) {
            this.rowsList_.splice(i, 1);
            i--;	// for next loop, i should be same index as this time.
          }
        }
      }
      return this;
    };
    
    var forEach = function (func) {
      if (func) {
        for (var i = 0; i < this.rowsList_.length; i++) {
          func(this.table_, this.rowsList_[i]);
        }
      }
      return this;
    };

    var forEachWhile = function (func) {
      if (func) {
        for (var i = 0; i < this.rowsList_.length; i++) {
          if ( ! func(this.table_, this.rowsList_[i])) {
						break;
					}
        }
      }
      return this;
    };
    
    var getNumRows = function () {
      return this.rowsList_.length;
    };

    var getRow = function (num) {
      return this.rowsList_[num-1];
    };

    var getRows = function () {
      return this.rowsList_.concat();	
    };
		
		var getTable = function () {
			return this.table_;
		};
	
    var exports = {
      select:     	select,
      forEach:    	forEach,
      forEachWhile:	forEachWhile,
      getNumRows: 	getNumRows,
      getRow:    	  getRow,
      getRows:    	getRows,
			getTable:     getTable
    };

    return exports;
  })();
  
  return RowsList;
});
function executeJasmine() {
  Rajah.executeJasmine();
}


/** 
* WIL.Spreadsheet.sheetDb services.
* @fileoverview includes WIL.Spreadsheet.sheetDb services.
*/


/**
 * @namespace Can be used to access '.wilconfig' sheet.
 */
namespace.define("WIL.Spreadsheet.sheetDb", function () {
  
  var Table = namespace.require("WIL.Spreadsheet.Table");
  var config = namespace.require("WIL.Spreadsheet.config");

  var TYPE_TABLE      = 'Table',
      TYPE_FORM       = 'Form';
  
  var SPREADSHEET_ID  = 'spreadsheetId',
      TABLE_ID        = 'tableId',
      SHEET_NAME      = 'sheetName',
      SHEET_NO        = 'sheetNo',
      TABLE_RANGE     = 'tableRange',
      HEADER_ROWS     = 'headerRows',
      HEADER_COLUMNS  = 'headerColumns';


  /**
   * @param {string} tableId listed in .wilconfig/Table/ section.
   * @returns {object} created Table. if fail, returns undefined.
   */
  function getTable (tableId, optSpreadsheetId, opt) {

    if ( ! tableId) return undefined;

    // if second argument is object, it is asumed to be 'option-object'
    // and second argument optSpreadsheetId is 省略された
    var option;
    if (typeof optSpreadsheetId === 'object') {
      option = optSpreadsheetId
      optSpreadsheetId = '';
    } else {
      option = opt || {};
      optSpreadsheetId = optSpreadsheetId || '';
    }
    
    var settings = config.getSettings('Table', optSpreadsheetId);

    // No setting information about tableId.
    if ( ! settings[tableId]) {
      return undefined;
    }

    var spreadsheetId = settings[tableId][SPREADSHEET_ID] || optSpreadsheetId;

    // TABLE_ID points another table information.
    if (settings[tableId][TABLE_ID]) {
      if (settings[tableId][SHEET_NAME]) {
        option.sheetName = settings[tableId][SHEET_NAME];
      }
      return getTable(settings[tableId][TABLE_ID], spreadsheetId, option);
    }

    var spreadsheet;
    if (spreadsheetId === '') {
      spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    } else {
      spreadsheet = SpreadsheetApp.openById( spreadsheetId );
    }

    var sheetName = option.sheetName || settings[tableId][SHEET_NAME];
    var sheetNo = option.sheetNo || settings[tableId][SHEET_NO];

    if (( ! sheetName) && ( ! sheetNo)) {
      return undefined;
    }
    
    if ( ! settings[tableId][TABLE_RANGE]) {
      return undefined;
    }

    var sheets, sheet, rangeStr, rangeInt = [];

    if (sheetName || (sheetName === '')) {
      sheet = spreadsheet.getSheetByName(sheetName);
    } else {
      sheets = spreadsheet.getSheets();
      sheet  = sheets[sheetNo];
    }
    rangeStr = settings[tableId][TABLE_RANGE].split(',');
    rangeInt[0] = parseInt(rangeStr[0], 10);
    rangeInt[1] = parseInt(rangeStr[1], 10);
    rangeInt[2] = parseInt(rangeStr[2], 10);
    rangeInt[3] = parseInt(rangeStr[3], 10);
    
    if (rangeInt[0] === NaN || rangeInt[1] === NaN || rangeInt[2] === NaN ||rangeInt[3] === NaN) {
      return undefined;
    }

    var table;
    table = new Table(sheet, rangeInt[0], rangeInt[1], rangeInt[2], rangeInt[3]);

    if (settings[tableId][HEADER_ROWS]) {
      var headerRowsStr, headerRowsInt = [], hi;

      headerRowsStr = settings[tableId][HEADER_ROWS].split(',');

      for (hi = 0; hi < headerRowsStr.length; hi++) {
        headerRowsInt.push(parseInt(headerRowsStr[hi]));
      }
      table.addRowHeader.apply(table, headerRowsInt);
    }

    return table;
  }


  var exports = {
    getTable:    getTable
  };
  
  return exports;
});
function executeJasmine() { // for running jasmine in debug mode.
  Rajah.executeJasmine();
}


/** 
* WIL.Spreadsheet.config calss
* @fileoverview includes WIL.Spreadsheet.config calss.
*/


/**
 * @namespace Can be used to access '.wilconfig' sheet.
 */
namespace.define("WIL.Spreadsheet.config", function () {
  
  namespace.require("WIL.Spreadsheet.Table");

  var CONFIG_SHEET_NAME = '.config';
      configTables_ = [],
      settingData_ = [];
  
  /**
   * Get settings described in .wilconfig sheet.
   * @param {string} Group name of settings.
   * @returns {object[]} Array of settings object including properties.
   */
  function getSettings (nameOfGroup, spreadsheetId) {

    spreadsheetId = spreadsheetId || '';

    if (settingData_[spreadsheetId]) {
      if (settingData_[spreadsheetId][nameOfGroup]) {
        return settingData_[spreadsheetId][nameOfGroup];
      }
    }

    var ss, sheet, table;
    if ( ! configTables_[spreadsheetId]) {
      if (spreadsheetId !== '') {
        ss = SpreadsheetApp.openById( spreadsheetId );
      } else {
        ss = SpreadsheetApp.getActiveSpreadsheet();
      }
      sheet = ss.getSheetByName(CONFIG_SHEET_NAME);
      configTables_[spreadsheetId] = new WIL.Spreadsheet.Table(sheet, 4, 1, -1, 4);
    }
    table = configTables_[spreadsheetId];

    var settings = [], groupName = '', objectName = '',
        name, i, max = table.getNumRows();

    for (i = 1; i <= max; i++) {
      name = table.getValue(i, 1);
      groupName = (name === '') ? groupName : name;

      if (groupName === nameOfGroup) {
        name = table.getValue(i, 2);
        objectName = (name === '') ? objectName : name;

        name = table.getValue(i, 3);
        if (name !== '') {
          if ( ! settings[objectName]) settings[objectName] = [];
          settings[objectName][name] = table.getValue(i, 4);
        }
      }
    }

    settingData_[spreadsheetId] = settingData_[spreadsheetId] || [];
    settingData_[spreadsheetId][nameOfGroup] = settings;
    return settings;
  }



  var exports = {
    getSettings:  getSettings
  };
  
  return exports;
});
