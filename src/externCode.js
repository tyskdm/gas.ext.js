
/**
 * @constructor
 */
var ExtContent = function() {
  this.text = '';
};

ExtContent.prototype = {
  b_start: function() {
    this.text += '/**\n';
  },

  b_addString: function(str) {
    this.text += ' * ' + str + '\n';
  },

  b_param: function(type, name) {
    this.b_addString('@param {' + type + '} ' + name + '\n');
  },

  b_return: function(type) {
    this.b_addString('@return {' + type + '}\n');
  },

  b_type: function(type) {
    this.b_addString('@type {' + type + '}\n');
  },

  b_end: function() {
    this.text += ' */\n';
  },

  add_class: function(name) {
    this.text += CLASS_PATH + name + ' = function() {};\n';
  },

  add_function: function(cName, fName) {
    var name = fName.substring(0, fName.indexOf('('));
    var para = fName.substring(fName.indexOf('('));

    this.text += CLASS_PATH + cName + '.prototype.' + fName + ' = function' + para + ' {};\n';
  },

  add_property: function(cName, pName) {
    this.text += CLASS_PATH + cName + '.prptptype.' + pName + ';\n';
  },

  add_br: function() {
    this.text += '\n';
  }
};

var CLASS_PATH = '';

var typeTable = {
  'String': 'string',
  'String[]': 'Array.<string>',
  'String[][]': 'Array.<Array.<string>>',
  'Integer': 'number',
  'Integer[]': 'Array.<number>',
  'Integer[][]': 'Array.<Array.<number>>',
  'Object': 'Object',
  'Object[]': 'Array.<Object>',
  'Object[][]': 'Array.<Array.<Object>>',
  'Boolean': 'boolean'
};

var getTypeString = function(type, optTypeTable) {

  if (typeTable[type]) {
    return typeTable[type];
  }

  if (optTypeTable && optTypeTable[type]) {
    return optTypeTable[type];
  }

  // TODO add 'not found' action.
  return type;
};

var generateExternContent = function(cInfo, optTypeTable) {
  var con = new ExtContent();

  // Header block
  con.b_start();
  con.b_addString(cInfo.type + ' ' + cInfo.name);
  con.b_addString(cInfo.lastUpdate);
  con.b_addString('@constructor');
  con.b_end();
  // Class definition
  con.add_class(cInfo.name);
  con.add_br();

  // Properties
  for (var p = 0; p < cInfo.properties.length; p++) {
    con.b_start();
    if (cInfo.properties[p].type === 'Enum') {
      con.b_addString('@enum');
    } else {
      con.b_type(getTypeString(cInfo.properties[p].type));
    }
    con.b_end();
    con.add_property(cInfo.name, cInfo.properties[p].name);
    con.add_br();
  }

  // Methods


  // Depricated methods



  return con.text;
};


