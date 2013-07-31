/**
 * Enum Color
 * Last update 17, Jun, 2012
 * @constructor
 */
Calendar.Color = function() {};

/**
 * @enum
 */
Calendar.Color.prototype.RED;



/**
 * Class SpreadsheetApp
 * Last update 17, Jun, 2012
 * @constructor
 */
Spreadsheet.SpreadsheetApp = function() {};

/**
 * @type {string}
 */
Spreadsheet.SpreadsheetApp.prototype.property1;

/**
 * @param {string} name
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.SpreadsheetApp.prototype.create = function(name) {};

/**
 * @deprecated
 * @param {string} key
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.SpreadsheetApp.prototype.openByKey = function(key) {};






/**
 * GAS global object.
 * @type {Spreadsheet.SpreadsheetApp}
 */
var SpreadsheetApp;


/*
 * TODO
 * □ 同じMethod名で引数が違うものを、どうexternで宣言するか。
 * □ Color は2か所にある（MapsとCalendar）。どうする？
 * □ propertyの、値を定義しない宣言は有効か？
 * □ オプション引数の扱い、どうしよう。
 * □ 詳細オプションオブジェクト、どうする？
 */
