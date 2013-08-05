var CLASS_PATH = '';    // class path prefix : But don't use. it doesn't work, should be removed.


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

  add_function: function(cName, fName, fPara) {
//    var name = fName.substring(0, fName.indexOf('('));
//    var para = fName.substring(fName.indexOf('('));

    this.text += CLASS_PATH + cName + '.prototype.' + fName + ' = function' + fPara + ' {};\n';
  },

  add_property: function(cName, pName) {
    this.text += CLASS_PATH + cName + '.prototype.' + pName + ';\n';
  },

  add_br: function() {
    this.text += '\n';
  }
};

var typeTable = {
  'String': 'string',
  'String[]': 'Array.<string>',
  'String[][]': 'Array.<Array.<string>>',

  // Char is string but it's length is always 1.
  'Char': 'string',
  'Char[]': 'Array.<string>',
  'Char[][]': 'Array.<Array.<string>>',

  'Integer': 'number',
  'Integer[]': 'Array.<number>',
  'Integer[][]': 'Array.<Array.<number>>',

  //Byte is number but it's always used only lower 8-bits.
  'Byte': 'number',
  'Byte[]': 'Array.<number>',
  'Byte[][]': 'Array.<Array.<number>>',

  'Object': 'Object',
  'Object[]': 'Array.<Object>',
  'Object[][]': 'Array.<Array.<Object>>',
  'Object...': '...Object',

  'Boolean': 'boolean',
  'Boolean[]': 'Array.<boolean>',
  'Boolean[][]': 'Array.<Array.<boolean>>'
};

/**
 * @param {string} type
 * @return {string}
 */
var getNotation = function(type) {
  var notation = '';

  if (typeTable[type]) {
    return typeTable[type];
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
 * @return {Object}
 */
var mergeSameNameMethods = function(cInfo, index) {
  var method = new Method();
  method.name = cInfo.methods[index].name;
  method.paramString = cInfo.methods[index].paramString;

  if ((cInfo.methods.length - index > 1) &&
      (cInfo.methods[index].name === cInfo.methods[index + 1].name)) {
    // This method and next one have same name.

    // get all parameters of all same-named methods, into params[][].
    var params = [];
    var paramMax = 0;
    var retTypes = [];
    var noReturn = '';
    var next = index;

    do {
      // Store parameters.
      var param = [];
      for (var p = 0; p < cInfo.methods[next].parameters.length; p++) {
        param.push({
            name: cInfo.methods[next].parameters[p].name,
            type: cInfo.methods[next].parameters[p].type
        });
      }
      params.push(param);
      paramMax = p > paramMax ? p : paramMax;

      // Store return type.
      var rtype = cInfo.methods[next].returnValue.type;
      for (var i = 0; i < retTypes.length; i++) {
        if (rtype === retTypes[i]) {
          break;
        }
      }
      if (i === retTypes.length) {
        if (rtype === 'void') {
          noReturn = '=';
        } else {
          retTypes.push(rtype);
        }
      }

      next++;
    } while ((next < cInfo.methods.length) &&
              (cInfo.methods[index].name === cInfo.methods[next].name));
    method.nextIndex = next - 1;    // last index to merge.

    // compare parameters between each methods.
    for (var p = 0; p < paramMax; p++) {

      var paramName = null;
      var noParam = '';
      var types = [];

      for (var m = 0; m < params.length; m++) {
        if (params[m][p] === undefined) {
          // mark as no-parameter.
          noParam = '=';

        } else {
          if (paramName === null) {
            paramName = params[m][p].name;
            types[0] = params[m][p].type;

          } else {
            if (paramName !== params[m][p].name) {
              paramName = '';   // mark as 'not same name'
            }

            for (var i = 0; i < types.length; i++) {
              if (params[m][p].type === types[i]) {
                break;
              }
            }
            if (i === types.length) {
              types.push(params[m][p].type);
            }
          }
        }
      }
      // create typeNotation string.
      var typeNotation = '';

      if (types.length > 1) typeNotation += '(';
      for (var i = 0; i < types.length; i++) {
        if (i > 0) {
          typeNotation += '|';
        }
        typeNotation += getNotation(types[i]);
      }
      if (types.length > 1) typeNotation += ')';
      if (typeNotation.indexOf('...') !== 0) {
        typeNotation += noParam;
      }

      // Set method.parameter[p]
      method.parameters.push({
        name: ((paramName !== '') ? paramName : ('arg' + (p + 1))),
        type: typeNotation
      });
    }
    // Set paramString like as '(arg1, arg2, arg3)'
    var paramString = '(';
    for (var i = 0; i < method.parameters.length; i++) {
      paramString += i > 0 ? ', ' : '';
      paramString += method.parameters[i].name;
    }
    paramString += ')';
    method.paramString = paramString;

    // create return type notation string.
    typeNotation = '';
    if (retTypes.length === 0) {
      typeNotation = 'void';
    } else {
      if (retTypes.length > 1) typeNotation += '(';
      for (var i = 0; i < retTypes.length; i++) {
        if (i > 0) {
          typeNotation += '|';
        }
        typeNotation += getNotation(retTypes[i]);
      }
      if (retTypes.length > 1) typeNotation += ')';
      typeNotation += noReturn;
    }
    method.returnValue.type = typeNotation;

  } else {
    // Parameters
    for (var i = 0; i < cInfo.methods[index].parameters.length; i++) {
      method.parameters.push({
        name: cInfo.methods[index].parameters[i].name,
        type: getNotation(cInfo.methods[index].parameters[i].type)
      });
    }
    // Return type
    if (cInfo.methods[index].returnValue.type === 'void') {
      method.returnValue.type = 'void';
    } else {
      method.returnValue.type = getNotation(cInfo.methods[index].returnValue.type);
    }
    method.nextIndex = index;
  }

  return method;
};


/**
 * @param {Object} cInfo
 * @param {string} PREFIX
 * @return {string}
 */
var generateExternContent = function(cInfo, PREFIX) {
  var con = new ExtContent();
  PREFIX = '';

  // Header block
  con.b_start();
  con.b_addString(cInfo.type + ' ' + cInfo.name);
  con.b_addString(cInfo.lastUpdate);
  con.b_addString('@constructor');
  con.b_end();
  // Class definition
  con.add_class(PREFIX + cInfo.path + '.' + cInfo.name);
  con.add_br();

  // Properties
  for (var p = 0; p < cInfo.properties.length; p++) {
    con.b_start();

    if (cInfo.properties[p].type === 'Enum') {
      con.b_type(PREFIX + cInfo.path + '.' + cInfo.name);
    } else {
      con.b_type(getNotation(cInfo.properties[p].type));
    }
    con.b_end();

    con.add_property((PREFIX + cInfo.path + '.' + cInfo.name), cInfo.properties[p].name);
    con.add_br();
  }

  // Methods
  for (var m = 0; m < cInfo.methods.length; m++) {
    var method = mergeSameNameMethods(cInfo, m);
    m = method.nextIndex;

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

    con.add_function((PREFIX + cInfo.path + '.' + cInfo.name), method.name, method.paramString);
    con.add_br();
  }

  // Deprecated methods
  // [ note ] for some reasons, can't include deprecated methods.

  return con.text;
};


