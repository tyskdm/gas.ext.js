/*
WIL:
version 1.1.1
build 116 - 2013/08/23 12:35:38
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
/*
namespace:
version 0.7.1
build 6 - 2013/07/17 23:00:39
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
 * @fileoverview provides namespace functions for Google apps script.
 * @author tsuyoshi kodama / tsuyoshi.kodama@gmail.com
 */

/**
 * @type {Object}    // add this notation
 * @expose
 */
var namespace = (function(globalObject) {
  /** @private @type {Object} */
  var global_ = globalObject;

  /** @private @type {Object} */
  var definedNamespaces_ = {};

  /**
   * create namespace.
   * @param {string} nsString   name of namespace.
   * @param {Object} nsObject   object to set namespace.
   * @return {Object} new namespace.
   */
  var namespace = function(nsString, nsObject) {
    var parent = global_,
        parts = nsString.split('.'),
        i, l;

    for (i = 0, l = parts.length; i < l; i++) {
      if (typeof parent[parts[i]] === 'undefined') {
        parent[parts[i]] = (i < l - 1) ? {} : (nsObject || {});
      }
      parent = parent[parts[i]];
    }

    return parent; // at last, parent is the leaf.
  };

  /**
   * define namespace with constructor.
   * @param {string} nsString       namespace name.
   * @param {Object|function():Object} nsFunction   namespace constructor.
   */
  var define = function(nsString, nsFunction) {

    if (definedNamespaces_[nsString]) {
      throw new Error('namespce.define: Define MultiPlexed.');
    } else {
      definedNamespaces_[nsString] = {
          func: nsFunction,
          constructing: false
      };
    }
  };


  /**
   * require namespace
   * @param {string} nsString   required namespace.
   * @return {Object}           required object.
   */
  var require = function(nsString) {

    if (!definedNamespaces_[nsString]) {
      var parent = global_,
          parts = nsString.split('.'),
          i, l;

      for (i = 0, l = parts.length; i < l; i++) {
        if (typeof parent[parts[i]] === 'undefined') {
          throw new Error(
            'namespace.require: required namespce is not defined.');
        }
        parent = parent[parts[i]];
      }
      // at last, parent is the leaf.
      definedNamespaces_[nsString] = {obj: parent};

      return definedNamespaces_[nsString].obj;
    }

    if (definedNamespaces_[nsString].obj) {
      return definedNamespaces_[nsString].obj;
    }

    if (definedNamespaces_[nsString].constructing) {
      throw new Error('namespace.require: looped dependensies.');
    }

    definedNamespaces_[nsString].constructing = true;
    definedNamespaces_[nsString].obj =
      namespace(nsString, definedNamespaces_[nsString].func());

    return definedNamespaces_[nsString].obj;
  };

  /**
   * Reset object definitions and actual object information.
   */
  var reset_ = function() {
    definedNamespaces_ = {};
  };

  var exports = namespace;
  /** @expose */ exports.define = define;
  /** @expose */ exports.require = require;
  /** @expose */ exports.reset_ = reset_;

  return exports;

})(this); // 'this' is global object
/**
 * WIL.Spreadsheet.RowIndex class
 * @fileoverview includes WIL.Spreadsheet.RowIndex Class.
 */
namespace.define('WIL.Spreadsheet.RowIndex', function() {

  namespace.require('WIL.Spreadsheet.Table');

  /**
  * Constractor.
  * @param {Object} table : WIL.spreadsheet.Table.
  * @param {string} column : Column to create index with.
  * @return {Object} new RowIndex object.
  */
  function RowIndex(table, column) {

    var col = table.getColumn(column);
    if (col < 0) return null;
    col = col - 1;

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

  RowIndex.prototype = (function() {

    var getRows = function(key) {
      return (this.index_[key] || []);
    };

    var getLast = function() {
      return this.lastRow_;
    };

    var updateRow = function(row) {
      var c = this.col_ - 1,
          r = row - 1;

      var val = this.table_.tableValues_[r][c];
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

    var getTable = function() {
      return this.table_;
    };

    var exports = {
      getRows: getRows,
      getLast: getLast,
      updateRow: updateRow,
      getTable: getTable
    };

    return exports;
  })();

  return RowIndex;
});
/**
 * WIL.Spreadsheet.RowsList class
 * @fileoverview includes WIL.Spreadsheet.RowsList Class.
 */
namespace.define('WIL.Spreadsheet.RowsList', function() {

  namespace.require('WIL.Spreadsheet.Table');

  /**
  * Constractor.
  * @param {Object} table : WIL.spreadsheet.Table.
  * @param {function(Object,number)} func : Matcher function to select rows.
  * @return {Object} new RowsList object.
  */
  function RowsList(table, func) {

    if (! table) throw new Error('RowsList: create without table.');

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

  RowsList.prototype = (function() {

    var select = function(func) {
      if (func) {
        for (var i = 0; i < this.rowsList_.length; i++) {
          if (! func(this.table_, this.rowsList_[i])) {
            this.rowsList_.splice(i, 1);
            i--;    // for next loop, i should be same index as this time.
          }
        }
      }
      return this;
    };

    var forEach = function(func) {
      if (func) {
        for (var i = 0; i < this.rowsList_.length; i++) {
          func(this.table_, this.rowsList_[i]);
        }
      }
      return this;
    };

    var forEachWhile = function(func) {
      if (func) {
        for (var i = 0; i < this.rowsList_.length; i++) {
          if (! func(this.table_, this.rowsList_[i])) {
            break;
          }
        }
      }
      return this;
    };

    var getNumRows = function() {
      return this.rowsList_.length;
    };

    var getRow = function(num) {
      return this.rowsList_[num - 1];
    };

    var getRows = function() {
      return this.rowsList_.concat();
    };

    var getTable = function() {
      return this.table_;
    };

    var exports = {
      select: select,
      forEach: forEach,
      forEachWhile: forEachWhile,
      getNumRows: getNumRows,
      getRow: getRow,
      getRows: getRows,
      getTable: getTable
    };

    return exports;
  })();

  return RowsList;
});
/**
 * WIL.Spreadsheet.Table class</br>
 * provide methods to access range as a table with headers, index.
 * @fileoverview includes WIL.Spreadsheet.Table Class.
 */
namespace.define('WIL.Spreadsheet.Table', function() {

  /**
   * Table class
   * @constructor
   * @param {Object} sheet
   * @param {number} topRow
   * @param {number} topCol
   * @param {number} endRow
   * @param {number} endCol
   * @return {Object} new namespace.
   */
  function Table(sheet, topRow, topCol, endRow, endCol) {
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

    if ((this.tRow_ < 1) || (this.tRow_ > sheetMaxRows))
      throw new Error('Table: invalid parameter(s).');
    if ((this.tCol_ < 1) || (this.tCol_ > sheetMaxColumns))
      throw new Error('Table: invalid parameter(s).');
    if ((this.numRows_ <= 0) || (this.eRow_ > sheetMaxRows))
      throw new Error('Table: invalid parameter(s).');
    if ((this.numColumns_ <= 0) || (this.eCol_ > sheetMaxColumns))
      throw new Error('Table: invalid parameter(s).');

    this.tableRange_ =
      this.sheet_.getRange(this.tRow_, this.tCol_, this.numRows_, this.numColumns_);
    this.tableValues_ = this.tableRange_.getValues();

    return this;
  };

  Table.prototype = (function() {

    /**
     * @return {number}
     */
    var getNumRows = function() {
      return this.numRows_;
    };

    /**
     * @return {number}
     */
    var getNumColumns = function() {
      return this.numColumns_;
    };

    /**
     * @param {number} row
     * @param {number} col
     * @return {number|string|Object}
     */
    var getValue = function(row, col) {
      if (typeof col !== 'number') col = this.getColumn(col);

      if ((row > this.numRows_) || (row <= 0)) throw new Error('Table: invalid parameter(s).');
      if ((col > this.numColumns_) || (col <= 0)) throw new Error('Table: invalid parameter(s).');

      return this.tableValues_[row - 1][col - 1];
    };

    /**
     * @param {number} row
     * @param {number} col
     * @param {number|string|Object} val
     */
    var setValue = function(row, col, val) {
      if (typeof col !== 'number') col = this.getColumn(col);

      if ((row > this.numRows_) || (row <= 0)) throw new Error('Table: invalid parameter(s).');
      if ((col > this.numColumns_) || (col <= 0)) throw new Error('Table: invalid parameter(s).');

      if (val === undefined) throw new Error('Table: No value to set.');

      this.tableValues_[row - 1][col - 1] = val;
      this.tableRange_.getCell(row, col).setValue(val);
    };

    /**
     * @param {...number} var_args
     * @return {Object}
     */
    var addRowHeader = function(var_args) {

      if (arguments.length == 0) throw new Error('invalid parameter(s)');

      // todo : check more error case here.

      var args = [0, 1, this.numColumns_];
      for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);

      this.rowHeader_ = setupRowHeaderTree_.apply(this, args);

      return this;
    };

    /**
     * @param {number} currentDepth
     * @param {number} startCol
     * @param {number} endCol
     */
    var setupRowHeaderTree_ = function(currentDepth, startCol, endCol) {
      /* Rows : Sheet offset
       * Cols : Table offset
       */
      var headerRows = [];
      for (var i = 3; i < arguments.length; i++) headerRows.push(arguments[i]);
      var currentRow = headerRows.shift();

      this.rowHeaderData_ = this.rowHeaderData_ || [];

      if (! this.rowHeaderData_[currentDepth]) {
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
              this.rowHeaderData_[currentDepth][c] =
                this.rowHeaderData_[currentDepth][c].toString(10);
              break;
            default:
              // Date object.
              this.rowHeaderData_[currentDepth][c] =
                this.rowHeaderData_[currentDepth][c].toString();
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
          var nextCol, indexStr = header[currentCol - 1];

          for (nextCol = currentCol + 1; nextCol <= endCol; nextCol++) {
            if (header[nextCol - 1] !== '') break;
          }

          // Setup tree[indexStr] with next depth sub headers.
          // Sub headers range starts currentCol to (nextCol - 1).
          var args = headerRows.concat();
          args.unshift(nextCol - 1);
          args.unshift(currentCol);
          args.unshift(currentDepth + 1);

          // if same string header exists, not overwrite but add sub headers.
          tree[indexStr] = tree[indexStr] || [];
          var subTree = setupRowHeaderTree_.apply(this, args);
          for (var i in subTree) tree[indexStr][i] = subTree[i];

          currentCol = nextCol;
        }

      } else {
        // no more nested sub header,
        // Fill tree with column numbers.
        var currentCol = startCol;

        while (currentCol <= endCol) {
          var indexStr = header[currentCol - 1];
          tree[indexStr] = currentCol++;
        }
      }
      return tree;
    };

    /**
     * @param {string} headerIndex
     * @return {number}
     */
    var getColumn = function(headerIndex) {
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

    /**
     * @param {string} headerIndex
     * @return {number}
     */
    var getNumData = function(headerIndex) {
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
      // member name should be quoted by '', to expose them.
      // for more detail, see document of closure-compiler.
      'getNumRows' : getNumRows,
      'getNumColumns' : getNumColumns,
      'getValue' : getValue,
      'setValue' : setValue,
      'addRowHeader' : addRowHeader,
      'getColumn' : getColumn,
      'getNumData' : getNumData
    };

    return exports;
  })();

  return Table;
});
/**
 * WIL.Spreadsheet.config calss
 * Can be used to access '.wilconfig' sheet.
 * @fileoverview includes WIL.Spreadsheet.config calss.
 */
namespace.define('WIL.Spreadsheet.config', function() {

  namespace.require('WIL.Spreadsheet.Table');

  var CONFIG_SHEET_NAME = '.config',
      configTables_ = [],
      settingData_ = [];

  /**
   * Get settings described in .wilconfig sheet.
   * @param {string} nameOfGroup : Group name of settings.
   * @param {string} spreadsheetId
   * @return {Array.<Object>} Array of settings object including properties.
   */
  function getSettings(nameOfGroup, spreadsheetId) {

    spreadsheetId = spreadsheetId || '';

    if (settingData_[spreadsheetId]) {
      if (settingData_[spreadsheetId][nameOfGroup]) {
        return settingData_[spreadsheetId][nameOfGroup];
      }
    }

    var /** @type {Object} */ ss, sheet, table;
    if (! configTables_[spreadsheetId]) {
      if (spreadsheetId !== '') {
        ss = SpreadsheetApp.openById(spreadsheetId);
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
          if (! settings[objectName]) settings[objectName] = [];
          settings[objectName][name] = table.getValue(i, 4);
        }
      }
    }

    settingData_[spreadsheetId] = settingData_[spreadsheetId] || [];
    settingData_[spreadsheetId][nameOfGroup] = settings;
    return settings;
  }



  var exports = {
    getSettings: getSettings
  };

  return exports;
});
/**
 * WIL.Spreadsheet.sheetDb services.
 * Can be used to access '.wilconfig' sheet.
 * @fileoverview includes WIL.Spreadsheet.sheetDb services.
 */
namespace.define('WIL.Spreadsheet.sheetDb', function() {

  namespace.require('WIL.Spreadsheet.Table');
  var Table = WIL.Spreadsheet.Table;

  namespace.require('WIL.Spreadsheet.config');
  var config = WIL.Spreadsheet.config;

  var TYPE_TABLE = 'Table',
      TYPE_PAGE = 'Page';

  var SPREADSHEET_ID = 'spreadsheetId',
      TABLE_ID = 'tableId',
      SHEET_NAME = 'sheetName',
      SHEET_NO = 'sheetNo',
      TABLE_RANGE = 'tableRange',
      HEADER_ROWS = 'headerRows',
      HEADER_COLUMNS = 'headerColumns';


  /**
   * @param {string} tableId listed in .wilconfig/Table/ section.
   * @param {string|{sheetName: (string|undefined), sheetNo: (number|undefined)}=} optSpreadsheetId
   * @param {{sheetName: (string|undefined), sheetNo: (number|undefined)}=} opt
   * @return {Object} created Table. if fail, returns null.
   */
  function getTable(tableId, optSpreadsheetId, opt) {

    if (! tableId) return null;

    // if second argument is object, it is asumed to be 'option-object'
    // and second argument optSpreadsheetId is 省略された
    var option;
    if (typeof optSpreadsheetId === 'object') {
      option = optSpreadsheetId;
      optSpreadsheetId = '';
    } else {
      option = opt || {};
      optSpreadsheetId = optSpreadsheetId || '';
    }

    var settings = config.getSettings('Table', optSpreadsheetId);

    // No setting information about tableId.
    if (! settings[tableId]) {
      return null;
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
      spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    }

    var sheetName = option.sheetName || settings[tableId][SHEET_NAME];
    var sheetNo = option.sheetNo || settings[tableId][SHEET_NO];

    if ((! sheetName) && (! sheetNo)) {
      return null;
    }

    if (! settings[tableId][TABLE_RANGE]) {
      return null;
    }

    var sheets, sheet, rangeStr, rangeInt = [];

    if (sheetName || (sheetName === '')) {
      sheet = spreadsheet.getSheetByName(sheetName);
    } else {
      sheets = spreadsheet.getSheets();
      sheet = sheets[sheetNo];
    }
    rangeStr = settings[tableId][TABLE_RANGE].split(',');
    rangeInt[0] = parseInt(rangeStr[0], 10);
    rangeInt[1] = parseInt(rangeStr[1], 10);
    rangeInt[2] = parseInt(rangeStr[2], 10);
    rangeInt[3] = parseInt(rangeStr[3], 10);

    if (isNaN(rangeInt[0]) || isNaN(rangeInt[1]) || isNaN(rangeInt[2]) || isNaN(rangeInt[3])) {
      return null;
    }

    var table;
    table = new Table(sheet, rangeInt[0], rangeInt[1], rangeInt[2], rangeInt[3]);

    if (settings[tableId][HEADER_ROWS]) {
      var headerRowsStr, headerRowsInt = [], hi;

      headerRowsStr = settings[tableId][HEADER_ROWS].split(',');

      for (hi = 0; hi < headerRowsStr.length; hi++) {
        headerRowsInt.push(parseInt(headerRowsStr[hi], 10));
      }
      table.addRowHeader.apply(table, headerRowsInt);
    }

    return table;
  }


  var exports = {
    getTable: getTable
  };

  return exports;
});
