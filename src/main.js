/**
 * @fileoverview parse GAS reference web pages and create
 * extern files for google closure compiler.
 * @author tsuyoshi kodama / tsuyoshi.kodama@gmail.com
 */

/**
 * @constructor
 */
function main() {
  var url = 'https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet';
  var url = 'https://developers.google.com/apps-script/reference/calendar/calendar-app';
  var html = UrlFetchApp.fetch(url).getContentText();
  var classInfo = parseClassPage(html);

  var c = classInfo;
  Logger.log(c);
}

