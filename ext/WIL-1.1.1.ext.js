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
/**
 * namespace Services
 * @param {string} nsString   name of namespace.
 * @param {Object=} nsObject   object to set namespace.
 * @return {Object} new namespace.
 */
var namespace = function(nsString, nsObject) {};

/**
 * @param {string} nsString       namespace name.
 * @param {Object|function():Object} nsFunction   namespace constructor.
 */
namespace.define = function(nsString, nsFunction) {};

/**
 * @param {string} nsString   required namespace.
 * @return {Object|function()}           required object.
 */
namespace.require = function(nsString) {};



/**
 * WIL
 */
var WIL = {};

/**
 * WIL.Spreadsheet Services
 */
WIL.Spreadsheet = {};

/**
 * WIL.Spreadsheet.Table Class
 * @constructor
 * @param {_Spreadsheet.Sheet} sheet
 * @param {number} topRow
 * @param {number} topCol
 * @param {number=} endRow
 * @param {number=} endCol
 */
WIL.Spreadsheet.Table = function(sheet, topRow, topCol, endRow, endCol) {};

/**
 * @return {number}
 */
WIL.Spreadsheet.Table.prototype.getNumRows = function() {};

/**
 * @return {number}
 */
WIL.Spreadsheet.Table.prototype.getNumColumns = function() {};

/**
 * @param {number} row
 * @param {number|string} col
 * @return {number|string|Date}
 */
WIL.Spreadsheet.Table.prototype.getValue = function(row, col) {};

/**
 * @param {number} row
 * @param {number|string} col
 * @param {number|string|Date} val
 */
WIL.Spreadsheet.Table.prototype.setValue = function(row, col, val) {};

/**
 * @param {...number} var_args
 * @return {WIL.Spreadsheet.Table}
 */
WIL.Spreadsheet.Table.prototype.addRowHeader = function(var_args) {};

/**
 * @param {string} headerIndex
 * @return {number}
 */
WIL.Spreadsheet.Table.prototype.getColumn = function(headerIndex) {};

/**
 * @param {string} headerIndex
 * @return {number}
 */
WIL.Spreadsheet.Table.prototype.getNumData = function(headerIndex) {};



/**
 * WIL.Spreadsheet.RowsList Class
 * @constructor
 * @param {WIL.Spreadsheet.Table} table
 * @param {function(WIL.Spreadsheet.Table,number):boolean=} func Matcher function to select rows.
 */
WIL.Spreadsheet.RowsList = function(table, func) {};

/**
 * @param {function(WIL.Spreadsheet.Table,number):boolean} func Matcher function to select rows.
 * @return {WIL.Spreadsheet.Table}
 */
WIL.Spreadsheet.RowsList.prototype.select = function(func) {};

/**
 * @param {function(WIL.Spreadsheet.Table,number)} func
 * @return {WIL.Spreadsheet.Table}
 */
WIL.Spreadsheet.RowsList.prototype.forEach = function(func) {};

/**
 * @param {function(WIL.Spreadsheet.Table,number):boolean} func
 * @return {WIL.Spreadsheet.Table}
 */
WIL.Spreadsheet.RowsList.prototype.forEachWhile = function(func) {};

/**
 * @return {number}
 */
WIL.Spreadsheet.RowsList.prototype.getNumRows = function() {};

/**
 * @param {number} num
 * @return {number}
 */
WIL.Spreadsheet.RowsList.prototype.getRow = function(num) {};

/**
 * @return {Array.<number>}
 */
WIL.Spreadsheet.RowsList.prototype.getRows = function() {};

/**
 * @return {WIL.Spreadsheet.Table}
 */
WIL.Spreadsheet.RowsList.prototype.getTable = function() {};



/**
 * WIL.Spreadsheet.RowIndex Class
 * @constructor
 * @param {WIL.Spreadsheet.Table} table
 * @param {number|string} column : Column to create index with.
 */
WIL.Spreadsheet.RowIndex = function(table, column) {};

/**
 * @param {string} key
 * @return {Array.<number>}
 */
WIL.Spreadsheet.RowIndex.prototype.getRows = function(key) {};

/**
 * @return {number}
 */
WIL.Spreadsheet.RowIndex.prototype.getLast = function() {};

/**
 * @param {number} row
 */
WIL.Spreadsheet.RowIndex.prototype.updateRow = function(row) {};

/**
 * @return {WIL.Spreadsheet.Table}
 */
WIL.Spreadsheet.RowIndex.prototype.getTable = function() {};



/**
 * WIL.Spreadsheet.config Module
 */
WIL.Spreadsheet.config = {};

/**
 * @param {string} nameOfGroup
 * @param {string} spreadsheetId
 * @return {Object}
 */
WIL.Spreadsheet.config.getSettings = function(nameOfGroup, spreadsheetId) {};



/**
 * WIL.Spreadsheet.sheetDb Module
 */
WIL.Spreadsheet.sheetDb = {};

/**
 * @param {string} tableId listed in .wilconfig/Table/ section.
 * @param {(string|{sheetName: (string|undefined), sheetNo: (number|undefined)})=} optSpreadsheetId
 * @param {{sheetName: (string|undefined), sheetNo: (number|undefined)}=} opt
 * @return {Object} created Table. if fail, returns null.
 */
WIL.Spreadsheet.sheetDb.getTable = function(tableId, optSpreadsheetId, opt) {};
