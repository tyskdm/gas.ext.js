#GAS Extern File

For development Google Apps Script on my local PC, I wanted to use Google [closure-compiler](https://code.google.com/p/closure-compiler/).

It needs 'extern files' for Google Apps Service API's, but not exists yet. >> [more](https://code.google.com/p/closure-compiler/wiki/ExternsForCommonLibraries)

So, I've tried to generate GAS Extern File from the official web, '[Google Apps Script - REFERENCE](https://developers.google.com/apps-script/reference/calendar/)' pages.

This repository has 2 objectives.

1. ExternFile Generate tool

Of course, it's google apps script :-)

2. ExternFile itself

Generated extern file for Google Apps Services.
Latest version of gas.ext.js is [here](https://github.com/tyskdm/gas.ext.js/tree/master/dist/0.7.0).


##ExternFile Generate tool

It's Google Script, runs on Spreadsheet for this tool.

You can see the spreadsheet [here](https://drive.google.com/?tab=mo&authuser=0#folders/0B7eaNS4kxhthaFFBSTBEUTV3R3M), but can not edit and execute scripts.
If you'd like to try it, pls copy to your drive.

The script:

1. parse side-bar of REFERENCE page, and get whole page(class) list.

- Because of it's bugs, eye-ball check and hand correct are needed.

2. parse each pages to get Class info, and generate anotated class info into a cell of spreadsheet.

3. After indicating which services to use, which classes to create instance by hands,...

- 'Advanced Google Services' pages and 'Jdbc' pages have different format from others, and not enough information.
- So I didn't use them (means not included in latest gas.ext.js).

4. Merge class info into one file.


##ExternFile itself

**It includes:**

1. Whole 'Google Apps Services' Category.

2. 'Script Services' Category, excluding 'Jdbc' Service.


**Class path:**

Google services has 2 'Color' classes and 3 'ListItem' classes.

For unique identifire, generate class name include service name.

ex. Maps.Color / Calendar.Color

And some of services name are conflicted well known other classes. (ex. 'Document')
for this, put prefix '_' on GAS Services.

ex. _Maps.Color / _Calendar.Color


**In case of 'Same method name but Different parameters':**

case #1:
_CarendarApp.createCarendar(name)
_CarendarApp.createCarendar(name, options)

/**
 * @param {string} name
 * @param {Object=} options
 */

- '=' means it's omissible.

case #2:
_MenuBar.addItem(text, command)
_MenuBar.addItem(text, subMenu)

/**
 * @param {string} text
 * @param {(_Ui.Handler|_Ui.MenuBar)} arg2
 */

- '(...|...)' means OR.


**Global Objects:**

In GAS environment, some Classes are created as global object before executing user scripts.
They are also defined in this extern file.

ex.
/**
 * @type {_Calendar.CalendarApp}
 */
var CalendarApp;




##Change History

2013.08.07 : add this README.md and brief description.




