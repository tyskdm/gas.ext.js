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
  this.status = '';
  this.url = '';
  this.classPages = [];
}

/**
 * @constructor
 */
function ClassPage() {
  this.name = '';
  this.status = '';
  this.url = '';
  this.classInfo = {};
  this.instanceObject = false;
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
      service.status = html.getBetween('"', '">');
      service.url = html.getBetween('<a href="', '" data-title');
      html.moveAfter('<a href="');

      service.name = html.getBetween('<span>', '</span>');      // Service name.
      if (service.name.indexOf('<') > 0) {
        service.name = service.name.substring(0, service.name.indexOf('<'));
      }
      html.moveAfter('</span></a>');

      if (html.indexOf('<ul>') !== 0) {
        html.moveAfter('</li>');
        continue;
      } else {
        html.moveAfter('<ul>');
      }

      var instanceObject = true;
      if (category.name === 'Advanced Google Services') {
        instanceObject = false;
      }
      while (html.indexOf('<li') === 0) {
        var classStatus = html.getBetween('<li class="', '">');
        html.moveAfter('>');
        if (html.indexOf('<a') !== 0) {
          instanceObject = false;
          html.moveAfter('</li>');
          continue;
        }

        var classPage = new ClassPage();
        classPage.url = html.getBetween('<a href="', '" data-title');
        classPage.name = html.getBetween('<span>', '</span>');  // Class name.
        if (classPage.name.indexOf('<') > 0) {
          classPage.name = classPage.name.substring(0, classPage.name.indexOf('<'));
        }
        classPage.status = classStatus;
        classPage.instanceObject = instanceObject;
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
