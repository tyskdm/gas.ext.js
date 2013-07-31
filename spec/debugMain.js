

function debug_getClassInfo() {

  var url = 'https://developers.google.com/apps-script/reference/calendar/calendar-app';

  var html = UrlFetchApp.fetch(url).getContentText();
  var classInfo = parseClassPage(html);

  var str = generateExternContent(classInfo);

  var type = classInfo.name.substring(0, classInfo.name.indexOf(' '));
  classInfo.type = type;
}
