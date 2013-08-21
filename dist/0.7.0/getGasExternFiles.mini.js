/*
getGasExternFiles:
version 0.7.0
build 231 - 2013/08/06 21:55:30
Copyright (c) 2013 Tsuyoshi Kodama

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function SourceText(a){this.text=a}SourceText.prototype={moveBefore:function(a){a=this.text.indexOf(a);this.text=0>a?"":this.text.substring(a)},moveAfter:function(a){var b=this.text.indexOf(a);this.text=0>b?"":this.text.substring(b+a.length)},getBetween:function(a,b){var c=this.text.indexOf(a),c=0>c?0:c+a.length,d="",d=this.text.indexOf(b);return d=0>d?this.text.substring(c):this.text.substring(c,d)},indexOf:function(a){return this.text.indexOf(a)}};function ClassInfo(){this.description=this.path=this.name=this.type="";this.properties=[];this.methods=[];this.deprecatedMethods=[];this.lastUpdate=""}function Property(){this.description=this.type=this.name=""}function Method(){this.description=this.paramString=this.name="";this.parameters=[];this.returnValue={type:"",description:""}}function Parameter(){this.description=this.type=this.name=""}
function getClassType(a,b,c){var d=a,e="";if(0===a.indexOf("\x3ca"))if(d=a.substring(a.indexOf('"\x3e')+2,a.indexOf("\x3c/a\x3e")),e=a.substring(a.indexOf('href\x3d"')+6,a.indexOf('"\x3e')),0!==e.indexOf("../"))d=b+"."+d;else{e=e.substring(3);e=e.substring(0,e.indexOf("/"));b=e.split("-");for(e="";b.length;){a=b.shift();var f=a.charCodeAt(0)+-32,e=e+(String.fromCharCode(f)+a.substring(1))}d=c+(e+"."+d)}else e={MenuBar:"Ui.MenuBar",MenuItem:"Ui.MenuItem",MenuItemSeparator:"Ui.MenuItemSeparator",TreeItem:"Ui.TreeItem"},
e[d]&&(d=e[d],d=c+d);return d}
function parseMethod(a,b,c){var d=new Method;a.moveAfter('\x3ch3 class\x3d"showalways"\x3e');var e=a.getBetween("\x3ccode\x3e","\x3c/code\x3e");d.name=e.substring(0,e.indexOf("("));d.paramString=e.substring(e.indexOf("("));var e=a.indexOf("\x3c/p\x3e"),f=a.indexOf("\x3cpre"),g=a.indexOf("\x3ch4"),h=a.indexOf("\x3c/div\x3e"),l="\x3c/div\x3e";0<=g&&g<h&&(h=g,l="\x3ch4");0<=f&&f<h&&(h=f,l="\x3cpre");0<=e&&e<h&&(l="\x3c/p\x3e");d.description=a.getBetween("\x3cp\x3e",l);"\x3c/p\x3e"===l&&a.moveAfter("\x3c/p\x3e");
"\x3cpre"===l&&a.moveAfter("\x3c/pre\x3e");"\x3ch4"===l&&a.moveBefore("\x3ch4");"\x3c/div"===l&&a.moveBefore("\x3c/div");0===a.indexOf("\x3cpre")&&a.moveAfter("\x3c/pre\x3e");if(0===a.indexOf("\x3ch4\x3eParameters\x3c/h4\x3e")){a.moveAfter('\x3ctable class\x3d"function param"\x3e');a.moveAfter("\x3ctr\x3e");for(a.moveAfter("\x3c/tr\x3e");0===a.indexOf("\x3ctr\x3e");)e=new Parameter,e.name=a.getBetween("\x3ctd\x3e\x3ccode\x3e","\x3c/code\x3e\x3c/td\x3e"),a.moveAfter("\x3c/td\x3e"),f=a.getBetween("\x3ctd\x3e\x3ccode\x3e",
"\x3c/code\x3e\x3c/td\x3e"),f=getClassType(f,b,c),e.type=f,a.moveAfter("\x3c/td\x3e"),e.description=a.getBetween("\x3ctd\x3e","\x3c/td\x3e"),a.moveAfter("\x3c/tr\x3e"),d.parameters.push(e);a.moveAfter("\x3c/table\x3e")}0===a.indexOf("\x3ch4\x3eAdvanced parameters\x3c/h4\x3e")&&a.moveAfter("\x3c/table\x3e");0===a.indexOf("\x3ch4\x3eReturn\x3c/h4\x3e")&&(a.moveAfter("\x3ch4\x3eReturn\x3c/h4\x3e"),0<=a.indexOf("\x3c/p\x3e")&&a.indexOf("\x3c/p\x3e")<a.indexOf("\x3c/div\x3e")?d.returnValue.description=
a.getBetween("\x3cp\x3e","\x3c/p\x3e"):d.returnValue.description=a.getBetween("\x3cp\x3e","\x3c/div\x3e"));a.moveAfter("\x3c/div\x3e");return d}
function parseClassPage(a,b,c){a=new SourceText(a);var d=new ClassInfo,e;d.path=b;0<=b.indexOf("\x3csup\x3e")&&(d.path=b.substring(0,b.indexOf("\x3csup\x3e")));d.path=c+d.path;a.moveAfter('\x3cdiv id\x3d"gc-content"');b=a.getBetween('\x3ch1 itemprop\x3d"name" class\x3d"page-title" \x3e',"\x3c/h1\x3e");d.type=b.substring(0,b.indexOf(" "));b=b.substring(b.indexOf(" ")+1);0<=b.indexOf("\x3csup\x3e")&&(b=b.substring(0,b.indexOf("\x3csup\x3e")));d.name=b;a.moveAfter('\x3cdiv itemprop\x3d"articleBody"');
d.description=a.getBetween('\x3cdiv class\x3d"type doc"\x3e\x3cp\x3e',"\x3c/div\x3e");a.moveAfter('\x3cdiv class\x3d"type toc"\x3e');if(0===a.indexOf('\x3csection \x3e\x3ch3 class\x3d"showalways"\x3eProperties\x3c/h3\x3e')){a.moveAfter("\x3ctable");a.moveAfter("\x3ctr\x3e");for(a.moveAfter("\x3c/tr\x3e");0===a.indexOf("\x3ctr\x3e");)b=new Property,b.name=a.getBetween("\x3ctd\x3e\x3ccode\x3e","\x3c/code\x3e\x3c/td\x3e"),a.moveAfter("\x3c/td\x3e"),e=a.getBetween("\x3ctd\x3e\x3ccode\x3e","\x3c/code\x3e\x3c/td\x3e"),
e=getClassType(e,d.path,c),b.type=e,a.moveAfter("\x3c/td\x3e"),b.description=a.getBetween("\x3ctd\x3e","\x3c/td\x3e"),a.moveAfter("\x3c/tr\x3e"),d.properties.push(b);a.moveAfter("\x3c/table\x3e\x3c/section\x3e")}if(0===a.indexOf('\x3csection \x3e\x3ch3 class\x3d"showalways"\x3eMethods\x3c/h3\x3e')){b=[];a.moveAfter("\x3ctable");for(a.moveAfter("\x3c/tr\x3e");0===a.indexOf("\x3ctr\x3e");){e=new Method;a.moveAfter("\x3ctd\x3e\x3ccode\x3e\x3ca href\x3d");var f=a.getBetween("\x3e","\x3c/a\x3e\x3c/code\x3e\x3c/td\x3e");
e.name=f.substring(0,f.indexOf("("));e.paramString=f.substring(f.indexOf("("));a.moveAfter("\x3c/td\x3e");e.returnValue.type=a.getBetween("\x3ctd\x3e\x3ccode\x3e","\x3c/code\x3e\x3c/td\x3e");a.moveAfter("\x3c/td\x3e");e.description=a.getBetween("\x3ctd\x3e","\x3c/td\x3e");a.moveAfter("\x3c/tr\x3e");b.push(e)}a.moveAfter("\x3c/section\x3e");if(0===a.indexOf("\x3csection")){a.moveAfter("\x3ctable");for(a.moveAfter("\x3c/tr\x3e");0===a.indexOf("\x3ctr\x3e");)e=new Method,a.moveAfter("\x3ctd\x3e\x3ccode\x3e\x3cs\x3e\x3ca href\x3d"),
f=a.getBetween("\x3e","\x3c/a\x3e\x3c/s\x3e\x3c/code\x3e\x3c/td\x3e"),e.name=f.substring(0,f.indexOf("(")),e.paramString=f.substring(f.indexOf("(")),a.moveAfter("\x3c/td\x3e"),e.returnValue.type=a.getBetween("\x3ctd\x3e\x3ccode\x3e","\x3c/code\x3e\x3c/td\x3e"),a.moveAfter("\x3c/td\x3e"),e.description=a.getBetween("\x3ctd\x3e","\x3c/td\x3e"),a.moveAfter("\x3c/tr\x3e"),b.push(e)}a.moveAfter("\x3ch2\x3eDetailed documentation\x3c/h2\x3e");f=0;do{var g=parseMethod(a,d.path,c);g.name===b[f].name?(e=b[f].returnValue.type,
e=getClassType(e,d.path,c),g.returnValue.type=e):g.returnValue.type="not found";d.methods.push(g);f++}while(0===a.indexOf("\x3chr /\x3e"));if(0===a.indexOf("\x3ch2\x3eDeprecated methods\x3c/h2\x3e")){do g=parseMethod(a,d.path,c),g.name===b[f].name?(e=b[f].returnValue.type,e=getClassType(e,d.path,c),g.returnValue.type=e):g.returnValue.type="not found",d.deprecatedMethods.push(g),f++;while(0===a.indexOf("\x3chr /\x3e"))}}a.moveAfter('\x3cdiv itemprop\x3d"datePublished"');d.lastUpdate=a.getBetween('id\x3d"gc-content-last-updated"\x3e',
"\x3c/div\x3e");return d};function ClassList(){this.url="";this.categories=[]}function Category(){this.name="";this.services=[]}function Service(){this.url=this.name="";this.classPages=[]}function ClassPage(){this.url=this.name="";this.classInfo={}}
function parseClassList(a){var b=UrlFetchApp.fetch(a).getContentText(),b=new SourceText(b),c=new ClassList;c.url=a;b.moveAfter('\x3cdiv id\x3d"gc-sidebar"');for(b.moveAfter("\x3cspan");"REFERENCE"!==b.getBetween("\x3e","\x3c/span\x3e");)b.moveAfter("\x3chr/\x3e"),b.moveAfter("\x3cspan");for(b.moveAfter("\x3c/span\x3e\x3c/li\x3e");0===b.indexOf("\x3cli");){a=new Category;b.moveAfter('\x3cspan class\x3d"tlw-title" data-title\x3d');a.name=b.getBetween("\x3e","\x3c/span\x3e");for(b.moveAfter("\x3cul\x3e");0===
b.indexOf("\x3cli");){var d=new Service;b.moveAfter("\x3cli class\x3d");d.url=b.getBetween('\x3ca href\x3d"','" data-title');b.moveAfter('\x3ca href\x3d"');d.name=b.getBetween("\x3cspan\x3e","\x3c/span\x3e");for(b.moveAfter("\x3c/span\x3e\x3c/a\x3e\x3cul\x3e");0===b.indexOf("\x3cli");)if(b.moveAfter('\x3cli class\x3d""\x3e'),0!==b.indexOf("\x3ca"))b.moveAfter("\x3c/li\x3e");else{var e=new ClassPage;e.url=b.getBetween('\x3ca href\x3d"','" data-title');e.name=b.getBetween("\x3cspan\x3e","\x3c/span\x3e");
b.moveAfter("\x3c/li\x3e");d.classPages.push(e)}b.moveAfter("\x3c/ul\x3e\x3c/li\x3e");a.services.push(d)}b.moveAfter("\x3c/ul\x3e\x3c/li\x3e");c.categories.push(a)}return c};var CLASS_PATH="",ExtContent=function(){this.text=""};
ExtContent.prototype={b_start:function(){this.text+="/**\n"},b_addString:function(a){this.text+=" * "+a+"\n"},b_param:function(a,b){this.b_addString("@param {"+a+"} "+b)},b_return:function(a){this.b_addString("@return {"+a+"}")},b_type:function(a){this.b_addString("@type {"+a+"}")},b_end:function(){this.text+=" */\n"},add_class:function(a){this.text+=CLASS_PATH+a+" \x3d function() {};\n"},add_function:function(a,b,c){this.text+=CLASS_PATH+a+".prototype."+b+" \x3d function"+c+" {};\n"},add_property:function(a,
b){this.text+=CLASS_PATH+a+".prototype."+b+";\n"},add_br:function(){this.text+="\n"}};
var typeTable={String:"string","String[]":"Array.\x3cstring\x3e","String[][]":"Array.\x3cArray.\x3cstring\x3e\x3e",Char:"string","Char[]":"Array.\x3cstring\x3e","Char[][]":"Array.\x3cArray.\x3cstring\x3e\x3e",Integer:"number","Integer[]":"Array.\x3cnumber\x3e","Integer[][]":"Array.\x3cArray.\x3cnumber\x3e\x3e",Byte:"number","Byte[]":"Array.\x3cnumber\x3e","Byte[][]":"Array.\x3cArray.\x3cnumber\x3e\x3e",Object:"Object","Object[]":"Array.\x3cObject\x3e","Object[][]":"Array.\x3cArray.\x3cObject\x3e\x3e",
"Object...":"...Object",Boolean:"boolean","Boolean[]":"Array.\x3cboolean\x3e","Boolean[][]":"Array.\x3cArray.\x3cboolean\x3e\x3e"},getNotation=function(a){var b="";return typeTable[a]?typeTable[a]:b=getCompilerTypeNotation(a)},getCompilerTypeNotation=function(a){var b=a,c=a.lastIndexOf("[]");0<=c&&(a=a.substring(0,c),a=getCompilerTypeNotation(a),b="Array.\x3c"+a+"\x3e");return b},mergeSameNameMethods=function(a,b){var c=new Method;c.name=a.methods[b].name;c.paramString=a.methods[b].paramString;if(1<
a.methods.length-b&&a.methods[b].name===a.methods[b+1].name){var d=[],e=0,f=[],g="",h=b;do{for(var l=[],m=0;m<a.methods[h].parameters.length;m++)l.push({name:a.methods[h].parameters[m].name,type:a.methods[h].parameters[m].type});d.push(l);e=m>e?m:e;m=a.methods[h].returnValue.type;for(l=0;l<f.length&&m!==f[l];l++);l===f.length&&("void"===m?g="\x3d":f.push(m));h++}while(h<a.methods.length&&a.methods[b].name===a.methods[h].name);c.nextIndex=h-1;for(m=0;m<e;m++){for(var h=null,p="",n=[],k=0;k<d.length;k++)if(void 0===
d[k][m])p="\x3d";else if(null===h)h=d[k][m].name,n[0]=d[k][m].type;else{h!==d[k][m].name&&(h="");for(l=0;l<n.length&&d[k][m].type!==n[l];l++);l===n.length&&n.push(d[k][m].type)}k="";1<n.length&&(k+="(");for(l=0;l<n.length;l++)0<l&&(k+="|"),k+=getNotation(n[l]);1<n.length&&(k+=")");0!==k.indexOf("...")&&(k+=p);c.parameters.push({name:""!==h?h:"arg"+(m+1),type:k})}d="(";for(l=0;l<c.parameters.length;l++)d+=0<l?", ":"",d+=c.parameters[l].name;c.paramString=d+")";k="";if(0===f.length)k="void";else{1<
f.length&&(k+="(");for(l=0;l<f.length;l++)0<l&&(k+="|"),k+=getNotation(f[l]);1<f.length&&(k+=")");k+=g}c.returnValue.type=k}else{for(l=0;l<a.methods[b].parameters.length;l++)c.parameters.push({name:a.methods[b].parameters[l].name,type:getNotation(a.methods[b].parameters[l].type)});c.returnValue.type="void"===a.methods[b].returnValue.type?"void":getNotation(a.methods[b].returnValue.type);c.nextIndex=b}return c},generateExternContent=function(a,b){var c=new ExtContent;b="";c.b_start();c.b_addString(a.type+
" "+a.name);c.b_addString(a.lastUpdate);c.b_addString("@constructor");c.b_end();c.add_class(b+a.path+"."+a.name);c.add_br();for(var d=0;d<a.properties.length;d++)c.b_start(),"Enum"===a.properties[d].type?c.b_type(b+a.path+"."+a.name):c.b_type(getNotation(a.properties[d].type)),c.b_end(),c.add_property(b+a.path+"."+a.name,a.properties[d].name),c.add_br();for(d=0;d<a.methods.length;d++){var e=mergeSameNameMethods(a,d),d=e.nextIndex;c.b_start();for(var f=0;f<e.parameters.length;f++)c.b_param(e.parameters[f].type,
e.parameters[f].name);"void"!==e.returnValue.type&&c.b_return(e.returnValue.type);c.b_end();c.add_function(b+a.path+"."+a.name,e.name,e.paramString);c.add_br()}return c.text};var GLOBAL_OBJECT;function init(a){GLOBAL_OBJECT=a;GLOBAL_OBJECT.func0001=getClassList;GLOBAL_OBJECT.func0002=getClassInfo;GLOBAL_OBJECT.func0003=exportExternfile}function onOpen(){SpreadsheetApp.getActiveSpreadsheet().addMenu("GAS-API",[{name:"get Class List",functionName:"func0001"},{name:"get Class Info",functionName:"func0002"},{name:"export extern.js",functionName:"func0003"}])}var GAS_SERVICE_PREFIX="_";
function getClassList(){var a=namespace.require("WIL.Spreadsheet.sheetDb"),b=namespace.require("WIL.Spreadsheet.config"),a=a.getTable("ClassFiles"),b=b.getSettings("GAS");if(b.URL&&b.URL.indexPage){var b=parseClassList(b.URL.indexPage),c,d,e,f=1;for(c=0;c<b.categories.length;c++){var g=b.categories[c];a.setValue(f,"Category",g.name);for(d=0;d<g.services.length;d++){var h=g.services[d];a.setValue(f,"Service",h.name);for(e=0;e<h.classPages.length;e++){var l=h.classPages[e];a.setValue(f,"Class.name",
l.name);a.setValue(f,"Class.URL",l.url);f++}}}}}
function getClassInfo(){var a=namespace.require("WIL.Spreadsheet.sheetDb"),b=namespace.require("WIL.Spreadsheet.RowsList"),c=namespace.require("WIL.Spreadsheet.config"),a=a.getTable("ClassFiles"),d=c.getSettings("GAS");if(d.URL&&d.URL.domain&&(b=new b(a,function(a,b){return""!==a.getValue(b,"Class.URL")}),c=b.getNumRows(),!("ok"!==Browser.msgBox("Class URL: "+c+" pages.",Browser.Buttons.OK_CANCEL)||0===c))){var e="";b.forEach(function(a,b){var c=d.URL.domain+a.getValue(b,"Class.URL");""!==a.getValue(b,
"Service")&&(e=a.getValue(b,"Service"));""===a.getValue(b,"externfile.auto-generated")&&(c=UrlFetchApp.fetch(c).getContentText(),c=parseClassPage(c,e,GAS_SERVICE_PREFIX),a.setValue(b,"Class.type",c.type),a.setValue(b,"Class.Properties",c.properties.length),a.setValue(b,"Class.Methods",c.methods.length),a.setValue(b,"Class.Deprecated",c.deprecatedMethods.length),a.setValue(b,"Class.update",c.lastUpdate),c=generateExternContent(c,GAS_SERVICE_PREFIX),a.setValue(b,"externfile.auto-generated",c),SpreadsheetApp.flush())});
Browser.msgBox("Complete.")}}
function exportExternfile(){var a=namespace.require("WIL.Spreadsheet.sheetDb"),b=namespace.require("WIL.Spreadsheet.RowsList"),a=a.getTable("ClassFiles"),b=new b(a,function(a,b){return""!==a.getValue(b,"Class.URL")}),a=b.getNumRows();if(!("ok"!==Browser.msgBox("Class URL: "+a+" pages.",Browser.Buttons.OK_CANCEL)||0===a)){var c="",d="";b.forEach(function(a,b){var g=a.getValue(b,"Service");""!==g&&(0<=g.indexOf("\x3csup\x3e")&&(g=g.substring(0,g.indexOf("\x3csup\x3e"))),"no"!==a.getValue(b,"UseThisService")?
(d=g,c+="\n/**\n * "+GAS_SERVICE_PREFIX+d+" Services\n */\nvar "+GAS_SERVICE_PREFIX+d+" \x3d {};\n\n"):d="");""!==d&&(c+=a.getValue(b,"externfile.auto-generated"),"yes"===a.getValue(b,"InstanceObject")&&(g=a.getValue(b,"Class.name"),0<=g.indexOf("\x3csup\x3e")&&(g=g.substring(0,g.indexOf("\x3csup\x3e"))),c+="\n/**\n * @type {"+GAS_SERVICE_PREFIX+d+"."+g+"}\n */\nvar "+g+";\n\n"))});b=Utilities.formatDate(new Date,"GMT+9","yyyy/MM/dd HH:mm:ss");DriveApp.createFile("externfile("+b+").js",c);Browser.msgBox("Complete.")}}
;var namespace=function(a){var b={},c=function(b,c){var f=a,g=b.split("."),h,l;h=0;for(l=g.length;h<l;h++)"undefined"===typeof f[g[h]]&&(f[g[h]]=h<l-1?{}:c||{}),f=f[g[h]];return f};c.define=function(a,c){if(b[a])throw Error("namespce.define MultiPlexed.");b[a]={func:c,constructing:!1}};c.require=function(d){if(!b[d]){var e=a,f=d.split("."),g,h;g=0;for(h=f.length;g<h;g++){if("undefined"===typeof e[f[g]])throw Error("required namespce is not defined.");e=e[f[g]]}b[d]={obj:e};return e}if(b[d].obj)return b[d].obj;
if(b[d].constructing)throw Error("loop.");constructing=!0;b[d].obj=c(d,b[d].func());return b[d].obj};c.reset_=function(){b={}};return c}(this);function executeJasmine(){Rajah.executeJasmine()}
namespace.define("WIL.Spreadsheet.Table",function(){function a(a,c,d,e,f){var g=a.getMaxRows(),h=a.getMaxColumns();e="undefined"!==typeof e?e:-1;f="undefined"!==typeof f?f:-1;this.sheet_=a;this.tRow_=0<c?c:g+1+c;this.tCol_=0<d?d:h+1+d;this.eRow_=0<e?e:g+1+e;this.eCol_=0<f?f:h+1+f;this.numRows_=this.eRow_-this.tRow_+1;this.numColumns_=this.eCol_-this.tCol_+1;if(1>this.tRow_||this.tRow_>g)throw Error("Table: invalid parameter(s).");if(1>this.tCol_||this.tCol_>h)throw Error("Table: invalid parameter(s).");
if(0>=this.numRows_||this.eRow_>g)throw Error("Table: invalid parameter(s).");if(0>=this.numColumns_||this.eCol_>h)throw Error("Table: invalid parameter(s).");this.tableRange_=this.sheet_.getRange(this.tRow_,this.tCol_,this.numRows_,this.numColumns_);this.tableValues_=this.tableRange_.getValues();return this}a.prototype=function(){var a=function(c,d,e){for(var f=[],g=3;g<arguments.length;g++)f.push(arguments[g]);var h=f.shift();this.rowHeaderData_=this.rowHeaderData_||[];if(!this.rowHeaderData_[c]){h=
this.sheet_.getRange(h,this.tCol_,1,this.numColumns_);this.rowHeaderData_[c]=h.getValues()[0];for(h=0;h<this.rowHeaderData_[c].length;h++)switch(typeof this.rowHeaderData_[c][h]){case "string":this.rowHeaderData_[c][h].match(/^\./)&&(this.rowHeaderData_[c][h]="");break;case "number":this.rowHeaderData_[c][h]=this.rowHeaderData_[c][h].toString(10);break;default:this.rowHeaderData_[c][h]=this.rowHeaderData_[c][h].toString()}}var h=this.rowHeaderData_[c],l=[];if(f.length)for(var m=d;m<=e;){var p,n=h[m-
1];for(p=m+1;p<=e&&""===h[p-1];p++);var k=f.concat();k.unshift(p-1);k.unshift(m);k.unshift(c+1);l[n]=l[n]||[];m=a.apply(this,k);for(g in m)l[n][g]=m[g];m=p}else for(m=d;m<=e;)n=h[m-1],l[n]=m++;return l};return{getNumRows:function(){return this.numRows_},getNumColumns:function(){return this.numColumns_},getValue:function(a,b){"number"!==typeof b&&(b=this.getColumn(b));if(a>this.numRows_||0>=a)throw Error("Table: invalid parameter(s).");if(b>this.numColumns_||0>=b)throw Error("Table: invalid parameter(s).");
return this.tableValues_[a-1][b-1]},setValue:function(a,b,e){"number"!==typeof b&&(b=this.getColumn(b));if(a>this.numRows_||0>=a)throw Error("Table: invalid parameter(s).");if(b>this.numColumns_||0>=b)throw Error("Table: invalid parameter(s).");if(void 0===e)throw Error("Table: No value to set.");this.tableValues_[a-1][b-1]=e;this.tableRange_.getCell(a,b).setValue(e)},addRowHeader:function(){if(0==arguments.length)throw Error("invalid parameter(s)");for(var c=[0,1,this.numColumns_],d=0;d<arguments.length;d++)c.push(arguments[d]);
this.rowHeader_=a.apply(this,c);return this},getColumn:function(a){a="string"===typeof a?a.split("."):a;for(var b,e=0,f=this.rowHeader_;f;)if(b=a[e++]||"",f=f[b],"number"===typeof f)return f;return-1},getNumData:function(a){a=this.getColumn(a)-1;if(0>a)return 0;var b=0,e;for(e=0;e<this.tableValues_.length;e++)""!==this.tableValues_[e][a]&&b++;return b}}}();return a});function executeJasmine(){Rajah.executeJasmine()}
namespace.define("WIL.Spreadsheet.RowIndex",function(){function a(a,c){var d=a.getColumn(c);if(!(0>d)){d-=1;this.col_=c;this.table_=a;this.lastRow_=0;this.index_=[];this.rowsData_=[];for(var e=a.numRows_,f=0;f<e;f++){var g=a.tableValues_[f][d];"string"!==typeof g&&(g=g.toString());""!==g&&(this.lastRow_=f+1);this.index_[g]=this.index_[g]||[];this.index_[g].push(f+1);this.rowsData_.push(g)}return this}}namespace.require("WIL.Spreadsheet.Table");a.prototype=function(){return{getRows:function(a){return this.index_[a]||
[]},getLast:function(){return this.lastRow_},updateRow:function(a){var c=a-1,d=table.tableValues_[c][this.col_-1];"string"!==typeof d&&(d=d.toString());if(this.rowsData_[c]!==d){var e,f=this.rowsData_[c];for(e=0;e<this.index_[f].length&&this.index_[f][e]!==a;e++);this.index_[f].splice(e,1);if(a===this.lastRow_&&""===d)for(e=c-1;0<=e;e--)if(""!==this.rowsData_[e]){this.lastRow_=e+1;break}this.index_[d]=this.index_[d]||[];this.index_[d].push(a);this.rowsData_[c]=d;""!==d&&a>this.lastRow_&&(this.lastRow_=
a)}},getTable:function(){return this.table_}}}();return a});function executeJasmine(){Rajah.executeJasmine()}
namespace.define("WIL.Spreadsheet.RowsList",function(){function a(a,c){if(!a)throw Error("RowsList: create without table.");this.table_=a;this.rowsList_=[];if(c)for(var d=this.table_.numRows_,e=1;e<=d;e++)c(this.table_,e)&&this.rowsList_.push(e);return this}namespace.require("WIL.Spreadsheet.Table");a.prototype=function(){return{select:function(a){if(a)for(var c=0;c<this.rowsList_.length;c++)a(this.table_,this.rowsList_[c])||(this.rowsList_.splice(c,1),c--);return this},forEach:function(a){if(a)for(var c=
0;c<this.rowsList_.length;c++)a(this.table_,this.rowsList_[c]);return this},forEachWhile:function(a){if(a)for(var c=0;c<this.rowsList_.length&&a(this.table_,this.rowsList_[c]);c++);return this},getNumRows:function(){return this.rowsList_.length},getRow:function(a){return this.rowsList_[a-1]},getRows:function(){return this.rowsList_.concat()},getTable:function(){return this.table_}}}();return a});function executeJasmine(){Rajah.executeJasmine()}
namespace.define("WIL.Spreadsheet.sheetDb",function(){function a(m,p,n){if(m){var k;"object"===typeof p?(k=p,p=""):(k=n||{},p=p||"");n=c.getSettings("Table",p);if(n[m]){p=n[m][d]||p;if(n[m][e])return n[m][f]&&(k.sheetName=n[m][f]),a(n[m][e],p,k);p=""===p?SpreadsheetApp.getActiveSpreadsheet():SpreadsheetApp.openById(p);var q=k.sheetName||n[m][f],r=k.sheetNo||n[m][g];if((q||r)&&n[m][h])if(k=[],q||""===q?p=p.getSheetByName(q):(p=p.getSheets(),p=p[r]),q=n[m][h].split(","),k[0]=parseInt(q[0],10),k[1]=
parseInt(q[1],10),k[2]=parseInt(q[2],10),k[3]=parseInt(q[3],10),!(NaN===k[0]||NaN===k[1]||NaN===k[2]||NaN===k[3])){k=new b(p,k[0],k[1],k[2],k[3]);if(n[m][l]){p=[];m=n[m][l].split(",");for(n=0;n<m.length;n++)p.push(parseInt(m[n]));k.addRowHeader.apply(k,p)}return k}}}}var b=namespace.require("WIL.Spreadsheet.Table"),c=namespace.require("WIL.Spreadsheet.config"),d="spreadsheetId",e="tableId",f="sheetName",g="sheetNo",h="tableRange",l="headerRows";return{getTable:a}});
function executeJasmine(){Rajah.executeJasmine()}
namespace.define("WIL.Spreadsheet.config",function(){namespace.require("WIL.Spreadsheet.Table");configTables_=[];settingData_=[];return{getSettings:function(a,b){b=b||"";if(settingData_[b]&&settingData_[b][a])return settingData_[b][a];var c;configTables_[b]||(c=""!==b?SpreadsheetApp.openById(b):SpreadsheetApp.getActiveSpreadsheet(),c=c.getSheetByName(".config"),configTables_[b]=new WIL.Spreadsheet.Table(c,4,1,-1,4));c=configTables_[b];var d=[],e="",f="",g,h,l=c.getNumRows();for(h=1;h<=l;h++)g=c.getValue(h,
1),e=""===g?e:g,e===a&&(g=c.getValue(h,2),f=""===g?f:g,g=c.getValue(h,3),""!==g&&(d[f]||(d[f]=[]),d[f][g]=c.getValue(h,4)));settingData_[b]=settingData_[b]||[];return settingData_[b][a]=d}}});