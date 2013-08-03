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



function getClassType(classPath, currentPath) {
  var type = classPath;
  var path = '';

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
    }
  }

  return type;
}


function parseMethod(html, currentPath) {
  var method = new Method();

  // Method name
  html.moveAfter('<h3 class="showalways">');
  method.name = html.getBetween('<code>', '</code>');

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
      classType = getClassType(classType, currentPath);
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
 * @return {Object}
 */
function parseClassPage(src, path) {

  var html = new SourceText(src);
  var classInfo = new ClassInfo();
  var classType;
  var className;

  classInfo.path = path;
  if (path.indexOf('<sup>') >= 0) {
    classInfo.path = path.substring(0, path.indexOf('<sup>'));
  }

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
      classType = getClassType(classType, classInfo.path);
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
      tempMethod.name = html.getBetween('>', '</a></code></td>');  // method name
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
        tempMethod.name = html.getBetween('>', '</a></s></code></td>');    // method name
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
      var method = parseMethod(html, classInfo.path);
      if (method.name === returnValues[cnt].name) {     // method name
        classType = returnValues[cnt].returnValue.type;
        classType = getClassType(classType, classInfo.path);
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
        var method = parseMethod(html, classInfo.path);
        if (method.name === returnValues[cnt].name) {
          classType = returnValues[cnt].returnValue.type;
          classType = getClassType(classType, classInfo.path);
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
