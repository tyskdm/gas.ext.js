/**
 * Class SpreadsheetApp
 * This class allows users to open Google Spreadsheets files and to create new ones. This class is the parent class for the Spreadsheet Service.
 * Last updated June 27, 2013.
 * @constructor
 */
var SpreadsheetApp = function() {};

/**
 * Creates a new spreadsheet with the given name.
 * @return {Spreadsheet}
 */
SpreadsheetApp.prototype.create = function(name) {};

/**
 * Creates a new spreadsheet with the given name and the specified number of rows and columns.
 * @param {string} name
 * @param {number} rows
 * @param {number} columns
 * @return {Spreadsheet}
 */
SpreadsheetApp.prototype.create = function(name, rows, columns) {};

/**
 * Applies all pending Spreadsheet changes.
 */
SpreadsheetApp.prototype.flush = function() {};

/**
 * Returns the currently active spreadsheet, or null if there is none.
 * @return {Spreadsheet}
 */
SpreadsheetApp.prototype.getActive = function() {};

/**
 * Returns the range of cells that is currently considered active.
 * @return {Range}
 */
SpreadsheetApp.prototype.getActiveRange = function() {};

/**
 * Gets the active sheet in a spreadsheet.
 * @return {Sheet}
 */
SpreadsheetApp.prototype.getActiveSheet = function() {};

/**
 * Returns the currently active spreadsheet, or null if there is none.
 * @return {Spreadsheet}
 */
SpreadsheetApp.prototype.getActiveSpreadsheet = function() {};

/**
 * Opens the spreadsheet that corresponds to the given File object.
 * @return {Spreadsheet}
 */
SpreadsheetApp.prototype.open = function(file) {};

/**
 * Opens the spreadsheet with the given id.
 * @return {Spreadsheet}
 */
SpreadsheetApp.prototype.openById = function(id) {};

/**
 * Opens the spreadsheet with the given url.
 * @return {Spreadsheet}
 */
SpreadsheetApp.prototype.openByUrl = function(url) {};

/**
 * Sets the active range for the application.
 * @return {Range}
 */
SpreadsheetApp.prototype.setActiveRange = function(range) {};

/**
 * Sets the active sheet in a spreadsheet.
 * @return {Sheet}
 */
SpreadsheetApp.prototype.setActiveSheet = function(sheet) {};

/**
 * Sets the active spreadsheet.
 * @return {void}
 */
SpreadsheetApp.prototype.setActiveSpreadsheet = function(newActiveSpreadsheet) {};



