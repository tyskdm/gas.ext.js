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
      html.moveAfter('</span></a>');

      if (html.indexOf('<ul>') !== 0) {
        html.moveAfter('</li>');
        continue;
      }

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
