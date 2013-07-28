/*
 * rajah initialization code.
 * this file should be located top of source files.
 */

Rajah.init(this);

function doGet(e) {
  return Rajah.doGet(e);
}

function executeByScript() {
  Rajah.executeJasmine();
}

/*
var setTimeout = function(func, t) {
  return Rajah.setTimeout(func, t);
};

var clearTimeout = function(id) {
  Rajah.clearTimeout(id);
};

var setInterval = function(func, t) {
  return Rajah.setInterval(func, t);
};

var clearInterval = function(id) {
  Rajah.clearInterval(id);
};
*/
