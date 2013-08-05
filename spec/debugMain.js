

function debug_getClassInfo() {

  var url = 'https://developers.google.com/apps-script/reference/calendar/calendar-app';

  var html = UrlFetchApp.fetch(url).getContentText();
  var classInfo = parseClassPage(html, 'Carendar', '_');

  var str = generateExternContent(classInfo, '_');

  Logger.log(str);
}

function debug_getClassList() {

  var url = 'https://developers.google.com/apps-script/';

  var classList = parseClassList(url);

  Logger.log(classList);
}


