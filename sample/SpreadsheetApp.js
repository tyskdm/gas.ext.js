/**
 * Class CalendarApp
 * Last updated June 27, 2013.
 * @constructor
 */
Calendar.CalendarApp = function() {};

/**
 * @type {Calendar.Color}
 */
Calendar.CalendarApp.prototype.Color;

/**
 * @type {Calendar.GuestStatus}
 */
Calendar.CalendarApp.prototype.GuestStatus;

/**
 * @type {Base.Month}
 */
Calendar.CalendarApp.prototype.Month;

/**
 * @type {Calendar.Visibility}
 */
Calendar.CalendarApp.prototype.Visibility;

/**
 * @type {Base.Weekday}
 */
Calendar.CalendarApp.prototype.Weekday;

/**
 * @param {string} title
 * @param {Date} date
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarApp.prototype.createAllDayEvent = function(title, date) {};

/**
 * @param {string} title
 * @param {Date} date
 * @param {Object} options
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarApp.prototype.createAllDayEvent = function(title, date, options) {};

/**
 * @param {string} title
 * @param {Date} startDate
 * @param {Calendar.EventRecurrence} recurrence
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarApp.prototype.createAllDayEventSeries = function(title, startDate, recurrence) {};

/**
 * @param {string} title
 * @param {Date} startDate
 * @param {Calendar.EventRecurrence} recurrence
 * @param {Object} options
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarApp.prototype.createAllDayEventSeries = function(title, startDate, recurrence, options) {};

/**
 * @param {string} name
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.createCalendar = function(name) {};

/**
 * @param {string} name
 * @param {Object} options
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.createCalendar = function(name, options) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarApp.prototype.createEvent = function(title, startTime, endTime) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Object} options
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarApp.prototype.createEvent = function(title, startTime, endTime, options) {};

/**
 * @param {string} description
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarApp.prototype.createEventFromDescription = function(description) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Calendar.EventRecurrence} recurrence
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarApp.prototype.createEventSeries = function(title, startTime, endTime, recurrence) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Calendar.EventRecurrence} recurrence
 * @param {Object} options
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarApp.prototype.createEventSeries = function(title, startTime, endTime, recurrence, options) {};

/**
 * @return {Calendar.Calendar[]}
 */
Calendar.CalendarApp.prototype.getAllCalendars = function() {};

/**
 * @return {Calendar.Calendar[]}
 */
Calendar.CalendarApp.prototype.getAllOwnedCalendars = function() {};

/**
 * @param {string} id
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.getCalendarById = function(id) {};

/**
 * @param {string} name
 * @return {Calendar.Calendar[]}
 */
Calendar.CalendarApp.prototype.getCalendarsByName = function(name) {};

/**
 * @return {string}
 */
Calendar.CalendarApp.prototype.getColor = function() {};

/**
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.getDefaultCalendar = function() {};

/**
 * @return {string}
 */
Calendar.CalendarApp.prototype.getDescription = function() {};

/**
 * @param {string} iCalId
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarApp.prototype.getEventSeriesById = function(iCalId) {};

/**
 * @param {Date} startTime
 * @param {Date} endTime
 * @return {Calendar.CalendarEvent[]}
 */
Calendar.CalendarApp.prototype.getEvents = function(startTime, endTime) {};

/**
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Object} options
 * @return {Calendar.CalendarEvent[]}
 */
Calendar.CalendarApp.prototype.getEvents = function(startTime, endTime, options) {};

/**
 * @param {Date} date
 * @return {Calendar.CalendarEvent[]}
 */
Calendar.CalendarApp.prototype.getEventsForDay = function(date) {};

/**
 * @param {Date} date
 * @param {Object} options
 * @return {Calendar.CalendarEvent[]}
 */
Calendar.CalendarApp.prototype.getEventsForDay = function(date, options) {};

/**
 * @return {string}
 */
Calendar.CalendarApp.prototype.getId = function() {};

/**
 * @return {string}
 */
Calendar.CalendarApp.prototype.getName = function() {};

/**
 * @param {string} id
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.getOwnedCalendarById = function(id) {};

/**
 * @param {string} name
 * @return {Calendar.Calendar[]}
 */
Calendar.CalendarApp.prototype.getOwnedCalendarsByName = function(name) {};

/**
 * @return {string}
 */
Calendar.CalendarApp.prototype.getTimeZone = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarApp.prototype.isHidden = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarApp.prototype.isMyPrimaryCalendar = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarApp.prototype.isOwnedByMe = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarApp.prototype.isSelected = function() {};

/**
 * @return {Calendar.EventRecurrence}
 */
Calendar.CalendarApp.prototype.newRecurrence = function() {};

/**
 * @param {string} color
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.setColor = function(color) {};

/**
 * @param {string} description
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.setDescription = function(description) {};

/**
 * @param {boolean} hidden
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.setHidden = function(hidden) {};

/**
 * @param {string} name
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.setName = function(name) {};

/**
 * @param {boolean} selected
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.setSelected = function(selected) {};

/**
 * @param {string} timeZone
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.setTimeZone = function(timeZone) {};

/**
 * @param {string} id
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.subscribeToCalendar = function(id) {};

/**
 * @param {string} id
 * @param {Object} options
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.subscribeToCalendar = function(id, options) {};

