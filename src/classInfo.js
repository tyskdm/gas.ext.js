/**
 * @constructor
 */
function ClassInfo() {
  this.name = '';
  this.type = '';
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


function parseMethod(html) {
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

      parameter.name = html.getBetween('<td><code>', '</code></td>');
      html.moveAfter('</td>');
      parameter.type = html.getBetween('<td><code>', '</code></td>');
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
 * @return {Object}
 */
function parseClassPage(src) {

  var html = new SourceText(src);
  var classInfo = new ClassInfo();

  html.moveAfter('<div id="gc-content"');
  classInfo.name = html.getBetween('<h1 itemprop="name" class="page-title" >', '</h1>');
  classInfo.type = classInfo.name.substring(0, classInfo.name.indexOf(' '));
  classInfo.name = classInfo.name.substring(classInfo.name.indexOf(' ') + ' '.length);

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
      property.type = html.getBetween('<td><code>', '</code></td>');
      html.moveAfter('</td>');
      property.description = html.getBetween('<td>', '</td>');
      html.moveAfter('</tr>');

      classInfo.properties.push(property);
    }

    html.moveAfter('</table></section>');
  }

  // IF 'Methods'
  if (html.indexOf('<section ><h3 class="showalways">Methods</h3>') === 0) {

    // TODO: get Reterned Value Information from methods table.
    var returnValues = [];

    html.moveAfter('<table');
    html.moveAfter('</tr>');

    while (html.indexOf('<tr>') === 0) {
      var ret = new Method();

      html.moveAfter('<td><code><a href=');
      ret.name = html.getBetween('>', '</a></code></td>');
      html.moveAfter('</td>');
      ret.returnValue.type = html.getBetween('<td><code>', '</code></td>');
      html.moveAfter('</td>');
      ret.returnValue.description = html.getBetween('<td>', '</td>');
      html.moveAfter('</tr>');

      returnValues.push(ret);
    }
    html.moveAfter('</section>');

    if (html.indexOf('<section') === 0) {
      html.moveAfter('<table');
      html.moveAfter('</tr>');

      while (html.indexOf('<tr>') === 0) {
        var ret = new Method();

        html.moveAfter('<td><code><s><a href=');
        ret.name = html.getBetween('>', '</a></s></code></td>');
        html.moveAfter('</td>');
        ret.returnValue.type = html.getBetween('<td><code>', '</code></td>');
        html.moveAfter('</td>');
        ret.returnValue.description = html.getBetween('<td>', '</td>');
        html.moveAfter('</tr>');

        returnValues.push(ret);
      }
    }
    html.moveAfter('<h2>Detailed documentation</h2>');

    var cnt = 0;
    do {
      var method = parseMethod(html);
      if (method.name === returnValues[cnt].name) {
        method.returnValue.type = returnValues[cnt].returnValue.type;
      } else {
        method.returnValue.type = 'not found';
      }
      classInfo.methods.push(method);
      cnt++;
    } while (html.indexOf('<hr />') === 0);

    // IF 'Deprecated methods'
    if (html.indexOf('<h2>Deprecated methods</h2>') === 0) {

      do {
        var method = parseMethod(html);
        if (method.name === returnValues[cnt].name) {
          method.returnValue.type = returnValues[cnt].returnValue.type;
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
