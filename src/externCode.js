
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
    this.b_addString('@param {' + type + '} ' + name);
  },

  b_return: function(type) {
    this.b_addString('@return {' + type + '}');
  },

  b_type: function(type) {
    this.b_addString('@type {' + type + '}');
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

    this.text += CLASS_PATH + cName + '.prototype.' + name + ' = function' + para + ' {};\n';
  },

  add_property: function(cName, pName) {
    this.text += CLASS_PATH + cName + '.prototype.' + pName + ';\n';
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
  'Boolean': 'boolean',
  'Boolean[]': 'Array.<boolean>',
  'Boolean[][]': 'Array.<Array.<boolean>>'
};

/**
 * @param {string} type
 * @param {Object=} optTypeTable
 * @return {string}
 */
var getNotation = function(type, optTypeTable) {
  var notation = '';

  if (typeTable[type]) {
    return typeTable[type];
  }

  if (optTypeTable && optTypeTable[type]) {
    return optTypeTable[type];
  }

  notation = getCompilerTypeNotation(type);
  return notation;
};


/**
 * @param {string} type
 * @return {string}
 */
var getCompilerTypeNotation = function(type) {
  var notation = type;

  var index = type.lastIndexOf('[]');
  if (index >= 0) {
    var typeString = type.substring(0, index);
    typeString = getCompilerTypeNotation(typeString);
    notation = 'Array.<' + typeString + '>';
  }

  return notation;
};


/**
 * @param {Object} cInfo
 * @param {number} index
 * @param {Object=} optTypeTable
 * @return {Object}
 */
var mergeSameNameMethods = function(cInfo, index, optTypeTable) {
  var method = new Method();

  // Name
  method.name = cInfo.methods[index].name;

  // Parameters
  for (var i = 0; i < cInfo.methods[index].parameters.length; i++) {
    method.parameters.push({
      name: cInfo.methods[index].parameters[i].name,
      type: getNotation(cInfo.methods[index].parameters[i].type, optTypeTable)
    });
  }

  // Return type
  if (cInfo.methods[index].returnValue.type === 'void') {
    method.returnValue.type = 'void';
  } else {
    method.returnValue.type = getNotation(cInfo.methods[index].returnValue.type, optTypeTable);
  }

  return method;
};


/**
 * @param {Object} cInfo
 * @param {Object=} optTypeTable
 * @return {string}
 */
var generateExternContent = function(cInfo, optTypeTable) {
  var con = new ExtContent();

  // Header block
  con.b_start();
  con.b_addString(cInfo.type + ' ' + cInfo.name);
  con.b_addString(cInfo.lastUpdate);
  con.b_addString('@constructor');
  con.b_end();
  // Class definition
  con.add_class(cInfo.path + '.' + cInfo.name);
  con.add_br();

  // Properties
  for (var p = 0; p < cInfo.properties.length; p++) {
    con.b_start();

    if (cInfo.properties[p].type === 'Enum') {
      con.b_type(cInfo.path + '.' + cInfo.name);
    } else {
      con.b_type(getNotation(cInfo.properties[p].type, optTypeTable));
    }
    con.b_end();

    con.add_property((cInfo.path + '.' + cInfo.name), cInfo.properties[p].name);
    con.add_br();
  }

  // Methods
  for (var m = 0; m < cInfo.methods.length; m++) {
    var method = mergeSameNameMethods(cInfo, m, optTypeTable);

    if (! method) {
      continue;
    }

    con.b_start();
    // Parameters
    for (var i = 0; i < method.parameters.length; i++) {
      con.b_param(
          method.parameters[i].type,
          method.parameters[i].name
        );
    }
    // Return type
    if (method.returnValue.type !== 'void') {
      con.b_return(method.returnValue.type);
    }
    con.b_end();

    con.add_function((cInfo.path + '.' + cInfo.name), method.name);
    con.add_br();
  }

  // Deprecated methods
  //
  // [ note ] for some reasons, can't include deprecated methods.
  //
  //  for (var m = 0; m < cInfo.deprecatedMethods.length; m++) {
  //    con.b_start();
  //    con.b_addString('@deprecated');
  //
  //    // Parameters
  //    for (var i = 0; i < cInfo.deprecatedMethods[m].parameters.length; i++) {
  //      con.b_param(
  //          getNotation(cInfo.deprecatedMethods[m].parameters[i].type, optTypeTable),
  //          cInfo.deprecatedMethods[m].parameters[i].name
  //        );
  //    }
  //
  //    // Return type
  //    if (cInfo.deprecatedMethods[m].returnValue.type !== 'void') {
  //      con.b_return(getNotation(cInfo.deprecatedMethods[m].returnValue.type, optTypeTable));
  //    }
  //    con.b_end();
  //
  //    con.add_function((cInfo.path + '.' + cInfo.name), cInfo.deprecatedMethods[m].name);
  //    con.add_br();
  //  }

  return con.text;
};


