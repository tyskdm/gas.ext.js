
/**
 * Calendar Services
 */
var Calendar = {};

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
 * @return {Array.<Calendar.Calendar>}
 */
Calendar.CalendarApp.prototype.getAllCalendars = function() {};

/**
 * @return {Array.<Calendar.Calendar>}
 */
Calendar.CalendarApp.prototype.getAllOwnedCalendars = function() {};

/**
 * @param {string} id
 * @return {Calendar.Calendar}
 */
Calendar.CalendarApp.prototype.getCalendarById = function(id) {};

/**
 * @param {string} name
 * @return {Array.<Calendar.Calendar>}
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
 * @return {Array.<Calendar.CalendarEvent>}
 */
Calendar.CalendarApp.prototype.getEvents = function(startTime, endTime) {};

/**
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Object} options
 * @return {Array.<Calendar.CalendarEvent>}
 */
Calendar.CalendarApp.prototype.getEvents = function(startTime, endTime, options) {};

/**
 * @param {Date} date
 * @return {Array.<Calendar.CalendarEvent>}
 */
Calendar.CalendarApp.prototype.getEventsForDay = function(date) {};

/**
 * @param {Date} date
 * @param {Object} options
 * @return {Array.<Calendar.CalendarEvent>}
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
 * @return {Array.<Calendar.Calendar>}
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


/**
 * @type {Calendar.CalendarApp}
 */
var CalendarApp;

/**
 * Class Calendar
 * Last updated March 26, 2013.
 * @constructor
 */
Calendar.Calendar = function() {};

/**
 * @param {string} title
 * @param {Date} date
 * @return {Calendar.CalendarEvent}
 */
Calendar.Calendar.prototype.createAllDayEvent = function(title, date) {};

/**
 * @param {string} title
 * @param {Date} date
 * @param {Object} options
 * @return {Calendar.CalendarEvent}
 */
Calendar.Calendar.prototype.createAllDayEvent = function(title, date, options) {};

/**
 * @param {string} title
 * @param {Date} startDate
 * @param {Calendar.EventRecurrence} recurrence
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.Calendar.prototype.createAllDayEventSeries = function(title, startDate, recurrence) {};

/**
 * @param {string} title
 * @param {Date} startDate
 * @param {Calendar.EventRecurrence} recurrence
 * @param {Object} options
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.Calendar.prototype.createAllDayEventSeries = function(title, startDate, recurrence, options) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @return {Calendar.CalendarEvent}
 */
Calendar.Calendar.prototype.createEvent = function(title, startTime, endTime) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Object} options
 * @return {Calendar.CalendarEvent}
 */
Calendar.Calendar.prototype.createEvent = function(title, startTime, endTime, options) {};

/**
 * @param {string} description
 * @return {Calendar.CalendarEvent}
 */
Calendar.Calendar.prototype.createEventFromDescription = function(description) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Calendar.EventRecurrence} recurrence
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.Calendar.prototype.createEventSeries = function(title, startTime, endTime, recurrence) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Calendar.EventRecurrence} recurrence
 * @param {Object} options
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.Calendar.prototype.createEventSeries = function(title, startTime, endTime, recurrence, options) {};

/**
 */
Calendar.Calendar.prototype.deleteCalendar = function() {};

/**
 * @return {string}
 */
Calendar.Calendar.prototype.getColor = function() {};

/**
 * @return {string}
 */
Calendar.Calendar.prototype.getDescription = function() {};

/**
 * @param {string} iCalId
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.Calendar.prototype.getEventSeriesById = function(iCalId) {};

/**
 * @param {Date} startTime
 * @param {Date} endTime
 * @return {Array.<Calendar.CalendarEvent>}
 */
Calendar.Calendar.prototype.getEvents = function(startTime, endTime) {};

/**
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Object} options
 * @return {Array.<Calendar.CalendarEvent>}
 */
Calendar.Calendar.prototype.getEvents = function(startTime, endTime, options) {};

/**
 * @param {Date} date
 * @return {Array.<Calendar.CalendarEvent>}
 */
Calendar.Calendar.prototype.getEventsForDay = function(date) {};

/**
 * @param {Date} date
 * @param {Object} options
 * @return {Array.<Calendar.CalendarEvent>}
 */
Calendar.Calendar.prototype.getEventsForDay = function(date, options) {};

/**
 * @return {string}
 */
Calendar.Calendar.prototype.getId = function() {};

/**
 * @return {string}
 */
Calendar.Calendar.prototype.getName = function() {};

/**
 * @return {string}
 */
Calendar.Calendar.prototype.getTimeZone = function() {};

/**
 * @return {boolean}
 */
Calendar.Calendar.prototype.isHidden = function() {};

/**
 * @return {boolean}
 */
Calendar.Calendar.prototype.isMyPrimaryCalendar = function() {};

/**
 * @return {boolean}
 */
Calendar.Calendar.prototype.isOwnedByMe = function() {};

/**
 * @return {boolean}
 */
Calendar.Calendar.prototype.isSelected = function() {};

/**
 * @param {string} color
 * @return {Calendar.Calendar}
 */
Calendar.Calendar.prototype.setColor = function(color) {};

/**
 * @param {string} description
 * @return {Calendar.Calendar}
 */
Calendar.Calendar.prototype.setDescription = function(description) {};

/**
 * @param {boolean} hidden
 * @return {Calendar.Calendar}
 */
Calendar.Calendar.prototype.setHidden = function(hidden) {};

/**
 * @param {string} name
 * @return {Calendar.Calendar}
 */
Calendar.Calendar.prototype.setName = function(name) {};

/**
 * @param {boolean} selected
 * @return {Calendar.Calendar}
 */
Calendar.Calendar.prototype.setSelected = function(selected) {};

/**
 * @param {string} timeZone
 * @return {Calendar.Calendar}
 */
Calendar.Calendar.prototype.setTimeZone = function(timeZone) {};

/**
 */
Calendar.Calendar.prototype.unsubscribeFromCalendar = function() {};

/**
 * Class CalendarEvent
 * Last updated March 26, 2013.
 * @constructor
 */
Calendar.CalendarEvent = function() {};

/**
 * @param {number} minutesBefore
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.addEmailReminder = function(minutesBefore) {};

/**
 * @param {string} email
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.addGuest = function(email) {};

/**
 * @param {number} minutesBefore
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.addPopupReminder = function(minutesBefore) {};

/**
 * @param {number} minutesBefore
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.addSmsReminder = function(minutesBefore) {};

/**
 * @return {boolean}
 */
Calendar.CalendarEvent.prototype.anyoneCanAddSelf = function() {};

/**
 */
Calendar.CalendarEvent.prototype.deleteEvent = function() {};

/**
 * @param {string} key
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.deleteTag = function(key) {};

/**
 * @return {Date}
 */
Calendar.CalendarEvent.prototype.getAllDayEndDate = function() {};

/**
 * @return {Date}
 */
Calendar.CalendarEvent.prototype.getAllDayStartDate = function() {};

/**
 * @return {Array.<string>}
 */
Calendar.CalendarEvent.prototype.getAllTagKeys = function() {};

/**
 * @return {Array.<string>}
 */
Calendar.CalendarEvent.prototype.getCreators = function() {};

/**
 * @return {Date}
 */
Calendar.CalendarEvent.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
Calendar.CalendarEvent.prototype.getDescription = function() {};

/**
 * @return {Array.<number>}
 */
Calendar.CalendarEvent.prototype.getEmailReminders = function() {};

/**
 * @return {Date}
 */
Calendar.CalendarEvent.prototype.getEndTime = function() {};

/**
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEvent.prototype.getEventSeries = function() {};

/**
 * @param {string} email
 * @return {Calendar.EventGuest}
 */
Calendar.CalendarEvent.prototype.getGuestByEmail = function(email) {};

/**
 * @return {Array.<Calendar.EventGuest>}
 */
Calendar.CalendarEvent.prototype.getGuestList = function() {};

/**
 * @param {boolean} includeOwner
 * @return {Array.<Calendar.EventGuest>}
 */
Calendar.CalendarEvent.prototype.getGuestList = function(includeOwner) {};

/**
 * @return {string}
 */
Calendar.CalendarEvent.prototype.getId = function() {};

/**
 * @return {Date}
 */
Calendar.CalendarEvent.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
Calendar.CalendarEvent.prototype.getLocation = function() {};

/**
 * @return {Calendar.GuestStatus}
 */
Calendar.CalendarEvent.prototype.getMyStatus = function() {};

/**
 * @return {string}
 */
Calendar.CalendarEvent.prototype.getOriginalCalendarId = function() {};

/**
 * @return {Array.<number>}
 */
Calendar.CalendarEvent.prototype.getPopupReminders = function() {};

/**
 * @return {Array.<number>}
 */
Calendar.CalendarEvent.prototype.getSmsReminders = function() {};

/**
 * @return {Date}
 */
Calendar.CalendarEvent.prototype.getStartTime = function() {};

/**
 * @param {string} key
 * @return {string}
 */
Calendar.CalendarEvent.prototype.getTag = function(key) {};

/**
 * @return {string}
 */
Calendar.CalendarEvent.prototype.getTitle = function() {};

/**
 * @return {Calendar.Visibility}
 */
Calendar.CalendarEvent.prototype.getVisibility = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarEvent.prototype.guestsCanInviteOthers = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarEvent.prototype.guestsCanModify = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarEvent.prototype.guestsCanSeeGuests = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarEvent.prototype.isAllDayEvent = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarEvent.prototype.isOwnedByMe = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarEvent.prototype.isRecurringEvent = function() {};

/**
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.removeAllReminders = function() {};

/**
 * @param {string} email
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.removeGuest = function(email) {};

/**
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.resetRemindersToDefault = function() {};

/**
 * @param {Date} date
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setAllDayDate = function(date) {};

/**
 * @param {boolean} anyoneCanAddSelf
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setAnyoneCanAddSelf = function(anyoneCanAddSelf) {};

/**
 * @param {string} description
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setDescription = function(description) {};

/**
 * @param {boolean} guestsCanInviteOthers
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setGuestsCanInviteOthers = function(guestsCanInviteOthers) {};

/**
 * @param {boolean} guestsCanModify
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setGuestsCanModify = function(guestsCanModify) {};

/**
 * @param {boolean} guestsCanSeeGuests
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setGuestsCanSeeGuests = function(guestsCanSeeGuests) {};

/**
 * @param {string} location
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setLocation = function(location) {};

/**
 * @param {Calendar.GuestStatus} status
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setMyStatus = function(status) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setTag = function(key, value) {};

/**
 * @param {Date} startTime
 * @param {Date} endTime
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setTime = function(startTime, endTime) {};

/**
 * @param {string} title
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setTitle = function(title) {};

/**
 * @param {Calendar.Visibility} visibility
 * @return {Calendar.CalendarEvent}
 */
Calendar.CalendarEvent.prototype.setVisibility = function(visibility) {};

/**
 * Class CalendarEventSeries
 * Last updated March 26, 2013.
 * @constructor
 */
Calendar.CalendarEventSeries = function() {};

/**
 * @param {number} minutesBefore
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.addEmailReminder = function(minutesBefore) {};

/**
 * @param {string} email
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.addGuest = function(email) {};

/**
 * @param {number} minutesBefore
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.addPopupReminder = function(minutesBefore) {};

/**
 * @param {number} minutesBefore
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.addSmsReminder = function(minutesBefore) {};

/**
 * @return {boolean}
 */
Calendar.CalendarEventSeries.prototype.anyoneCanAddSelf = function() {};

/**
 */
Calendar.CalendarEventSeries.prototype.deleteEventSeries = function() {};

/**
 * @param {string} key
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.deleteTag = function(key) {};

/**
 * @return {Array.<string>}
 */
Calendar.CalendarEventSeries.prototype.getAllTagKeys = function() {};

/**
 * @return {Array.<string>}
 */
Calendar.CalendarEventSeries.prototype.getCreators = function() {};

/**
 * @return {Date}
 */
Calendar.CalendarEventSeries.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
Calendar.CalendarEventSeries.prototype.getDescription = function() {};

/**
 * @return {Array.<number>}
 */
Calendar.CalendarEventSeries.prototype.getEmailReminders = function() {};

/**
 * @param {string} email
 * @return {Calendar.EventGuest}
 */
Calendar.CalendarEventSeries.prototype.getGuestByEmail = function(email) {};

/**
 * @return {Array.<Calendar.EventGuest>}
 */
Calendar.CalendarEventSeries.prototype.getGuestList = function() {};

/**
 * @param {boolean} includeOwner
 * @return {Array.<Calendar.EventGuest>}
 */
Calendar.CalendarEventSeries.prototype.getGuestList = function(includeOwner) {};

/**
 * @return {string}
 */
Calendar.CalendarEventSeries.prototype.getId = function() {};

/**
 * @return {Date}
 */
Calendar.CalendarEventSeries.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
Calendar.CalendarEventSeries.prototype.getLocation = function() {};

/**
 * @return {Calendar.GuestStatus}
 */
Calendar.CalendarEventSeries.prototype.getMyStatus = function() {};

/**
 * @return {string}
 */
Calendar.CalendarEventSeries.prototype.getOriginalCalendarId = function() {};

/**
 * @return {Array.<number>}
 */
Calendar.CalendarEventSeries.prototype.getPopupReminders = function() {};

/**
 * @return {Array.<number>}
 */
Calendar.CalendarEventSeries.prototype.getSmsReminders = function() {};

/**
 * @param {string} key
 * @return {string}
 */
Calendar.CalendarEventSeries.prototype.getTag = function(key) {};

/**
 * @return {string}
 */
Calendar.CalendarEventSeries.prototype.getTitle = function() {};

/**
 * @return {Calendar.Visibility}
 */
Calendar.CalendarEventSeries.prototype.getVisibility = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarEventSeries.prototype.guestsCanInviteOthers = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarEventSeries.prototype.guestsCanModify = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarEventSeries.prototype.guestsCanSeeGuests = function() {};

/**
 * @return {boolean}
 */
Calendar.CalendarEventSeries.prototype.isOwnedByMe = function() {};

/**
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.removeAllReminders = function() {};

/**
 * @param {string} email
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.removeGuest = function(email) {};

/**
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.resetRemindersToDefault = function() {};

/**
 * @param {boolean} anyoneCanAddSelf
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setAnyoneCanAddSelf = function(anyoneCanAddSelf) {};

/**
 * @param {string} description
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setDescription = function(description) {};

/**
 * @param {boolean} guestsCanInviteOthers
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setGuestsCanInviteOthers = function(guestsCanInviteOthers) {};

/**
 * @param {boolean} guestsCanModify
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setGuestsCanModify = function(guestsCanModify) {};

/**
 * @param {boolean} guestsCanSeeGuests
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setGuestsCanSeeGuests = function(guestsCanSeeGuests) {};

/**
 * @param {string} location
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setLocation = function(location) {};

/**
 * @param {Calendar.GuestStatus} status
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setMyStatus = function(status) {};

/**
 * @param {Calendar.EventRecurrence} recurrence
 * @param {Date} startDate
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setRecurrence = function(recurrence, startDate) {};

/**
 * @param {Calendar.EventRecurrence} recurrence
 * @param {Date} startTime
 * @param {Date} endTime
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setRecurrence = function(recurrence, startTime, endTime) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setTag = function(key, value) {};

/**
 * @param {string} title
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setTitle = function(title) {};

/**
 * @param {Calendar.Visibility} visibility
 * @return {Calendar.CalendarEventSeries}
 */
Calendar.CalendarEventSeries.prototype.setVisibility = function(visibility) {};

/**
 * Class EventGuest
 * Last updated March 26, 2013.
 * @constructor
 */
Calendar.EventGuest = function() {};

/**
 * @return {number}
 */
Calendar.EventGuest.prototype.getAdditionalGuests = function() {};

/**
 * @return {string}
 */
Calendar.EventGuest.prototype.getEmail = function() {};

/**
 * @return {Calendar.GuestStatus}
 */
Calendar.EventGuest.prototype.getGuestStatus = function() {};

/**
 * @return {string}
 */
Calendar.EventGuest.prototype.getName = function() {};

/**
 * @deprecated
 * @return {string}
 */
Calendar.EventGuest.prototype.getStatus = function() {};

/**
 * Class EventRecurrence
 * Last updated March 26, 2013.
 * @constructor
 */
Calendar.EventRecurrence = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.EventRecurrence.prototype.addDailyExclusion = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.EventRecurrence.prototype.addDailyRule = function() {};

/**
 * @param {Date} date
 * @return {Calendar.EventRecurrence}
 */
Calendar.EventRecurrence.prototype.addDate = function(date) {};

/**
 * @param {Date} date
 * @return {Calendar.EventRecurrence}
 */
Calendar.EventRecurrence.prototype.addDateExclusion = function(date) {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.EventRecurrence.prototype.addMonthlyExclusion = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.EventRecurrence.prototype.addMonthlyRule = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.EventRecurrence.prototype.addWeeklyExclusion = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.EventRecurrence.prototype.addWeeklyRule = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.EventRecurrence.prototype.addYearlyExclusion = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.EventRecurrence.prototype.addYearlyRule = function() {};

/**
 * @param {string} timeZone
 * @return {Calendar.EventRecurrence}
 */
Calendar.EventRecurrence.prototype.setTimeZone = function(timeZone) {};

/**
 * Class RecurrenceRule
 * Last updated March 26, 2013.
 * @constructor
 */
Calendar.RecurrenceRule = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.addDailyExclusion = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.addDailyRule = function() {};

/**
 * @param {Date} date
 * @return {Calendar.EventRecurrence}
 */
Calendar.RecurrenceRule.prototype.addDate = function(date) {};

/**
 * @param {Date} date
 * @return {Calendar.EventRecurrence}
 */
Calendar.RecurrenceRule.prototype.addDateExclusion = function(date) {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.addMonthlyExclusion = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.addMonthlyRule = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.addWeeklyExclusion = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.addWeeklyRule = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.addYearlyExclusion = function() {};

/**
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.addYearlyRule = function() {};

/**
 * @param {number} interval
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.interval = function(interval) {};

/**
 * @param {Base.Month} month
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.onlyInMonth = function(month) {};

/**
 * @param {Array.<Base.Month>} months
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.onlyInMonths = function(months) {};

/**
 * @param {number} day
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.onlyOnMonthDay = function(day) {};

/**
 * @param {Array.<number>} days
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.onlyOnMonthDays = function(days) {};

/**
 * @param {number} week
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.onlyOnWeek = function(week) {};

/**
 * @param {Base.Weekday} day
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.onlyOnWeekday = function(day) {};

/**
 * @param {Array.<Base.Weekday>} days
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.onlyOnWeekdays = function(days) {};

/**
 * @param {Array.<number>} weeks
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.onlyOnWeeks = function(weeks) {};

/**
 * @param {number} day
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.onlyOnYearDay = function(day) {};

/**
 * @param {Array.<number>} days
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.onlyOnYearDays = function(days) {};

/**
 * @param {string} timeZone
 * @return {Calendar.EventRecurrence}
 */
Calendar.RecurrenceRule.prototype.setTimeZone = function(timeZone) {};

/**
 * @param {number} times
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.times = function(times) {};

/**
 * @param {Date} endDate
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.until = function(endDate) {};

/**
 * @param {Base.Weekday} day
 * @return {Calendar.RecurrenceRule}
 */
Calendar.RecurrenceRule.prototype.weekStartsOn = function(day) {};

/**
 * Enum Color
 * Last updated June 27, 2013.
 * @constructor
 */
Calendar.Color = function() {};

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.BLUE;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.BROWN;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.CHARCOAL;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.CHESTNUT;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.GRAY;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.GREEN;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.INDIGO;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.LIME;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.MUSTARD;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.OLIVE;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.ORANGE;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.PINK;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.PLUM;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.PURPLE;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.RED;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.RED_ORANGE;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.SEA_BLUE;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.SLATE;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.TEAL;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.TURQOISE;

/**
 * @type {Calendar.Color}
 */
Calendar.Color.prototype.YELLOW;

/**
 * Enum GuestStatus
 * Last updated June 27, 2013.
 * @constructor
 */
Calendar.GuestStatus = function() {};

/**
 * @type {Calendar.GuestStatus}
 */
Calendar.GuestStatus.prototype.INVITED;

/**
 * @type {Calendar.GuestStatus}
 */
Calendar.GuestStatus.prototype.MAYBE;

/**
 * @type {Calendar.GuestStatus}
 */
Calendar.GuestStatus.prototype.NO;

/**
 * @type {Calendar.GuestStatus}
 */
Calendar.GuestStatus.prototype.OWNER;

/**
 * @type {Calendar.GuestStatus}
 */
Calendar.GuestStatus.prototype.YES;

/**
 * Enum Visibility
 * Last updated June 27, 2013.
 * @constructor
 */
Calendar.Visibility = function() {};

/**
 * @type {Calendar.Visibility}
 */
Calendar.Visibility.prototype.CONFIDENTIAL;

/**
 * @type {Calendar.Visibility}
 */
Calendar.Visibility.prototype.DEFAULT;

/**
 * @type {Calendar.Visibility}
 */
Calendar.Visibility.prototype.PRIVATE;

/**
 * @type {Calendar.Visibility}
 */
Calendar.Visibility.prototype.PUBLIC;


/**
 * Contacts Services
 */
var Contacts = {};

/**
 * Class ContactsApp
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.ContactsApp = function() {};

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ContactsApp.prototype.ExtendedField;

/**
 * @type {Contacts.Field}
 */
Contacts.ContactsApp.prototype.Field;

/**
 * @type {Contacts.Gender}
 */
Contacts.ContactsApp.prototype.Gender;

/**
 * @type {Base.Month}
 */
Contacts.ContactsApp.prototype.Month;

/**
 * @type {Contacts.Priority}
 */
Contacts.ContactsApp.prototype.Priority;

/**
 * @type {Contacts.Sensitivity}
 */
Contacts.ContactsApp.prototype.Sensitivity;

/**
 * @param {string} givenName
 * @param {string} familyName
 * @param {string} email
 * @return {Contacts.Contact}
 */
Contacts.ContactsApp.prototype.createContact = function(givenName, familyName, email) {};

/**
 * @param {string} name
 * @return {Contacts.ContactGroup}
 */
Contacts.ContactsApp.prototype.createContactGroup = function(name) {};

/**
 * @param {Contacts.Contact} contact
 */
Contacts.ContactsApp.prototype.deleteContact = function(contact) {};

/**
 * @param {Contacts.ContactGroup} group
 */
Contacts.ContactsApp.prototype.deleteContactGroup = function(group) {};

/**
 * @param {string} emailAddress
 * @return {Contacts.Contact}
 */
Contacts.ContactsApp.prototype.getContact = function(emailAddress) {};

/**
 * @param {string} id
 * @return {Contacts.Contact}
 */
Contacts.ContactsApp.prototype.getContactById = function(id) {};

/**
 * @param {string} name
 * @return {Contacts.ContactGroup}
 */
Contacts.ContactsApp.prototype.getContactGroup = function(name) {};

/**
 * @param {string} id
 * @return {Contacts.ContactGroup}
 */
Contacts.ContactsApp.prototype.getContactGroupById = function(id) {};

/**
 * @return {Array.<Contacts.ContactGroup>}
 */
Contacts.ContactsApp.prototype.getContactGroups = function() {};

/**
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContacts = function() {};

/**
 * @param {string} query
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByAddress = function(query) {};

/**
 * @param {string} query
 * @param {Contacts.Field} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByAddress = function(query, label) {};

/**
 * @param {string} query
 * @param {string} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByAddress = function(query, label) {};

/**
 * @param {string} query
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByCompany = function(query) {};

/**
 * @param {Object} query
 * @param {Contacts.ExtendedField} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByCustomField = function(query, label) {};

/**
 * @param {Base.Month} month
 * @param {number} day
 * @param {Contacts.Field} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByDate = function(month, day, label) {};

/**
 * @param {Base.Month} month
 * @param {number} day
 * @param {number} year
 * @param {Contacts.Field} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByDate = function(month, day, year, label) {};

/**
 * @param {Base.Month} month
 * @param {number} day
 * @param {number} year
 * @param {string} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByDate = function(month, day, year, label) {};

/**
 * @param {Base.Month} month
 * @param {number} day
 * @param {string} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByDate = function(month, day, label) {};

/**
 * @param {string} query
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByEmailAddress = function(query) {};

/**
 * @param {string} query
 * @param {Contacts.Field} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByEmailAddress = function(query, label) {};

/**
 * @param {string} query
 * @param {string} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByEmailAddress = function(query, label) {};

/**
 * @param {Contacts.ContactGroup} group
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByGroup = function(group) {};

/**
 * @param {string} query
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByIM = function(query) {};

/**
 * @param {string} query
 * @param {Contacts.Field} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByIM = function(query, label) {};

/**
 * @param {string} query
 * @param {string} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByIM = function(query, label) {};

/**
 * @param {string} query
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByJobTitle = function(query) {};

/**
 * @param {string} query
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByName = function(query) {};

/**
 * @param {string} query
 * @param {Contacts.Field} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByName = function(query, label) {};

/**
 * @param {string} query
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByNotes = function(query) {};

/**
 * @param {string} query
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByPhone = function(query) {};

/**
 * @param {string} query
 * @param {Contacts.Field} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByPhone = function(query, label) {};

/**
 * @param {string} query
 * @param {string} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByPhone = function(query, label) {};

/**
 * @param {string} query
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByUrl = function(query) {};

/**
 * @param {string} query
 * @param {Contacts.Field} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByUrl = function(query, label) {};

/**
 * @param {string} query
 * @param {string} label
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getContactsByUrl = function(query, label) {};

/**
 * @deprecated
 * @return {Contacts.Contact}
 */
Contacts.ContactsApp.prototype.findByEmailAddress = function(email) {};

/**
 * @deprecated
 * @return {Contacts.ContactGroup}
 */
Contacts.ContactsApp.prototype.findContactGroup = function(name) {};

/**
 * @deprecated
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactsApp.prototype.getAllContacts = function() {};


/**
 * @type {Contacts.ContactsApp}
 */
var ContactsApp;

/**
 * Class AddressField
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.AddressField = function() {};

/**
 */
Contacts.AddressField.prototype.deleteAddressField = function() {};

/**
 * @return {string}
 */
Contacts.AddressField.prototype.getAddress = function() {};

/**
 * @return {Object}
 */
Contacts.AddressField.prototype.getLabel = function() {};

/**
 * @return {boolean}
 */
Contacts.AddressField.prototype.isPrimary = function() {};

/**
 * @param {string} address
 * @return {Contacts.AddressField}
 */
Contacts.AddressField.prototype.setAddress = function(address) {};

/**
 * @return {Contacts.AddressField}
 */
Contacts.AddressField.prototype.setAsPrimary = function() {};

/**
 * @param {Contacts.Field} field
 * @return {Contacts.AddressField}
 */
Contacts.AddressField.prototype.setLabel = function(field) {};

/**
 * @param {string} label
 * @return {Contacts.AddressField}
 */
Contacts.AddressField.prototype.setLabel = function(label) {};

/**
 * Class CompanyField
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.CompanyField = function() {};

/**
 */
Contacts.CompanyField.prototype.deleteCompanyField = function() {};

/**
 * @return {string}
 */
Contacts.CompanyField.prototype.getCompanyName = function() {};

/**
 * @return {string}
 */
Contacts.CompanyField.prototype.getJobTitle = function() {};

/**
 * @return {boolean}
 */
Contacts.CompanyField.prototype.isPrimary = function() {};

/**
 * @return {Contacts.CompanyField}
 */
Contacts.CompanyField.prototype.setAsPrimary = function() {};

/**
 * @param {string} company
 * @return {Contacts.CompanyField}
 */
Contacts.CompanyField.prototype.setCompanyName = function(company) {};

/**
 * @param {string} title
 * @return {Contacts.CompanyField}
 */
Contacts.CompanyField.prototype.setJobTitle = function(title) {};

/**
 * Class Contact
 * Last updated June 27, 2013.
 * @constructor
 */
Contacts.Contact = function() {};

/**
 * @param {Object} label
 * @param {string} address
 * @return {Contacts.AddressField}
 */
Contacts.Contact.prototype.addAddress = function(label, address) {};

/**
 * @param {string} company
 * @param {string} title
 * @return {Contacts.CompanyField}
 */
Contacts.Contact.prototype.addCompany = function(company, title) {};

/**
 * @param {Object} label
 * @param {Object} content
 * @return {Contacts.CustomField}
 */
Contacts.Contact.prototype.addCustomField = function(label, content) {};

/**
 * @param {Object} label
 * @param {Base.Month} month
 * @param {number} day
 * @param {number} year
 * @return {Contacts.DateField}
 */
Contacts.Contact.prototype.addDate = function(label, month, day, year) {};

/**
 * @param {Object} label
 * @param {string} address
 * @return {Contacts.EmailField}
 */
Contacts.Contact.prototype.addEmail = function(label, address) {};

/**
 * @param {Object} label
 * @param {string} address
 * @return {Contacts.IMField}
 */
Contacts.Contact.prototype.addIM = function(label, address) {};

/**
 * @param {Object} label
 * @param {string} number
 * @return {Contacts.PhoneField}
 */
Contacts.Contact.prototype.addPhone = function(label, number) {};

/**
 * @param {Contacts.ContactGroup} group
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.addToGroup = function(group) {};

/**
 * @param {Object} label
 * @param {string} url
 * @return {Contacts.UrlField}
 */
Contacts.Contact.prototype.addUrl = function(label, url) {};

/**
 */
Contacts.Contact.prototype.deleteContact = function() {};

/**
 * @return {Array.<Contacts.AddressField>}
 */
Contacts.Contact.prototype.getAddresses = function() {};

/**
 * @param {Object} label
 * @return {Array.<Contacts.AddressField>}
 */
Contacts.Contact.prototype.getAddresses = function(label) {};

/**
 * @return {Array.<Contacts.CompanyField>}
 */
Contacts.Contact.prototype.getCompanies = function() {};

/**
 * @return {Array.<Contacts.ContactGroup>}
 */
Contacts.Contact.prototype.getContactGroups = function() {};

/**
 * @return {Array.<Contacts.CustomField>}
 */
Contacts.Contact.prototype.getCustomFields = function() {};

/**
 * @param {Object} label
 * @return {Array.<Contacts.CustomField>}
 */
Contacts.Contact.prototype.getCustomFields = function(label) {};

/**
 * @return {Array.<Contacts.DateField>}
 */
Contacts.Contact.prototype.getDates = function() {};

/**
 * @param {Object} label
 * @return {Array.<Contacts.DateField>}
 */
Contacts.Contact.prototype.getDates = function(label) {};

/**
 * @return {Array.<Contacts.EmailField>}
 */
Contacts.Contact.prototype.getEmails = function() {};

/**
 * @param {Object} label
 * @return {Array.<Contacts.EmailField>}
 */
Contacts.Contact.prototype.getEmails = function(label) {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getFamilyName = function() {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getFullName = function() {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getGivenName = function() {};

/**
 * @return {Array.<Contacts.IMField>}
 */
Contacts.Contact.prototype.getIMs = function() {};

/**
 * @param {Object} label
 * @return {Array.<Contacts.IMField>}
 */
Contacts.Contact.prototype.getIMs = function(label) {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getId = function() {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getInitials = function() {};

/**
 * @return {Date}
 */
Contacts.Contact.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getMaidenName = function() {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getMiddleName = function() {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getNickname = function() {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getNotes = function() {};

/**
 * @return {Array.<Contacts.PhoneField>}
 */
Contacts.Contact.prototype.getPhones = function() {};

/**
 * @param {Object} label
 * @return {Array.<Contacts.PhoneField>}
 */
Contacts.Contact.prototype.getPhones = function(label) {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getPrefix = function() {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getPrimaryEmail = function() {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getShortName = function() {};

/**
 * @return {string}
 */
Contacts.Contact.prototype.getSuffix = function() {};

/**
 * @return {Array.<Contacts.UrlField>}
 */
Contacts.Contact.prototype.getUrls = function() {};

/**
 * @param {Object} label
 * @return {Array.<Contacts.UrlField>}
 */
Contacts.Contact.prototype.getUrls = function(label) {};

/**
 * @param {Contacts.ContactGroup} group
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.removeFromGroup = function(group) {};

/**
 * @param {string} familyName
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.setFamilyName = function(familyName) {};

/**
 * @param {string} fullName
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.setFullName = function(fullName) {};

/**
 * @param {string} givenName
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.setGivenName = function(givenName) {};

/**
 * @param {string} initials
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.setInitials = function(initials) {};

/**
 * @param {string} maidenName
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.setMaidenName = function(maidenName) {};

/**
 * @param {string} middleName
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.setMiddleName = function(middleName) {};

/**
 * @param {string} nickname
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.setNickname = function(nickname) {};

/**
 * @param {string} notes
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.setNotes = function(notes) {};

/**
 * @param {string} prefix
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.setPrefix = function(prefix) {};

/**
 * @param {string} shortName
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.setShortName = function(shortName) {};

/**
 * @param {string} suffix
 * @return {Contacts.Contact}
 */
Contacts.Contact.prototype.setSuffix = function(suffix) {};

/**
 * @deprecated
 * @return {Array.<string>}
 */
Contacts.Contact.prototype.getEmailAddresses = function() {};

/**
 * @deprecated
 * @return {string}
 */
Contacts.Contact.prototype.getHomeAddress = function() {};

/**
 * @deprecated
 * @return {string}
 */
Contacts.Contact.prototype.getHomeFax = function() {};

/**
 * @deprecated
 * @return {string}
 */
Contacts.Contact.prototype.getHomePhone = function() {};

/**
 * @deprecated
 * @return {string}
 */
Contacts.Contact.prototype.getMobilePhone = function() {};

/**
 * @deprecated
 * @return {string}
 */
Contacts.Contact.prototype.getPager = function() {};

/**
 * @deprecated
 * @return {string}
 */
Contacts.Contact.prototype.getUserDefinedField = function(key) {};

/**
 * @deprecated
 * @return {Object}
 */
Contacts.Contact.prototype.getUserDefinedFields = function() {};

/**
 * @deprecated
 * @return {string}
 */
Contacts.Contact.prototype.getWorkAddress = function() {};

/**
 * @deprecated
 * @return {string}
 */
Contacts.Contact.prototype.getWorkFax = function() {};

/**
 * @deprecated
 * @return {string}
 */
Contacts.Contact.prototype.getWorkPhone = function() {};

/**
 * @deprecated
 */
Contacts.Contact.prototype.setHomeAddress = function(addr) {};

/**
 * @deprecated
 */
Contacts.Contact.prototype.setHomeFax = function(phone) {};

/**
 * @deprecated
 */
Contacts.Contact.prototype.setHomePhone = function(phone) {};

/**
 * @deprecated
 */
Contacts.Contact.prototype.setMobilePhone = function(phone) {};

/**
 * @deprecated
 */
Contacts.Contact.prototype.setPager = function(phone) {};

/**
 * @deprecated
 */
Contacts.Contact.prototype.setPrimaryEmail = function(primaryEmail) {};

/**
 * @deprecated
 */
Contacts.Contact.prototype.setUserDefinedField = function(key, value) {};

/**
 * @deprecated
 */
Contacts.Contact.prototype.setUserDefinedFields = function(o) {};

/**
 * @deprecated
 */
Contacts.Contact.prototype.setWorkAddress = function(addr) {};

/**
 * @deprecated
 */
Contacts.Contact.prototype.setWorkFax = function(phone) {};

/**
 * @deprecated
 */
Contacts.Contact.prototype.setWorkPhone = function(phone) {};

/**
 * Class ContactGroup
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.ContactGroup = function() {};

/**
 * @param {Contacts.Contact} contact
 * @return {Contacts.ContactGroup}
 */
Contacts.ContactGroup.prototype.addContact = function(contact) {};

/**
 */
Contacts.ContactGroup.prototype.deleteGroup = function() {};

/**
 * @return {Array.<Contacts.Contact>}
 */
Contacts.ContactGroup.prototype.getContacts = function() {};

/**
 * @return {string}
 */
Contacts.ContactGroup.prototype.getId = function() {};

/**
 * @return {string}
 */
Contacts.ContactGroup.prototype.getName = function() {};

/**
 * @return {boolean}
 */
Contacts.ContactGroup.prototype.isSystemGroup = function() {};

/**
 * @param {Contacts.Contact} contact
 * @return {Contacts.ContactGroup}
 */
Contacts.ContactGroup.prototype.removeContact = function(contact) {};

/**
 * @param {string} name
 * @return {Contacts.ContactGroup}
 */
Contacts.ContactGroup.prototype.setName = function(name) {};

/**
 * @deprecated
 * @return {string}
 */
Contacts.ContactGroup.prototype.getGroupName = function() {};

/**
 * @deprecated
 */
Contacts.ContactGroup.prototype.setGroupName = function(name) {};

/**
 * Class CustomField
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.CustomField = function() {};

/**
 */
Contacts.CustomField.prototype.deleteCustomField = function() {};

/**
 * @return {Object}
 */
Contacts.CustomField.prototype.getLabel = function() {};

/**
 * @return {Object}
 */
Contacts.CustomField.prototype.getValue = function() {};

/**
 * @param {Contacts.ExtendedField} field
 * @return {Contacts.CustomField}
 */
Contacts.CustomField.prototype.setLabel = function(field) {};

/**
 * @param {string} label
 * @return {Contacts.CustomField}
 */
Contacts.CustomField.prototype.setLabel = function(label) {};

/**
 * @param {Object} value
 * @return {Contacts.CustomField}
 */
Contacts.CustomField.prototype.setValue = function(value) {};

/**
 * Class DateField
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.DateField = function() {};

/**
 */
Contacts.DateField.prototype.deleteDateField = function() {};

/**
 * @return {number}
 */
Contacts.DateField.prototype.getDay = function() {};

/**
 * @return {Object}
 */
Contacts.DateField.prototype.getLabel = function() {};

/**
 * @return {Base.Month}
 */
Contacts.DateField.prototype.getMonth = function() {};

/**
 * @return {number}
 */
Contacts.DateField.prototype.getYear = function() {};

/**
 * @param {Base.Month} month
 * @param {number} day
 * @return {Contacts.DateField}
 */
Contacts.DateField.prototype.setDate = function(month, day) {};

/**
 * @param {Base.Month} month
 * @param {number} day
 * @param {number} year
 * @return {Contacts.DateField}
 */
Contacts.DateField.prototype.setDate = function(month, day, year) {};

/**
 * @param {Contacts.Field} label
 * @return {Contacts.DateField}
 */
Contacts.DateField.prototype.setLabel = function(label) {};

/**
 * @param {string} label
 * @return {Contacts.DateField}
 */
Contacts.DateField.prototype.setLabel = function(label) {};

/**
 * Class EmailField
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.EmailField = function() {};

/**
 */
Contacts.EmailField.prototype.deleteEmailField = function() {};

/**
 * @return {string}
 */
Contacts.EmailField.prototype.getAddress = function() {};

/**
 * @return {string}
 */
Contacts.EmailField.prototype.getDisplayName = function() {};

/**
 * @return {Object}
 */
Contacts.EmailField.prototype.getLabel = function() {};

/**
 * @return {boolean}
 */
Contacts.EmailField.prototype.isPrimary = function() {};

/**
 * @param {string} address
 * @return {Contacts.EmailField}
 */
Contacts.EmailField.prototype.setAddress = function(address) {};

/**
 * @return {Contacts.EmailField}
 */
Contacts.EmailField.prototype.setAsPrimary = function() {};

/**
 * @param {string} name
 * @return {Contacts.EmailField}
 */
Contacts.EmailField.prototype.setDisplayName = function(name) {};

/**
 * @param {Contacts.Field} field
 * @return {Contacts.EmailField}
 */
Contacts.EmailField.prototype.setLabel = function(field) {};

/**
 * @param {string} label
 * @return {Contacts.EmailField}
 */
Contacts.EmailField.prototype.setLabel = function(label) {};

/**
 * Class IMField
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.IMField = function() {};

/**
 */
Contacts.IMField.prototype.deleteIMField = function() {};

/**
 * @return {string}
 */
Contacts.IMField.prototype.getAddress = function() {};

/**
 * @return {Object}
 */
Contacts.IMField.prototype.getLabel = function() {};

/**
 * @return {boolean}
 */
Contacts.IMField.prototype.isPrimary = function() {};

/**
 * @param {string} address
 * @return {Contacts.IMField}
 */
Contacts.IMField.prototype.setAddress = function(address) {};

/**
 * @return {Contacts.IMField}
 */
Contacts.IMField.prototype.setAsPrimary = function() {};

/**
 * @param {Contacts.Field} field
 * @return {Contacts.IMField}
 */
Contacts.IMField.prototype.setLabel = function(field) {};

/**
 * @param {string} label
 * @return {Contacts.IMField}
 */
Contacts.IMField.prototype.setLabel = function(label) {};

/**
 * Class PhoneField
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.PhoneField = function() {};

/**
 */
Contacts.PhoneField.prototype.deletePhoneField = function() {};

/**
 * @return {Object}
 */
Contacts.PhoneField.prototype.getLabel = function() {};

/**
 * @return {string}
 */
Contacts.PhoneField.prototype.getPhoneNumber = function() {};

/**
 * @return {boolean}
 */
Contacts.PhoneField.prototype.isPrimary = function() {};

/**
 * @return {Contacts.PhoneField}
 */
Contacts.PhoneField.prototype.setAsPrimary = function() {};

/**
 * @param {Contacts.Field} field
 * @return {Contacts.PhoneField}
 */
Contacts.PhoneField.prototype.setLabel = function(field) {};

/**
 * @param {string} label
 * @return {Contacts.PhoneField}
 */
Contacts.PhoneField.prototype.setLabel = function(label) {};

/**
 * @param {string} number
 * @return {Contacts.PhoneField}
 */
Contacts.PhoneField.prototype.setPhoneNumber = function(number) {};

/**
 * Class UrlField
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.UrlField = function() {};

/**
 */
Contacts.UrlField.prototype.deleteUrlField = function() {};

/**
 * @return {string}
 */
Contacts.UrlField.prototype.getAddress = function() {};

/**
 * @return {Object}
 */
Contacts.UrlField.prototype.getLabel = function() {};

/**
 * @return {boolean}
 */
Contacts.UrlField.prototype.isPrimary = function() {};

/**
 * @param {string} address
 * @return {Contacts.UrlField}
 */
Contacts.UrlField.prototype.setAddress = function(address) {};

/**
 * @return {Contacts.UrlField}
 */
Contacts.UrlField.prototype.setAsPrimary = function() {};

/**
 * @param {Contacts.Field} field
 * @return {Contacts.UrlField}
 */
Contacts.UrlField.prototype.setLabel = function(field) {};

/**
 * @param {string} label
 * @return {Contacts.UrlField}
 */
Contacts.UrlField.prototype.setLabel = function(label) {};

/**
 * Enum ExtendedField
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.ExtendedField = function() {};

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.HOBBY;

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.MILEAGE;

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.LANGUAGE;

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.GENDER;

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.BILLING_INFORMATION;

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.DIRECTORY_SERVER;

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.SENSITIVITY;

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.PRIORITY;

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.HOME;

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.WORK;

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.USER;

/**
 * @type {Contacts.ExtendedField}
 */
Contacts.ExtendedField.prototype.OTHER;

/**
 * Enum Field
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.Field = function() {};

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.FULL_NAME;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.GIVEN_NAME;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.MIDDLE_NAME;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.FAMILY_NAME;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.MAIDEN_NAME;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.NICKNAME;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.SHORT_NAME;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.INITIALS;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.PREFIX;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.SUFFIX;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.HOME_EMAIL;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.WORK_EMAIL;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.BIRTHDAY;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.ANNIVERSARY;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.HOME_ADDRESS;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.WORK_ADDRESS;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.ASSISTANT_PHONE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.CALLBACK_PHONE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.MAIN_PHONE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.PAGER;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.HOME_FAX;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.WORK_FAX;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.HOME_PHONE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.WORK_PHONE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.MOBILE_PHONE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.GOOGLE_VOICE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.NOTES;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.GOOGLE_TALK;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.AIM;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.YAHOO;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.SKYPE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.QQ;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.MSN;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.ICQ;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.JABBER;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.BLOG;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.FTP;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.PROFILE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.HOME_PAGE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.WORK_WEBSITE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.HOME_WEBSITE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.JOB_TITLE;

/**
 * @type {Contacts.Field}
 */
Contacts.Field.prototype.COMPANY;

/**
 * Enum Gender
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.Gender = function() {};

/**
 * @type {Contacts.Gender}
 */
Contacts.Gender.prototype.MALE;

/**
 * @type {Contacts.Gender}
 */
Contacts.Gender.prototype.FEMALE;

/**
 * Enum Priority
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.Priority = function() {};

/**
 * @type {Contacts.Priority}
 */
Contacts.Priority.prototype.HIGH;

/**
 * @type {Contacts.Priority}
 */
Contacts.Priority.prototype.LOW;

/**
 * @type {Contacts.Priority}
 */
Contacts.Priority.prototype.NORMAL;

/**
 * Enum Sensitivity
 * Last updated March 26, 2013.
 * @constructor
 */
Contacts.Sensitivity = function() {};

/**
 * @type {Contacts.Sensitivity}
 */
Contacts.Sensitivity.prototype.CONFIDENTIAL;

/**
 * @type {Contacts.Sensitivity}
 */
Contacts.Sensitivity.prototype.NORMAL;

/**
 * @type {Contacts.Sensitivity}
 */
Contacts.Sensitivity.prototype.PERSONAL;

/**
 * @type {Contacts.Sensitivity}
 */
Contacts.Sensitivity.prototype.PRIVATE;


/**
 * DocsList Services
 */
var DocsList = {};

/**
 * Class DocsList
 * Last updated June 27, 2013.
 * @constructor
 */
DocsList.DocsList = function() {};

/**
 * @type {number}
 */
DocsList.DocsList.prototype.DEFAULT_RESULT_SIZE;

/**
 * @type {DocsList.FileType}
 */
DocsList.DocsList.prototype.FileType;

/**
 * @type {number}
 */
DocsList.DocsList.prototype.MAX_RESULT_SIZE;

/**
 * @param {Base.BlobSource} blob
 * @return {DocsList.File}
 */
DocsList.DocsList.prototype.createFile = function(blob) {};

/**
 * @param {string} name
 * @param {string} contents
 * @return {DocsList.File}
 */
DocsList.DocsList.prototype.createFile = function(name, contents) {};

/**
 * @param {string} name
 * @param {string} contents
 * @param {string} mimeType
 * @return {DocsList.File}
 */
DocsList.DocsList.prototype.createFile = function(name, contents, mimeType) {};

/**
 * @param {string} name
 * @return {DocsList.Folder}
 */
DocsList.DocsList.prototype.createFolder = function(name) {};

/**
 * @param {string} query
 * @return {Array.<DocsList.File>}
 */
DocsList.DocsList.prototype.find = function(query) {};

/**
 * @param {string} query
 * @param {number} start
 * @param {number} max
 * @return {Array.<DocsList.File>}
 */
DocsList.DocsList.prototype.find = function(query, start, max) {};

/**
 * @param {string} query
 * @param {number} number
 * @return {DocsList.FilesResult}
 */
DocsList.DocsList.prototype.findForPaging = function(query, number) {};

/**
 * @param {string} query
 * @param {number} number
 * @param {DocsList.Token} token
 * @return {DocsList.FilesResult}
 */
DocsList.DocsList.prototype.findForPaging = function(query, number, token) {};

/**
 * @return {Array.<DocsList.File>}
 */
DocsList.DocsList.prototype.getAllFiles = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<DocsList.File>}
 */
DocsList.DocsList.prototype.getAllFiles = function(start, max) {};

/**
 * @param {number} number
 * @return {DocsList.FilesResult}
 */
DocsList.DocsList.prototype.getAllFilesForPaging = function(number) {};

/**
 * @param {number} number
 * @param {DocsList.Token} token
 * @return {DocsList.FilesResult}
 */
DocsList.DocsList.prototype.getAllFilesForPaging = function(number, token) {};

/**
 * @return {Array.<DocsList.Folder>}
 */
DocsList.DocsList.prototype.getAllFolders = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<DocsList.Folder>}
 */
DocsList.DocsList.prototype.getAllFolders = function(start, max) {};

/**
 * @param {number} number
 * @return {DocsList.FoldersResult}
 */
DocsList.DocsList.prototype.getAllFoldersForPaging = function(number) {};

/**
 * @param {number} number
 * @param {DocsList.Token} token
 * @return {DocsList.FoldersResult}
 */
DocsList.DocsList.prototype.getAllFoldersForPaging = function(number, token) {};

/**
 * @param {string} id
 * @return {DocsList.File}
 */
DocsList.DocsList.prototype.getFileById = function(id) {};

/**
 * @param {DocsList.FileType} type
 * @return {Array.<DocsList.File>}
 */
DocsList.DocsList.prototype.getFilesByType = function(type) {};

/**
 * @param {DocsList.FileType} type
 * @param {number} start
 * @param {number} max
 * @return {Array.<DocsList.File>}
 */
DocsList.DocsList.prototype.getFilesByType = function(type, start, max) {};

/**
 * @param {DocsList.FileType} type
 * @param {number} number
 * @return {DocsList.FilesResult}
 */
DocsList.DocsList.prototype.getFilesByTypeForPaging = function(type, number) {};

/**
 * @param {DocsList.FileType} type
 * @param {number} number
 * @param {DocsList.Token} token
 * @return {DocsList.FilesResult}
 */
DocsList.DocsList.prototype.getFilesByTypeForPaging = function(type, number, token) {};

/**
 * @param {string} path
 * @return {DocsList.Folder}
 */
DocsList.DocsList.prototype.getFolder = function(path) {};

/**
 * @param {string} id
 * @return {DocsList.Folder}
 */
DocsList.DocsList.prototype.getFolderById = function(id) {};

/**
 * @return {DocsList.Folder}
 */
DocsList.DocsList.prototype.getRootFolder = function() {};

/**
 * @deprecated
 * @return {DocsList.File}
 */
DocsList.DocsList.prototype.copy = function(oldFile, newName) {};

/**
 * @deprecated
 * @return {Array.<DocsList.File>}
 */
DocsList.DocsList.prototype.getFiles = function() {};

/**
 * @deprecated
 * @return {Array.<DocsList.File>}
 */
DocsList.DocsList.prototype.getFiles = function(start, max) {};

/**
 * @deprecated
 * @return {Array.<DocsList.File>}
 */
DocsList.DocsList.prototype.getFilesByType = function(fileType) {};

/**
 * @deprecated
 * @return {Array.<DocsList.File>}
 */
DocsList.DocsList.prototype.getFilesByType = function(fileType, start, max) {};

/**
 * @deprecated
 * @return {DocsList.FilesResult}
 */
DocsList.DocsList.prototype.getFilesForPaging = function(number) {};

/**
 * @deprecated
 * @return {DocsList.FilesResult}
 */
DocsList.DocsList.prototype.getFilesForPaging = function(number, token) {};

/**
 * @deprecated
 * @return {Array.<DocsList.Folder>}
 */
DocsList.DocsList.prototype.getFolders = function() {};

/**
 * @deprecated
 * @return {Array.<DocsList.Folder>}
 */
DocsList.DocsList.prototype.getFolders = function(start, max) {};

/**
 * @deprecated
 * @return {DocsList.FoldersResult}
 */
DocsList.DocsList.prototype.getFoldersForPaging = function(number) {};

/**
 * @deprecated
 * @return {DocsList.FoldersResult}
 */
DocsList.DocsList.prototype.getFoldersForPaging = function(number, token) {};


/**
 * @type {DocsList.DocsList}
 */
var DocsList;

/**
 * Class File
 * Last updated July 11, 2013.
 * @constructor
 */
DocsList.File = function() {};

/**
 * @param {string} emailAddress
 * @return {DocsList.File}
 */
DocsList.File.prototype.addEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {DocsList.File}
 */
DocsList.File.prototype.addEditor = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {DocsList.File}
 */
DocsList.File.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {DocsList.Folder} parent
 */
DocsList.File.prototype.addToFolder = function(parent) {};

/**
 * @param {string} emailAddress
 * @return {DocsList.File}
 */
DocsList.File.prototype.addViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {DocsList.File}
 */
DocsList.File.prototype.addViewer = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {DocsList.File}
 */
DocsList.File.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {string} contents
 */
DocsList.File.prototype.append = function(contents) {};

/**
 */
DocsList.File.prototype.clear = function() {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
DocsList.File.prototype.getAs = function(contentType) {};

/**
 * @return {Base.Blob}
 */
DocsList.File.prototype.getBlob = function() {};

/**
 * @return {string}
 */
DocsList.File.prototype.getContentAsString = function() {};

/**
 * @return {Date}
 */
DocsList.File.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
DocsList.File.prototype.getDescription = function() {};

/**
 * @return {Array.<Base.User>}
 */
DocsList.File.prototype.getEditors = function() {};

/**
 * @return {DocsList.FileType}
 */
DocsList.File.prototype.getFileType = function() {};

/**
 * @return {string}
 */
DocsList.File.prototype.getId = function() {};

/**
 * @return {Date}
 */
DocsList.File.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
DocsList.File.prototype.getName = function() {};

/**
 * @return {Base.User}
 */
DocsList.File.prototype.getOwner = function() {};

/**
 * @return {Array.<DocsList.Folder>}
 */
DocsList.File.prototype.getParents = function() {};

/**
 * @return {number}
 */
DocsList.File.prototype.getSize = function() {};

/**
 * @return {Base.Blob}
 */
DocsList.File.prototype.getThumbnail = function() {};

/**
 * @return {string}
 */
DocsList.File.prototype.getUrl = function() {};

/**
 * @return {Array.<Base.User>}
 */
DocsList.File.prototype.getViewers = function() {};

/**
 * @return {boolean}
 */
DocsList.File.prototype.isStarred = function() {};

/**
 * @return {boolean}
 */
DocsList.File.prototype.isTrashed = function() {};

/**
 * @return {DocsList.File}
 */
DocsList.File.prototype.makeCopy = function() {};

/**
 * @param {string} newName
 * @return {DocsList.File}
 */
DocsList.File.prototype.makeCopy = function(newName) {};

/**
 * @param {string} emailAddress
 * @return {DocsList.File}
 */
DocsList.File.prototype.removeEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {DocsList.File}
 */
DocsList.File.prototype.removeEditor = function(user) {};

/**
 * @param {DocsList.Folder} parent
 */
DocsList.File.prototype.removeFromFolder = function(parent) {};

/**
 * @param {string} emailAddress
 * @return {DocsList.File}
 */
DocsList.File.prototype.removeViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {DocsList.File}
 */
DocsList.File.prototype.removeViewer = function(user) {};

/**
 * @param {string} newName
 */
DocsList.File.prototype.rename = function(newName) {};

/**
 * @param {string} contents
 */
DocsList.File.prototype.replace = function(contents) {};

/**
 * @param {string} description
 */
DocsList.File.prototype.setDescription = function(description) {};

/**
 * @param {boolean} starred
 */
DocsList.File.prototype.setStarred = function(starred) {};

/**
 * @param {boolean} trash
 */
DocsList.File.prototype.setTrashed = function(trash) {};

/**
 * @deprecated
 * @return {string}
 */
DocsList.File.prototype.getType = function() {};

/**
 * Class FilesResult
 * Last updated March 26, 2013.
 * @constructor
 */
DocsList.FilesResult = function() {};

/**
 * @return {Array.<DocsList.File>}
 */
DocsList.FilesResult.prototype.getFiles = function() {};

/**
 * @return {DocsList.Token}
 */
DocsList.FilesResult.prototype.getToken = function() {};

/**
 * Class Folder
 * Last updated May 15, 2013.
 * @constructor
 */
DocsList.Folder = function() {};

/**
 * @param {string} emailAddress
 * @return {DocsList.Folder}
 */
DocsList.Folder.prototype.addEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {DocsList.Folder}
 */
DocsList.Folder.prototype.addEditor = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {DocsList.Folder}
 */
DocsList.Folder.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {DocsList.Folder} parent
 */
DocsList.Folder.prototype.addToFolder = function(parent) {};

/**
 * @param {string} emailAddress
 * @return {DocsList.Folder}
 */
DocsList.Folder.prototype.addViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {DocsList.Folder}
 */
DocsList.Folder.prototype.addViewer = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {DocsList.Folder}
 */
DocsList.Folder.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {Base.BlobSource} blob
 * @return {DocsList.File}
 */
DocsList.Folder.prototype.createFile = function(blob) {};

/**
 * @param {string} name
 * @param {string} contents
 * @return {DocsList.File}
 */
DocsList.Folder.prototype.createFile = function(name, contents) {};

/**
 * @param {string} name
 * @param {string} contents
 * @param {string} mimeType
 * @return {DocsList.File}
 */
DocsList.Folder.prototype.createFile = function(name, contents, mimeType) {};

/**
 * @param {string} name
 * @return {DocsList.Folder}
 */
DocsList.Folder.prototype.createFolder = function(name) {};

/**
 * @param {string} query
 * @return {Array.<DocsList.File>}
 */
DocsList.Folder.prototype.find = function(query) {};

/**
 * @param {string} query
 * @param {number} start
 * @param {number} max
 * @return {Array.<DocsList.File>}
 */
DocsList.Folder.prototype.find = function(query, start, max) {};

/**
 * @param {string} query
 * @param {number} number
 * @return {DocsList.FilesResult}
 */
DocsList.Folder.prototype.findForPaging = function(query, number) {};

/**
 * @param {string} query
 * @param {number} number
 * @param {DocsList.Token} token
 * @return {DocsList.FilesResult}
 */
DocsList.Folder.prototype.findForPaging = function(query, number, token) {};

/**
 * @return {Date}
 */
DocsList.Folder.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
DocsList.Folder.prototype.getDescription = function() {};

/**
 * @return {Array.<Base.User>}
 */
DocsList.Folder.prototype.getEditors = function() {};

/**
 * @return {Array.<DocsList.File>}
 */
DocsList.Folder.prototype.getFiles = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<DocsList.File>}
 */
DocsList.Folder.prototype.getFiles = function(start, max) {};

/**
 * @param {DocsList.FileType} type
 * @return {Array.<DocsList.File>}
 */
DocsList.Folder.prototype.getFilesByType = function(type) {};

/**
 * @param {DocsList.FileType} type
 * @param {number} start
 * @param {number} max
 * @return {Array.<DocsList.File>}
 */
DocsList.Folder.prototype.getFilesByType = function(type, start, max) {};

/**
 * @param {DocsList.FileType} type
 * @param {number} number
 * @return {DocsList.FilesResult}
 */
DocsList.Folder.prototype.getFilesByTypeForPaging = function(type, number) {};

/**
 * @param {DocsList.FileType} type
 * @param {number} number
 * @param {DocsList.Token} token
 * @return {DocsList.FilesResult}
 */
DocsList.Folder.prototype.getFilesByTypeForPaging = function(type, number, token) {};

/**
 * @param {number} number
 * @return {DocsList.FilesResult}
 */
DocsList.Folder.prototype.getFilesForPaging = function(number) {};

/**
 * @param {number} number
 * @param {DocsList.Token} token
 * @return {DocsList.FilesResult}
 */
DocsList.Folder.prototype.getFilesForPaging = function(number, token) {};

/**
 * @return {Array.<DocsList.Folder>}
 */
DocsList.Folder.prototype.getFolders = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<DocsList.Folder>}
 */
DocsList.Folder.prototype.getFolders = function(start, max) {};

/**
 * @param {number} number
 * @return {DocsList.FoldersResult}
 */
DocsList.Folder.prototype.getFoldersForPaging = function(number) {};

/**
 * @param {number} number
 * @param {DocsList.Token} token
 * @return {DocsList.FoldersResult}
 */
DocsList.Folder.prototype.getFoldersForPaging = function(number, token) {};

/**
 * @return {string}
 */
DocsList.Folder.prototype.getId = function() {};

/**
 * @return {Date}
 */
DocsList.Folder.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
DocsList.Folder.prototype.getName = function() {};

/**
 * @return {Base.User}
 */
DocsList.Folder.prototype.getOwner = function() {};

/**
 * @return {Array.<DocsList.Folder>}
 */
DocsList.Folder.prototype.getParents = function() {};

/**
 * @return {number}
 */
DocsList.Folder.prototype.getSize = function() {};

/**
 * @return {string}
 */
DocsList.Folder.prototype.getUrl = function() {};

/**
 * @return {Array.<Base.User>}
 */
DocsList.Folder.prototype.getViewers = function() {};

/**
 * @return {boolean}
 */
DocsList.Folder.prototype.isStarred = function() {};

/**
 * @return {boolean}
 */
DocsList.Folder.prototype.isTrashed = function() {};

/**
 * @param {string} emailAddress
 * @return {DocsList.Folder}
 */
DocsList.Folder.prototype.removeEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {DocsList.Folder}
 */
DocsList.Folder.prototype.removeEditor = function(user) {};

/**
 * @param {DocsList.Folder} parent
 */
DocsList.Folder.prototype.removeFromFolder = function(parent) {};

/**
 * @param {string} emailAddress
 * @return {DocsList.Folder}
 */
DocsList.Folder.prototype.removeViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {DocsList.Folder}
 */
DocsList.Folder.prototype.removeViewer = function(user) {};

/**
 * @param {string} newName
 */
DocsList.Folder.prototype.rename = function(newName) {};

/**
 * @param {string} description
 */
DocsList.Folder.prototype.setDescription = function(description) {};

/**
 * @param {boolean} starred
 */
DocsList.Folder.prototype.setStarred = function(starred) {};

/**
 * @param {boolean} trash
 */
DocsList.Folder.prototype.setTrashed = function(trash) {};

/**
 * @deprecated
 * @return {Array.<DocsList.File>}
 */
DocsList.Folder.prototype.getFilesByType = function(fileType) {};

/**
 * @deprecated
 * @return {Array.<DocsList.File>}
 */
DocsList.Folder.prototype.getFilesByType = function(fileType, start, max) {};

/**
 * Class FoldersResult
 * Last updated March 26, 2013.
 * @constructor
 */
DocsList.FoldersResult = function() {};

/**
 * @return {Array.<DocsList.Folder>}
 */
DocsList.FoldersResult.prototype.getFolders = function() {};

/**
 * @return {DocsList.Token}
 */
DocsList.FoldersResult.prototype.getToken = function() {};

/**
 * Class Token
 * Last updated March 26, 2013.
 * @constructor
 */
DocsList.Token = function() {};

/**
 * Enum FileType
 * Last updated March 26, 2013.
 * @constructor
 */
DocsList.FileType = function() {};

/**
 * @type {DocsList.FileType}
 */
DocsList.FileType.prototype.DOCUMENT;

/**
 * @type {DocsList.FileType}
 */
DocsList.FileType.prototype.SPREADSHEET;

/**
 * @type {DocsList.FileType}
 */
DocsList.FileType.prototype.PRESENTATION;

/**
 * @type {DocsList.FileType}
 */
DocsList.FileType.prototype.DRAWING;

/**
 * @type {DocsList.FileType}
 */
DocsList.FileType.prototype.FORM;

/**
 * @type {DocsList.FileType}
 */
DocsList.FileType.prototype.OTHER;


/**
 * Document Services
 */
var Document = {};

/**
 * Class DocumentApp
 * Last updated June 27, 2013.
 * @constructor
 */
Document.DocumentApp = function() {};

/**
 * @type {Document.Attribute}
 */
Document.DocumentApp.prototype.Attribute;

/**
 * @type {Document.ElementType}
 */
Document.DocumentApp.prototype.ElementType;

/**
 * @type {Document.FontFamily}
 */
Document.DocumentApp.prototype.FontFamily;

/**
 * @type {Document.GlyphType}
 */
Document.DocumentApp.prototype.GlyphType;

/**
 * @type {Document.HorizontalAlignment}
 */
Document.DocumentApp.prototype.HorizontalAlignment;

/**
 * @type {Document.ParagraphHeading}
 */
Document.DocumentApp.prototype.ParagraphHeading;

/**
 * @type {Document.VerticalAlignment}
 */
Document.DocumentApp.prototype.VerticalAlignment;

/**
 * @param {string} name
 * @return {Document.Document}
 */
Document.DocumentApp.prototype.create = function(name) {};

/**
 * @return {Document.Document}
 */
Document.DocumentApp.prototype.getActiveDocument = function() {};

/**
 * @return {Base.Ui}
 */
Document.DocumentApp.prototype.getUi = function() {};

/**
 * @param {string} id
 * @return {Document.Document}
 */
Document.DocumentApp.prototype.openById = function(id) {};

/**
 * @param {string} url
 * @return {Document.Document}
 */
Document.DocumentApp.prototype.openByUrl = function(url) {};


/**
 * @type {Document.DocumentApp}
 */
var DocumentApp;

/**
 * Class Body
 * Last updated June 27, 2013.
 * @constructor
 */
Document.Body = function() {};

/**
 * @return {Document.HorizontalRule}
 */
Document.Body.prototype.appendHorizontalRule = function() {};

/**
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.Body.prototype.appendImage = function(image) {};

/**
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.Body.prototype.appendImage = function(image) {};

/**
 * @param {Document.ListItem} listItem
 * @return {Document.ListItem}
 */
Document.Body.prototype.appendListItem = function(listItem) {};

/**
 * @param {string} text
 * @return {Document.ListItem}
 */
Document.Body.prototype.appendListItem = function(text) {};

/**
 * @return {Document.PageBreak}
 */
Document.Body.prototype.appendPageBreak = function() {};

/**
 * @param {Document.PageBreak} pageBreak
 * @return {Document.PageBreak}
 */
Document.Body.prototype.appendPageBreak = function(pageBreak) {};

/**
 * @param {Document.Paragraph} paragraph
 * @return {Document.Paragraph}
 */
Document.Body.prototype.appendParagraph = function(paragraph) {};

/**
 * @param {string} text
 * @return {Document.Paragraph}
 */
Document.Body.prototype.appendParagraph = function(text) {};

/**
 * @return {Document.Table}
 */
Document.Body.prototype.appendTable = function() {};

/**
 * @param {Array.<Array.<string>>} cells
 * @return {Document.Table}
 */
Document.Body.prototype.appendTable = function(cells) {};

/**
 * @param {Document.Table} table
 * @return {Document.Table}
 */
Document.Body.prototype.appendTable = function(table) {};

/**
 * @return {Document.Body}
 */
Document.Body.prototype.clear = function() {};

/**
 * @return {Document.Body}
 */
Document.Body.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.Body.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.Body.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.Body.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.Body.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.Body.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.Body.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.Body.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.Body.prototype.getChildIndex = function(child) {};

/**
 * @return {Array.<Document.Footnote>}
 */
Document.Body.prototype.getFootnotes = function() {};

/**
 * @return {Array.<Document.InlineImage>}
 */
Document.Body.prototype.getImages = function() {};

/**
 * @return {Array.<Document.ListItem>}
 */
Document.Body.prototype.getListItems = function() {};

/**
 * @return {Number}
 */
Document.Body.prototype.getMarginBottom = function() {};

/**
 * @return {Number}
 */
Document.Body.prototype.getMarginLeft = function() {};

/**
 * @return {Number}
 */
Document.Body.prototype.getMarginRight = function() {};

/**
 * @return {Number}
 */
Document.Body.prototype.getMarginTop = function() {};

/**
 * @return {number}
 */
Document.Body.prototype.getNumChildren = function() {};

/**
 * @return {Number}
 */
Document.Body.prototype.getPageHeight = function() {};

/**
 * @return {Number}
 */
Document.Body.prototype.getPageWidth = function() {};

/**
 * @return {Array.<Document.Paragraph>}
 */
Document.Body.prototype.getParagraphs = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.Body.prototype.getParent = function() {};

/**
 * @return {Array.<Document.Table>}
 */
Document.Body.prototype.getTables = function() {};

/**
 * @return {string}
 */
Document.Body.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.Body.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {Document.HorizontalRule}
 */
Document.Body.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.Body.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.Body.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {Document.ListItem} listItem
 * @return {Document.ListItem}
 */
Document.Body.prototype.insertListItem = function(childIndex, listItem) {};

/**
 * @param {number} childIndex
 * @param {string} text
 * @return {Document.ListItem}
 */
Document.Body.prototype.insertListItem = function(childIndex, text) {};

/**
 * @param {number} childIndex
 * @return {Document.PageBreak}
 */
Document.Body.prototype.insertPageBreak = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Document.PageBreak} pageBreak
 * @return {Document.PageBreak}
 */
Document.Body.prototype.insertPageBreak = function(childIndex, pageBreak) {};

/**
 * @param {number} childIndex
 * @param {Document.Paragraph} paragraph
 * @return {Document.Paragraph}
 */
Document.Body.prototype.insertParagraph = function(childIndex, paragraph) {};

/**
 * @param {number} childIndex
 * @param {string} text
 * @return {Document.Paragraph}
 */
Document.Body.prototype.insertParagraph = function(childIndex, text) {};

/**
 * @param {number} childIndex
 * @return {Document.Table}
 */
Document.Body.prototype.insertTable = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Array.<Array.<string>>} cells
 * @return {Document.Table}
 */
Document.Body.prototype.insertTable = function(childIndex, cells) {};

/**
 * @param {number} childIndex
 * @param {Document.Table} table
 * @return {Document.Table}
 */
Document.Body.prototype.insertTable = function(childIndex, table) {};

/**
 * @param {Document.Element} child
 * @return {Document.Body}
 */
Document.Body.prototype.removeChild = function(child) {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.Body.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {Document.Body}
 */
Document.Body.prototype.setAttributes = function(attributes) {};

/**
 * @param {Number} marginBottom
 * @return {Document.Body}
 */
Document.Body.prototype.setMarginBottom = function(marginBottom) {};

/**
 * @param {Number} marginLeft
 * @return {Document.Body}
 */
Document.Body.prototype.setMarginLeft = function(marginLeft) {};

/**
 * @param {Number} marginRight
 * @return {Document.Body}
 */
Document.Body.prototype.setMarginRight = function(marginRight) {};

/**
 * @param {Number} marginTop
 * @return {Document.Body}
 */
Document.Body.prototype.setMarginTop = function(marginTop) {};

/**
 * @param {Number} pageHeight
 * @return {Document.Body}
 */
Document.Body.prototype.setPageHeight = function(pageHeight) {};

/**
 * @param {Number} pageWidth
 * @return {Document.Body}
 */
Document.Body.prototype.setPageWidth = function(pageWidth) {};

/**
 * @param {string} text
 * @return {Document.Body}
 */
Document.Body.prototype.setText = function(text) {};

/**
 * Class ContainerElement
 * Last updated June 27, 2013.
 * @constructor
 */
Document.ContainerElement = function() {};

/**
 * @return {Document.Body}
 */
Document.ContainerElement.prototype.asBody = function() {};

/**
 * @return {Document.Equation}
 */
Document.ContainerElement.prototype.asEquation = function() {};

/**
 * @return {Document.FooterSection}
 */
Document.ContainerElement.prototype.asFooterSection = function() {};

/**
 * @return {Document.FootnoteSection}
 */
Document.ContainerElement.prototype.asFootnoteSection = function() {};

/**
 * @return {Document.HeaderSection}
 */
Document.ContainerElement.prototype.asHeaderSection = function() {};

/**
 * @return {Document.ListItem}
 */
Document.ContainerElement.prototype.asListItem = function() {};

/**
 * @return {Document.Paragraph}
 */
Document.ContainerElement.prototype.asParagraph = function() {};

/**
 * @return {Document.Table}
 */
Document.ContainerElement.prototype.asTable = function() {};

/**
 * @return {Document.TableCell}
 */
Document.ContainerElement.prototype.asTableCell = function() {};

/**
 * @return {Document.TableOfContents}
 */
Document.ContainerElement.prototype.asTableOfContents = function() {};

/**
 * @return {Document.TableRow}
 */
Document.ContainerElement.prototype.asTableRow = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.ContainerElement.prototype.clear = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.ContainerElement.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.ContainerElement.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.ContainerElement.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.ContainerElement.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.ContainerElement.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.ContainerElement.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.ContainerElement.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.ContainerElement.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.ContainerElement.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
Document.ContainerElement.prototype.getLinkUrl = function() {};

/**
 * @return {Document.Element}
 */
Document.ContainerElement.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.ContainerElement.prototype.getNumChildren = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.ContainerElement.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.ContainerElement.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
Document.ContainerElement.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.ContainerElement.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.ContainerElement.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.ContainerElement.prototype.merge = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.ContainerElement.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.ContainerElement.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {Document.ContainerElement}
 */
Document.ContainerElement.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {Document.ContainerElement}
 */
Document.ContainerElement.prototype.setLinkUrl = function(url) {};

/**
 * Class Cursor
 * Last updated June 27, 2013.
 * @constructor
 */
Document.Cursor = function() {};

/**
 * @return {Document.Element}
 */
Document.Cursor.prototype.getElement = function() {};

/**
 * @return {number}
 */
Document.Cursor.prototype.getOffset = function() {};

/**
 * @return {Document.Text}
 */
Document.Cursor.prototype.getSurroundingText = function() {};

/**
 * @return {number}
 */
Document.Cursor.prototype.getSurroundingTextOffset = function() {};

/**
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.Cursor.prototype.insertInlineImage = function(image) {};

/**
 * @param {string} text
 * @return {Document.Text}
 */
Document.Cursor.prototype.insertText = function(text) {};

/**
 * Class Document
 * Last updated July 11, 2013.
 * @constructor
 */
Document.Document = function() {};

/**
 * @param {string} emailAddress
 * @return {Document.Document}
 */
Document.Document.prototype.addEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Document.Document}
 */
Document.Document.prototype.addEditor = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {Document.Document}
 */
Document.Document.prototype.addEditors = function(emailAddresses) {};

/**
 * @return {Document.FooterSection}
 */
Document.Document.prototype.addFooter = function() {};

/**
 * @return {Document.HeaderSection}
 */
Document.Document.prototype.addHeader = function() {};

/**
 * @param {string} emailAddress
 * @return {Document.Document}
 */
Document.Document.prototype.addViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Document.Document}
 */
Document.Document.prototype.addViewer = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {Document.Document}
 */
Document.Document.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Document.Document.prototype.getAs = function(contentType) {};

/**
 * @return {Base.Blob}
 */
Document.Document.prototype.getBlob = function() {};

/**
 * @return {Document.Body}
 */
Document.Document.prototype.getBody = function() {};

/**
 * @return {Document.Cursor}
 */
Document.Document.prototype.getCursor = function() {};

/**
 * @return {Array.<Base.User>}
 */
Document.Document.prototype.getEditors = function() {};

/**
 * @return {Document.FooterSection}
 */
Document.Document.prototype.getFooter = function() {};

/**
 * @return {Array.<Document.Footnote>}
 */
Document.Document.prototype.getFootnotes = function() {};

/**
 * @return {Document.HeaderSection}
 */
Document.Document.prototype.getHeader = function() {};

/**
 * @return {string}
 */
Document.Document.prototype.getId = function() {};

/**
 * @return {string}
 */
Document.Document.prototype.getName = function() {};

/**
 * @return {Document.Selection}
 */
Document.Document.prototype.getSelection = function() {};

/**
 * @return {string}
 */
Document.Document.prototype.getUrl = function() {};

/**
 * @return {Array.<Base.User>}
 */
Document.Document.prototype.getViewers = function() {};

/**
 * @param {string} emailAddress
 * @return {Document.Document}
 */
Document.Document.prototype.removeEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Document.Document}
 */
Document.Document.prototype.removeEditor = function(user) {};

/**
 * @param {string} emailAddress
 * @return {Document.Document}
 */
Document.Document.prototype.removeViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Document.Document}
 */
Document.Document.prototype.removeViewer = function(user) {};

/**
 */
Document.Document.prototype.saveAndClose = function() {};

/**
 * @param {string} name
 * @return {Document.Document}
 */
Document.Document.prototype.setName = function(name) {};

/**
 * Class Equation
 * Last updated June 27, 2013.
 * @constructor
 */
Document.Equation = function() {};

/**
 * @return {Document.Equation}
 */
Document.Equation.prototype.clear = function() {};

/**
 * @return {Document.Equation}
 */
Document.Equation.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.Equation.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.Equation.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.Equation.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.Equation.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.Equation.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.Equation.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.Equation.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.Equation.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
Document.Equation.prototype.getLinkUrl = function() {};

/**
 * @return {Document.Element}
 */
Document.Equation.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.Equation.prototype.getNumChildren = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.Equation.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.Equation.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
Document.Equation.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.Equation.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.Equation.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.Equation}
 */
Document.Equation.prototype.merge = function() {};

/**
 * @return {Document.Equation}
 */
Document.Equation.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.Equation.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {Document.Equation}
 */
Document.Equation.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {Document.Equation}
 */
Document.Equation.prototype.setLinkUrl = function(url) {};

/**
 * Class EquationFunction
 * Last updated June 27, 2013.
 * @constructor
 */
Document.EquationFunction = function() {};

/**
 * @return {Document.EquationFunction}
 */
Document.EquationFunction.prototype.clear = function() {};

/**
 * @return {Document.EquationFunction}
 */
Document.EquationFunction.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.EquationFunction.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.EquationFunction.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.EquationFunction.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.EquationFunction.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.EquationFunction.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.EquationFunction.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.EquationFunction.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.EquationFunction.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
Document.EquationFunction.prototype.getCode = function() {};

/**
 * @return {string}
 */
Document.EquationFunction.prototype.getLinkUrl = function() {};

/**
 * @return {Document.Element}
 */
Document.EquationFunction.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.EquationFunction.prototype.getNumChildren = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.EquationFunction.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.EquationFunction.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
Document.EquationFunction.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.EquationFunction.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.EquationFunction.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.EquationFunction}
 */
Document.EquationFunction.prototype.merge = function() {};

/**
 * @return {Document.EquationFunction}
 */
Document.EquationFunction.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.EquationFunction.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {Document.EquationFunction}
 */
Document.EquationFunction.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {Document.EquationFunction}
 */
Document.EquationFunction.prototype.setLinkUrl = function(url) {};

/**
 * Class EquationFunctionArgumentSeparator
 * Last updated June 27, 2013.
 * @constructor
 */
Document.EquationFunctionArgumentSeparator = function() {};

/**
 * @return {Document.EquationFunctionArgumentSeparator}
 */
Document.EquationFunctionArgumentSeparator.prototype.copy = function() {};

/**
 * @return {Object}
 */
Document.EquationFunctionArgumentSeparator.prototype.getAttributes = function() {};

/**
 * @return {Document.Element}
 */
Document.EquationFunctionArgumentSeparator.prototype.getNextSibling = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.EquationFunctionArgumentSeparator.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.EquationFunctionArgumentSeparator.prototype.getPreviousSibling = function() {};

/**
 * @return {Document.ElementType}
 */
Document.EquationFunctionArgumentSeparator.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.EquationFunctionArgumentSeparator.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.EquationFunctionArgumentSeparator}
 */
Document.EquationFunctionArgumentSeparator.prototype.merge = function() {};

/**
 * @return {Document.EquationFunctionArgumentSeparator}
 */
Document.EquationFunctionArgumentSeparator.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {Document.EquationFunctionArgumentSeparator}
 */
Document.EquationFunctionArgumentSeparator.prototype.setAttributes = function(attributes) {};

/**
 * Class EquationSymbol
 * Last updated June 27, 2013.
 * @constructor
 */
Document.EquationSymbol = function() {};

/**
 * @return {Document.EquationSymbol}
 */
Document.EquationSymbol.prototype.copy = function() {};

/**
 * @return {Object}
 */
Document.EquationSymbol.prototype.getAttributes = function() {};

/**
 * @return {string}
 */
Document.EquationSymbol.prototype.getCode = function() {};

/**
 * @return {Document.Element}
 */
Document.EquationSymbol.prototype.getNextSibling = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.EquationSymbol.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.EquationSymbol.prototype.getPreviousSibling = function() {};

/**
 * @return {Document.ElementType}
 */
Document.EquationSymbol.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.EquationSymbol.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.EquationSymbol}
 */
Document.EquationSymbol.prototype.merge = function() {};

/**
 * @return {Document.EquationSymbol}
 */
Document.EquationSymbol.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {Document.EquationSymbol}
 */
Document.EquationSymbol.prototype.setAttributes = function(attributes) {};

/**
 * Class FooterSection
 * Last updated June 27, 2013.
 * @constructor
 */
Document.FooterSection = function() {};

/**
 * @return {Document.HorizontalRule}
 */
Document.FooterSection.prototype.appendHorizontalRule = function() {};

/**
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.FooterSection.prototype.appendImage = function(image) {};

/**
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.FooterSection.prototype.appendImage = function(image) {};

/**
 * @param {Document.ListItem} listItem
 * @return {Document.ListItem}
 */
Document.FooterSection.prototype.appendListItem = function(listItem) {};

/**
 * @param {string} text
 * @return {Document.ListItem}
 */
Document.FooterSection.prototype.appendListItem = function(text) {};

/**
 * @param {Document.Paragraph} paragraph
 * @return {Document.Paragraph}
 */
Document.FooterSection.prototype.appendParagraph = function(paragraph) {};

/**
 * @param {string} text
 * @return {Document.Paragraph}
 */
Document.FooterSection.prototype.appendParagraph = function(text) {};

/**
 * @return {Document.Table}
 */
Document.FooterSection.prototype.appendTable = function() {};

/**
 * @param {Array.<Array.<string>>} cells
 * @return {Document.Table}
 */
Document.FooterSection.prototype.appendTable = function(cells) {};

/**
 * @param {Document.Table} table
 * @return {Document.Table}
 */
Document.FooterSection.prototype.appendTable = function(table) {};

/**
 * @return {Document.FooterSection}
 */
Document.FooterSection.prototype.clear = function() {};

/**
 * @return {Document.FooterSection}
 */
Document.FooterSection.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.FooterSection.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.FooterSection.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.FooterSection.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.FooterSection.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.FooterSection.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.FooterSection.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.FooterSection.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.FooterSection.prototype.getChildIndex = function(child) {};

/**
 * @return {Array.<Document.Footnote>}
 */
Document.FooterSection.prototype.getFootnotes = function() {};

/**
 * @return {Array.<Document.InlineImage>}
 */
Document.FooterSection.prototype.getImages = function() {};

/**
 * @return {string}
 */
Document.FooterSection.prototype.getLinkUrl = function() {};

/**
 * @return {Array.<Document.ListItem>}
 */
Document.FooterSection.prototype.getListItems = function() {};

/**
 * @return {Document.Element}
 */
Document.FooterSection.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.FooterSection.prototype.getNumChildren = function() {};

/**
 * @return {Array.<Document.Paragraph>}
 */
Document.FooterSection.prototype.getParagraphs = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.FooterSection.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.FooterSection.prototype.getPreviousSibling = function() {};

/**
 * @return {Array.<Document.Table>}
 */
Document.FooterSection.prototype.getTables = function() {};

/**
 * @return {string}
 */
Document.FooterSection.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.FooterSection.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {Document.HorizontalRule}
 */
Document.FooterSection.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.FooterSection.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.FooterSection.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {Document.ListItem} listItem
 * @return {Document.ListItem}
 */
Document.FooterSection.prototype.insertListItem = function(childIndex, listItem) {};

/**
 * @param {number} childIndex
 * @param {string} text
 * @return {Document.ListItem}
 */
Document.FooterSection.prototype.insertListItem = function(childIndex, text) {};

/**
 * @param {number} childIndex
 * @param {Document.Paragraph} paragraph
 * @return {Document.Paragraph}
 */
Document.FooterSection.prototype.insertParagraph = function(childIndex, paragraph) {};

/**
 * @param {number} childIndex
 * @param {string} text
 * @return {Document.Paragraph}
 */
Document.FooterSection.prototype.insertParagraph = function(childIndex, text) {};

/**
 * @param {number} childIndex
 * @return {Document.Table}
 */
Document.FooterSection.prototype.insertTable = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Array.<Array.<string>>} cells
 * @return {Document.Table}
 */
Document.FooterSection.prototype.insertTable = function(childIndex, cells) {};

/**
 * @param {number} childIndex
 * @param {Document.Table} table
 * @return {Document.Table}
 */
Document.FooterSection.prototype.insertTable = function(childIndex, table) {};

/**
 * @return {boolean}
 */
Document.FooterSection.prototype.isAtDocumentEnd = function() {};

/**
 * @param {Document.Element} child
 * @return {Document.FooterSection}
 */
Document.FooterSection.prototype.removeChild = function(child) {};

/**
 * @return {Document.FooterSection}
 */
Document.FooterSection.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.FooterSection.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {Document.FooterSection}
 */
Document.FooterSection.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {Document.FooterSection}
 */
Document.FooterSection.prototype.setLinkUrl = function(url) {};

/**
 * @param {string} text
 * @return {Document.FooterSection}
 */
Document.FooterSection.prototype.setText = function(text) {};

/**
 * Class Footnote
 * Last updated June 27, 2013.
 * @constructor
 */
Document.Footnote = function() {};

/**
 * @return {Document.Footnote}
 */
Document.Footnote.prototype.copy = function() {};

/**
 * @return {Object}
 */
Document.Footnote.prototype.getAttributes = function() {};

/**
 * @return {Document.FootnoteSection}
 */
Document.Footnote.prototype.getFootnoteContents = function() {};

/**
 * @return {Document.Element}
 */
Document.Footnote.prototype.getNextSibling = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.Footnote.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.Footnote.prototype.getPreviousSibling = function() {};

/**
 * @return {Document.ElementType}
 */
Document.Footnote.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.Footnote.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.Footnote}
 */
Document.Footnote.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {Document.Footnote}
 */
Document.Footnote.prototype.setAttributes = function(attributes) {};

/**
 * Class FootnoteSection
 * Last updated June 27, 2013.
 * @constructor
 */
Document.FootnoteSection = function() {};

/**
 * @param {Document.Paragraph} paragraph
 * @return {Document.Paragraph}
 */
Document.FootnoteSection.prototype.appendParagraph = function(paragraph) {};

/**
 * @param {string} text
 * @return {Document.Paragraph}
 */
Document.FootnoteSection.prototype.appendParagraph = function(text) {};

/**
 * @return {Document.FootnoteSection}
 */
Document.FootnoteSection.prototype.clear = function() {};

/**
 * @return {Document.FootnoteSection}
 */
Document.FootnoteSection.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.FootnoteSection.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.FootnoteSection.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.FootnoteSection.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.FootnoteSection.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.FootnoteSection.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.FootnoteSection.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.FootnoteSection.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.FootnoteSection.prototype.getChildIndex = function(child) {};

/**
 * @return {Array.<Document.Footnote>}
 */
Document.FootnoteSection.prototype.getFootnotes = function() {};

/**
 * @return {string}
 */
Document.FootnoteSection.prototype.getLinkUrl = function() {};

/**
 * @return {Document.Element}
 */
Document.FootnoteSection.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.FootnoteSection.prototype.getNumChildren = function() {};

/**
 * @return {Array.<Document.Paragraph>}
 */
Document.FootnoteSection.prototype.getParagraphs = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.FootnoteSection.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.FootnoteSection.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
Document.FootnoteSection.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.FootnoteSection.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @param {Document.Paragraph} paragraph
 * @return {Document.Paragraph}
 */
Document.FootnoteSection.prototype.insertParagraph = function(childIndex, paragraph) {};

/**
 * @param {number} childIndex
 * @param {string} text
 * @return {Document.Paragraph}
 */
Document.FootnoteSection.prototype.insertParagraph = function(childIndex, text) {};

/**
 * @return {boolean}
 */
Document.FootnoteSection.prototype.isAtDocumentEnd = function() {};

/**
 * @param {Document.Element} child
 * @return {Document.FootnoteSection}
 */
Document.FootnoteSection.prototype.removeChild = function(child) {};

/**
 * @return {Document.FootnoteSection}
 */
Document.FootnoteSection.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.FootnoteSection.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {Document.FootnoteSection}
 */
Document.FootnoteSection.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {Document.FootnoteSection}
 */
Document.FootnoteSection.prototype.setLinkUrl = function(url) {};

/**
 * @param {string} text
 * @return {Document.FootnoteSection}
 */
Document.FootnoteSection.prototype.setText = function(text) {};

/**
 * Class HeaderSection
 * Last updated June 27, 2013.
 * @constructor
 */
Document.HeaderSection = function() {};

/**
 * @return {Document.HorizontalRule}
 */
Document.HeaderSection.prototype.appendHorizontalRule = function() {};

/**
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.HeaderSection.prototype.appendImage = function(image) {};

/**
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.HeaderSection.prototype.appendImage = function(image) {};

/**
 * @param {Document.ListItem} listItem
 * @return {Document.ListItem}
 */
Document.HeaderSection.prototype.appendListItem = function(listItem) {};

/**
 * @param {string} text
 * @return {Document.ListItem}
 */
Document.HeaderSection.prototype.appendListItem = function(text) {};

/**
 * @param {Document.Paragraph} paragraph
 * @return {Document.Paragraph}
 */
Document.HeaderSection.prototype.appendParagraph = function(paragraph) {};

/**
 * @param {string} text
 * @return {Document.Paragraph}
 */
Document.HeaderSection.prototype.appendParagraph = function(text) {};

/**
 * @return {Document.Table}
 */
Document.HeaderSection.prototype.appendTable = function() {};

/**
 * @param {Array.<Array.<string>>} cells
 * @return {Document.Table}
 */
Document.HeaderSection.prototype.appendTable = function(cells) {};

/**
 * @param {Document.Table} table
 * @return {Document.Table}
 */
Document.HeaderSection.prototype.appendTable = function(table) {};

/**
 * @return {Document.HeaderSection}
 */
Document.HeaderSection.prototype.clear = function() {};

/**
 * @return {Document.HeaderSection}
 */
Document.HeaderSection.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.HeaderSection.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.HeaderSection.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.HeaderSection.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.HeaderSection.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.HeaderSection.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.HeaderSection.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.HeaderSection.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.HeaderSection.prototype.getChildIndex = function(child) {};

/**
 * @return {Array.<Document.Footnote>}
 */
Document.HeaderSection.prototype.getFootnotes = function() {};

/**
 * @return {Array.<Document.InlineImage>}
 */
Document.HeaderSection.prototype.getImages = function() {};

/**
 * @return {string}
 */
Document.HeaderSection.prototype.getLinkUrl = function() {};

/**
 * @return {Array.<Document.ListItem>}
 */
Document.HeaderSection.prototype.getListItems = function() {};

/**
 * @return {Document.Element}
 */
Document.HeaderSection.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.HeaderSection.prototype.getNumChildren = function() {};

/**
 * @return {Array.<Document.Paragraph>}
 */
Document.HeaderSection.prototype.getParagraphs = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.HeaderSection.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.HeaderSection.prototype.getPreviousSibling = function() {};

/**
 * @return {Array.<Document.Table>}
 */
Document.HeaderSection.prototype.getTables = function() {};

/**
 * @return {string}
 */
Document.HeaderSection.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.HeaderSection.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {Document.HorizontalRule}
 */
Document.HeaderSection.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.HeaderSection.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.HeaderSection.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {Document.ListItem} listItem
 * @return {Document.ListItem}
 */
Document.HeaderSection.prototype.insertListItem = function(childIndex, listItem) {};

/**
 * @param {number} childIndex
 * @param {string} text
 * @return {Document.ListItem}
 */
Document.HeaderSection.prototype.insertListItem = function(childIndex, text) {};

/**
 * @param {number} childIndex
 * @param {Document.Paragraph} paragraph
 * @return {Document.Paragraph}
 */
Document.HeaderSection.prototype.insertParagraph = function(childIndex, paragraph) {};

/**
 * @param {number} childIndex
 * @param {string} text
 * @return {Document.Paragraph}
 */
Document.HeaderSection.prototype.insertParagraph = function(childIndex, text) {};

/**
 * @param {number} childIndex
 * @return {Document.Table}
 */
Document.HeaderSection.prototype.insertTable = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Array.<Array.<string>>} cells
 * @return {Document.Table}
 */
Document.HeaderSection.prototype.insertTable = function(childIndex, cells) {};

/**
 * @param {number} childIndex
 * @param {Document.Table} table
 * @return {Document.Table}
 */
Document.HeaderSection.prototype.insertTable = function(childIndex, table) {};

/**
 * @return {boolean}
 */
Document.HeaderSection.prototype.isAtDocumentEnd = function() {};

/**
 * @param {Document.Element} child
 * @return {Document.HeaderSection}
 */
Document.HeaderSection.prototype.removeChild = function(child) {};

/**
 * @return {Document.HeaderSection}
 */
Document.HeaderSection.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.HeaderSection.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {Document.HeaderSection}
 */
Document.HeaderSection.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {Document.HeaderSection}
 */
Document.HeaderSection.prototype.setLinkUrl = function(url) {};

/**
 * @param {string} text
 * @return {Document.HeaderSection}
 */
Document.HeaderSection.prototype.setText = function(text) {};

/**
 * Class HorizontalRule
 * Last updated June 27, 2013.
 * @constructor
 */
Document.HorizontalRule = function() {};

/**
 * @return {Document.HorizontalRule}
 */
Document.HorizontalRule.prototype.copy = function() {};

/**
 * @return {Object}
 */
Document.HorizontalRule.prototype.getAttributes = function() {};

/**
 * @return {Document.Element}
 */
Document.HorizontalRule.prototype.getNextSibling = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.HorizontalRule.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.HorizontalRule.prototype.getPreviousSibling = function() {};

/**
 * @return {Document.ElementType}
 */
Document.HorizontalRule.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.HorizontalRule.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.HorizontalRule}
 */
Document.HorizontalRule.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {Document.HorizontalRule}
 */
Document.HorizontalRule.prototype.setAttributes = function(attributes) {};

/**
 * Class InlineDrawing
 * Last updated June 27, 2013.
 * @constructor
 */
Document.InlineDrawing = function() {};

/**
 * @return {Document.InlineDrawing}
 */
Document.InlineDrawing.prototype.copy = function() {};

/**
 * @return {Object}
 */
Document.InlineDrawing.prototype.getAttributes = function() {};

/**
 * @return {Document.Element}
 */
Document.InlineDrawing.prototype.getNextSibling = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.InlineDrawing.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.InlineDrawing.prototype.getPreviousSibling = function() {};

/**
 * @return {Document.ElementType}
 */
Document.InlineDrawing.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.InlineDrawing.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.InlineDrawing}
 */
Document.InlineDrawing.prototype.merge = function() {};

/**
 * @return {Document.InlineDrawing}
 */
Document.InlineDrawing.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {Document.InlineDrawing}
 */
Document.InlineDrawing.prototype.setAttributes = function(attributes) {};

/**
 * Class InlineImage
 * Last updated July 11, 2013.
 * @constructor
 */
Document.InlineImage = function() {};

/**
 * @return {Document.InlineImage}
 */
Document.InlineImage.prototype.copy = function() {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Document.InlineImage.prototype.getAs = function(contentType) {};

/**
 * @return {Object}
 */
Document.InlineImage.prototype.getAttributes = function() {};

/**
 * @return {Base.Blob}
 */
Document.InlineImage.prototype.getBlob = function() {};

/**
 * @return {number}
 */
Document.InlineImage.prototype.getHeight = function() {};

/**
 * @return {Document.Element}
 */
Document.InlineImage.prototype.getNextSibling = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.InlineImage.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.InlineImage.prototype.getPreviousSibling = function() {};

/**
 * @return {Document.ElementType}
 */
Document.InlineImage.prototype.getType = function() {};

/**
 * @return {number}
 */
Document.InlineImage.prototype.getWidth = function() {};

/**
 * @return {boolean}
 */
Document.InlineImage.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.InlineImage}
 */
Document.InlineImage.prototype.merge = function() {};

/**
 * @return {Document.InlineImage}
 */
Document.InlineImage.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {Document.InlineImage}
 */
Document.InlineImage.prototype.setAttributes = function(attributes) {};

/**
 * @param {number} height
 * @return {Document.InlineImage}
 */
Document.InlineImage.prototype.setHeight = function(height) {};

/**
 * @param {number} width
 * @return {Document.InlineImage}
 */
Document.InlineImage.prototype.setWidth = function(width) {};

/**
 * Class ListItem
 * Last updated June 27, 2013.
 * @constructor
 */
Document.ListItem = function() {};

/**
 * @return {Document.HorizontalRule}
 */
Document.ListItem.prototype.appendHorizontalRule = function() {};

/**
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.ListItem.prototype.appendInlineImage = function(image) {};

/**
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.ListItem.prototype.appendInlineImage = function(image) {};

/**
 * @return {Document.PageBreak}
 */
Document.ListItem.prototype.appendPageBreak = function() {};

/**
 * @param {Document.PageBreak} pageBreak
 * @return {Document.PageBreak}
 */
Document.ListItem.prototype.appendPageBreak = function(pageBreak) {};

/**
 * @param {string} text
 * @return {Document.Text}
 */
Document.ListItem.prototype.appendText = function(text) {};

/**
 * @param {Document.Text} text
 * @return {Document.Text}
 */
Document.ListItem.prototype.appendText = function(text) {};

/**
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.clear = function() {};

/**
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.ListItem.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.ListItem.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.ListItem.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.ListItem.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.ListItem.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Document.HorizontalAlignment}
 */
Document.ListItem.prototype.getAlignment = function() {};

/**
 * @return {Object}
 */
Document.ListItem.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.ListItem.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.ListItem.prototype.getChildIndex = function(child) {};

/**
 * @return {Document.GlyphType}
 */
Document.ListItem.prototype.getGlyphType = function() {};

/**
 * @return {Document.ParagraphHeading}
 */
Document.ListItem.prototype.getHeading = function() {};

/**
 * @return {Number}
 */
Document.ListItem.prototype.getIndentEnd = function() {};

/**
 * @return {Number}
 */
Document.ListItem.prototype.getIndentFirstLine = function() {};

/**
 * @return {Number}
 */
Document.ListItem.prototype.getIndentStart = function() {};

/**
 * @return {Number}
 */
Document.ListItem.prototype.getLineSpacing = function() {};

/**
 * @return {string}
 */
Document.ListItem.prototype.getLinkUrl = function() {};

/**
 * @return {string}
 */
Document.ListItem.prototype.getListId = function() {};

/**
 * @return {number}
 */
Document.ListItem.prototype.getNestingLevel = function() {};

/**
 * @return {Document.Element}
 */
Document.ListItem.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.ListItem.prototype.getNumChildren = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.ListItem.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.ListItem.prototype.getPreviousSibling = function() {};

/**
 * @return {Number}
 */
Document.ListItem.prototype.getSpacingAfter = function() {};

/**
 * @return {Number}
 */
Document.ListItem.prototype.getSpacingBefore = function() {};

/**
 * @return {string}
 */
Document.ListItem.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.ListItem.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {Document.HorizontalRule}
 */
Document.ListItem.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.ListItem.prototype.insertInlineImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.ListItem.prototype.insertInlineImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @return {Document.PageBreak}
 */
Document.ListItem.prototype.insertPageBreak = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Document.PageBreak} pageBreak
 * @return {Document.PageBreak}
 */
Document.ListItem.prototype.insertPageBreak = function(childIndex, pageBreak) {};

/**
 * @param {number} childIndex
 * @param {string} text
 * @return {Document.Text}
 */
Document.ListItem.prototype.insertText = function(childIndex, text) {};

/**
 * @param {number} childIndex
 * @param {Document.Text} text
 * @return {Document.Text}
 */
Document.ListItem.prototype.insertText = function(childIndex, text) {};

/**
 * @return {boolean}
 */
Document.ListItem.prototype.isAtDocumentEnd = function() {};

/**
 * @return {boolean}
 */
Document.ListItem.prototype.isLeftToRight = function() {};

/**
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.merge = function() {};

/**
 * @param {Document.Element} child
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.removeChild = function(child) {};

/**
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.ListItem.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Document.HorizontalAlignment} alignment
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setAlignment = function(alignment) {};

/**
 * @param {Object} attributes
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setAttributes = function(attributes) {};

/**
 * @param {Document.GlyphType} glyphType
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setGlyphType = function(glyphType) {};

/**
 * @param {Document.ParagraphHeading} heading
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setHeading = function(heading) {};

/**
 * @param {Number} indentEnd
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setIndentEnd = function(indentEnd) {};

/**
 * @param {Number} indentFirstLine
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setIndentFirstLine = function(indentFirstLine) {};

/**
 * @param {Number} indentStart
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setIndentStart = function(indentStart) {};

/**
 * @param {boolean} leftToRight
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setLeftToRight = function(leftToRight) {};

/**
 * @param {Number} multiplier
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setLineSpacing = function(multiplier) {};

/**
 * @param {string} url
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setLinkUrl = function(url) {};

/**
 * @param {Document.ListItem} listItem
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setListId = function(listItem) {};

/**
 * @param {number} nestingLevel
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setNestingLevel = function(nestingLevel) {};

/**
 * @param {Number} spacingAfter
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setSpacingAfter = function(spacingAfter) {};

/**
 * @param {Number} spacingBefore
 * @return {Document.ListItem}
 */
Document.ListItem.prototype.setSpacingBefore = function(spacingBefore) {};

/**
 * @param {string} text
 */
Document.ListItem.prototype.setText = function(text) {};

/**
 * Class PageBreak
 * Last updated June 27, 2013.
 * @constructor
 */
Document.PageBreak = function() {};

/**
 * @return {Document.PageBreak}
 */
Document.PageBreak.prototype.copy = function() {};

/**
 * @return {Object}
 */
Document.PageBreak.prototype.getAttributes = function() {};

/**
 * @return {Document.Element}
 */
Document.PageBreak.prototype.getNextSibling = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.PageBreak.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.PageBreak.prototype.getPreviousSibling = function() {};

/**
 * @return {Document.ElementType}
 */
Document.PageBreak.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.PageBreak.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.PageBreak}
 */
Document.PageBreak.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {Document.PageBreak}
 */
Document.PageBreak.prototype.setAttributes = function(attributes) {};

/**
 * Class Paragraph
 * Last updated June 27, 2013.
 * @constructor
 */
Document.Paragraph = function() {};

/**
 * @return {Document.HorizontalRule}
 */
Document.Paragraph.prototype.appendHorizontalRule = function() {};

/**
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.Paragraph.prototype.appendInlineImage = function(image) {};

/**
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.Paragraph.prototype.appendInlineImage = function(image) {};

/**
 * @return {Document.PageBreak}
 */
Document.Paragraph.prototype.appendPageBreak = function() {};

/**
 * @param {Document.PageBreak} pageBreak
 * @return {Document.PageBreak}
 */
Document.Paragraph.prototype.appendPageBreak = function(pageBreak) {};

/**
 * @param {string} text
 * @return {Document.Text}
 */
Document.Paragraph.prototype.appendText = function(text) {};

/**
 * @param {Document.Text} text
 * @return {Document.Text}
 */
Document.Paragraph.prototype.appendText = function(text) {};

/**
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.clear = function() {};

/**
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.Paragraph.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.Paragraph.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.Paragraph.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.Paragraph.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.Paragraph.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Document.HorizontalAlignment}
 */
Document.Paragraph.prototype.getAlignment = function() {};

/**
 * @return {Object}
 */
Document.Paragraph.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.Paragraph.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.Paragraph.prototype.getChildIndex = function(child) {};

/**
 * @return {Document.ParagraphHeading}
 */
Document.Paragraph.prototype.getHeading = function() {};

/**
 * @return {Number}
 */
Document.Paragraph.prototype.getIndentEnd = function() {};

/**
 * @return {Number}
 */
Document.Paragraph.prototype.getIndentFirstLine = function() {};

/**
 * @return {Number}
 */
Document.Paragraph.prototype.getIndentStart = function() {};

/**
 * @return {Number}
 */
Document.Paragraph.prototype.getLineSpacing = function() {};

/**
 * @return {string}
 */
Document.Paragraph.prototype.getLinkUrl = function() {};

/**
 * @return {Document.Element}
 */
Document.Paragraph.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.Paragraph.prototype.getNumChildren = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.Paragraph.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.Paragraph.prototype.getPreviousSibling = function() {};

/**
 * @return {Number}
 */
Document.Paragraph.prototype.getSpacingAfter = function() {};

/**
 * @return {Number}
 */
Document.Paragraph.prototype.getSpacingBefore = function() {};

/**
 * @return {string}
 */
Document.Paragraph.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.Paragraph.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {Document.HorizontalRule}
 */
Document.Paragraph.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.Paragraph.prototype.insertInlineImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.Paragraph.prototype.insertInlineImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @return {Document.PageBreak}
 */
Document.Paragraph.prototype.insertPageBreak = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Document.PageBreak} pageBreak
 * @return {Document.PageBreak}
 */
Document.Paragraph.prototype.insertPageBreak = function(childIndex, pageBreak) {};

/**
 * @param {number} childIndex
 * @param {string} text
 * @return {Document.Text}
 */
Document.Paragraph.prototype.insertText = function(childIndex, text) {};

/**
 * @param {number} childIndex
 * @param {Document.Text} text
 * @return {Document.Text}
 */
Document.Paragraph.prototype.insertText = function(childIndex, text) {};

/**
 * @return {boolean}
 */
Document.Paragraph.prototype.isAtDocumentEnd = function() {};

/**
 * @return {boolean}
 */
Document.Paragraph.prototype.isLeftToRight = function() {};

/**
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.merge = function() {};

/**
 * @param {Document.Element} child
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.removeChild = function(child) {};

/**
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.Paragraph.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Document.HorizontalAlignment} alignment
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.setAlignment = function(alignment) {};

/**
 * @param {Object} attributes
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.setAttributes = function(attributes) {};

/**
 * @param {Document.ParagraphHeading} heading
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.setHeading = function(heading) {};

/**
 * @param {Number} indentEnd
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.setIndentEnd = function(indentEnd) {};

/**
 * @param {Number} indentFirstLine
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.setIndentFirstLine = function(indentFirstLine) {};

/**
 * @param {Number} indentStart
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.setIndentStart = function(indentStart) {};

/**
 * @param {boolean} leftToRight
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.setLeftToRight = function(leftToRight) {};

/**
 * @param {Number} multiplier
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.setLineSpacing = function(multiplier) {};

/**
 * @param {string} url
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.setLinkUrl = function(url) {};

/**
 * @param {Number} spacingAfter
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.setSpacingAfter = function(spacingAfter) {};

/**
 * @param {Number} spacingBefore
 * @return {Document.Paragraph}
 */
Document.Paragraph.prototype.setSpacingBefore = function(spacingBefore) {};

/**
 * @param {string} text
 */
Document.Paragraph.prototype.setText = function(text) {};

/**
 * Class SearchResult
 * Last updated June 27, 2013.
 * @constructor
 */
Document.SearchResult = function() {};

/**
 * @return {Document.Element}
 */
Document.SearchResult.prototype.getElement = function() {};

/**
 * @return {number}
 */
Document.SearchResult.prototype.getEndOffsetInclusive = function() {};

/**
 * @return {number}
 */
Document.SearchResult.prototype.getStartOffset = function() {};

/**
 * @return {boolean}
 */
Document.SearchResult.prototype.isPartial = function() {};

/**
 * Class SelectedElement
 * Last updated June 27, 2013.
 * @constructor
 */
Document.SelectedElement = function() {};

/**
 * @return {Document.Element}
 */
Document.SelectedElement.prototype.getElement = function() {};

/**
 * @return {number}
 */
Document.SelectedElement.prototype.getEndOffsetInclusive = function() {};

/**
 * @return {number}
 */
Document.SelectedElement.prototype.getStartOffset = function() {};

/**
 * @return {boolean}
 */
Document.SelectedElement.prototype.isPartial = function() {};

/**
 * Class Selection
 * Last updated June 27, 2013.
 * @constructor
 */
Document.Selection = function() {};

/**
 * @return {Array.<Document.SelectedElement>}
 */
Document.Selection.prototype.getSelectedElements = function() {};

/**
 * Class Table
 * Last updated June 27, 2013.
 * @constructor
 */
Document.Table = function() {};

/**
 * @return {Document.TableRow}
 */
Document.Table.prototype.appendTableRow = function() {};

/**
 * @param {Document.TableRow} tableRow
 * @return {Document.TableRow}
 */
Document.Table.prototype.appendTableRow = function(tableRow) {};

/**
 * @return {Document.Table}
 */
Document.Table.prototype.clear = function() {};

/**
 * @return {Document.Table}
 */
Document.Table.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.Table.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.Table.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.Table.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.Table.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.Table.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.Table.prototype.getAttributes = function() {};

/**
 * @return {string}
 */
Document.Table.prototype.getBorderColor = function() {};

/**
 * @return {Number}
 */
Document.Table.prototype.getBorderWidth = function() {};

/**
 * @param {number} rowIndex
 * @param {number} cellIndex
 * @return {Document.TableCell}
 */
Document.Table.prototype.getCell = function(rowIndex, cellIndex) {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.Table.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.Table.prototype.getChildIndex = function(child) {};

/**
 * @param {number} columnIndex
 * @return {Number}
 */
Document.Table.prototype.getColumnWidth = function(columnIndex) {};

/**
 * @return {string}
 */
Document.Table.prototype.getLinkUrl = function() {};

/**
 * @return {Document.Element}
 */
Document.Table.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.Table.prototype.getNumChildren = function() {};

/**
 * @return {number}
 */
Document.Table.prototype.getNumRows = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.Table.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.Table.prototype.getPreviousSibling = function() {};

/**
 * @param {number} rowIndex
 * @return {Document.TableRow}
 */
Document.Table.prototype.getRow = function(rowIndex) {};

/**
 * @return {string}
 */
Document.Table.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.Table.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {Document.TableRow}
 */
Document.Table.prototype.insertTableRow = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Document.TableRow} tableRow
 * @return {Document.TableRow}
 */
Document.Table.prototype.insertTableRow = function(childIndex, tableRow) {};

/**
 * @return {boolean}
 */
Document.Table.prototype.isAtDocumentEnd = function() {};

/**
 * @param {Document.Element} child
 * @return {Document.Table}
 */
Document.Table.prototype.removeChild = function(child) {};

/**
 * @return {Document.Table}
 */
Document.Table.prototype.removeFromParent = function() {};

/**
 * @param {number} rowIndex
 * @return {Document.TableRow}
 */
Document.Table.prototype.removeRow = function(rowIndex) {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.Table.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {Document.Table}
 */
Document.Table.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} color
 * @return {Document.Table}
 */
Document.Table.prototype.setBorderColor = function(color) {};

/**
 * @param {Number} width
 * @return {Document.Table}
 */
Document.Table.prototype.setBorderWidth = function(width) {};

/**
 * @param {number} columnIndex
 * @param {Number} width
 * @return {Document.Table}
 */
Document.Table.prototype.setColumnWidth = function(columnIndex, width) {};

/**
 * @param {string} url
 * @return {Document.Table}
 */
Document.Table.prototype.setLinkUrl = function(url) {};

/**
 * Class TableCell
 * Last updated June 27, 2013.
 * @constructor
 */
Document.TableCell = function() {};

/**
 * @return {Document.HorizontalRule}
 */
Document.TableCell.prototype.appendHorizontalRule = function() {};

/**
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.TableCell.prototype.appendImage = function(image) {};

/**
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.TableCell.prototype.appendImage = function(image) {};

/**
 * @param {Document.ListItem} listItem
 * @return {Document.ListItem}
 */
Document.TableCell.prototype.appendListItem = function(listItem) {};

/**
 * @param {string} text
 * @return {Document.ListItem}
 */
Document.TableCell.prototype.appendListItem = function(text) {};

/**
 * @param {Document.Paragraph} paragraph
 * @return {Document.Paragraph}
 */
Document.TableCell.prototype.appendParagraph = function(paragraph) {};

/**
 * @param {string} text
 * @return {Document.Paragraph}
 */
Document.TableCell.prototype.appendParagraph = function(text) {};

/**
 * @return {Document.Table}
 */
Document.TableCell.prototype.appendTable = function() {};

/**
 * @param {Array.<Array.<string>>} cells
 * @return {Document.Table}
 */
Document.TableCell.prototype.appendTable = function(cells) {};

/**
 * @param {Document.Table} table
 * @return {Document.Table}
 */
Document.TableCell.prototype.appendTable = function(table) {};

/**
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.clear = function() {};

/**
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.TableCell.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.TableCell.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.TableCell.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.TableCell.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.TableCell.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.TableCell.prototype.getAttributes = function() {};

/**
 * @return {string}
 */
Document.TableCell.prototype.getBackgroundColor = function() {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.TableCell.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.TableCell.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
Document.TableCell.prototype.getLinkUrl = function() {};

/**
 * @return {Document.Element}
 */
Document.TableCell.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.TableCell.prototype.getNumChildren = function() {};

/**
 * @return {Number}
 */
Document.TableCell.prototype.getPaddingBottom = function() {};

/**
 * @return {Number}
 */
Document.TableCell.prototype.getPaddingLeft = function() {};

/**
 * @return {Number}
 */
Document.TableCell.prototype.getPaddingRight = function() {};

/**
 * @return {Number}
 */
Document.TableCell.prototype.getPaddingTop = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.TableCell.prototype.getParent = function() {};

/**
 * @return {Document.TableRow}
 */
Document.TableCell.prototype.getParentRow = function() {};

/**
 * @return {Document.Table}
 */
Document.TableCell.prototype.getParentTable = function() {};

/**
 * @return {Document.Element}
 */
Document.TableCell.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
Document.TableCell.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.TableCell.prototype.getType = function() {};

/**
 * @return {Document.VerticalAlignment}
 */
Document.TableCell.prototype.getVerticalAlignment = function() {};

/**
 * @return {Number}
 */
Document.TableCell.prototype.getWidth = function() {};

/**
 * @param {number} childIndex
 * @return {Document.HorizontalRule}
 */
Document.TableCell.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Base.BlobSource} image
 * @return {Document.InlineImage}
 */
Document.TableCell.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {Document.InlineImage} image
 * @return {Document.InlineImage}
 */
Document.TableCell.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {Document.ListItem} listItem
 * @return {Document.ListItem}
 */
Document.TableCell.prototype.insertListItem = function(childIndex, listItem) {};

/**
 * @param {number} childIndex
 * @param {string} text
 * @return {Document.ListItem}
 */
Document.TableCell.prototype.insertListItem = function(childIndex, text) {};

/**
 * @param {number} childIndex
 * @param {Document.Paragraph} paragraph
 * @return {Document.Paragraph}
 */
Document.TableCell.prototype.insertParagraph = function(childIndex, paragraph) {};

/**
 * @param {number} childIndex
 * @param {string} text
 * @return {Document.Paragraph}
 */
Document.TableCell.prototype.insertParagraph = function(childIndex, text) {};

/**
 * @param {number} childIndex
 * @return {Document.Table}
 */
Document.TableCell.prototype.insertTable = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {Array.<Array.<string>>} cells
 * @return {Document.Table}
 */
Document.TableCell.prototype.insertTable = function(childIndex, cells) {};

/**
 * @param {number} childIndex
 * @param {Document.Table} table
 * @return {Document.Table}
 */
Document.TableCell.prototype.insertTable = function(childIndex, table) {};

/**
 * @return {boolean}
 */
Document.TableCell.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.merge = function() {};

/**
 * @param {Document.Element} child
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.removeChild = function(child) {};

/**
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.TableCell.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} color
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.setBackgroundColor = function(color) {};

/**
 * @param {string} url
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.setLinkUrl = function(url) {};

/**
 * @param {Number} paddingBottom
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.setPaddingBottom = function(paddingBottom) {};

/**
 * @param {Number} paddingLeft
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.setPaddingLeft = function(paddingLeft) {};

/**
 * @param {Number} paddingTop
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.setPaddingRight = function(paddingTop) {};

/**
 * @param {Number} paddingTop
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.setPaddingTop = function(paddingTop) {};

/**
 * @param {string} text
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.setText = function(text) {};

/**
 * @param {Document.VerticalAlignment} alignment
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.setVerticalAlignment = function(alignment) {};

/**
 * @param {Number} width
 * @return {Document.TableCell}
 */
Document.TableCell.prototype.setWidth = function(width) {};

/**
 * Class TableOfContents
 * Last updated June 27, 2013.
 * @constructor
 */
Document.TableOfContents = function() {};

/**
 * @return {Document.TableOfContents}
 */
Document.TableOfContents.prototype.clear = function() {};

/**
 * @return {Document.TableOfContents}
 */
Document.TableOfContents.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.TableOfContents.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.TableOfContents.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.TableOfContents.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.TableOfContents.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.TableOfContents.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.TableOfContents.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.TableOfContents.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.TableOfContents.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
Document.TableOfContents.prototype.getLinkUrl = function() {};

/**
 * @return {Document.Element}
 */
Document.TableOfContents.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.TableOfContents.prototype.getNumChildren = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.TableOfContents.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.TableOfContents.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
Document.TableOfContents.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.TableOfContents.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.TableOfContents.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.TableOfContents}
 */
Document.TableOfContents.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.TableOfContents.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {Document.TableOfContents}
 */
Document.TableOfContents.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {Document.TableOfContents}
 */
Document.TableOfContents.prototype.setLinkUrl = function(url) {};

/**
 * Class TableRow
 * Last updated June 27, 2013.
 * @constructor
 */
Document.TableRow = function() {};

/**
 * @return {Document.TableCell}
 */
Document.TableRow.prototype.appendTableCell = function() {};

/**
 * @param {string} textContents
 * @return {Document.TableCell}
 */
Document.TableRow.prototype.appendTableCell = function(textContents) {};

/**
 * @param {Document.TableCell} tableCell
 * @return {Document.TableCell}
 */
Document.TableRow.prototype.appendTableCell = function(tableCell) {};

/**
 * @return {Document.TableRow}
 */
Document.TableRow.prototype.clear = function() {};

/**
 * @return {Document.TableRow}
 */
Document.TableRow.prototype.copy = function() {};

/**
 * @return {Document.Text}
 */
Document.TableRow.prototype.editAsText = function() {};

/**
 * @param {Document.ElementType} elementType
 * @return {Document.SearchResult}
 */
Document.TableRow.prototype.findElement = function(elementType) {};

/**
 * @param {Document.ElementType} elementType
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.TableRow.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.TableRow.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.TableRow.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.TableRow.prototype.getAttributes = function() {};

/**
 * @param {number} cellIndex
 * @return {Document.TableCell}
 */
Document.TableRow.prototype.getCell = function(cellIndex) {};

/**
 * @param {number} childIndex
 * @return {Document.Element}
 */
Document.TableRow.prototype.getChild = function(childIndex) {};

/**
 * @param {Document.Element} child
 * @return {number}
 */
Document.TableRow.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
Document.TableRow.prototype.getLinkUrl = function() {};

/**
 * @return {number}
 */
Document.TableRow.prototype.getMinimumHeight = function() {};

/**
 * @return {Document.Element}
 */
Document.TableRow.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
Document.TableRow.prototype.getNumCells = function() {};

/**
 * @return {number}
 */
Document.TableRow.prototype.getNumChildren = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.TableRow.prototype.getParent = function() {};

/**
 * @return {Document.Table}
 */
Document.TableRow.prototype.getParentTable = function() {};

/**
 * @return {Document.Element}
 */
Document.TableRow.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
Document.TableRow.prototype.getText = function() {};

/**
 * @return {Document.ElementType}
 */
Document.TableRow.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {Document.TableCell}
 */
Document.TableRow.prototype.insertTableCell = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {string} textContents
 * @return {Document.TableCell}
 */
Document.TableRow.prototype.insertTableCell = function(childIndex, textContents) {};

/**
 * @param {number} childIndex
 * @param {Document.TableCell} tableCell
 * @return {Document.TableCell}
 */
Document.TableRow.prototype.insertTableCell = function(childIndex, tableCell) {};

/**
 * @return {boolean}
 */
Document.TableRow.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.TableRow}
 */
Document.TableRow.prototype.merge = function() {};

/**
 * @param {number} cellIndex
 * @return {Document.TableCell}
 */
Document.TableRow.prototype.removeCell = function(cellIndex) {};

/**
 * @param {Document.Element} child
 * @return {Document.TableRow}
 */
Document.TableRow.prototype.removeChild = function(child) {};

/**
 * @return {Document.TableRow}
 */
Document.TableRow.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.TableRow.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {Document.TableRow}
 */
Document.TableRow.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {Document.TableRow}
 */
Document.TableRow.prototype.setLinkUrl = function(url) {};

/**
 * @param {number} minHeight
 * @return {Document.TableRow}
 */
Document.TableRow.prototype.setMinimumHeight = function(minHeight) {};

/**
 * Class Text
 * Last updated June 27, 2013.
 * @constructor
 */
Document.Text = function() {};

/**
 * @param {string} text
 * @return {Document.Text}
 */
Document.Text.prototype.appendText = function(text) {};

/**
 * @return {Document.Text}
 */
Document.Text.prototype.copy = function() {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @return {Document.Text}
 */
Document.Text.prototype.deleteText = function(startOffset, endOffsetInclusive) {};

/**
 * @return {Document.Text}
 */
Document.Text.prototype.editAsText = function() {};

/**
 * @param {string} searchPattern
 * @return {Document.SearchResult}
 */
Document.Text.prototype.findText = function(searchPattern) {};

/**
 * @param {string} searchPattern
 * @param {Document.SearchResult} from
 * @return {Document.SearchResult}
 */
Document.Text.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
Document.Text.prototype.getAttributes = function() {};

/**
 * @param {number} offset
 * @return {Object}
 */
Document.Text.prototype.getAttributes = function(offset) {};

/**
 * @return {string}
 */
Document.Text.prototype.getBackgroundColor = function() {};

/**
 * @param {number} offset
 * @return {string}
 */
Document.Text.prototype.getBackgroundColor = function(offset) {};

/**
 * @return {Document.FontFamily}
 */
Document.Text.prototype.getFontFamily = function() {};

/**
 * @param {number} offset
 * @return {Document.FontFamily}
 */
Document.Text.prototype.getFontFamily = function(offset) {};

/**
 * @return {number}
 */
Document.Text.prototype.getFontSize = function() {};

/**
 * @param {number} offset
 * @return {number}
 */
Document.Text.prototype.getFontSize = function(offset) {};

/**
 * @return {string}
 */
Document.Text.prototype.getForegroundColor = function() {};

/**
 * @param {number} offset
 * @return {string}
 */
Document.Text.prototype.getForegroundColor = function(offset) {};

/**
 * @return {string}
 */
Document.Text.prototype.getLinkUrl = function() {};

/**
 * @param {number} offset
 * @return {string}
 */
Document.Text.prototype.getLinkUrl = function(offset) {};

/**
 * @return {Document.Element}
 */
Document.Text.prototype.getNextSibling = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.Text.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.Text.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
Document.Text.prototype.getText = function() {};

/**
 * @return {Array.<number>}
 */
Document.Text.prototype.getTextAttributeIndices = function() {};

/**
 * @return {Document.ElementType}
 */
Document.Text.prototype.getType = function() {};

/**
 * @param {number} offset
 * @param {string} text
 * @return {Document.Text}
 */
Document.Text.prototype.insertText = function(offset, text) {};

/**
 * @return {boolean}
 */
Document.Text.prototype.isAtDocumentEnd = function() {};

/**
 * @return {boolean}
 */
Document.Text.prototype.isBold = function() {};

/**
 * @param {number} offset
 * @return {boolean}
 */
Document.Text.prototype.isBold = function(offset) {};

/**
 * @return {boolean}
 */
Document.Text.prototype.isItalic = function() {};

/**
 * @param {number} offset
 * @return {boolean}
 */
Document.Text.prototype.isItalic = function(offset) {};

/**
 * @return {boolean}
 */
Document.Text.prototype.isStrikethrough = function() {};

/**
 * @param {number} offset
 * @return {boolean}
 */
Document.Text.prototype.isStrikethrough = function(offset) {};

/**
 * @return {boolean}
 */
Document.Text.prototype.isUnderline = function() {};

/**
 * @param {number} offset
 * @return {boolean}
 */
Document.Text.prototype.isUnderline = function(offset) {};

/**
 * @return {Document.Text}
 */
Document.Text.prototype.merge = function() {};

/**
 * @return {Document.Text}
 */
Document.Text.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {Document.Element}
 */
Document.Text.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @param {Object} attributes
 * @return {Document.Text}
 */
Document.Text.prototype.setAttributes = function(startOffset, endOffsetInclusive, attributes) {};

/**
 * @param {Object} attributes
 * @return {Document.Text}
 */
Document.Text.prototype.setAttributes = function(attributes) {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @param {string} color
 * @return {Document.Text}
 */
Document.Text.prototype.setBackgroundColor = function(startOffset, endOffsetInclusive, color) {};

/**
 * @param {string} color
 * @return {Document.Text}
 */
Document.Text.prototype.setBackgroundColor = function(color) {};

/**
 * @param {boolean} bold
 * @return {Document.Text}
 */
Document.Text.prototype.setBold = function(bold) {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @param {boolean} bold
 * @return {Document.Text}
 */
Document.Text.prototype.setBold = function(startOffset, endOffsetInclusive, bold) {};

/**
 * @param {Document.FontFamily} family
 * @return {Document.Text}
 */
Document.Text.prototype.setFontFamily = function(family) {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @param {Document.FontFamily} family
 * @return {Document.Text}
 */
Document.Text.prototype.setFontFamily = function(startOffset, endOffsetInclusive, family) {};

/**
 * @param {number} size
 * @return {Document.Text}
 */
Document.Text.prototype.setFontSize = function(size) {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @param {number} size
 * @return {Document.Text}
 */
Document.Text.prototype.setFontSize = function(startOffset, endOffsetInclusive, size) {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @param {string} color
 * @return {Document.Text}
 */
Document.Text.prototype.setForegroundColor = function(startOffset, endOffsetInclusive, color) {};

/**
 * @param {string} color
 * @return {Document.Text}
 */
Document.Text.prototype.setForegroundColor = function(color) {};

/**
 * @param {boolean} italic
 * @return {Document.Text}
 */
Document.Text.prototype.setItalic = function(italic) {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @param {boolean} italic
 * @return {Document.Text}
 */
Document.Text.prototype.setItalic = function(startOffset, endOffsetInclusive, italic) {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @param {string} url
 * @return {Document.Text}
 */
Document.Text.prototype.setLinkUrl = function(startOffset, endOffsetInclusive, url) {};

/**
 * @param {string} url
 * @return {Document.Text}
 */
Document.Text.prototype.setLinkUrl = function(url) {};

/**
 * @param {boolean} strikethrough
 * @return {Document.Text}
 */
Document.Text.prototype.setStrikethrough = function(strikethrough) {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @param {boolean} strikethrough
 * @return {Document.Text}
 */
Document.Text.prototype.setStrikethrough = function(startOffset, endOffsetInclusive, strikethrough) {};

/**
 * @param {string} text
 * @return {Document.Text}
 */
Document.Text.prototype.setText = function(text) {};

/**
 * @param {boolean} underline
 * @return {Document.Text}
 */
Document.Text.prototype.setUnderline = function(underline) {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @param {boolean} underline
 * @return {Document.Text}
 */
Document.Text.prototype.setUnderline = function(startOffset, endOffsetInclusive, underline) {};

/**
 * Class UnsupportedElement
 * Last updated June 27, 2013.
 * @constructor
 */
Document.UnsupportedElement = function() {};

/**
 * @return {Document.UnsupportedElement}
 */
Document.UnsupportedElement.prototype.copy = function() {};

/**
 * @return {Object}
 */
Document.UnsupportedElement.prototype.getAttributes = function() {};

/**
 * @return {Document.Element}
 */
Document.UnsupportedElement.prototype.getNextSibling = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.UnsupportedElement.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.UnsupportedElement.prototype.getPreviousSibling = function() {};

/**
 * @return {Document.ElementType}
 */
Document.UnsupportedElement.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.UnsupportedElement.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.UnsupportedElement}
 */
Document.UnsupportedElement.prototype.merge = function() {};

/**
 * @return {Document.UnsupportedElement}
 */
Document.UnsupportedElement.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {Document.UnsupportedElement}
 */
Document.UnsupportedElement.prototype.setAttributes = function(attributes) {};

/**
 * Interface Element
 * Last updated June 27, 2013.
 * @constructor
 */
Document.Element = function() {};

/**
 * @return {Document.Body}
 */
Document.Element.prototype.asBody = function() {};

/**
 * @return {Document.Equation}
 */
Document.Element.prototype.asEquation = function() {};

/**
 * @return {Document.EquationFunction}
 */
Document.Element.prototype.asEquationFunction = function() {};

/**
 * @return {Document.EquationFunctionArgumentSeparator}
 */
Document.Element.prototype.asEquationFunctionArgumentSeparator = function() {};

/**
 * @return {Document.EquationSymbol}
 */
Document.Element.prototype.asEquationSymbol = function() {};

/**
 * @return {Document.FooterSection}
 */
Document.Element.prototype.asFooterSection = function() {};

/**
 * @return {Document.Footnote}
 */
Document.Element.prototype.asFootnote = function() {};

/**
 * @return {Document.FootnoteSection}
 */
Document.Element.prototype.asFootnoteSection = function() {};

/**
 * @return {Document.HeaderSection}
 */
Document.Element.prototype.asHeaderSection = function() {};

/**
 * @return {Document.HorizontalRule}
 */
Document.Element.prototype.asHorizontalRule = function() {};

/**
 * @return {Document.InlineDrawing}
 */
Document.Element.prototype.asInlineDrawing = function() {};

/**
 * @return {Document.InlineImage}
 */
Document.Element.prototype.asInlineImage = function() {};

/**
 * @return {Document.ListItem}
 */
Document.Element.prototype.asListItem = function() {};

/**
 * @return {Document.PageBreak}
 */
Document.Element.prototype.asPageBreak = function() {};

/**
 * @return {Document.Paragraph}
 */
Document.Element.prototype.asParagraph = function() {};

/**
 * @return {Document.Table}
 */
Document.Element.prototype.asTable = function() {};

/**
 * @return {Document.TableCell}
 */
Document.Element.prototype.asTableCell = function() {};

/**
 * @return {Document.TableOfContents}
 */
Document.Element.prototype.asTableOfContents = function() {};

/**
 * @return {Document.TableRow}
 */
Document.Element.prototype.asTableRow = function() {};

/**
 * @return {Document.Text}
 */
Document.Element.prototype.asText = function() {};

/**
 * @return {Document.Element}
 */
Document.Element.prototype.copy = function() {};

/**
 * @return {Object}
 */
Document.Element.prototype.getAttributes = function() {};

/**
 * @return {Document.Element}
 */
Document.Element.prototype.getNextSibling = function() {};

/**
 * @return {Document.ContainerElement}
 */
Document.Element.prototype.getParent = function() {};

/**
 * @return {Document.Element}
 */
Document.Element.prototype.getPreviousSibling = function() {};

/**
 * @return {Document.ElementType}
 */
Document.Element.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Document.Element.prototype.isAtDocumentEnd = function() {};

/**
 * @return {Document.Element}
 */
Document.Element.prototype.merge = function() {};

/**
 * @return {Document.Element}
 */
Document.Element.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {Document.Element}
 */
Document.Element.prototype.setAttributes = function(attributes) {};

/**
 * Enum Attribute
 * Last updated May 15, 2013.
 * @constructor
 */
Document.Attribute = function() {};

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.BACKGROUND_COLOR;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.BOLD;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.BORDER_COLOR;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.BORDER_WIDTH;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.CODE;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.FONT_FAMILY;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.FONT_SIZE;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.FOREGROUND_COLOR;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.HEADING;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.HEIGHT;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.HORIZONTAL_ALIGNMENT;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.INDENT_END;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.INDENT_FIRST_LINE;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.INDENT_START;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.ITALIC;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.GLYPH_TYPE;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.LEFT_TO_RIGHT;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.LINE_SPACING;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.LINK_URL;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.LIST_ID;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.MARGIN_BOTTOM;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.MARGIN_LEFT;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.MARGIN_RIGHT;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.MARGIN_TOP;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.NESTING_LEVEL;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.MINIMUM_HEIGHT;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.PADDING_BOTTOM;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.PADDING_LEFT;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.PADDING_RIGHT;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.PADDING_TOP;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.PAGE_HEIGHT;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.PAGE_WIDTH;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.SPACING_AFTER;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.SPACING_BEFORE;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.STRIKETHROUGH;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.UNDERLINE;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.VERTICAL_ALIGNMENT;

/**
 * @type {Document.Attribute}
 */
Document.Attribute.prototype.WIDTH;

/**
 * Enum ElementType
 * Last updated June 19, 2013.
 * @constructor
 */
Document.ElementType = function() {};

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.BODY_SECTION;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.COMMENT_SECTION;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.DOCUMENT;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.EQUATION;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.EQUATION_FUNCTION;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.EQUATION_FUNCTION_ARGUMENT_SEPARATOR;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.EQUATION_SYMBOL;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.FOOTER_SECTION;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.FOOTNOTE;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.FOOTNOTE_SECTION;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.HEADER_SECTION;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.HORIZONTAL_RULE;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.INLINE_DRAWING;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.INLINE_IMAGE;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.LIST_ITEM;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.PAGE_BREAK;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.PARAGRAPH;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.TABLE;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.TABLE_CELL;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.TABLE_OF_CONTENTS;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.TABLE_ROW;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.TEXT;

/**
 * @type {Document.ElementType}
 */
Document.ElementType.prototype.UNSUPPORTED;

/**
 * Enum FontFamily
 * Last updated March 26, 2013.
 * @constructor
 */
Document.FontFamily = function() {};

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.AMARANTH;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.ARIAL;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.ARIAL_BLACK;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.ARIAL_NARROW;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.ARVO;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.CALIBRI;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.CAMBRIA;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.COMIC_SANS_MS;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.CONSOLAS;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.CORSIVA;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.COURIER_NEW;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.DANCING_SCRIPT;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.DROID_SANS;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.DROID_SERIF;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.GARAMOND;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.GEORGIA;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.LOBSTER;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.MERRIWEATHER;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.PHILOSOPHER;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.QUATTROCENTO;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.SYNCOPATE;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.TAHOMA;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.TIMES_NEW_ROMAN;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.TREBUCHET_MS;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.UBUNTU;

/**
 * @type {Document.FontFamily}
 */
Document.FontFamily.prototype.VERDANA;

/**
 * Enum GlyphType
 * Last updated March 26, 2013.
 * @constructor
 */
Document.GlyphType = function() {};

/**
 * @type {Document.GlyphType}
 */
Document.GlyphType.prototype.BULLET;

/**
 * @type {Document.GlyphType}
 */
Document.GlyphType.prototype.HOLLOW_BULLET;

/**
 * @type {Document.GlyphType}
 */
Document.GlyphType.prototype.SQUARE_BULLET;

/**
 * @type {Document.GlyphType}
 */
Document.GlyphType.prototype.NUMBER;

/**
 * @type {Document.GlyphType}
 */
Document.GlyphType.prototype.LATIN_UPPER;

/**
 * @type {Document.GlyphType}
 */
Document.GlyphType.prototype.LATIN_LOWER;

/**
 * @type {Document.GlyphType}
 */
Document.GlyphType.prototype.ROMAN_UPPER;

/**
 * @type {Document.GlyphType}
 */
Document.GlyphType.prototype.ROMAN_LOWER;

/**
 * Enum HorizontalAlignment
 * Last updated March 26, 2013.
 * @constructor
 */
Document.HorizontalAlignment = function() {};

/**
 * @type {Document.HorizontalAlignment}
 */
Document.HorizontalAlignment.prototype.LEFT;

/**
 * @type {Document.HorizontalAlignment}
 */
Document.HorizontalAlignment.prototype.CENTER;

/**
 * @type {Document.HorizontalAlignment}
 */
Document.HorizontalAlignment.prototype.RIGHT;

/**
 * @type {Document.HorizontalAlignment}
 */
Document.HorizontalAlignment.prototype.JUSTIFY;

/**
 * Enum ParagraphHeading
 * Last updated March 26, 2013.
 * @constructor
 */
Document.ParagraphHeading = function() {};

/**
 * @type {Document.ParagraphHeading}
 */
Document.ParagraphHeading.prototype.NORMAL;

/**
 * @type {Document.ParagraphHeading}
 */
Document.ParagraphHeading.prototype.HEADING1;

/**
 * @type {Document.ParagraphHeading}
 */
Document.ParagraphHeading.prototype.HEADING2;

/**
 * @type {Document.ParagraphHeading}
 */
Document.ParagraphHeading.prototype.HEADING3;

/**
 * @type {Document.ParagraphHeading}
 */
Document.ParagraphHeading.prototype.HEADING4;

/**
 * @type {Document.ParagraphHeading}
 */
Document.ParagraphHeading.prototype.HEADING5;

/**
 * @type {Document.ParagraphHeading}
 */
Document.ParagraphHeading.prototype.HEADING6;

/**
 * Enum VerticalAlignment
 * Last updated March 26, 2013.
 * @constructor
 */
Document.VerticalAlignment = function() {};

/**
 * @type {Document.VerticalAlignment}
 */
Document.VerticalAlignment.prototype.BOTTOM;

/**
 * @type {Document.VerticalAlignment}
 */
Document.VerticalAlignment.prototype.CENTER;

/**
 * @type {Document.VerticalAlignment}
 */
Document.VerticalAlignment.prototype.TOP;


/**
 * Domain Services
 */
var Domain = {};

/**
 * Class GroupsManager
 * Last updated March 26, 2013.
 * @constructor
 */
Domain.GroupsManager = function() {};

/**
 * @type {Domain.PermissionLevel}
 */
Domain.GroupsManager.prototype.PermissionLevel;

/**
 * @param {string} groupId
 * @param {string} name
 * @return {Domain.DomainGroup}
 */
Domain.GroupsManager.prototype.createGroup = function(groupId, name) {};

/**
 * @param {string} groupId
 * @param {string} name
 * @param {string} description
 * @param {Domain.PermissionLevel} permissionLevel
 * @return {Domain.DomainGroup}
 */
Domain.GroupsManager.prototype.createGroup = function(groupId, name, description, permissionLevel) {};

/**
 * @return {Array.<Domain.DomainGroup>}
 */
Domain.GroupsManager.prototype.getAllGroups = function() {};

/**
 * @param {string} memberId
 * @return {Array.<Domain.DomainGroup>}
 */
Domain.GroupsManager.prototype.getAllGroups = function(memberId) {};

/**
 * @return {string}
 */
Domain.GroupsManager.prototype.getDomain = function() {};

/**
 * @param {string} groupId
 * @return {Domain.DomainGroup}
 */
Domain.GroupsManager.prototype.getGroup = function(groupId) {};


/**
 * @type {Domain.GroupsManager}
 */
var GroupsManager;

/**
 * Class NicknameManager
 * Last updated March 26, 2013.
 * @constructor
 */
Domain.NicknameManager = function() {};

/**
 * @param {string} username
 * @param {string} nickname
 * @return {Domain.DomainNickname}
 */
Domain.NicknameManager.prototype.createNickname = function(username, nickname) {};

/**
 * @return {Array.<Domain.DomainNickname>}
 */
Domain.NicknameManager.prototype.getAllNicknames = function() {};

/**
 * @param {string} username
 * @return {Array.<Domain.DomainNickname>}
 */
Domain.NicknameManager.prototype.getAllNicknames = function(username) {};

/**
 * @return {string}
 */
Domain.NicknameManager.prototype.getDomain = function() {};

/**
 * @param {string} nickname
 * @return {Domain.DomainNickname}
 */
Domain.NicknameManager.prototype.getNickname = function(nickname) {};


/**
 * @type {Domain.NicknameManager}
 */
var NicknameManager;

/**
 * Class UserManager
 * Last updated March 26, 2013.
 * @constructor
 */
Domain.UserManager = function() {};

/**
 * @param {string} username
 * @param {string} givenName
 * @param {string} familyName
 * @param {string} password
 * @return {Domain.DomainUser}
 */
Domain.UserManager.prototype.createUser = function(username, givenName, familyName, password) {};

/**
 * @param {string} username
 * @param {string} givenName
 * @param {string} familyName
 * @param {string} password
 * @param {Utilities.DigestAlgorithm} passwordHashFunction
 * @return {Domain.DomainUser}
 */
Domain.UserManager.prototype.createUser = function(username, givenName, familyName, password, passwordHashFunction) {};

/**
 * @return {Array.<Domain.DomainUser>}
 */
Domain.UserManager.prototype.getAllUsers = function() {};

/**
 * @return {string}
 */
Domain.UserManager.prototype.getDomain = function() {};

/**
 * @param {string} username
 * @return {Domain.DomainUser}
 */
Domain.UserManager.prototype.getUser = function(username) {};

/**
 * @param {Base.User} user
 * @return {Domain.DomainUser}
 */
Domain.UserManager.prototype.getUser = function(user) {};

/**
 * @deprecated
 * @return {Domain.DomainUser}
 */
Domain.UserManager.prototype.createUser = function(username, givenName, familyName, password, passwordHashFunction, quotaLimitInMb) {};


/**
 * @type {Domain.UserManager}
 */
var UserManager;

/**
 * Class DomainGroup
 * Last updated March 26, 2013.
 * @constructor
 */
Domain.DomainGroup = function() {};

/**
 * @param {string} memberId
 * @return {Domain.DomainGroup}
 */
Domain.DomainGroup.prototype.addMember = function(memberId) {};

/**
 * @param {string} ownerId
 * @return {Domain.DomainGroup}
 */
Domain.DomainGroup.prototype.addOwner = function(ownerId) {};

/**
 */
Domain.DomainGroup.prototype.deleteGroup = function() {};

/**
 * @return {Array.<string>}
 */
Domain.DomainGroup.prototype.getAllMembers = function() {};

/**
 * @return {Array.<string>}
 */
Domain.DomainGroup.prototype.getAllOwners = function() {};

/**
 * @return {string}
 */
Domain.DomainGroup.prototype.getDescription = function() {};

/**
 * @return {string}
 */
Domain.DomainGroup.prototype.getId = function() {};

/**
 * @return {string}
 */
Domain.DomainGroup.prototype.getName = function() {};

/**
 * @return {Domain.PermissionLevel}
 */
Domain.DomainGroup.prototype.getPermissionLevel = function() {};

/**
 * @param {string} memberId
 * @return {Domain.DomainGroup}
 */
Domain.DomainGroup.prototype.removeMember = function(memberId) {};

/**
 * @param {string} ownerId
 * @return {Domain.DomainGroup}
 */
Domain.DomainGroup.prototype.removeOwner = function(ownerId) {};

/**
 * @param {string} description
 * @return {Domain.DomainGroup}
 */
Domain.DomainGroup.prototype.setDescription = function(description) {};

/**
 * @param {string} name
 * @return {Domain.DomainGroup}
 */
Domain.DomainGroup.prototype.setName = function(name) {};

/**
 * @param {Domain.PermissionLevel} level
 * @return {Domain.DomainGroup}
 */
Domain.DomainGroup.prototype.setPermissionLevel = function(level) {};

/**
 * Class DomainNickname
 * Last updated March 26, 2013.
 * @constructor
 */
Domain.DomainNickname = function() {};

/**
 */
Domain.DomainNickname.prototype.deleteNickname = function() {};

/**
 * @return {string}
 */
Domain.DomainNickname.prototype.getNickname = function() {};

/**
 * @return {string}
 */
Domain.DomainNickname.prototype.getUsername = function() {};

/**
 * Class DomainUser
 * Last updated June 27, 2013.
 * @constructor
 */
Domain.DomainUser = function() {};

/**
 */
Domain.DomainUser.prototype.deleteUser = function() {};

/**
 * @return {boolean}
 */
Domain.DomainUser.prototype.getAgreedToTerms = function() {};

/**
 * @return {boolean}
 */
Domain.DomainUser.prototype.getChangePasswordAtNextLogin = function() {};

/**
 * @return {string}
 */
Domain.DomainUser.prototype.getEmail = function() {};

/**
 * @return {string}
 */
Domain.DomainUser.prototype.getFamilyName = function() {};

/**
 * @return {string}
 */
Domain.DomainUser.prototype.getGivenName = function() {};

/**
 * @return {boolean}
 */
Domain.DomainUser.prototype.getIsAdmin = function() {};

/**
 * @return {boolean}
 */
Domain.DomainUser.prototype.getIsSuspended = function() {};

/**
 * @return {number}
 */
Domain.DomainUser.prototype.getStorageQuota = function() {};

/**
 * @param {boolean} changePassword
 * @return {Domain.DomainUser}
 */
Domain.DomainUser.prototype.setChangePasswordAtNextLogin = function(changePassword) {};

/**
 * @param {string} name
 * @return {Domain.DomainUser}
 */
Domain.DomainUser.prototype.setFamilyName = function(name) {};

/**
 * @param {string} name
 * @return {Domain.DomainUser}
 */
Domain.DomainUser.prototype.setGivenName = function(name) {};

/**
 * @param {boolean} admin
 * @return {Domain.DomainUser}
 */
Domain.DomainUser.prototype.setIsAdmin = function(admin) {};

/**
 * @param {boolean} suspended
 * @return {Domain.DomainUser}
 */
Domain.DomainUser.prototype.setIsSuspended = function(suspended) {};

/**
 * @param {string} password
 * @return {Domain.DomainUser}
 */
Domain.DomainUser.prototype.setPassword = function(password) {};

/**
 * @param {string} username
 * @return {Domain.DomainUser}
 */
Domain.DomainUser.prototype.setUsername = function(username) {};

/**
 * @deprecated
 * @return {string}
 */
Domain.DomainUser.prototype.getUserLoginId = function() {};

/**
 * @deprecated
 * @return {Domain.DomainUser}
 */
Domain.DomainUser.prototype.setStorageQuota = function(quota) {};

/**
 * Enum PermissionLevel
 * Last updated March 26, 2013.
 * @constructor
 */
Domain.PermissionLevel = function() {};

/**
 * @type {Domain.PermissionLevel}
 */
Domain.PermissionLevel.prototype.ANYONE;

/**
 * @type {Domain.PermissionLevel}
 */
Domain.PermissionLevel.prototype.DOMAIN;

/**
 * @type {Domain.PermissionLevel}
 */
Domain.PermissionLevel.prototype.MEMBER;

/**
 * @type {Domain.PermissionLevel}
 */
Domain.PermissionLevel.prototype.OWNER;


/**
 * Drive Services
 */
var Drive = {};

/**
 * Class DriveApp
 * Last updated May 15, 2013.
 * @constructor
 */
Drive.DriveApp = function() {};

/**
 * @type {Drive.Access}
 */
Drive.DriveApp.prototype.Access;

/**
 * @type {Drive.Permission}
 */
Drive.DriveApp.prototype.Permission;

/**
 * @param {Drive.File} child
 * @return {Drive.Folder}
 */
Drive.DriveApp.prototype.addFile = function(child) {};

/**
 * @param {Drive.Folder} child
 * @return {Drive.Folder}
 */
Drive.DriveApp.prototype.addFolder = function(child) {};

/**
 * @param {Base.BlobSource} blob
 * @return {Drive.File}
 */
Drive.DriveApp.prototype.createFile = function(blob) {};

/**
 * @param {string} name
 * @param {string} content
 * @return {Drive.File}
 */
Drive.DriveApp.prototype.createFile = function(name, content) {};

/**
 * @param {string} name
 * @param {string} content
 * @param {string} mimeType
 * @return {Drive.File}
 */
Drive.DriveApp.prototype.createFile = function(name, content, mimeType) {};

/**
 * @param {string} name
 * @return {Drive.Folder}
 */
Drive.DriveApp.prototype.createFolder = function(name) {};

/**
 * @param {string} id
 * @return {Drive.File}
 */
Drive.DriveApp.prototype.getFileById = function(id) {};

/**
 * @return {Drive.FileIterator}
 */
Drive.DriveApp.prototype.getFiles = function() {};

/**
 * @param {string} name
 * @return {Drive.FileIterator}
 */
Drive.DriveApp.prototype.getFilesByName = function(name) {};

/**
 * @param {string} mimeType
 * @return {Drive.FileIterator}
 */
Drive.DriveApp.prototype.getFilesByType = function(mimeType) {};

/**
 * @param {string} id
 * @return {Drive.Folder}
 */
Drive.DriveApp.prototype.getFolderById = function(id) {};

/**
 * @return {Drive.FolderIterator}
 */
Drive.DriveApp.prototype.getFolders = function() {};

/**
 * @return {Drive.Folder}
 */
Drive.DriveApp.prototype.getRootFolder = function() {};

/**
 * @return {number}
 */
Drive.DriveApp.prototype.getStorageLimit = function() {};

/**
 * @return {number}
 */
Drive.DriveApp.prototype.getStorageUsed = function() {};

/**
 * @return {Drive.FileIterator}
 */
Drive.DriveApp.prototype.getTrashedFiles = function() {};

/**
 * @return {Drive.FolderIterator}
 */
Drive.DriveApp.prototype.getTrashedFolders = function() {};

/**
 * @param {Drive.File} child
 * @return {Drive.Folder}
 */
Drive.DriveApp.prototype.removeFile = function(child) {};

/**
 * @param {Drive.Folder} child
 * @return {Drive.Folder}
 */
Drive.DriveApp.prototype.removeFolder = function(child) {};

/**
 * @param {string} params
 * @return {Drive.FileIterator}
 */
Drive.DriveApp.prototype.searchFiles = function(params) {};


/**
 * @type {Drive.DriveApp}
 */
var DriveApp;

/**
 * Class File
 * Last updated July 11, 2013.
 * @constructor
 */
Drive.File = function() {};

/**
 * @param {string} emailAddress
 * @return {Drive.File}
 */
Drive.File.prototype.addCommenter = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.File}
 */
Drive.File.prototype.addCommenter = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {Drive.File}
 */
Drive.File.prototype.addCommenters = function(emailAddresses) {};

/**
 * @param {string} emailAddress
 * @return {Drive.File}
 */
Drive.File.prototype.addEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.File}
 */
Drive.File.prototype.addEditor = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {Drive.File}
 */
Drive.File.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {string} emailAddress
 * @return {Drive.File}
 */
Drive.File.prototype.addViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.File}
 */
Drive.File.prototype.addViewer = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {Drive.File}
 */
Drive.File.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {string} email
 * @return {Drive.Permission}
 */
Drive.File.prototype.getAccess = function(email) {};

/**
 * @param {Base.User} user
 * @return {Drive.Permission}
 */
Drive.File.prototype.getAccess = function(user) {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Drive.File.prototype.getAs = function(contentType) {};

/**
 * @return {Base.Blob}
 */
Drive.File.prototype.getBlob = function() {};

/**
 * @return {Date}
 */
Drive.File.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
Drive.File.prototype.getDescription = function() {};

/**
 * @return {string}
 */
Drive.File.prototype.getDownloadUrl = function() {};

/**
 * @return {string}
 */
Drive.File.prototype.getId = function() {};

/**
 * @return {Date}
 */
Drive.File.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
Drive.File.prototype.getMimeType = function() {};

/**
 * @return {string}
 */
Drive.File.prototype.getName = function() {};

/**
 * @return {Drive.FolderIterator}
 */
Drive.File.prototype.getParents = function() {};

/**
 * @return {Drive.Access}
 */
Drive.File.prototype.getSharingAccess = function() {};

/**
 * @return {Drive.Permission}
 */
Drive.File.prototype.getSharingPermission = function() {};

/**
 * @return {number}
 */
Drive.File.prototype.getSize = function() {};

/**
 * @return {Base.Blob}
 */
Drive.File.prototype.getThumbnail = function() {};

/**
 * @return {string}
 */
Drive.File.prototype.getUrl = function() {};

/**
 * @return {boolean}
 */
Drive.File.prototype.isShareableByEditors = function() {};

/**
 * @return {boolean}
 */
Drive.File.prototype.isStarred = function() {};

/**
 * @return {boolean}
 */
Drive.File.prototype.isTrashed = function() {};

/**
 * @return {Drive.File}
 */
Drive.File.prototype.makeCopy = function() {};

/**
 * @param {string} name
 * @return {Drive.File}
 */
Drive.File.prototype.makeCopy = function(name) {};

/**
 * @param {string} emailAddress
 * @return {Drive.File}
 */
Drive.File.prototype.removeCommenter = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.File}
 */
Drive.File.prototype.removeCommenter = function(user) {};

/**
 * @param {string} emailAddress
 * @return {Drive.File}
 */
Drive.File.prototype.removeEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.File}
 */
Drive.File.prototype.removeEditor = function(user) {};

/**
 * @param {string} emailAddress
 * @return {Drive.File}
 */
Drive.File.prototype.removeViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.File}
 */
Drive.File.prototype.removeViewer = function(user) {};

/**
 * @param {string} user
 * @return {Drive.File}
 */
Drive.File.prototype.revokePermissions = function(user) {};

/**
 * @param {Base.User} user
 * @return {Drive.File}
 */
Drive.File.prototype.revokePermissions = function(user) {};

/**
 * @param {string} content
 * @return {Drive.File}
 */
Drive.File.prototype.setContent = function(content) {};

/**
 * @param {string} description
 * @return {Drive.File}
 */
Drive.File.prototype.setDescription = function(description) {};

/**
 * @param {string} name
 * @return {Drive.File}
 */
Drive.File.prototype.setName = function(name) {};

/**
 * @param {string} emailAddress
 * @return {Drive.File}
 */
Drive.File.prototype.setOwner = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.File}
 */
Drive.File.prototype.setOwner = function(user) {};

/**
 * @param {boolean} shareable
 * @return {Drive.File}
 */
Drive.File.prototype.setShareableByEditors = function(shareable) {};

/**
 * @param {Drive.Access} accessType
 * @param {Drive.Permission} permissionType
 * @return {Drive.File}
 */
Drive.File.prototype.setSharing = function(accessType, permissionType) {};

/**
 * @param {boolean} starred
 * @return {Drive.File}
 */
Drive.File.prototype.setStarred = function(starred) {};

/**
 * @param {boolean} trashed
 * @return {Drive.File}
 */
Drive.File.prototype.setTrashed = function(trashed) {};

/**
 * Class FileIterator
 * Last updated July 31, 2013.
 * @constructor
 */
Drive.FileIterator = function() {};

/**
 * @return {boolean}
 */
Drive.FileIterator.prototype.hasNext = function() {};

/**
 * @return {Drive.File}
 */
Drive.FileIterator.prototype.next = function() {};

/**
 * Class Folder
 * Last updated June 19, 2013.
 * @constructor
 */
Drive.Folder = function() {};

/**
 * @param {string} emailAddress
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.addEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.addEditor = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {Drive.File} child
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.addFile = function(child) {};

/**
 * @param {Drive.Folder} child
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.addFolder = function(child) {};

/**
 * @param {string} emailAddress
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.addViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.addViewer = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {Base.BlobSource} blob
 * @return {Drive.File}
 */
Drive.Folder.prototype.createFile = function(blob) {};

/**
 * @param {string} name
 * @param {string} content
 * @return {Drive.File}
 */
Drive.Folder.prototype.createFile = function(name, content) {};

/**
 * @param {string} name
 * @param {string} content
 * @param {string} mimeType
 * @return {Drive.File}
 */
Drive.Folder.prototype.createFile = function(name, content, mimeType) {};

/**
 * @param {string} name
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.createFolder = function(name) {};

/**
 * @param {string} email
 * @return {Drive.Permission}
 */
Drive.Folder.prototype.getAccess = function(email) {};

/**
 * @param {Base.User} user
 * @return {Drive.Permission}
 */
Drive.Folder.prototype.getAccess = function(user) {};

/**
 * @return {Date}
 */
Drive.Folder.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
Drive.Folder.prototype.getDescription = function() {};

/**
 * @return {Drive.FileIterator}
 */
Drive.Folder.prototype.getFiles = function() {};

/**
 * @param {string} name
 * @return {Drive.FileIterator}
 */
Drive.Folder.prototype.getFilesByName = function(name) {};

/**
 * @param {string} mimeType
 * @return {Drive.FileIterator}
 */
Drive.Folder.prototype.getFilesByType = function(mimeType) {};

/**
 * @return {Drive.FolderIterator}
 */
Drive.Folder.prototype.getFolders = function() {};

/**
 * @return {string}
 */
Drive.Folder.prototype.getId = function() {};

/**
 * @return {Date}
 */
Drive.Folder.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
Drive.Folder.prototype.getName = function() {};

/**
 * @return {Drive.FolderIterator}
 */
Drive.Folder.prototype.getParents = function() {};

/**
 * @return {Drive.Access}
 */
Drive.Folder.prototype.getSharingAccess = function() {};

/**
 * @return {Drive.Permission}
 */
Drive.Folder.prototype.getSharingPermission = function() {};

/**
 * @return {number}
 */
Drive.Folder.prototype.getSize = function() {};

/**
 * @return {string}
 */
Drive.Folder.prototype.getUrl = function() {};

/**
 * @return {boolean}
 */
Drive.Folder.prototype.isShareableByEditors = function() {};

/**
 * @return {boolean}
 */
Drive.Folder.prototype.isStarred = function() {};

/**
 * @return {boolean}
 */
Drive.Folder.prototype.isTrashed = function() {};

/**
 * @param {string} emailAddress
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.removeEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.removeEditor = function(user) {};

/**
 * @param {Drive.File} child
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.removeFile = function(child) {};

/**
 * @param {Drive.Folder} child
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.removeFolder = function(child) {};

/**
 * @param {string} emailAddress
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.removeViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.removeViewer = function(user) {};

/**
 * @param {string} user
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.revokePermissions = function(user) {};

/**
 * @param {Base.User} user
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.revokePermissions = function(user) {};

/**
 * @param {string} params
 * @return {Drive.FileIterator}
 */
Drive.Folder.prototype.searchFiles = function(params) {};

/**
 * @param {string} description
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.setDescription = function(description) {};

/**
 * @param {string} name
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.setName = function(name) {};

/**
 * @param {string} emailAddress
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.setOwner = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.setOwner = function(user) {};

/**
 * @param {boolean} shareable
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.setShareableByEditors = function(shareable) {};

/**
 * @param {Drive.Access} accessType
 * @param {Drive.Permission} permissionType
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.setSharing = function(accessType, permissionType) {};

/**
 * @param {boolean} starred
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.setStarred = function(starred) {};

/**
 * @param {boolean} trashed
 * @return {Drive.Folder}
 */
Drive.Folder.prototype.setTrashed = function(trashed) {};

/**
 * Class FolderIterator
 * Last updated May 15, 2013.
 * @constructor
 */
Drive.FolderIterator = function() {};

/**
 * @return {boolean}
 */
Drive.FolderIterator.prototype.hasNext = function() {};

/**
 * @return {Drive.Folder}
 */
Drive.FolderIterator.prototype.next = function() {};

/**
 * Enum Access
 * Last updated May 15, 2013.
 * @constructor
 */
Drive.Access = function() {};

/**
 * @type {Drive.Access}
 */
Drive.Access.prototype.ANYONE;

/**
 * @type {Drive.Access}
 */
Drive.Access.prototype.ANYONE_WITH_LINK;

/**
 * @type {Drive.Access}
 */
Drive.Access.prototype.DOMAIN;

/**
 * @type {Drive.Access}
 */
Drive.Access.prototype.DOMAIN_WITH_LINK;

/**
 * @type {Drive.Access}
 */
Drive.Access.prototype.PRIVATE;

/**
 * Enum Permission
 * Last updated May 15, 2013.
 * @constructor
 */
Drive.Permission = function() {};

/**
 * @type {Drive.Permission}
 */
Drive.Permission.prototype.VIEW;

/**
 * @type {Drive.Permission}
 */
Drive.Permission.prototype.EDIT;

/**
 * @type {Drive.Permission}
 */
Drive.Permission.prototype.COMMENT;

/**
 * @type {Drive.Permission}
 */
Drive.Permission.prototype.OWNER;

/**
 * @type {Drive.Permission}
 */
Drive.Permission.prototype.NONE;


/**
 * Finance Services
 */
var Finance = {};

/**
 * Class FinanceApp
 * Last updated March 26, 2013.
 * @constructor
 */
Finance.FinanceApp = function() {};

/**
 * @type {Finance.Interval}
 */
Finance.FinanceApp.prototype.Interval;

/**
 * @param {string} stockSymbol
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {Finance.Interval} interval
 * @return {Finance.HistoricalStockInfo}
 */
Finance.FinanceApp.prototype.getHistoricalIntradayStockInfo = function(stockSymbol, startDate, endDate, interval) {};

/**
 * @param {string} stockSymbol
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {number} interval
 * @return {Finance.HistoricalStockInfo}
 */
Finance.FinanceApp.prototype.getHistoricalStockInfo = function(stockSymbol, startDate, endDate, interval) {};

/**
 * @param {string} stockSymbol
 * @return {Finance.StockInfo}
 */
Finance.FinanceApp.prototype.getStockInfo = function(stockSymbol) {};


/**
 * @type {Finance.FinanceApp}
 */
var FinanceApp;

/**
 * Class HistoricalStockInfo
 * Last updated March 26, 2013.
 * @constructor
 */
Finance.HistoricalStockInfo = function() {};

/**
 * @type {Date}
 */
Finance.HistoricalStockInfo.prototype.endTime;

/**
 * @type {string}
 */
Finance.HistoricalStockInfo.prototype.exchange;

/**
 * @type {number}
 */
Finance.HistoricalStockInfo.prototype.interval;

/**
 * @type {string}
 */
Finance.HistoricalStockInfo.prototype.name;

/**
 * @type {string}
 */
Finance.HistoricalStockInfo.prototype.reutersInvestorsCode;

/**
 * @type {Date}
 */
Finance.HistoricalStockInfo.prototype.startTime;

/**
 * @type {Array.<Finance.StockInfoSnapshot>}
 */
Finance.HistoricalStockInfo.prototype.stockInfo;

/**
 * @type {string}
 */
Finance.HistoricalStockInfo.prototype.symbol;

/**
 * @type {Date}
 */
Finance.HistoricalStockInfo.prototype.timeFetched;

/**
 * Class StockInfo
 * Last updated March 26, 2013.
 * @constructor
 */
Finance.StockInfo = function() {};

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.ask;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.average;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.beta;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.bid;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.capitalgain;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.change;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.changepct;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.closeyest;

/**
 * @type {string}
 */
Finance.StockInfo.prototype.currency;

/**
 * @type {number}
 */
Finance.StockInfo.prototype.datadelay;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.eps;

/**
 * @type {string}
 */
Finance.StockInfo.prototype.exchange;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.expenseratio;

/**
 * @type {boolean}
 */
Finance.StockInfo.prototype.has_mutual_fund_data;

/**
 * @type {boolean}
 */
Finance.StockInfo.prototype.has_stock_data;

/**
 * @type {number}
 */
Finance.StockInfo.prototype.high;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.high52;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.incomedividend;

/**
 * @type {number}
 */
Finance.StockInfo.prototype.low;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.low52;

/**
 * @type {number}
 */
Finance.StockInfo.prototype.marketcap;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.morningstarrating;

/**
 * @type {string}
 */
Finance.StockInfo.prototype.name;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.nav;

/**
 * @type {number}
 */
Finance.StockInfo.prototype.netassets;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.pe;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.price;

/**
 * @type {number}
 */
Finance.StockInfo.prototype.priceopen;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.quote;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.return1;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.return13;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.return156;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.return260;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.return4;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.return52;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.returnday;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.returnytd;

/**
 * @type {number}
 */
Finance.StockInfo.prototype.shares;

/**
 * @type {string}
 */
Finance.StockInfo.prototype.symbol;

/**
 * @type {string}
 */
Finance.StockInfo.prototype.timezone;

/**
 * @type {Date}
 */
Finance.StockInfo.prototype.tradetime;

/**
 * @type {number}
 */
Finance.StockInfo.prototype.volume;

/**
 * @type {number}
 */
Finance.StockInfo.prototype.volumeavg;

/**
 * @type {number}
 */
Finance.StockInfo.prototype.volumedelay;

/**
 * @type {Number}
 */
Finance.StockInfo.prototype.yieldpct;

/**
 * Class StockInfoSnapshot
 * Last updated March 26, 2013.
 * @constructor
 */
Finance.StockInfoSnapshot = function() {};

/**
 * @type {Number}
 */
Finance.StockInfoSnapshot.prototype.close;

/**
 * @type {Number}
 */
Finance.StockInfoSnapshot.prototype.high;

/**
 * @type {Number}
 */
Finance.StockInfoSnapshot.prototype.low;

/**
 * @type {Number}
 */
Finance.StockInfoSnapshot.prototype.open;

/**
 * @type {Date}
 */
Finance.StockInfoSnapshot.prototype.time;

/**
 * @type {number}
 */
Finance.StockInfoSnapshot.prototype.volume;

/**
 * Enum Interval
 * Last updated March 26, 2013.
 * @constructor
 */
Finance.Interval = function() {};

/**
 * @type {Finance.Interval}
 */
Finance.Interval.prototype.ONE_MINUTE;

/**
 * @type {Finance.Interval}
 */
Finance.Interval.prototype.TWO_MINUTES;

/**
 * @type {Finance.Interval}
 */
Finance.Interval.prototype.FIVE_MINUTES;

/**
 * @type {Finance.Interval}
 */
Finance.Interval.prototype.FIFTEEN_MINUTES;

/**
 * @type {Finance.Interval}
 */
Finance.Interval.prototype.THIRTY_MINUTES;

/**
 * @type {Finance.Interval}
 */
Finance.Interval.prototype.SIXTY_MINUTES;


/**
 * Forms Services
 */
var Forms = {};

/**
 * Class FormApp
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.FormApp = function() {};

/**
 * @type {Forms.Alignment}
 */
Forms.FormApp.prototype.Alignment;

/**
 * @type {Forms.DestinationType}
 */
Forms.FormApp.prototype.DestinationType;

/**
 * @type {Forms.ItemType}
 */
Forms.FormApp.prototype.ItemType;

/**
 * @type {Forms.PageNavigationType}
 */
Forms.FormApp.prototype.PageNavigationType;

/**
 * @param {string} title
 * @return {Forms.Form}
 */
Forms.FormApp.prototype.create = function(title) {};

/**
 * @return {Forms.Form}
 */
Forms.FormApp.prototype.getActiveForm = function() {};

/**
 * @return {Base.Ui}
 */
Forms.FormApp.prototype.getUi = function() {};

/**
 * @param {string} id
 * @return {Forms.Form}
 */
Forms.FormApp.prototype.openById = function(id) {};

/**
 * @param {string} url
 * @return {Forms.Form}
 */
Forms.FormApp.prototype.openByUrl = function(url) {};


/**
 * @type {Forms.FormApp}
 */
var FormApp;

/**
 * Class CheckboxItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.CheckboxItem = function() {};

/**
 * @param {string} value
 * @return {Forms.Choice}
 */
Forms.CheckboxItem.prototype.createChoice = function(value) {};

/**
 * @param {Array.<string>} responses
 * @return {Forms.ItemResponse}
 */
Forms.CheckboxItem.prototype.createResponse = function(responses) {};

/**
 * @return {Forms.CheckboxItem}
 */
Forms.CheckboxItem.prototype.duplicate = function() {};

/**
 * @return {Array.<Forms.Choice>}
 */
Forms.CheckboxItem.prototype.getChoices = function() {};

/**
 * @return {string}
 */
Forms.CheckboxItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.CheckboxItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.CheckboxItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.CheckboxItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.CheckboxItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Forms.CheckboxItem.prototype.hasOtherOption = function() {};

/**
 * @return {boolean}
 */
Forms.CheckboxItem.prototype.isRequired = function() {};

/**
 * @param {Array.<string>} values
 * @return {Forms.CheckboxItem}
 */
Forms.CheckboxItem.prototype.setChoiceValues = function(values) {};

/**
 * @param {Array.<Forms.Choice>} choices
 * @return {Forms.CheckboxItem}
 */
Forms.CheckboxItem.prototype.setChoices = function(choices) {};

/**
 * @param {string} text
 * @return {Forms.CheckboxItem}
 */
Forms.CheckboxItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {Forms.CheckboxItem}
 */
Forms.CheckboxItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {Forms.CheckboxItem}
 */
Forms.CheckboxItem.prototype.setTitle = function(title) {};

/**
 * @param {boolean} enabled
 * @return {Forms.CheckboxItem}
 */
Forms.CheckboxItem.prototype.showOtherOption = function(enabled) {};

/**
 * Class Choice
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.Choice = function() {};

/**
 * @return {Forms.PageBreakItem}
 */
Forms.Choice.prototype.getGotoPage = function() {};

/**
 * @return {Forms.PageNavigationType}
 */
Forms.Choice.prototype.getPageNavigationType = function() {};

/**
 * @return {string}
 */
Forms.Choice.prototype.getValue = function() {};

/**
 * Class DateItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.DateItem = function() {};

/**
 * @param {Date} response
 * @return {Forms.ItemResponse}
 */
Forms.DateItem.prototype.createResponse = function(response) {};

/**
 * @return {Forms.DateItem}
 */
Forms.DateItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
Forms.DateItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.DateItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.DateItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.DateItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.DateItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Forms.DateItem.prototype.includesYear = function() {};

/**
 * @return {boolean}
 */
Forms.DateItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {Forms.DateItem}
 */
Forms.DateItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enableYear
 * @return {Forms.DateItem}
 */
Forms.DateItem.prototype.setIncludesYear = function(enableYear) {};

/**
 * @param {boolean} enabled
 * @return {Forms.DateItem}
 */
Forms.DateItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {Forms.DateItem}
 */
Forms.DateItem.prototype.setTitle = function(title) {};

/**
 * Class DateTimeItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.DateTimeItem = function() {};

/**
 * @param {Date} response
 * @return {Forms.ItemResponse}
 */
Forms.DateTimeItem.prototype.createResponse = function(response) {};

/**
 * @return {Forms.DateTimeItem}
 */
Forms.DateTimeItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
Forms.DateTimeItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.DateTimeItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.DateTimeItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.DateTimeItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.DateTimeItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Forms.DateTimeItem.prototype.includesYear = function() {};

/**
 * @return {boolean}
 */
Forms.DateTimeItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {Forms.DateTimeItem}
 */
Forms.DateTimeItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enableYear
 * @return {Forms.DateTimeItem}
 */
Forms.DateTimeItem.prototype.setIncludesYear = function(enableYear) {};

/**
 * @param {boolean} enabled
 * @return {Forms.DateTimeItem}
 */
Forms.DateTimeItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {Forms.DateTimeItem}
 */
Forms.DateTimeItem.prototype.setTitle = function(title) {};

/**
 * Class DurationItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.DurationItem = function() {};

/**
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 * @return {Forms.ItemResponse}
 */
Forms.DurationItem.prototype.createResponse = function(hours, minutes, seconds) {};

/**
 * @return {Forms.DurationItem}
 */
Forms.DurationItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
Forms.DurationItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.DurationItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.DurationItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.DurationItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.DurationItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Forms.DurationItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {Forms.DurationItem}
 */
Forms.DurationItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {Forms.DurationItem}
 */
Forms.DurationItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {Forms.DurationItem}
 */
Forms.DurationItem.prototype.setTitle = function(title) {};

/**
 * Class Form
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.Form = function() {};

/**
 * @return {Forms.CheckboxItem}
 */
Forms.Form.prototype.addCheckboxItem = function() {};

/**
 * @return {Forms.DateItem}
 */
Forms.Form.prototype.addDateItem = function() {};

/**
 * @return {Forms.DateTimeItem}
 */
Forms.Form.prototype.addDateTimeItem = function() {};

/**
 * @return {Forms.DurationItem}
 */
Forms.Form.prototype.addDurationItem = function() {};

/**
 * @param {string} emailAddress
 * @return {Forms.Form}
 */
Forms.Form.prototype.addEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Forms.Form}
 */
Forms.Form.prototype.addEditor = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {Forms.Form}
 */
Forms.Form.prototype.addEditors = function(emailAddresses) {};

/**
 * @return {Forms.GridItem}
 */
Forms.Form.prototype.addGridItem = function() {};

/**
 * @return {Forms.ImageItem}
 */
Forms.Form.prototype.addImageItem = function() {};

/**
 * @return {Forms.ListItem}
 */
Forms.Form.prototype.addListItem = function() {};

/**
 * @return {Forms.MultipleChoiceItem}
 */
Forms.Form.prototype.addMultipleChoiceItem = function() {};

/**
 * @return {Forms.PageBreakItem}
 */
Forms.Form.prototype.addPageBreakItem = function() {};

/**
 * @return {Forms.ParagraphTextItem}
 */
Forms.Form.prototype.addParagraphTextItem = function() {};

/**
 * @return {Forms.ScaleItem}
 */
Forms.Form.prototype.addScaleItem = function() {};

/**
 * @return {Forms.SectionHeaderItem}
 */
Forms.Form.prototype.addSectionHeaderItem = function() {};

/**
 * @return {Forms.TextItem}
 */
Forms.Form.prototype.addTextItem = function() {};

/**
 * @return {Forms.TimeItem}
 */
Forms.Form.prototype.addTimeItem = function() {};

/**
 * @return {boolean}
 */
Forms.Form.prototype.canEditResponse = function() {};

/**
 * @return {boolean}
 */
Forms.Form.prototype.collectsEmail = function() {};

/**
 * @return {Forms.FormResponse}
 */
Forms.Form.prototype.createResponse = function() {};

/**
 * @return {Forms.Form}
 */
Forms.Form.prototype.deleteAllResponses = function() {};

/**
 * @param {number} index
 */
Forms.Form.prototype.deleteItem = function(index) {};

/**
 * @param {Forms.Item} item
 */
Forms.Form.prototype.deleteItem = function(item) {};

/**
 * @return {string}
 */
Forms.Form.prototype.getConfirmationMessage = function() {};

/**
 * @return {string}
 */
Forms.Form.prototype.getDescription = function() {};

/**
 * @return {string}
 */
Forms.Form.prototype.getDestinationId = function() {};

/**
 * @return {Forms.DestinationType}
 */
Forms.Form.prototype.getDestinationType = function() {};

/**
 * @return {string}
 */
Forms.Form.prototype.getEditUrl = function() {};

/**
 * @return {Array.<Base.User>}
 */
Forms.Form.prototype.getEditors = function() {};

/**
 * @return {string}
 */
Forms.Form.prototype.getId = function() {};

/**
 * @param {number} id
 * @return {Forms.Item}
 */
Forms.Form.prototype.getItemById = function(id) {};

/**
 * @return {Array.<Forms.Item>}
 */
Forms.Form.prototype.getItems = function() {};

/**
 * @param {Forms.ItemType} itemType
 * @return {Array.<Forms.Item>}
 */
Forms.Form.prototype.getItems = function(itemType) {};

/**
 * @return {string}
 */
Forms.Form.prototype.getPublishedUrl = function() {};

/**
 * @param {string} responseId
 * @return {Forms.FormResponse}
 */
Forms.Form.prototype.getResponse = function(responseId) {};

/**
 * @return {Array.<Forms.FormResponse>}
 */
Forms.Form.prototype.getResponses = function() {};

/**
 * @param {Date} timestamp
 * @return {Array.<Forms.FormResponse>}
 */
Forms.Form.prototype.getResponses = function(timestamp) {};

/**
 * @return {string}
 */
Forms.Form.prototype.getSummaryUrl = function() {};

/**
 * @return {string}
 */
Forms.Form.prototype.getTitle = function() {};

/**
 * @return {boolean}
 */
Forms.Form.prototype.hasRespondAgainLink = function() {};

/**
 * @return {boolean}
 */
Forms.Form.prototype.isAcceptingResponses = function() {};

/**
 * @return {boolean}
 */
Forms.Form.prototype.isPublishingSummary = function() {};

/**
 * @param {number} from
 * @param {number} to
 * @return {Forms.Item}
 */
Forms.Form.prototype.moveItem = function(from, to) {};

/**
 * @param {Forms.Item} item
 * @param {number} toIndex
 * @return {Forms.Item}
 */
Forms.Form.prototype.moveItem = function(item, toIndex) {};

/**
 * @return {Forms.Form}
 */
Forms.Form.prototype.removeDestination = function() {};

/**
 * @param {string} emailAddress
 * @return {Forms.Form}
 */
Forms.Form.prototype.removeEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Forms.Form}
 */
Forms.Form.prototype.removeEditor = function(user) {};

/**
 * @return {boolean}
 */
Forms.Form.prototype.requiresLogin = function() {};

/**
 * @param {boolean} enabled
 * @return {Forms.Form}
 */
Forms.Form.prototype.setAcceptingResponses = function(enabled) {};

/**
 * @param {boolean} enabled
 * @return {Forms.Form}
 */
Forms.Form.prototype.setAllowResponseEdits = function(enabled) {};

/**
 * @param {boolean} collect
 * @return {Forms.Form}
 */
Forms.Form.prototype.setCollectEmail = function(collect) {};

/**
 * @param {string} message
 * @return {Forms.Form}
 */
Forms.Form.prototype.setConfirmationMessage = function(message) {};

/**
 * @param {string} description
 * @return {Forms.Form}
 */
Forms.Form.prototype.setDescription = function(description) {};

/**
 * @param {Forms.DestinationType} type
 * @param {string} id
 * @return {Forms.Form}
 */
Forms.Form.prototype.setDestination = function(type, id) {};

/**
 * @param {boolean} enabled
 * @return {Forms.Form}
 */
Forms.Form.prototype.setPublishingSummary = function(enabled) {};

/**
 * @param {boolean} requireLogin
 * @return {Forms.Form}
 */
Forms.Form.prototype.setRequireLogin = function(requireLogin) {};

/**
 * @param {boolean} enabled
 * @return {Forms.Form}
 */
Forms.Form.prototype.setShowLinkToRespondAgain = function(enabled) {};

/**
 * @param {string} title
 * @return {Forms.Form}
 */
Forms.Form.prototype.setTitle = function(title) {};

/**
 * Class FormResponse
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.FormResponse = function() {};

/**
 * @return {string}
 */
Forms.FormResponse.prototype.getEditResponseUrl = function() {};

/**
 * @return {string}
 */
Forms.FormResponse.prototype.getId = function() {};

/**
 * @return {Array.<Forms.ItemResponse>}
 */
Forms.FormResponse.prototype.getItemResponses = function() {};

/**
 * @return {string}
 */
Forms.FormResponse.prototype.getRespondentEmail = function() {};

/**
 * @param {Forms.Item} item
 * @return {Forms.ItemResponse}
 */
Forms.FormResponse.prototype.getResponseForItem = function(item) {};

/**
 * @return {Date}
 */
Forms.FormResponse.prototype.getTimestamp = function() {};

/**
 * @return {Forms.FormResponse}
 */
Forms.FormResponse.prototype.submit = function() {};

/**
 * @return {string}
 */
Forms.FormResponse.prototype.toPrefilledUrl = function() {};

/**
 * @param {Forms.ItemResponse} response
 * @return {Forms.FormResponse}
 */
Forms.FormResponse.prototype.withItemResponse = function(response) {};

/**
 * Class GridItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.GridItem = function() {};

/**
 * @param {Array.<string>} responses
 * @return {Forms.ItemResponse}
 */
Forms.GridItem.prototype.createResponse = function(responses) {};

/**
 * @return {Forms.GridItem}
 */
Forms.GridItem.prototype.duplicate = function() {};

/**
 * @return {Array.<string>}
 */
Forms.GridItem.prototype.getColumns = function() {};

/**
 * @return {string}
 */
Forms.GridItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.GridItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.GridItem.prototype.getIndex = function() {};

/**
 * @return {Array.<string>}
 */
Forms.GridItem.prototype.getRows = function() {};

/**
 * @return {string}
 */
Forms.GridItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.GridItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Forms.GridItem.prototype.isRequired = function() {};

/**
 * @param {Array.<string>} columns
 * @return {Forms.GridItem}
 */
Forms.GridItem.prototype.setColumns = function(columns) {};

/**
 * @param {string} text
 * @return {Forms.GridItem}
 */
Forms.GridItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {Forms.GridItem}
 */
Forms.GridItem.prototype.setRequired = function(enabled) {};

/**
 * @param {Array.<string>} rows
 * @return {Forms.GridItem}
 */
Forms.GridItem.prototype.setRows = function(rows) {};

/**
 * @param {string} title
 * @return {Forms.GridItem}
 */
Forms.GridItem.prototype.setTitle = function(title) {};

/**
 * Class ImageItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.ImageItem = function() {};

/**
 * @return {Forms.ImageItem}
 */
Forms.ImageItem.prototype.duplicate = function() {};

/**
 * @return {Forms.Alignment}
 */
Forms.ImageItem.prototype.getAlignment = function() {};

/**
 * @return {string}
 */
Forms.ImageItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.ImageItem.prototype.getId = function() {};

/**
 * @return {Base.Blob}
 */
Forms.ImageItem.prototype.getImage = function() {};

/**
 * @return {number}
 */
Forms.ImageItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.ImageItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.ImageItem.prototype.getType = function() {};

/**
 * @return {number}
 */
Forms.ImageItem.prototype.getWidth = function() {};

/**
 * @param {Forms.Alignment} alignment
 * @return {Forms.ImageItem}
 */
Forms.ImageItem.prototype.setAlignment = function(alignment) {};

/**
 * @param {string} text
 * @return {Forms.ImageItem}
 */
Forms.ImageItem.prototype.setHelpText = function(text) {};

/**
 * @param {Base.BlobSource} image
 * @return {Forms.ImageItem}
 */
Forms.ImageItem.prototype.setImage = function(image) {};

/**
 * @param {string} title
 * @return {Forms.ImageItem}
 */
Forms.ImageItem.prototype.setTitle = function(title) {};

/**
 * @param {number} width
 * @return {Forms.ImageItem}
 */
Forms.ImageItem.prototype.setWidth = function(width) {};

/**
 * Class Item
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.Item = function() {};

/**
 * @return {Forms.CheckboxItem}
 */
Forms.Item.prototype.asCheckboxItem = function() {};

/**
 * @return {Forms.DateItem}
 */
Forms.Item.prototype.asDateItem = function() {};

/**
 * @return {Forms.DateTimeItem}
 */
Forms.Item.prototype.asDateTimeItem = function() {};

/**
 * @return {Forms.DurationItem}
 */
Forms.Item.prototype.asDurationItem = function() {};

/**
 * @return {Forms.GridItem}
 */
Forms.Item.prototype.asGridItem = function() {};

/**
 * @return {Forms.ImageItem}
 */
Forms.Item.prototype.asImageItem = function() {};

/**
 * @return {Forms.ListItem}
 */
Forms.Item.prototype.asListItem = function() {};

/**
 * @return {Forms.MultipleChoiceItem}
 */
Forms.Item.prototype.asMultipleChoiceItem = function() {};

/**
 * @return {Forms.PageBreakItem}
 */
Forms.Item.prototype.asPageBreakItem = function() {};

/**
 * @return {Forms.ParagraphTextItem}
 */
Forms.Item.prototype.asParagraphTextItem = function() {};

/**
 * @return {Forms.ScaleItem}
 */
Forms.Item.prototype.asScaleItem = function() {};

/**
 * @return {Forms.SectionHeaderItem}
 */
Forms.Item.prototype.asSectionHeaderItem = function() {};

/**
 * @return {Forms.TextItem}
 */
Forms.Item.prototype.asTextItem = function() {};

/**
 * @return {Forms.TimeItem}
 */
Forms.Item.prototype.asTimeItem = function() {};

/**
 * @return {Forms.Item}
 */
Forms.Item.prototype.duplicate = function() {};

/**
 * @return {string}
 */
Forms.Item.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.Item.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.Item.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.Item.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.Item.prototype.getType = function() {};

/**
 * @param {string} text
 * @return {Forms.Item}
 */
Forms.Item.prototype.setHelpText = function(text) {};

/**
 * @param {string} title
 * @return {Forms.Item}
 */
Forms.Item.prototype.setTitle = function(title) {};

/**
 * Class ItemResponse
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.ItemResponse = function() {};

/**
 * @return {Forms.Item}
 */
Forms.ItemResponse.prototype.getItem = function() {};

/**
 * @return {Object}
 */
Forms.ItemResponse.prototype.getResponse = function() {};

/**
 * Class ListItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.ListItem = function() {};

/**
 * @param {string} value
 * @return {Forms.Choice}
 */
Forms.ListItem.prototype.createChoice = function(value) {};

/**
 * @param {string} value
 * @param {Forms.PageBreakItem} navigationItem
 * @return {Forms.Choice}
 */
Forms.ListItem.prototype.createChoice = function(value, navigationItem) {};

/**
 * @param {string} value
 * @param {Forms.PageNavigationType} navigationType
 * @return {Forms.Choice}
 */
Forms.ListItem.prototype.createChoice = function(value, navigationType) {};

/**
 * @param {string} response
 * @return {Forms.ItemResponse}
 */
Forms.ListItem.prototype.createResponse = function(response) {};

/**
 * @return {Forms.ListItem}
 */
Forms.ListItem.prototype.duplicate = function() {};

/**
 * @return {Array.<Forms.Choice>}
 */
Forms.ListItem.prototype.getChoices = function() {};

/**
 * @return {string}
 */
Forms.ListItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.ListItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.ListItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.ListItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.ListItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Forms.ListItem.prototype.isRequired = function() {};

/**
 * @param {Array.<string>} values
 * @return {Forms.ListItem}
 */
Forms.ListItem.prototype.setChoiceValues = function(values) {};

/**
 * @param {Array.<Forms.Choice>} choices
 * @return {Forms.ListItem}
 */
Forms.ListItem.prototype.setChoices = function(choices) {};

/**
 * @param {string} text
 * @return {Forms.ListItem}
 */
Forms.ListItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {Forms.ListItem}
 */
Forms.ListItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {Forms.ListItem}
 */
Forms.ListItem.prototype.setTitle = function(title) {};

/**
 * Class MultipleChoiceItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.MultipleChoiceItem = function() {};

/**
 * @param {string} value
 * @return {Forms.Choice}
 */
Forms.MultipleChoiceItem.prototype.createChoice = function(value) {};

/**
 * @param {string} value
 * @param {Forms.PageBreakItem} navigationItem
 * @return {Forms.Choice}
 */
Forms.MultipleChoiceItem.prototype.createChoice = function(value, navigationItem) {};

/**
 * @param {string} value
 * @param {Forms.PageNavigationType} navigationType
 * @return {Forms.Choice}
 */
Forms.MultipleChoiceItem.prototype.createChoice = function(value, navigationType) {};

/**
 * @param {string} response
 * @return {Forms.ItemResponse}
 */
Forms.MultipleChoiceItem.prototype.createResponse = function(response) {};

/**
 * @return {Forms.MultipleChoiceItem}
 */
Forms.MultipleChoiceItem.prototype.duplicate = function() {};

/**
 * @return {Array.<Forms.Choice>}
 */
Forms.MultipleChoiceItem.prototype.getChoices = function() {};

/**
 * @return {string}
 */
Forms.MultipleChoiceItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.MultipleChoiceItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.MultipleChoiceItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.MultipleChoiceItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.MultipleChoiceItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Forms.MultipleChoiceItem.prototype.hasOtherOption = function() {};

/**
 * @return {boolean}
 */
Forms.MultipleChoiceItem.prototype.isRequired = function() {};

/**
 * @param {Array.<string>} values
 * @return {Forms.MultipleChoiceItem}
 */
Forms.MultipleChoiceItem.prototype.setChoiceValues = function(values) {};

/**
 * @param {Array.<Forms.Choice>} choices
 * @return {Forms.MultipleChoiceItem}
 */
Forms.MultipleChoiceItem.prototype.setChoices = function(choices) {};

/**
 * @param {string} text
 * @return {Forms.MultipleChoiceItem}
 */
Forms.MultipleChoiceItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {Forms.MultipleChoiceItem}
 */
Forms.MultipleChoiceItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {Forms.MultipleChoiceItem}
 */
Forms.MultipleChoiceItem.prototype.setTitle = function(title) {};

/**
 * @param {boolean} enabled
 * @return {Forms.MultipleChoiceItem}
 */
Forms.MultipleChoiceItem.prototype.showOtherOption = function(enabled) {};

/**
 * Class PageBreakItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.PageBreakItem = function() {};

/**
 * @return {Forms.PageBreakItem}
 */
Forms.PageBreakItem.prototype.duplicate = function() {};

/**
 * @return {Forms.PageBreakItem}
 */
Forms.PageBreakItem.prototype.getGoToPage = function() {};

/**
 * @return {string}
 */
Forms.PageBreakItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.PageBreakItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.PageBreakItem.prototype.getIndex = function() {};

/**
 * @return {Forms.PageNavigationType}
 */
Forms.PageBreakItem.prototype.getPageNavigationType = function() {};

/**
 * @return {string}
 */
Forms.PageBreakItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.PageBreakItem.prototype.getType = function() {};

/**
 * @param {Forms.PageBreakItem} goToPageItem
 * @return {Forms.PageBreakItem}
 */
Forms.PageBreakItem.prototype.setGoToPage = function(goToPageItem) {};

/**
 * @param {Forms.PageNavigationType} navigationType
 * @return {Forms.PageBreakItem}
 */
Forms.PageBreakItem.prototype.setGoToPage = function(navigationType) {};

/**
 * @param {string} text
 * @return {Forms.PageBreakItem}
 */
Forms.PageBreakItem.prototype.setHelpText = function(text) {};

/**
 * @param {string} title
 * @return {Forms.PageBreakItem}
 */
Forms.PageBreakItem.prototype.setTitle = function(title) {};

/**
 * Class ParagraphTextItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.ParagraphTextItem = function() {};

/**
 * @param {string} response
 * @return {Forms.ItemResponse}
 */
Forms.ParagraphTextItem.prototype.createResponse = function(response) {};

/**
 * @return {Forms.ParagraphTextItem}
 */
Forms.ParagraphTextItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
Forms.ParagraphTextItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.ParagraphTextItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.ParagraphTextItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.ParagraphTextItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.ParagraphTextItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Forms.ParagraphTextItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {Forms.ParagraphTextItem}
 */
Forms.ParagraphTextItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {Forms.ParagraphTextItem}
 */
Forms.ParagraphTextItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {Forms.ParagraphTextItem}
 */
Forms.ParagraphTextItem.prototype.setTitle = function(title) {};

/**
 * Class ScaleItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.ScaleItem = function() {};

/**
 * @param {number} response
 * @return {Forms.ItemResponse}
 */
Forms.ScaleItem.prototype.createResponse = function(response) {};

/**
 * @return {Forms.ScaleItem}
 */
Forms.ScaleItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
Forms.ScaleItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.ScaleItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.ScaleItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.ScaleItem.prototype.getLeftLabel = function() {};

/**
 * @return {number}
 */
Forms.ScaleItem.prototype.getLowerBound = function() {};

/**
 * @return {string}
 */
Forms.ScaleItem.prototype.getRightLabel = function() {};

/**
 * @return {string}
 */
Forms.ScaleItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.ScaleItem.prototype.getType = function() {};

/**
 * @return {number}
 */
Forms.ScaleItem.prototype.getUpperBound = function() {};

/**
 * @return {boolean}
 */
Forms.ScaleItem.prototype.isRequired = function() {};

/**
 * @param {number} lower
 * @param {number} upper
 * @return {Forms.ScaleItem}
 */
Forms.ScaleItem.prototype.setBounds = function(lower, upper) {};

/**
 * @param {string} text
 * @return {Forms.ScaleItem}
 */
Forms.ScaleItem.prototype.setHelpText = function(text) {};

/**
 * @param {string} lower
 * @param {string} upper
 * @return {Forms.ScaleItem}
 */
Forms.ScaleItem.prototype.setLabels = function(lower, upper) {};

/**
 * @param {boolean} enabled
 * @return {Forms.ScaleItem}
 */
Forms.ScaleItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {Forms.ScaleItem}
 */
Forms.ScaleItem.prototype.setTitle = function(title) {};

/**
 * Class SectionHeaderItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.SectionHeaderItem = function() {};

/**
 * @return {Forms.SectionHeaderItem}
 */
Forms.SectionHeaderItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
Forms.SectionHeaderItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.SectionHeaderItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.SectionHeaderItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.SectionHeaderItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.SectionHeaderItem.prototype.getType = function() {};

/**
 * @param {string} text
 * @return {Forms.SectionHeaderItem}
 */
Forms.SectionHeaderItem.prototype.setHelpText = function(text) {};

/**
 * @param {string} title
 * @return {Forms.SectionHeaderItem}
 */
Forms.SectionHeaderItem.prototype.setTitle = function(title) {};

/**
 * Class TextItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.TextItem = function() {};

/**
 * @param {string} response
 * @return {Forms.ItemResponse}
 */
Forms.TextItem.prototype.createResponse = function(response) {};

/**
 * @return {Forms.TextItem}
 */
Forms.TextItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
Forms.TextItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.TextItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.TextItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.TextItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.TextItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Forms.TextItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {Forms.TextItem}
 */
Forms.TextItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {Forms.TextItem}
 */
Forms.TextItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {Forms.TextItem}
 */
Forms.TextItem.prototype.setTitle = function(title) {};

/**
 * Class TimeItem
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.TimeItem = function() {};

/**
 * @param {number} hour
 * @param {number} minute
 * @return {Forms.ItemResponse}
 */
Forms.TimeItem.prototype.createResponse = function(hour, minute) {};

/**
 * @return {Forms.TimeItem}
 */
Forms.TimeItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
Forms.TimeItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
Forms.TimeItem.prototype.getId = function() {};

/**
 * @return {number}
 */
Forms.TimeItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
Forms.TimeItem.prototype.getTitle = function() {};

/**
 * @return {Forms.ItemType}
 */
Forms.TimeItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
Forms.TimeItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {Forms.TimeItem}
 */
Forms.TimeItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {Forms.TimeItem}
 */
Forms.TimeItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {Forms.TimeItem}
 */
Forms.TimeItem.prototype.setTitle = function(title) {};

/**
 * Enum Alignment
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.Alignment = function() {};

/**
 * @type {Forms.Alignment}
 */
Forms.Alignment.prototype.LEFT;

/**
 * @type {Forms.Alignment}
 */
Forms.Alignment.prototype.CENTER;

/**
 * @type {Forms.Alignment}
 */
Forms.Alignment.prototype.RIGHT;

/**
 * Enum DestinationType
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.DestinationType = function() {};

/**
 * @type {Forms.DestinationType}
 */
Forms.DestinationType.prototype.SPREADSHEET;

/**
 * Enum ItemType
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.ItemType = function() {};

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.CHECKBOX;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.DATE;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.DATETIME;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.DURATION;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.GRID;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.IMAGE;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.LIST;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.MULTIPLE_CHOICE;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.PAGE_BREAK;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.PARAGRAPH_TEXT;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.SCALE;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.SECTION_HEADER;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.TEXT;

/**
 * @type {Forms.ItemType}
 */
Forms.ItemType.prototype.TIME;

/**
 * Enum PageNavigationType
 * Last updated May 15, 2013.
 * @constructor
 */
Forms.PageNavigationType = function() {};

/**
 * @type {Forms.PageNavigationType}
 */
Forms.PageNavigationType.prototype.CONTINUE;

/**
 * @type {Forms.PageNavigationType}
 */
Forms.PageNavigationType.prototype.GO_TO_PAGE;

/**
 * @type {Forms.PageNavigationType}
 */
Forms.PageNavigationType.prototype.RESTART;

/**
 * @type {Forms.PageNavigationType}
 */
Forms.PageNavigationType.prototype.SUBMIT;


/**
 * Gmail Services
 */
var Gmail = {};

/**
 * Class GmailApp
 * Last updated June 27, 2013.
 * @constructor
 */
Gmail.GmailApp = function() {};

/**
 * @param {string} name
 * @return {Gmail.GmailLabel}
 */
Gmail.GmailApp.prototype.createLabel = function(name) {};

/**
 * @param {Gmail.GmailLabel} label
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.deleteLabel = function(label) {};

/**
 * @return {Array.<string>}
 */
Gmail.GmailApp.prototype.getAliases = function() {};

/**
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getChatThreads = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getChatThreads = function(start, max) {};

/**
 * @return {Array.<Gmail.GmailMessage>}
 */
Gmail.GmailApp.prototype.getDraftMessages = function() {};

/**
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getInboxThreads = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getInboxThreads = function(start, max) {};

/**
 * @return {number}
 */
Gmail.GmailApp.prototype.getInboxUnreadCount = function() {};

/**
 * @param {string} id
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailApp.prototype.getMessageById = function(id) {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Array.<Gmail.GmailMessage>}
 */
Gmail.GmailApp.prototype.getMessagesForThread = function(thread) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Array.<Array.<Gmail.GmailMessage>>}
 */
Gmail.GmailApp.prototype.getMessagesForThreads = function(threads) {};

/**
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getPriorityInboxThreads = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getPriorityInboxThreads = function(start, max) {};

/**
 * @return {number}
 */
Gmail.GmailApp.prototype.getPriorityInboxUnreadCount = function() {};

/**
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getSpamThreads = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getSpamThreads = function(start, max) {};

/**
 * @return {number}
 */
Gmail.GmailApp.prototype.getSpamUnreadCount = function() {};

/**
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getStarredThreads = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getStarredThreads = function(start, max) {};

/**
 * @return {number}
 */
Gmail.GmailApp.prototype.getStarredUnreadCount = function() {};

/**
 * @param {string} id
 * @return {Gmail.GmailThread}
 */
Gmail.GmailApp.prototype.getThreadById = function(id) {};

/**
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getTrashThreads = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.getTrashThreads = function(start, max) {};

/**
 * @param {string} name
 * @return {Gmail.GmailLabel}
 */
Gmail.GmailApp.prototype.getUserLabelByName = function(name) {};

/**
 * @return {Array.<Gmail.GmailLabel>}
 */
Gmail.GmailApp.prototype.getUserLabels = function() {};

/**
 * @param {Gmail.GmailMessage} message
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markMessageRead = function(message) {};

/**
 * @param {Gmail.GmailMessage} message
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markMessageUnread = function(message) {};

/**
 * @param {Array.<Gmail.GmailMessage>} messages
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markMessagesRead = function(messages) {};

/**
 * @param {Array.<Gmail.GmailMessage>} messages
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markMessagesUnread = function(messages) {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markThreadImportant = function(thread) {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markThreadRead = function(thread) {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markThreadUnimportant = function(thread) {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markThreadUnread = function(thread) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markThreadsImportant = function(threads) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markThreadsRead = function(threads) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markThreadsUnimportant = function(threads) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.markThreadsUnread = function(threads) {};

/**
 * @param {Gmail.GmailMessage} message
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.moveMessageToTrash = function(message) {};

/**
 * @param {Array.<Gmail.GmailMessage>} messages
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.moveMessagesToTrash = function(messages) {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.moveThreadToArchive = function(thread) {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.moveThreadToInbox = function(thread) {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.moveThreadToSpam = function(thread) {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.moveThreadToTrash = function(thread) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.moveThreadsToArchive = function(threads) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.moveThreadsToInbox = function(threads) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.moveThreadsToSpam = function(threads) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.moveThreadsToTrash = function(threads) {};

/**
 * @param {Gmail.GmailMessage} message
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.refreshMessage = function(message) {};

/**
 * @param {Array.<Gmail.GmailMessage>} messages
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.refreshMessages = function(messages) {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.refreshThread = function(thread) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.refreshThreads = function(threads) {};

/**
 * @param {string} query
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.search = function(query) {};

/**
 * @param {string} query
 * @param {number} start
 * @param {number} max
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailApp.prototype.search = function(query, start, max) {};

/**
 * @param {string} recipient
 * @param {string} subject
 * @param {string} body
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.sendEmail = function(recipient, subject, body) {};

/**
 * @param {string} recipient
 * @param {string} subject
 * @param {string} body
 * @param {Object} options
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.sendEmail = function(recipient, subject, body, options) {};

/**
 * @param {Gmail.GmailMessage} message
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.starMessage = function(message) {};

/**
 * @param {Array.<Gmail.GmailMessage>} messages
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.starMessages = function(messages) {};

/**
 * @param {Gmail.GmailMessage} message
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.unstarMessage = function(message) {};

/**
 * @param {Array.<Gmail.GmailMessage>} messages
 * @return {Gmail.GmailApp}
 */
Gmail.GmailApp.prototype.unstarMessages = function(messages) {};


/**
 * @type {Gmail.GmailApp}
 */
var GmailApp;

/**
 * Class GmailAttachment
 * Last updated July 11, 2013.
 * @constructor
 */
Gmail.GmailAttachment = function() {};

/**
 * @return {Base.Blob}
 */
Gmail.GmailAttachment.prototype.copyBlob = function() {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Gmail.GmailAttachment.prototype.getAs = function(contentType) {};

/**
 * @return {Array.<Byte>}
 */
Gmail.GmailAttachment.prototype.getBytes = function() {};

/**
 * @return {string}
 */
Gmail.GmailAttachment.prototype.getContentType = function() {};

/**
 * @return {string}
 */
Gmail.GmailAttachment.prototype.getDataAsString = function() {};

/**
 * @param {string} charset
 * @return {string}
 */
Gmail.GmailAttachment.prototype.getDataAsString = function(charset) {};

/**
 * @return {string}
 */
Gmail.GmailAttachment.prototype.getName = function() {};

/**
 * @return {number}
 */
Gmail.GmailAttachment.prototype.getSize = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailAttachment.prototype.isGoogleType = function() {};

/**
 * @param {Array.<Byte>} data
 * @return {Base.Blob}
 */
Gmail.GmailAttachment.prototype.setBytes = function(data) {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Gmail.GmailAttachment.prototype.setContentType = function(contentType) {};

/**
 * @return {Base.Blob}
 */
Gmail.GmailAttachment.prototype.setContentTypeFromExtension = function() {};

/**
 * @param {string} string
 * @return {Base.Blob}
 */
Gmail.GmailAttachment.prototype.setDataFromString = function(string) {};

/**
 * @param {string} string
 * @param {string} charset
 * @return {Base.Blob}
 */
Gmail.GmailAttachment.prototype.setDataFromString = function(string, charset) {};

/**
 * @param {string} name
 * @return {Base.Blob}
 */
Gmail.GmailAttachment.prototype.setName = function(name) {};

/**
 * @deprecated
 * @return {Array.<Base.Blob>}
 */
Gmail.GmailAttachment.prototype.getAllBlobs = function() {};

/**
 * Class GmailLabel
 * Last updated March 26, 2013.
 * @constructor
 */
Gmail.GmailLabel = function() {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Gmail.GmailLabel}
 */
Gmail.GmailLabel.prototype.addToThread = function(thread) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Gmail.GmailLabel}
 */
Gmail.GmailLabel.prototype.addToThreads = function(threads) {};

/**
 */
Gmail.GmailLabel.prototype.deleteLabel = function() {};

/**
 * @return {string}
 */
Gmail.GmailLabel.prototype.getName = function() {};

/**
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailLabel.prototype.getThreads = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<Gmail.GmailThread>}
 */
Gmail.GmailLabel.prototype.getThreads = function(start, max) {};

/**
 * @return {number}
 */
Gmail.GmailLabel.prototype.getUnreadCount = function() {};

/**
 * @param {Gmail.GmailThread} thread
 * @return {Gmail.GmailLabel}
 */
Gmail.GmailLabel.prototype.removeFromThread = function(thread) {};

/**
 * @param {Array.<Gmail.GmailThread>} threads
 * @return {Gmail.GmailLabel}
 */
Gmail.GmailLabel.prototype.removeFromThreads = function(threads) {};

/**
 * Class GmailMessage
 * Last updated June 27, 2013.
 * @constructor
 */
Gmail.GmailMessage = function() {};

/**
 * @param {string} recipient
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.forward = function(recipient) {};

/**
 * @param {string} recipient
 * @param {Object} options
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.forward = function(recipient, options) {};

/**
 * @return {Array.<Gmail.GmailAttachment>}
 */
Gmail.GmailMessage.prototype.getAttachments = function() {};

/**
 * @return {string}
 */
Gmail.GmailMessage.prototype.getBcc = function() {};

/**
 * @return {string}
 */
Gmail.GmailMessage.prototype.getBody = function() {};

/**
 * @return {string}
 */
Gmail.GmailMessage.prototype.getCc = function() {};

/**
 * @return {Date}
 */
Gmail.GmailMessage.prototype.getDate = function() {};

/**
 * @return {string}
 */
Gmail.GmailMessage.prototype.getFrom = function() {};

/**
 * @return {string}
 */
Gmail.GmailMessage.prototype.getId = function() {};

/**
 * @return {string}
 */
Gmail.GmailMessage.prototype.getRawContent = function() {};

/**
 * @return {string}
 */
Gmail.GmailMessage.prototype.getReplyTo = function() {};

/**
 * @return {string}
 */
Gmail.GmailMessage.prototype.getSubject = function() {};

/**
 * @return {Gmail.GmailThread}
 */
Gmail.GmailMessage.prototype.getThread = function() {};

/**
 * @return {string}
 */
Gmail.GmailMessage.prototype.getTo = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailMessage.prototype.isDraft = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailMessage.prototype.isInChats = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailMessage.prototype.isInInbox = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailMessage.prototype.isInTrash = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailMessage.prototype.isStarred = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailMessage.prototype.isUnread = function() {};

/**
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.markRead = function() {};

/**
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.markUnread = function() {};

/**
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.moveToTrash = function() {};

/**
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.refresh = function() {};

/**
 * @param {string} body
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.reply = function(body) {};

/**
 * @param {string} body
 * @param {Object} options
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.reply = function(body, options) {};

/**
 * @param {string} body
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.replyAll = function(body) {};

/**
 * @param {string} body
 * @param {Object} options
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.replyAll = function(body, options) {};

/**
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.star = function() {};

/**
 * @return {Gmail.GmailMessage}
 */
Gmail.GmailMessage.prototype.unstar = function() {};

/**
 * Class GmailThread
 * Last updated March 26, 2013.
 * @constructor
 */
Gmail.GmailThread = function() {};

/**
 * @param {Gmail.GmailLabel} label
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.addLabel = function(label) {};

/**
 * @return {string}
 */
Gmail.GmailThread.prototype.getFirstMessageSubject = function() {};

/**
 * @return {string}
 */
Gmail.GmailThread.prototype.getId = function() {};

/**
 * @return {Array.<Gmail.GmailLabel>}
 */
Gmail.GmailThread.prototype.getLabels = function() {};

/**
 * @return {Date}
 */
Gmail.GmailThread.prototype.getLastMessageDate = function() {};

/**
 * @return {number}
 */
Gmail.GmailThread.prototype.getMessageCount = function() {};

/**
 * @return {Array.<Gmail.GmailMessage>}
 */
Gmail.GmailThread.prototype.getMessages = function() {};

/**
 * @return {string}
 */
Gmail.GmailThread.prototype.getPermalink = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailThread.prototype.hasStarredMessages = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailThread.prototype.isImportant = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailThread.prototype.isInChats = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailThread.prototype.isInInbox = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailThread.prototype.isInSpam = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailThread.prototype.isInTrash = function() {};

/**
 * @return {boolean}
 */
Gmail.GmailThread.prototype.isUnread = function() {};

/**
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.markImportant = function() {};

/**
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.markRead = function() {};

/**
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.markUnimportant = function() {};

/**
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.markUnread = function() {};

/**
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.moveToArchive = function() {};

/**
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.moveToInbox = function() {};

/**
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.moveToSpam = function() {};

/**
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.moveToTrash = function() {};

/**
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.refresh = function() {};

/**
 * @param {Gmail.GmailLabel} label
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.removeLabel = function(label) {};

/**
 * @param {string} body
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.reply = function(body) {};

/**
 * @param {string} body
 * @param {Object} options
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.reply = function(body, options) {};

/**
 * @param {string} body
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.replyAll = function(body) {};

/**
 * @param {string} body
 * @param {Object} options
 * @return {Gmail.GmailThread}
 */
Gmail.GmailThread.prototype.replyAll = function(body, options) {};


/**
 * Groups Services
 */
var Groups = {};

/**
 * Class GroupsApp
 * Last updated March 26, 2013.
 * @constructor
 */
Groups.GroupsApp = function() {};

/**
 * @type {Groups.Role}
 */
Groups.GroupsApp.prototype.Role;

/**
 * @param {string} email
 * @return {Groups.Group}
 */
Groups.GroupsApp.prototype.getGroupByEmail = function(email) {};

/**
 * @return {Array.<Groups.Group>}
 */
Groups.GroupsApp.prototype.getGroups = function() {};


/**
 * @type {Groups.GroupsApp}
 */
var GroupsApp;

/**
 * Class Group
 * Last updated March 26, 2013.
 * @constructor
 */
Groups.Group = function() {};

/**
 * @return {string}
 */
Groups.Group.prototype.getEmail = function() {};

/**
 * @param {string} email
 * @return {Groups.Role}
 */
Groups.Group.prototype.getRole = function(email) {};

/**
 * @param {Base.User} user
 * @return {Groups.Role}
 */
Groups.Group.prototype.getRole = function(user) {};

/**
 * @return {Array.<Base.User>}
 */
Groups.Group.prototype.getUsers = function() {};

/**
 * @param {string} email
 * @return {boolean}
 */
Groups.Group.prototype.hasUser = function(email) {};

/**
 * @param {Base.User} user
 * @return {boolean}
 */
Groups.Group.prototype.hasUser = function(user) {};

/**
 * Enum Role
 * Last updated March 26, 2013.
 * @constructor
 */
Groups.Role = function() {};

/**
 * @type {Groups.Role}
 */
Groups.Role.prototype.OWNER;

/**
 * @type {Groups.Role}
 */
Groups.Role.prototype.MANAGER;

/**
 * @type {Groups.Role}
 */
Groups.Role.prototype.MEMBER;

/**
 * @type {Groups.Role}
 */
Groups.Role.prototype.INVITED;

/**
 * @type {Groups.Role}
 */
Groups.Role.prototype.PENDING;


/**
 * Language Services
 */
var Language = {};

/**
 * Class LanguageApp
 * Last updated June 27, 2013.
 * @constructor
 */
Language.LanguageApp = function() {};

/**
 * @return {string}
 */
Language.LanguageApp.prototype.translate = function(text, sourceLanguage, targetLanguage) {};

/**
 * @return {string}
 */
Language.LanguageApp.prototype.translate = function(text, sourceLanguage, targetLanguage, advancedArgs) {};


/**
 * @type {Language.LanguageApp}
 */
var LanguageApp;


/**
 * Maps Services
 */
var Maps = {};

/**
 * Class Maps
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.Maps = function() {};

/**
 * @type {Maps.DirectionFinderEnums}
 */
Maps.Maps.prototype.DirectionFinder;

/**
 * @type {Maps.StaticMapEnums}
 */
Maps.Maps.prototype.StaticMap;

/**
 * @param {string} polyline
 * @return {Array.<Number>}
 */
Maps.Maps.prototype.decodePolyline = function(polyline) {};

/**
 * @param {Array.<Number>} points
 * @return {string}
 */
Maps.Maps.prototype.encodePolyline = function(points) {};

/**
 * @return {Maps.DirectionFinder}
 */
Maps.Maps.prototype.newDirectionFinder = function() {};

/**
 * @return {Maps.ElevationSampler}
 */
Maps.Maps.prototype.newElevationSampler = function() {};

/**
 * @return {Maps.Geocoder}
 */
Maps.Maps.prototype.newGeocoder = function() {};

/**
 * @return {Maps.StaticMap}
 */
Maps.Maps.prototype.newStaticMap = function() {};

/**
 * @param {string} clientId
 * @param {string} signingKey
 */
Maps.Maps.prototype.setAuthentication = function(clientId, signingKey) {};


/**
 * @type {Maps.Maps}
 */
var Maps;

/**
 * Class DirectionFinder
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.DirectionFinder = function() {};

/**
 * @param {Number} latitude
 * @param {Number} longitude
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.addWaypoint = function(latitude, longitude) {};

/**
 * @param {string} address
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.addWaypoint = function(address) {};

/**
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.clearWaypoints = function() {};

/**
 * @return {Object}
 */
Maps.DirectionFinder.prototype.getDirections = function() {};

/**
 * @param {boolean} useAlternatives
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setAlternatives = function(useAlternatives) {};

/**
 * @param {Date} time
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setArrive = function(time) {};

/**
 * @param {string} avoid
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setAvoid = function(avoid) {};

/**
 * @param {Date} time
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setDepart = function(time) {};

/**
 * @param {Number} latitude
 * @param {Number} longitude
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setDestination = function(latitude, longitude) {};

/**
 * @param {string} address
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setDestination = function(address) {};

/**
 * @param {string} language
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setLanguage = function(language) {};

/**
 * @param {string} mode
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setMode = function(mode) {};

/**
 * @param {boolean} optimizeOrder
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setOptimizeWaypoints = function(optimizeOrder) {};

/**
 * @param {Number} latitude
 * @param {Number} longitude
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setOrigin = function(latitude, longitude) {};

/**
 * @param {string} address
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setOrigin = function(address) {};

/**
 * @param {string} region
 * @return {Maps.DirectionFinder}
 */
Maps.DirectionFinder.prototype.setRegion = function(region) {};

/**
 * Class ElevationSampler
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.ElevationSampler = function() {};

/**
 * @param {Number} latitude
 * @param {Number} longitude
 * @return {Object}
 */
Maps.ElevationSampler.prototype.sampleLocation = function(latitude, longitude) {};

/**
 * @param {Array.<Number>} points
 * @return {Object}
 */
Maps.ElevationSampler.prototype.sampleLocations = function(points) {};

/**
 * @param {string} encodedPolyline
 * @return {Object}
 */
Maps.ElevationSampler.prototype.sampleLocations = function(encodedPolyline) {};

/**
 * @param {Array.<Number>} points
 * @param {number} numSamples
 * @return {Object}
 */
Maps.ElevationSampler.prototype.samplePath = function(points, numSamples) {};

/**
 * @param {string} encodedPolyline
 * @param {number} numSamples
 * @return {Object}
 */
Maps.ElevationSampler.prototype.samplePath = function(encodedPolyline, numSamples) {};

/**
 * Class Geocoder
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.Geocoder = function() {};

/**
 * @param {string} address
 * @return {Object}
 */
Maps.Geocoder.prototype.geocode = function(address) {};

/**
 * @param {Number} latitude
 * @param {Number} longitude
 * @return {Object}
 */
Maps.Geocoder.prototype.reverseGeocode = function(latitude, longitude) {};

/**
 * @param {Number} swLatitude
 * @param {Number} swLongitude
 * @param {Number} neLatitude
 * @param {Number} neLongitude
 * @return {Object}
 */
Maps.Geocoder.prototype.reverseGeocode = function(swLatitude, swLongitude, neLatitude, neLongitude) {};

/**
 * @param {Number} swLatitude
 * @param {Number} swLongitude
 * @param {Number} neLatitude
 * @param {Number} neLongitude
 * @return {Maps.Geocoder}
 */
Maps.Geocoder.prototype.setBounds = function(swLatitude, swLongitude, neLatitude, neLongitude) {};

/**
 * @param {string} language
 * @return {Maps.Geocoder}
 */
Maps.Geocoder.prototype.setLanguage = function(language) {};

/**
 * @param {string} region
 * @return {Maps.Geocoder}
 */
Maps.Geocoder.prototype.setRegion = function(region) {};

/**
 * Class StaticMap
 * Last updated July 11, 2013.
 * @constructor
 */
Maps.StaticMap = function() {};

/**
 * @param {string} address
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.addAddress = function(address) {};

/**
 * @param {Number} latitude
 * @param {Number} longitude
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.addMarker = function(latitude, longitude) {};

/**
 * @param {string} address
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.addMarker = function(address) {};

/**
 * @param {Array.<Number>} points
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.addPath = function(points) {};

/**
 * @param {string} polyline
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.addPath = function(polyline) {};

/**
 * @param {Number} latitude
 * @param {Number} longitude
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.addPoint = function(latitude, longitude) {};

/**
 * @param {Number} latitude
 * @param {Number} longitude
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.addVisible = function(latitude, longitude) {};

/**
 * @param {string} address
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.addVisible = function(address) {};

/**
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.beginPath = function() {};

/**
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.clearMarkers = function() {};

/**
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.clearPaths = function() {};

/**
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.clearVisibles = function() {};

/**
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.endPath = function() {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Maps.StaticMap.prototype.getAs = function(contentType) {};

/**
 * @return {Base.Blob}
 */
Maps.StaticMap.prototype.getBlob = function() {};

/**
 * @return {Array.<Byte>}
 */
Maps.StaticMap.prototype.getMapImage = function() {};

/**
 * @return {string}
 */
Maps.StaticMap.prototype.getMapUrl = function() {};

/**
 * @param {Number} latitude
 * @param {Number} longitude
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.setCenter = function(latitude, longitude) {};

/**
 * @param {string} address
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.setCenter = function(address) {};

/**
 * @param {string} imageUrl
 * @param {boolean} useShadow
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.setCustomMarkerStyle = function(imageUrl, useShadow) {};

/**
 * @param {string} format
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.setFormat = function(format) {};

/**
 * @param {string} language
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.setLanguage = function(language) {};

/**
 * @param {string} mapType
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.setMapType = function(mapType) {};

/**
 * @param {string} size
 * @param {string} color
 * @param {string} label
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.setMarkerStyle = function(size, color, label) {};

/**
 * @param {boolean} useMobileTiles
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.setMobile = function(useMobileTiles) {};

/**
 * @param {number} weight
 * @param {string} color
 * @param {string} fillColor
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.setPathStyle = function(weight, color, fillColor) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.setSize = function(width, height) {};

/**
 * @param {number} zoom
 * @return {Maps.StaticMap}
 */
Maps.StaticMap.prototype.setZoom = function(zoom) {};

/**
 * Enum Avoid
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.Avoid = function() {};

/**
 * @type {Maps.Avoid}
 */
Maps.Avoid.prototype.TOLLS;

/**
 * @type {Maps.Avoid}
 */
Maps.Avoid.prototype.HIGHWAYS;

/**
 * Enum Color
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.Color = function() {};

/**
 * @type {Maps.Color}
 */
Maps.Color.prototype.BLACK;

/**
 * @type {Maps.Color}
 */
Maps.Color.prototype.BROWN;

/**
 * @type {Maps.Color}
 */
Maps.Color.prototype.GREEN;

/**
 * @type {Maps.Color}
 */
Maps.Color.prototype.PURPLE;

/**
 * @type {Maps.Color}
 */
Maps.Color.prototype.YELLOW;

/**
 * @type {Maps.Color}
 */
Maps.Color.prototype.BLUE;

/**
 * @type {Maps.Color}
 */
Maps.Color.prototype.GRAY;

/**
 * @type {Maps.Color}
 */
Maps.Color.prototype.ORANGE;

/**
 * @type {Maps.Color}
 */
Maps.Color.prototype.RED;

/**
 * @type {Maps.Color}
 */
Maps.Color.prototype.WHITE;

/**
 * Enum DirectionFinderEnums
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.DirectionFinderEnums = function() {};

/**
 * @type {Maps.DirectionFinderEnums}
 */
Maps.DirectionFinderEnums.prototype.Avoid;

/**
 * @type {Maps.DirectionFinderEnums}
 */
Maps.DirectionFinderEnums.prototype.Mode;

/**
 * Enum Format
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.Format = function() {};

/**
 * @type {Maps.Format}
 */
Maps.Format.prototype.PNG;

/**
 * @type {Maps.Format}
 */
Maps.Format.prototype.PNG8;

/**
 * @type {Maps.Format}
 */
Maps.Format.prototype.PNG32;

/**
 * @type {Maps.Format}
 */
Maps.Format.prototype.GIF;

/**
 * @type {Maps.Format}
 */
Maps.Format.prototype.JPG;

/**
 * @type {Maps.Format}
 */
Maps.Format.prototype.JPG_BASELINE;

/**
 * Enum MarkerSize
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.MarkerSize = function() {};

/**
 * @type {Maps.MarkerSize}
 */
Maps.MarkerSize.prototype.TINY;

/**
 * @type {Maps.MarkerSize}
 */
Maps.MarkerSize.prototype.MID;

/**
 * @type {Maps.MarkerSize}
 */
Maps.MarkerSize.prototype.SMALL;

/**
 * Enum Mode
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.Mode = function() {};

/**
 * @type {Maps.Mode}
 */
Maps.Mode.prototype.DRIVING;

/**
 * @type {Maps.Mode}
 */
Maps.Mode.prototype.WALKING;

/**
 * @type {Maps.Mode}
 */
Maps.Mode.prototype.BICYCLING;

/**
 * Enum StaticMapEnums
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.StaticMapEnums = function() {};

/**
 * @type {Maps.StaticMapEnums}
 */
Maps.StaticMapEnums.prototype.Color;

/**
 * @type {Maps.StaticMapEnums}
 */
Maps.StaticMapEnums.prototype.Format;

/**
 * @type {Maps.StaticMapEnums}
 */
Maps.StaticMapEnums.prototype.MarkerSize;

/**
 * @type {Maps.StaticMapEnums}
 */
Maps.StaticMapEnums.prototype.Type;

/**
 * Enum Type
 * Last updated March 26, 2013.
 * @constructor
 */
Maps.Type = function() {};

/**
 * @type {Maps.Type}
 */
Maps.Type.prototype.ROADMAP;

/**
 * @type {Maps.Type}
 */
Maps.Type.prototype.SATELLITE;

/**
 * @type {Maps.Type}
 */
Maps.Type.prototype.TERRAIN;

/**
 * @type {Maps.Type}
 */
Maps.Type.prototype.HYBRID;


/**
 * Sites Services
 */
var Sites = {};

/**
 * Class SitesApp
 * Last updated March 26, 2013.
 * @constructor
 */
Sites.SitesApp = function() {};

/**
 * @type {Sites.AttachmentType}
 */
Sites.SitesApp.prototype.AttachmentType;

/**
 * @type {Sites.PageType}
 */
Sites.SitesApp.prototype.PageType;

/**
 * @param {string} domain
 * @param {string} name
 * @param {string} title
 * @param {string} summary
 * @param {Sites.Site} site
 * @return {Sites.Site}
 */
Sites.SitesApp.prototype.copySite = function(domain, name, title, summary, site) {};

/**
 * @param {string} domain
 * @param {string} name
 * @param {string} title
 * @param {string} summary
 * @return {Sites.Site}
 */
Sites.SitesApp.prototype.createSite = function(domain, name, title, summary) {};

/**
 * @return {Sites.Page}
 */
Sites.SitesApp.prototype.getActivePage = function() {};

/**
 * @return {Sites.Site}
 */
Sites.SitesApp.prototype.getActiveSite = function() {};

/**
 * @param {string} domain
 * @return {Array.<Sites.Site>}
 */
Sites.SitesApp.prototype.getAllSites = function(domain) {};

/**
 * @param {string} domain
 * @param {number} start
 * @param {number} max
 * @return {Array.<Sites.Site>}
 */
Sites.SitesApp.prototype.getAllSites = function(domain, start, max) {};

/**
 * @param {string} url
 * @return {Sites.Page}
 */
Sites.SitesApp.prototype.getPageByUrl = function(url) {};

/**
 * @param {string} name
 * @return {Sites.Site}
 */
Sites.SitesApp.prototype.getSite = function(name) {};

/**
 * @param {string} domain
 * @param {string} name
 * @return {Sites.Site}
 */
Sites.SitesApp.prototype.getSite = function(domain, name) {};

/**
 * @param {string} url
 * @return {Sites.Site}
 */
Sites.SitesApp.prototype.getSiteByUrl = function(url) {};

/**
 * @return {Array.<Sites.Site>}
 */
Sites.SitesApp.prototype.getSites = function() {};

/**
 * @param {number} start
 * @param {number} max
 * @return {Array.<Sites.Site>}
 */
Sites.SitesApp.prototype.getSites = function(start, max) {};

/**
 * @param {string} domain
 * @return {Array.<Sites.Site>}
 */
Sites.SitesApp.prototype.getSites = function(domain) {};

/**
 * @param {string} domain
 * @param {number} start
 * @param {number} max
 * @return {Array.<Sites.Site>}
 */
Sites.SitesApp.prototype.getSites = function(domain, start, max) {};


/**
 * @type {Sites.SitesApp}
 */
var SitesApp;

/**
 * Class Attachment
 * Last updated July 11, 2013.
 * @constructor
 */
Sites.Attachment = function() {};

/**
 */
Sites.Attachment.prototype.deleteAttachment = function() {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Sites.Attachment.prototype.getAs = function(contentType) {};

/**
 * @return {Sites.AttachmentType}
 */
Sites.Attachment.prototype.getAttachmentType = function() {};

/**
 * @return {Base.Blob}
 */
Sites.Attachment.prototype.getBlob = function() {};

/**
 * @return {string}
 */
Sites.Attachment.prototype.getContentType = function() {};

/**
 * @return {Date}
 */
Sites.Attachment.prototype.getDatePublished = function() {};

/**
 * @return {string}
 */
Sites.Attachment.prototype.getDescription = function() {};

/**
 * @return {Date}
 */
Sites.Attachment.prototype.getLastUpdated = function() {};

/**
 * @return {Sites.Page}
 */
Sites.Attachment.prototype.getParent = function() {};

/**
 * @return {string}
 */
Sites.Attachment.prototype.getTitle = function() {};

/**
 * @return {string}
 */
Sites.Attachment.prototype.getUrl = function() {};

/**
 * @param {string} contentType
 * @return {Sites.Attachment}
 */
Sites.Attachment.prototype.setContentType = function(contentType) {};

/**
 * @param {string} description
 * @return {Sites.Attachment}
 */
Sites.Attachment.prototype.setDescription = function(description) {};

/**
 * @param {Base.BlobSource} blob
 * @return {Sites.Attachment}
 */
Sites.Attachment.prototype.setFrom = function(blob) {};

/**
 * @param {Sites.Page} parent
 * @return {Sites.Attachment}
 */
Sites.Attachment.prototype.setParent = function(parent) {};

/**
 * @param {string} title
 * @return {Sites.Attachment}
 */
Sites.Attachment.prototype.setTitle = function(title) {};

/**
 * @param {string} url
 * @return {Sites.Attachment}
 */
Sites.Attachment.prototype.setUrl = function(url) {};

/**
 * Class Column
 * Last updated March 26, 2013.
 * @constructor
 */
Sites.Column = function() {};

/**
 */
Sites.Column.prototype.deleteColumn = function() {};

/**
 * @return {string}
 */
Sites.Column.prototype.getName = function() {};

/**
 * @return {Sites.Page}
 */
Sites.Column.prototype.getParent = function() {};

/**
 * @param {string} name
 * @return {Sites.Column}
 */
Sites.Column.prototype.setName = function(name) {};

/**
 * Class Comment
 * Last updated March 26, 2013.
 * @constructor
 */
Sites.Comment = function() {};

/**
 */
Sites.Comment.prototype.deleteComment = function() {};

/**
 * @return {string}
 */
Sites.Comment.prototype.getAuthorEmail = function() {};

/**
 * @return {string}
 */
Sites.Comment.prototype.getAuthorName = function() {};

/**
 * @return {string}
 */
Sites.Comment.prototype.getContent = function() {};

/**
 * @return {Date}
 */
Sites.Comment.prototype.getDatePublished = function() {};

/**
 * @return {Date}
 */
Sites.Comment.prototype.getLastUpdated = function() {};

/**
 * @return {Sites.Page}
 */
Sites.Comment.prototype.getParent = function() {};

/**
 * @param {string} content
 * @return {Sites.Comment}
 */
Sites.Comment.prototype.setContent = function(content) {};

/**
 * @param {Sites.Page} parent
 * @return {Sites.Comment}
 */
Sites.Comment.prototype.setParent = function(parent) {};

/**
 * Class ListItem
 * Last updated March 26, 2013.
 * @constructor
 */
Sites.ListItem = function() {};

/**
 */
Sites.ListItem.prototype.deleteListItem = function() {};

/**
 * @return {Date}
 */
Sites.ListItem.prototype.getDatePublished = function() {};

/**
 * @return {Date}
 */
Sites.ListItem.prototype.getLastUpdated = function() {};

/**
 * @return {Sites.Page}
 */
Sites.ListItem.prototype.getParent = function() {};

/**
 * @param {number} index
 * @return {string}
 */
Sites.ListItem.prototype.getValueByIndex = function(index) {};

/**
 * @param {string} name
 * @return {string}
 */
Sites.ListItem.prototype.getValueByName = function(name) {};

/**
 * @param {Sites.Page} parent
 * @return {Sites.ListItem}
 */
Sites.ListItem.prototype.setParent = function(parent) {};

/**
 * @param {number} index
 * @param {string} value
 * @return {Sites.ListItem}
 */
Sites.ListItem.prototype.setValueByIndex = function(index, value) {};

/**
 * @param {string} name
 * @param {string} value
 * @return {Sites.ListItem}
 */
Sites.ListItem.prototype.setValueByName = function(name, value) {};

/**
 * Class Page
 * Last updated March 26, 2013.
 * @constructor
 */
Sites.Page = function() {};

/**
 * @param {string} name
 * @return {Sites.Column}
 */
Sites.Page.prototype.addColumn = function(name) {};

/**
 * @param {string} content
 * @return {Sites.Comment}
 */
Sites.Page.prototype.addComment = function(content) {};

/**
 * @param {Base.BlobSource} blob
 * @return {Sites.Attachment}
 */
Sites.Page.prototype.addHostedAttachment = function(blob) {};

/**
 * @param {Base.BlobSource} blob
 * @param {string} description
 * @return {Sites.Attachment}
 */
Sites.Page.prototype.addHostedAttachment = function(blob, description) {};

/**
 * @param {Array.<string>} values
 * @return {Sites.ListItem}
 */
Sites.Page.prototype.addListItem = function(values) {};

/**
 * @param {string} title
 * @param {string} description
 * @param {string} url
 * @return {Sites.Attachment}
 */
Sites.Page.prototype.addWebAttachment = function(title, description, url) {};

/**
 * @param {string} title
 * @param {string} html
 * @return {Sites.Page}
 */
Sites.Page.prototype.createAnnouncement = function(title, html) {};

/**
 * @param {string} title
 * @param {string} html
 * @param {boolean} asDraft
 * @return {Sites.Page}
 */
Sites.Page.prototype.createAnnouncement = function(title, html, asDraft) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {Sites.Page}
 */
Sites.Page.prototype.createAnnouncementsPage = function(title, name, html) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {Sites.Page}
 */
Sites.Page.prototype.createFileCabinetPage = function(title, name, html) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @param {Array.<string>} columnNames
 * @return {Sites.Page}
 */
Sites.Page.prototype.createListPage = function(title, name, html, columnNames) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {Sites.Page} template
 * @return {Sites.Page}
 */
Sites.Page.prototype.createPageFromTemplate = function(title, name, template) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {Sites.Page}
 */
Sites.Page.prototype.createWebPage = function(title, name, html) {};

/**
 */
Sites.Page.prototype.deletePage = function() {};

/**
 * @return {Array.<Sites.Page>}
 */
Sites.Page.prototype.getAllDescendants = function() {};

/**
 * @param {Object} options
 * @return {Array.<Sites.Page>}
 */
Sites.Page.prototype.getAllDescendants = function(options) {};

/**
 * @return {Array.<Sites.Page>}
 */
Sites.Page.prototype.getAnnouncements = function() {};

/**
 * @param {Object} optOptions
 * @return {Array.<Sites.Page>}
 */
Sites.Page.prototype.getAnnouncements = function(optOptions) {};

/**
 * @return {Array.<Sites.Attachment>}
 */
Sites.Page.prototype.getAttachments = function() {};

/**
 * @param {Object} optOptions
 * @return {Array.<Sites.Attachment>}
 */
Sites.Page.prototype.getAttachments = function(optOptions) {};

/**
 * @return {Array.<string>}
 */
Sites.Page.prototype.getAuthors = function() {};

/**
 * @param {string} name
 * @return {Sites.Page}
 */
Sites.Page.prototype.getChildByName = function(name) {};

/**
 * @return {Array.<Sites.Page>}
 */
Sites.Page.prototype.getChildren = function() {};

/**
 * @param {Object} options
 * @return {Array.<Sites.Page>}
 */
Sites.Page.prototype.getChildren = function(options) {};

/**
 * @return {Array.<Sites.Column>}
 */
Sites.Page.prototype.getColumns = function() {};

/**
 * @return {Array.<Sites.Comment>}
 */
Sites.Page.prototype.getComments = function() {};

/**
 * @param {Object} optOptions
 * @return {Array.<Sites.Comment>}
 */
Sites.Page.prototype.getComments = function(optOptions) {};

/**
 * @return {Date}
 */
Sites.Page.prototype.getDatePublished = function() {};

/**
 * @return {string}
 */
Sites.Page.prototype.getHtmlContent = function() {};

/**
 * @return {boolean}
 */
Sites.Page.prototype.getIsDraft = function() {};

/**
 * @return {Date}
 */
Sites.Page.prototype.getLastEdited = function() {};

/**
 * @return {Date}
 */
Sites.Page.prototype.getLastUpdated = function() {};

/**
 * @return {Array.<Sites.ListItem>}
 */
Sites.Page.prototype.getListItems = function() {};

/**
 * @param {Object} optOptions
 * @return {Array.<Sites.ListItem>}
 */
Sites.Page.prototype.getListItems = function(optOptions) {};

/**
 * @return {string}
 */
Sites.Page.prototype.getName = function() {};

/**
 * @return {Sites.PageType}
 */
Sites.Page.prototype.getPageType = function() {};

/**
 * @return {Sites.Page}
 */
Sites.Page.prototype.getParent = function() {};

/**
 * @return {string}
 */
Sites.Page.prototype.getTextContent = function() {};

/**
 * @return {string}
 */
Sites.Page.prototype.getTitle = function() {};

/**
 * @return {string}
 */
Sites.Page.prototype.getUrl = function() {};

/**
 * @return {boolean}
 */
Sites.Page.prototype.isDeleted = function() {};

/**
 * @return {boolean}
 */
Sites.Page.prototype.isTemplate = function() {};

/**
 * @param {string} name
 * @return {Sites.Page}
 */
Sites.Page.prototype.publishAsTemplate = function(name) {};

/**
 * @param {string} query
 * @return {Array.<Sites.Page>}
 */
Sites.Page.prototype.search = function(query) {};

/**
 * @param {string} query
 * @param {Object} options
 * @return {Array.<Sites.Page>}
 */
Sites.Page.prototype.search = function(query, options) {};

/**
 * @param {string} html
 * @return {Sites.Page}
 */
Sites.Page.prototype.setHtmlContent = function(html) {};

/**
 * @param {boolean} draft
 * @return {Sites.Page}
 */
Sites.Page.prototype.setIsDraft = function(draft) {};

/**
 * @param {string} name
 * @return {Sites.Page}
 */
Sites.Page.prototype.setName = function(name) {};

/**
 * @param {Sites.Page} parent
 * @return {Sites.Page}
 */
Sites.Page.prototype.setParent = function(parent) {};

/**
 * @param {string} title
 * @return {Sites.Page}
 */
Sites.Page.prototype.setTitle = function(title) {};

/**
 * @deprecated
 * @return {string}
 */
Sites.Page.prototype.getPageName = function() {};

/**
 * @deprecated
 * @return {string}
 */
Sites.Page.prototype.getSelfLink = function() {};

/**
 * Class Site
 * Last updated May 15, 2013.
 * @constructor
 */
Sites.Site = function() {};

/**
 * @param {string} emailAddress
 * @return {Sites.Site}
 */
Sites.Site.prototype.addEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Sites.Site}
 */
Sites.Site.prototype.addEditor = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {Sites.Site}
 */
Sites.Site.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {string} email
 * @return {Sites.Site}
 */
Sites.Site.prototype.addOwner = function(email) {};

/**
 * @param {Base.User} user
 * @return {Sites.Site}
 */
Sites.Site.prototype.addOwner = function(user) {};

/**
 * @param {string} emailAddress
 * @return {Sites.Site}
 */
Sites.Site.prototype.addViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Sites.Site}
 */
Sites.Site.prototype.addViewer = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {Sites.Site}
 */
Sites.Site.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {Sites.Page}
 */
Sites.Site.prototype.createAnnouncementsPage = function(title, name, html) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {Sites.Page}
 */
Sites.Site.prototype.createFileCabinetPage = function(title, name, html) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @param {Array.<string>} columnNames
 * @return {Sites.Page}
 */
Sites.Site.prototype.createListPage = function(title, name, html, columnNames) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {Sites.Page} template
 * @return {Sites.Page}
 */
Sites.Site.prototype.createPageFromTemplate = function(title, name, template) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {Sites.Page}
 */
Sites.Site.prototype.createWebPage = function(title, name, html) {};

/**
 */
Sites.Site.prototype.deleteSite = function() {};

/**
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.getAllDescendants = function() {};

/**
 * @param {Object} options
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.getAllDescendants = function(options) {};

/**
 * @param {string} name
 * @return {Sites.Page}
 */
Sites.Site.prototype.getChildByName = function(name) {};

/**
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.getChildren = function() {};

/**
 * @param {Object} options
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.getChildren = function(options) {};

/**
 * @return {Array.<Base.User>}
 */
Sites.Site.prototype.getEditors = function() {};

/**
 * @return {string}
 */
Sites.Site.prototype.getName = function() {};

/**
 * @return {Array.<Base.User>}
 */
Sites.Site.prototype.getOwners = function() {};

/**
 * @return {string}
 */
Sites.Site.prototype.getSummary = function() {};

/**
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.getTemplates = function() {};

/**
 * @return {string}
 */
Sites.Site.prototype.getTheme = function() {};

/**
 * @return {string}
 */
Sites.Site.prototype.getTitle = function() {};

/**
 * @return {string}
 */
Sites.Site.prototype.getUrl = function() {};

/**
 * @return {Array.<Base.User>}
 */
Sites.Site.prototype.getViewers = function() {};

/**
 * @param {string} emailAddress
 * @return {Sites.Site}
 */
Sites.Site.prototype.removeEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Sites.Site}
 */
Sites.Site.prototype.removeEditor = function(user) {};

/**
 * @param {string} email
 * @return {Sites.Site}
 */
Sites.Site.prototype.removeOwner = function(email) {};

/**
 * @param {Base.User} user
 * @return {Sites.Site}
 */
Sites.Site.prototype.removeOwner = function(user) {};

/**
 * @param {string} emailAddress
 * @return {Sites.Site}
 */
Sites.Site.prototype.removeViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 * @return {Sites.Site}
 */
Sites.Site.prototype.removeViewer = function(user) {};

/**
 * @param {string} query
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.search = function(query) {};

/**
 * @param {string} query
 * @param {Object} options
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.search = function(query, options) {};

/**
 * @param {string} summary
 * @return {Sites.Site}
 */
Sites.Site.prototype.setSummary = function(summary) {};

/**
 * @param {string} theme
 * @return {Sites.Site}
 */
Sites.Site.prototype.setTheme = function(theme) {};

/**
 * @param {string} title
 * @return {Sites.Site}
 */
Sites.Site.prototype.setTitle = function(title) {};

/**
 * @deprecated
 * @return {Sites.Site}
 */
Sites.Site.prototype.addCollaborator = function(email) {};

/**
 * @deprecated
 * @return {Sites.Site}
 */
Sites.Site.prototype.addCollaborator = function(user) {};

/**
 * @deprecated
 * @return {Sites.Page}
 */
Sites.Site.prototype.createAnnouncement = function(title, html, parent) {};

/**
 * @deprecated
 * @return {Sites.Comment}
 */
Sites.Site.prototype.createComment = function(inReplyTo, html, parent) {};

/**
 * @deprecated
 * @return {Sites.ListItem}
 */
Sites.Site.prototype.createListItem = function(html, columnNames, values, parent) {};

/**
 * @deprecated
 * @return {Sites.Attachment}
 */
Sites.Site.prototype.createWebAttachment = function(title, url, parent) {};

/**
 * @deprecated
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.getAnnouncements = function() {};

/**
 * @deprecated
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.getAnnouncementsPages = function() {};

/**
 * @deprecated
 * @return {Array.<Sites.Attachment>}
 */
Sites.Site.prototype.getAttachments = function() {};

/**
 * @deprecated
 * @return {Array.<Base.User>}
 */
Sites.Site.prototype.getCollaborators = function() {};

/**
 * @deprecated
 * @return {Array.<Sites.Comment>}
 */
Sites.Site.prototype.getComments = function() {};

/**
 * @deprecated
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.getFileCabinetPages = function() {};

/**
 * @deprecated
 * @return {Array.<Sites.ListItem>}
 */
Sites.Site.prototype.getListItems = function() {};

/**
 * @deprecated
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.getListPages = function() {};

/**
 * @deprecated
 * @return {string}
 */
Sites.Site.prototype.getSelfLink = function() {};

/**
 * @deprecated
 * @return {string}
 */
Sites.Site.prototype.getSiteName = function() {};

/**
 * @deprecated
 * @return {Array.<Sites.Attachment>}
 */
Sites.Site.prototype.getWebAttachments = function() {};

/**
 * @deprecated
 * @return {Array.<Sites.Page>}
 */
Sites.Site.prototype.getWebPages = function() {};

/**
 * @deprecated
 * @return {Sites.Site}
 */
Sites.Site.prototype.removeCollaborator = function(email) {};

/**
 * @deprecated
 * @return {Sites.Site}
 */
Sites.Site.prototype.removeCollaborator = function(user) {};

/**
 * Enum AttachmentType
 * Last updated March 26, 2013.
 * @constructor
 */
Sites.AttachmentType = function() {};

/**
 * @type {Sites.AttachmentType}
 */
Sites.AttachmentType.prototype.WEB;

/**
 * @type {Sites.AttachmentType}
 */
Sites.AttachmentType.prototype.HOSTED;

/**
 * Enum PageType
 * Last updated March 26, 2013.
 * @constructor
 */
Sites.PageType = function() {};

/**
 * @type {Sites.PageType}
 */
Sites.PageType.prototype.WEB_PAGE;

/**
 * @type {Sites.PageType}
 */
Sites.PageType.prototype.LIST_PAGE;

/**
 * @type {Sites.PageType}
 */
Sites.PageType.prototype.ANNOUNCEMENT;

/**
 * @type {Sites.PageType}
 */
Sites.PageType.prototype.ANNOUNCEMENTS_PAGE;

/**
 * @type {Sites.PageType}
 */
Sites.PageType.prototype.FILE_CABINET_PAGE;


/**
 * Spreadsheet Services
 */
var Spreadsheet = {};

/**
 * Class SpreadsheetApp
 * Last updated June 27, 2013.
 * @constructor
 */
Spreadsheet.SpreadsheetApp = function() {};

/**
 * @param {string} name
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.SpreadsheetApp.prototype.create = function(name) {};

/**
 * @param {string} name
 * @param {number} rows
 * @param {number} columns
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.SpreadsheetApp.prototype.create = function(name, rows, columns) {};

/**
 */
Spreadsheet.SpreadsheetApp.prototype.flush = function() {};

/**
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.SpreadsheetApp.prototype.getActive = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.SpreadsheetApp.prototype.getActiveRange = function() {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.SpreadsheetApp.prototype.getActiveSheet = function() {};

/**
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.SpreadsheetApp.prototype.getActiveSpreadsheet = function() {};

/**
 * @param {DocsList.File} file
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.SpreadsheetApp.prototype.open = function(file) {};

/**
 * @param {string} id
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.SpreadsheetApp.prototype.openById = function(id) {};

/**
 * @param {string} url
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.SpreadsheetApp.prototype.openByUrl = function(url) {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.Range}
 */
Spreadsheet.SpreadsheetApp.prototype.setActiveRange = function(range) {};

/**
 * @param {Spreadsheet.Sheet} sheet
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.SpreadsheetApp.prototype.setActiveSheet = function(sheet) {};

/**
 * @param {Spreadsheet.Spreadsheet} newActiveSpreadsheet
 */
Spreadsheet.SpreadsheetApp.prototype.setActiveSpreadsheet = function(newActiveSpreadsheet) {};

/**
 * @deprecated
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.SpreadsheetApp.prototype.openByKey = function(key) {};


/**
 * @type {Spreadsheet.SpreadsheetApp}
 */
var SpreadsheetApp;

/**
 * Class ContainerInfo
 * Last updated March 26, 2013.
 * @constructor
 */
Spreadsheet.ContainerInfo = function() {};

/**
 * @return {number}
 */
Spreadsheet.ContainerInfo.prototype.getAnchorColumn = function() {};

/**
 * @return {number}
 */
Spreadsheet.ContainerInfo.prototype.getAnchorRow = function() {};

/**
 * @return {number}
 */
Spreadsheet.ContainerInfo.prototype.getOffsetX = function() {};

/**
 * @return {number}
 */
Spreadsheet.ContainerInfo.prototype.getOffsetY = function() {};

/**
 * Class EmbeddedAreaChartBuilder
 * Last updated May 15, 2013.
 * @constructor
 */
Spreadsheet.EmbeddedAreaChartBuilder = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedChart}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.ChartType}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.getChartType = function() {};

/**
 * @return {Spreadsheet.ContainerInfo}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<Spreadsheet.Range>}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.getRanges = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.removeRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Charts.ChartType} type
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {Charts.Position} position
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {Charts.PointStyle} style
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedAreaChartBuilder.prototype.useLogScale = function() {};

/**
 * Class EmbeddedBarChartBuilder
 * Last updated May 15, 2013.
 * @constructor
 */
Spreadsheet.EmbeddedBarChartBuilder = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedChart}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.ChartType}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.getChartType = function() {};

/**
 * @return {Spreadsheet.ContainerInfo}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<Spreadsheet.Range>}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.getRanges = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.removeRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.reverseCategories = function() {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.reverseDirection = function() {};

/**
 * @param {string} cssValue
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Charts.ChartType} type
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {Charts.Position} position
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedBarChartBuilder.prototype.useLogScale = function() {};

/**
 * Class EmbeddedChart
 * Last updated July 11, 2013.
 * @constructor
 */
Spreadsheet.EmbeddedChart = function() {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Spreadsheet.EmbeddedChart.prototype.getAs = function(contentType) {};

/**
 * @return {Base.Blob}
 */
Spreadsheet.EmbeddedChart.prototype.getBlob = function() {};

/**
 * @return {Spreadsheet.ContainerInfo}
 */
Spreadsheet.EmbeddedChart.prototype.getContainerInfo = function() {};

/**
 * @return {string}
 */
Spreadsheet.EmbeddedChart.prototype.getId = function() {};

/**
 * @return {Charts.ChartOptions}
 */
Spreadsheet.EmbeddedChart.prototype.getOptions = function() {};

/**
 * @return {Array.<Spreadsheet.Range>}
 */
Spreadsheet.EmbeddedChart.prototype.getRanges = function() {};

/**
 * @return {string}
 */
Spreadsheet.EmbeddedChart.prototype.getType = function() {};

/**
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedChart.prototype.modify = function() {};

/**
 * @param {string} id
 * @return {Charts.Chart}
 */
Spreadsheet.EmbeddedChart.prototype.setId = function(id) {};

/**
 * Class EmbeddedChartBuilder
 * Last updated May 15, 2013.
 * @constructor
 */
Spreadsheet.EmbeddedChartBuilder = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedChart}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.ChartType}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.getChartType = function() {};

/**
 * @return {Spreadsheet.ContainerInfo}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<Spreadsheet.Range>}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.getRanges = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.removeRange = function(range) {};

/**
 * @param {Charts.ChartType} type
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * Class EmbeddedColumnChartBuilder
 * Last updated May 15, 2013.
 * @constructor
 */
Spreadsheet.EmbeddedColumnChartBuilder = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedChart}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.ChartType}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.getChartType = function() {};

/**
 * @return {Spreadsheet.ContainerInfo}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<Spreadsheet.Range>}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.getRanges = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.removeRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Charts.ChartType} type
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {Charts.Position} position
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedColumnChartBuilder.prototype.useLogScale = function() {};

/**
 * Class EmbeddedLineChartBuilder
 * Last updated May 15, 2013.
 * @constructor
 */
Spreadsheet.EmbeddedLineChartBuilder = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedChart}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.ChartType}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.getChartType = function() {};

/**
 * @return {Spreadsheet.ContainerInfo}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<Spreadsheet.Range>}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.getRanges = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.removeRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Charts.ChartType} type
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {Charts.CurveStyle} style
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setCurveStyle = function(style) {};

/**
 * @param {Charts.Position} position
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {Charts.PointStyle} style
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @param {string} chartTitle
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedLineChartBuilder.prototype.useLogScale = function() {};

/**
 * Class EmbeddedPieChartBuilder
 * Last updated May 15, 2013.
 * @constructor
 */
Spreadsheet.EmbeddedPieChartBuilder = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedChart}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.ChartType}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.getChartType = function() {};

/**
 * @return {Spreadsheet.ContainerInfo}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<Spreadsheet.Range>}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.getRanges = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.removeRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.reverseCategories = function() {};

/**
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.set3D = function() {};

/**
 * @param {string} cssValue
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Charts.ChartType} type
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {Charts.Position} position
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {string} chartTitle
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedPieChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * Class EmbeddedScatterChartBuilder
 * Last updated May 15, 2013.
 * @constructor
 */
Spreadsheet.EmbeddedScatterChartBuilder = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedChart}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.ChartType}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.getChartType = function() {};

/**
 * @return {Spreadsheet.ContainerInfo}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<Spreadsheet.Range>}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.getRanges = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.removeRange = function(range) {};

/**
 * @param {string} cssValue
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Charts.ChartType} type
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {Charts.Position} position
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {Charts.PointStyle} style
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {string} chartTitle
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setXAxisLogScale = function() {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setXAxisRange = function(start, end) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setYAxisLogScale = function() {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setYAxisRange = function(start, end) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedScatterChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * Class EmbeddedTableChartBuilder
 * Last updated May 15, 2013.
 * @constructor
 */
Spreadsheet.EmbeddedTableChartBuilder = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {Spreadsheet.EmbeddedAreaChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedBarChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedColumnChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedLineChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedPieChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedScatterChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {Spreadsheet.EmbeddedChart}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.build = function() {};

/**
 * @param {boolean} enablePaging
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.enablePaging = function(enablePaging) {};

/**
 * @param {number} pageSize
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.enablePaging = function(pageSize) {};

/**
 * @param {number} pageSize
 * @param {number} startPage
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.enablePaging = function(pageSize, startPage) {};

/**
 * @param {boolean} rtlEnabled
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.enableRtlTable = function(rtlEnabled) {};

/**
 * @param {boolean} enableSorting
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.enableSorting = function(enableSorting) {};

/**
 * @return {Charts.ChartType}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.getChartType = function() {};

/**
 * @return {Spreadsheet.ContainerInfo}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<Spreadsheet.Range>}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.getRanges = function() {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.removeRange = function(range) {};

/**
 * @param {Charts.ChartType} type
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {number} number
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.setFirstRowNumber = function(number) {};

/**
 * @param {number} column
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.setInitialSortingAscending = function(column) {};

/**
 * @param {number} column
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.setInitialSortingDescending = function(column) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {boolean} showRowNumber
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.showRowNumberColumn = function(showRowNumber) {};

/**
 * @param {boolean} alternate
 * @return {Spreadsheet.EmbeddedTableChartBuilder}
 */
Spreadsheet.EmbeddedTableChartBuilder.prototype.useAlternatingRowStyle = function(alternate) {};

/**
 * Class PageProtection
 * Last updated March 26, 2013.
 * @constructor
 */
Spreadsheet.PageProtection = function() {};

/**
 * @param {string} email
 */
Spreadsheet.PageProtection.prototype.addUser = function(email) {};

/**
 * @return {Array.<string>}
 */
Spreadsheet.PageProtection.prototype.getUsers = function() {};

/**
 * @return {boolean}
 */
Spreadsheet.PageProtection.prototype.isProtected = function() {};

/**
 * @param {string} user
 */
Spreadsheet.PageProtection.prototype.removeUser = function(user) {};

/**
 * @param {boolean} protection
 */
Spreadsheet.PageProtection.prototype.setProtected = function(protection) {};

/**
 * Class Range
 * Last updated July 11, 2013.
 * @constructor
 */
Spreadsheet.Range = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.activate = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.breakApart = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.clear = function() {};

/**
 * @param {Object} options
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.clear = function(options) {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.clearContent = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.clearFormat = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.clearNote = function() {};

/**
 * @param {number} gridId
 * @param {number} column
 * @param {number} columnEnd
 * @param {number} row
 * @param {number} rowEnd
 */
Spreadsheet.Range.prototype.copyFormatToRange = function(gridId, column, columnEnd, row, rowEnd) {};

/**
 * @param {Spreadsheet.Sheet} sheet
 * @param {number} column
 * @param {number} columnEnd
 * @param {number} row
 * @param {number} rowEnd
 */
Spreadsheet.Range.prototype.copyFormatToRange = function(sheet, column, columnEnd, row, rowEnd) {};

/**
 * @param {Spreadsheet.Range} destination
 */
Spreadsheet.Range.prototype.copyTo = function(destination) {};

/**
 * @param {Spreadsheet.Range} destination
 * @param {Object} options
 */
Spreadsheet.Range.prototype.copyTo = function(destination, options) {};

/**
 * @param {number} gridId
 * @param {number} column
 * @param {number} columnEnd
 * @param {number} row
 * @param {number} rowEnd
 */
Spreadsheet.Range.prototype.copyValuesToRange = function(gridId, column, columnEnd, row, rowEnd) {};

/**
 * @param {Spreadsheet.Sheet} sheet
 * @param {number} column
 * @param {number} columnEnd
 * @param {number} row
 * @param {number} rowEnd
 */
Spreadsheet.Range.prototype.copyValuesToRange = function(sheet, column, columnEnd, row, rowEnd) {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getA1Notation = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getBackground = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getBackgrounds = function() {};

/**
 * @param {number} row
 * @param {number} column
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.getCell = function(row, column) {};

/**
 * @return {number}
 */
Spreadsheet.Range.prototype.getColumn = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getDataSourceUrl = function() {};

/**
 * @return {Charts.DataTable}
 */
Spreadsheet.Range.prototype.getDataTable = function() {};

/**
 * @param {boolean} firstRowIsHeader
 * @return {Charts.DataTable}
 */
Spreadsheet.Range.prototype.getDataTable = function(firstRowIsHeader) {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getFontColor = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getFontColors = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getFontFamilies = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getFontFamily = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getFontLine = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getFontLines = function() {};

/**
 * @return {number}
 */
Spreadsheet.Range.prototype.getFontSize = function() {};

/**
 * @return {Array.<Array.<number>>}
 */
Spreadsheet.Range.prototype.getFontSizes = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getFontStyle = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getFontStyles = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getFontWeight = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getFontWeights = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getFormula = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getFormulaR1C1 = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getFormulas = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getFormulasR1C1 = function() {};

/**
 * @return {number}
 */
Spreadsheet.Range.prototype.getGridId = function() {};

/**
 * @return {number}
 */
Spreadsheet.Range.prototype.getHeight = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getHorizontalAlignment = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getHorizontalAlignments = function() {};

/**
 * @return {number}
 */
Spreadsheet.Range.prototype.getLastColumn = function() {};

/**
 * @return {number}
 */
Spreadsheet.Range.prototype.getLastRow = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getNote = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getNotes = function() {};

/**
 * @return {number}
 */
Spreadsheet.Range.prototype.getNumColumns = function() {};

/**
 * @return {number}
 */
Spreadsheet.Range.prototype.getNumRows = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getNumberFormat = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getNumberFormats = function() {};

/**
 * @return {number}
 */
Spreadsheet.Range.prototype.getRow = function() {};

/**
 * @return {number}
 */
Spreadsheet.Range.prototype.getRowIndex = function() {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Range.prototype.getSheet = function() {};

/**
 * @return {Object}
 */
Spreadsheet.Range.prototype.getValue = function() {};

/**
 * @return {Array.<Array.<Object>>}
 */
Spreadsheet.Range.prototype.getValues = function() {};

/**
 * @return {string}
 */
Spreadsheet.Range.prototype.getVerticalAlignment = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getVerticalAlignments = function() {};

/**
 * @return {number}
 */
Spreadsheet.Range.prototype.getWidth = function() {};

/**
 * @return {boolean}
 */
Spreadsheet.Range.prototype.getWrap = function() {};

/**
 * @return {Array.<Array.<boolean>>}
 */
Spreadsheet.Range.prototype.getWraps = function() {};

/**
 * @return {boolean}
 */
Spreadsheet.Range.prototype.isBlank = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.merge = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.mergeAcross = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.mergeVertically = function() {};

/**
 * @param {Spreadsheet.Range} target
 */
Spreadsheet.Range.prototype.moveTo = function(target) {};

/**
 * @param {number} rowOffset
 * @param {number} columnOffset
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.offset = function(rowOffset, columnOffset) {};

/**
 * @param {number} rowOffset
 * @param {number} columnOffset
 * @param {number} numRows
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.offset = function(rowOffset, columnOffset, numRows) {};

/**
 * @param {number} rowOffset
 * @param {number} columnOffset
 * @param {number} numRows
 * @param {number} numColumns
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.offset = function(rowOffset, columnOffset, numRows, numColumns) {};

/**
 * @param {string} color
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setBackground = function(color) {};

/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setBackgroundRGB = function(red, green, blue) {};

/**
 * @param {Array.<Array.<string>>} color
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setBackgrounds = function(color) {};

/**
 * @param {boolean} top
 * @param {boolean} left
 * @param {boolean} bottom
 * @param {boolean} right
 * @param {boolean} vertical
 * @param {boolean} horizontal
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setBorder = function(top, left, bottom, right, vertical, horizontal) {};

/**
 * @param {string} color
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontColor = function(color) {};

/**
 * @param {Array.<Array.<Object>>} colors
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontColors = function(colors) {};

/**
 * @param {Array.<Array.<Object>>} fontFamilies
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontFamilies = function(fontFamilies) {};

/**
 * @param {string} fontFamily
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontFamily = function(fontFamily) {};

/**
 * @param {string} fontLine
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontLine = function(fontLine) {};

/**
 * @param {Array.<Array.<Object>>} fontLines
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontLines = function(fontLines) {};

/**
 * @param {number} size
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontSize = function(size) {};

/**
 * @param {Array.<Array.<Object>>} sizes
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontSizes = function(sizes) {};

/**
 * @param {string} fontStyle
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontStyle = function(fontStyle) {};

/**
 * @param {Array.<Array.<Object>>} fontStyles
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontStyles = function(fontStyles) {};

/**
 * @param {string} fontWeight
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontWeight = function(fontWeight) {};

/**
 * @param {Array.<Array.<Object>>} fontWeights
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFontWeights = function(fontWeights) {};

/**
 * @param {string} formula
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFormula = function(formula) {};

/**
 * @param {string} formula
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFormulaR1C1 = function(formula) {};

/**
 * @param {Array.<Array.<Object>>} formulas
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFormulas = function(formulas) {};

/**
 * @param {Array.<Array.<Object>>} formulas
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setFormulasR1C1 = function(formulas) {};

/**
 * @param {string} alignment
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setHorizontalAlignment = function(alignment) {};

/**
 * @param {Array.<Array.<Object>>} alignments
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setHorizontalAlignments = function(alignments) {};

/**
 * @param {string} note
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setNote = function(note) {};

/**
 * @param {Array.<Array.<Object>>} notes
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setNotes = function(notes) {};

/**
 * @param {string} numberFormat
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setNumberFormat = function(numberFormat) {};

/**
 * @param {Array.<Array.<Object>>} numberFormats
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setNumberFormats = function(numberFormats) {};

/**
 * @param {Object} value
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setValue = function(value) {};

/**
 * @param {Array.<Array.<Object>>} values
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setValues = function(values) {};

/**
 * @param {string} alignment
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setVerticalAlignment = function(alignment) {};

/**
 * @param {Array.<Array.<Object>>} alignments
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setVerticalAlignments = function(alignments) {};

/**
 * @param {boolean} isWrapEnabled
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setWrap = function(isWrapEnabled) {};

/**
 * @param {Array.<Array.<Object>>} isWrapEnabled
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setWraps = function(isWrapEnabled) {};

/**
 * @param {Object} sortSpecObj
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.sort = function(sortSpecObj) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.clearComment = function() {};

/**
 * @deprecated
 * @return {string}
 */
Spreadsheet.Range.prototype.getBackgroundColor = function() {};

/**
 * @deprecated
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getBackgroundColors = function() {};

/**
 * @deprecated
 * @return {number}
 */
Spreadsheet.Range.prototype.getColumnIndex = function() {};

/**
 * @deprecated
 * @return {string}
 */
Spreadsheet.Range.prototype.getComment = function() {};

/**
 * @deprecated
 * @return {Array.<Array.<string>>}
 */
Spreadsheet.Range.prototype.getComments = function() {};

/**
 * @deprecated
 * @return {number}
 */
Spreadsheet.Range.prototype.getEndColumn = function() {};

/**
 * @deprecated
 * @return {number}
 */
Spreadsheet.Range.prototype.getEndRow = function() {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setBackgroundColor = function(color) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setBackgroundColors = function(colors) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setComment = function(comment) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Range.prototype.setComments = function(comments) {};

/**
 * Class Sheet
 * Last updated June 27, 2013.
 * @constructor
 */
Spreadsheet.Sheet = function() {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.activate = function() {};

/**
 * @param {Array.<Object>} rowContents
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.appendRow = function(rowContents) {};

/**
 * @param {number} columnPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.autoResizeColumn = function(columnPosition) {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.clear = function() {};

/**
 * @param {Object} options
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.clear = function(options) {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.clearContents = function() {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.clearFormats = function() {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.clearNotes = function() {};

/**
 * @param {Spreadsheet.Spreadsheet} spreadsheet
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.copyTo = function(spreadsheet) {};

/**
 * @param {number} columnPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.deleteColumn = function(columnPosition) {};

/**
 * @param {number} columnPosition
 * @param {number} howMany
 */
Spreadsheet.Sheet.prototype.deleteColumns = function(columnPosition, howMany) {};

/**
 * @param {number} rowPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.deleteRow = function(rowPosition) {};

/**
 * @param {number} rowPosition
 * @param {number} howMany
 */
Spreadsheet.Sheet.prototype.deleteRows = function(rowPosition, howMany) {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.getActiveCell = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.getActiveRange = function() {};

/**
 * @return {Array.<Spreadsheet.EmbeddedChart>}
 */
Spreadsheet.Sheet.prototype.getCharts = function() {};

/**
 * @param {number} columnPosition
 * @return {number}
 */
Spreadsheet.Sheet.prototype.getColumnWidth = function(columnPosition) {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.getDataRange = function() {};

/**
 * @return {number}
 */
Spreadsheet.Sheet.prototype.getFrozenColumns = function() {};

/**
 * @return {number}
 */
Spreadsheet.Sheet.prototype.getFrozenRows = function() {};

/**
 * @return {number}
 */
Spreadsheet.Sheet.prototype.getIndex = function() {};

/**
 * @return {number}
 */
Spreadsheet.Sheet.prototype.getLastColumn = function() {};

/**
 * @return {number}
 */
Spreadsheet.Sheet.prototype.getLastRow = function() {};

/**
 * @return {number}
 */
Spreadsheet.Sheet.prototype.getMaxColumns = function() {};

/**
 * @return {number}
 */
Spreadsheet.Sheet.prototype.getMaxRows = function() {};

/**
 * @return {string}
 */
Spreadsheet.Sheet.prototype.getName = function() {};

/**
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.Sheet.prototype.getParent = function() {};

/**
 * @param {number} row
 * @param {number} column
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.getRange = function(row, column) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {number} numRows
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.getRange = function(row, column, numRows) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {number} numRows
 * @param {number} numColumns
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.getRange = function(row, column, numRows, numColumns) {};

/**
 * @param {string} a1Notation
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.getRange = function(a1Notation) {};

/**
 * @param {number} rowPosition
 * @return {number}
 */
Spreadsheet.Sheet.prototype.getRowHeight = function(rowPosition) {};

/**
 * @return {number}
 */
Spreadsheet.Sheet.prototype.getSheetId = function() {};

/**
 * @return {string}
 */
Spreadsheet.Sheet.prototype.getSheetName = function() {};

/**
 * @return {Spreadsheet.PageProtection}
 */
Spreadsheet.Sheet.prototype.getSheetProtection = function() {};

/**
 * @param {number} startRow
 * @param {number} startColumn
 * @param {number} numRows
 * @param {number} numColumns
 * @return {Array.<Array.<Object>>}
 */
Spreadsheet.Sheet.prototype.getSheetValues = function(startRow, startColumn, numRows, numColumns) {};

/**
 * @param {Spreadsheet.Range} column
 */
Spreadsheet.Sheet.prototype.hideColumn = function(column) {};

/**
 * @param {number} columnIndex
 */
Spreadsheet.Sheet.prototype.hideColumns = function(columnIndex) {};

/**
 * @param {number} columnIndex
 * @param {number} numColumns
 */
Spreadsheet.Sheet.prototype.hideColumns = function(columnIndex, numColumns) {};

/**
 * @param {Spreadsheet.Range} row
 */
Spreadsheet.Sheet.prototype.hideRow = function(row) {};

/**
 * @param {number} rowIndex
 */
Spreadsheet.Sheet.prototype.hideRows = function(rowIndex) {};

/**
 * @param {number} rowIndex
 * @param {number} numRows
 */
Spreadsheet.Sheet.prototype.hideRows = function(rowIndex, numRows) {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.hideSheet = function() {};

/**
 * @param {Spreadsheet.EmbeddedChart} chart
 */
Spreadsheet.Sheet.prototype.insertChart = function(chart) {};

/**
 * @param {number} afterPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.insertColumnAfter = function(afterPosition) {};

/**
 * @param {number} beforePosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.insertColumnBefore = function(beforePosition) {};

/**
 * @param {number} columnIndex
 */
Spreadsheet.Sheet.prototype.insertColumns = function(columnIndex) {};

/**
 * @param {number} columnIndex
 * @param {number} numColumns
 */
Spreadsheet.Sheet.prototype.insertColumns = function(columnIndex, numColumns) {};

/**
 * @param {number} afterPosition
 * @param {number} howMany
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.insertColumnsAfter = function(afterPosition, howMany) {};

/**
 * @param {number} beforePosition
 * @param {number} howMany
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.insertColumnsBefore = function(beforePosition, howMany) {};

/**
 * @param {string} url
 * @param {number} column
 * @param {number} row
 */
Spreadsheet.Sheet.prototype.insertImage = function(url, column, row) {};

/**
 * @param {string} url
 * @param {number} column
 * @param {number} row
 * @param {number} offsetX
 * @param {number} offsetY
 */
Spreadsheet.Sheet.prototype.insertImage = function(url, column, row, offsetX, offsetY) {};

/**
 * @param {number} afterPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.insertRowAfter = function(afterPosition) {};

/**
 * @param {number} beforePosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.insertRowBefore = function(beforePosition) {};

/**
 * @param {number} rowIndex
 */
Spreadsheet.Sheet.prototype.insertRows = function(rowIndex) {};

/**
 * @param {number} rowIndex
 * @param {number} numRows
 */
Spreadsheet.Sheet.prototype.insertRows = function(rowIndex, numRows) {};

/**
 * @param {number} afterPosition
 * @param {number} howMany
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.insertRowsAfter = function(afterPosition, howMany) {};

/**
 * @param {number} beforePosition
 * @param {number} howMany
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.insertRowsBefore = function(beforePosition, howMany) {};

/**
 * @return {boolean}
 */
Spreadsheet.Sheet.prototype.isSheetHidden = function() {};

/**
 * @return {Spreadsheet.EmbeddedChartBuilder}
 */
Spreadsheet.Sheet.prototype.newChart = function() {};

/**
 * @param {Spreadsheet.EmbeddedChart} chart
 */
Spreadsheet.Sheet.prototype.removeChart = function(chart) {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.setActiveRange = function(range) {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.setActiveSelection = function(range) {};

/**
 * @param {string} a1Notation
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.setActiveSelection = function(a1Notation) {};

/**
 * @param {number} columnPosition
 * @param {number} width
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.setColumnWidth = function(columnPosition, width) {};

/**
 * @param {number} columns
 */
Spreadsheet.Sheet.prototype.setFrozenColumns = function(columns) {};

/**
 * @param {number} rows
 */
Spreadsheet.Sheet.prototype.setFrozenRows = function(rows) {};

/**
 * @param {string} name
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.setName = function(name) {};

/**
 * @param {number} rowPosition
 * @param {number} height
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.setRowHeight = function(rowPosition, height) {};

/**
 * @param {Spreadsheet.PageProtection} permissions
 */
Spreadsheet.Sheet.prototype.setSheetProtection = function(permissions) {};

/**
 * @param {number} columnIndex
 */
Spreadsheet.Sheet.prototype.showColumns = function(columnIndex) {};

/**
 * @param {number} columnIndex
 * @param {number} numColumns
 */
Spreadsheet.Sheet.prototype.showColumns = function(columnIndex, numColumns) {};

/**
 * @param {number} rowIndex
 */
Spreadsheet.Sheet.prototype.showRows = function(rowIndex) {};

/**
 * @param {number} rowIndex
 * @param {number} numRows
 */
Spreadsheet.Sheet.prototype.showRows = function(rowIndex, numRows) {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.showSheet = function() {};

/**
 * @param {number} columnPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.sort = function(columnPosition) {};

/**
 * @param {number} columnPosition
 * @param {boolean} ascending
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.sort = function(columnPosition, ascending) {};

/**
 * @param {Spreadsheet.Range} column
 */
Spreadsheet.Sheet.prototype.unhideColumn = function(column) {};

/**
 * @param {Spreadsheet.Range} row
 */
Spreadsheet.Sheet.prototype.unhideRow = function(row) {};

/**
 * @param {Spreadsheet.EmbeddedChart} chart
 */
Spreadsheet.Sheet.prototype.updateChart = function(chart) {};

/**
 * @deprecated
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Sheet.prototype.clearComments = function() {};

/**
 * @deprecated
 */
Spreadsheet.Sheet.prototype.deleteColumns = function(columnIndex) {};

/**
 * @deprecated
 */
Spreadsheet.Sheet.prototype.deleteRows = function(rowIndex) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.find = function(a1Notation) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.getActiveSelection = function() {};

/**
 * @deprecated
 */
Spreadsheet.Sheet.prototype.revealColumn = function(column) {};

/**
 * @deprecated
 */
Spreadsheet.Sheet.prototype.revealRow = function(row) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.setActiveCell = function(cell) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Sheet.prototype.setActiveCell = function(a1Notation) {};

/**
 * Class Spreadsheet
 * Last updated June 27, 2013.
 * @constructor
 */
Spreadsheet.Spreadsheet = function() {};

/**
 * @param {string} emailAddress
 */
Spreadsheet.Spreadsheet.prototype.addEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 */
Spreadsheet.Spreadsheet.prototype.addEditor = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 */
Spreadsheet.Spreadsheet.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {string} name
 * @param {Array.<Object>} subMenus
 */
Spreadsheet.Spreadsheet.prototype.addMenu = function(name, subMenus) {};

/**
 * @param {string} emailAddress
 */
Spreadsheet.Spreadsheet.prototype.addViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 */
Spreadsheet.Spreadsheet.prototype.addViewer = function(user) {};

/**
 * @param {Array.<string>} emailAddresses
 */
Spreadsheet.Spreadsheet.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {Array.<Object>} rowContents
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.appendRow = function(rowContents) {};

/**
 * @param {number} columnPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.autoResizeColumn = function(columnPosition) {};

/**
 * @param {string} name
 * @return {Spreadsheet.Spreadsheet}
 */
Spreadsheet.Spreadsheet.prototype.copy = function(name) {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.deleteActiveSheet = function() {};

/**
 * @param {number} columnPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.deleteColumn = function(columnPosition) {};

/**
 * @param {number} columnPosition
 * @param {number} howMany
 */
Spreadsheet.Spreadsheet.prototype.deleteColumns = function(columnPosition, howMany) {};

/**
 * @param {number} rowPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.deleteRow = function(rowPosition) {};

/**
 * @param {number} rowPosition
 * @param {number} howMany
 */
Spreadsheet.Spreadsheet.prototype.deleteRows = function(rowPosition, howMany) {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.duplicateActiveSheet = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.getActiveCell = function() {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.getActiveRange = function() {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.getActiveSheet = function() {};

/**
 * @param {number} columnPosition
 * @return {number}
 */
Spreadsheet.Spreadsheet.prototype.getColumnWidth = function(columnPosition) {};

/**
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.getDataRange = function() {};

/**
 * @return {Array.<Base.User>}
 */
Spreadsheet.Spreadsheet.prototype.getEditors = function() {};

/**
 * @return {string}
 */
Spreadsheet.Spreadsheet.prototype.getFormUrl = function() {};

/**
 * @return {number}
 */
Spreadsheet.Spreadsheet.prototype.getFrozenColumns = function() {};

/**
 * @return {number}
 */
Spreadsheet.Spreadsheet.prototype.getFrozenRows = function() {};

/**
 * @return {string}
 */
Spreadsheet.Spreadsheet.prototype.getId = function() {};

/**
 * @return {number}
 */
Spreadsheet.Spreadsheet.prototype.getLastColumn = function() {};

/**
 * @return {number}
 */
Spreadsheet.Spreadsheet.prototype.getLastRow = function() {};

/**
 * @return {string}
 */
Spreadsheet.Spreadsheet.prototype.getName = function() {};

/**
 * @return {number}
 */
Spreadsheet.Spreadsheet.prototype.getNumSheets = function() {};

/**
 * @return {Base.User}
 */
Spreadsheet.Spreadsheet.prototype.getOwner = function() {};

/**
 * @param {string} a1Notation
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.getRange = function(a1Notation) {};

/**
 * @param {string} name
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.getRangeByName = function(name) {};

/**
 * @param {number} rowPosition
 * @return {number}
 */
Spreadsheet.Spreadsheet.prototype.getRowHeight = function(rowPosition) {};

/**
 * @param {string} name
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.getSheetByName = function(name) {};

/**
 * @return {number}
 */
Spreadsheet.Spreadsheet.prototype.getSheetId = function() {};

/**
 * @return {string}
 */
Spreadsheet.Spreadsheet.prototype.getSheetName = function() {};

/**
 * @return {Spreadsheet.PageProtection}
 */
Spreadsheet.Spreadsheet.prototype.getSheetProtection = function() {};

/**
 * @param {number} startRow
 * @param {number} startColumn
 * @param {number} numRows
 * @param {number} numColumns
 * @return {Array.<Array.<Object>>}
 */
Spreadsheet.Spreadsheet.prototype.getSheetValues = function(startRow, startColumn, numRows, numColumns) {};

/**
 * @return {Array.<Spreadsheet.Sheet>}
 */
Spreadsheet.Spreadsheet.prototype.getSheets = function() {};

/**
 * @return {string}
 */
Spreadsheet.Spreadsheet.prototype.getSpreadsheetLocale = function() {};

/**
 * @return {string}
 */
Spreadsheet.Spreadsheet.prototype.getSpreadsheetTimeZone = function() {};

/**
 * @return {string}
 */
Spreadsheet.Spreadsheet.prototype.getUrl = function() {};

/**
 * @return {Array.<Base.User>}
 */
Spreadsheet.Spreadsheet.prototype.getViewers = function() {};

/**
 * @param {Spreadsheet.Range} column
 */
Spreadsheet.Spreadsheet.prototype.hideColumn = function(column) {};

/**
 * @param {Spreadsheet.Range} row
 */
Spreadsheet.Spreadsheet.prototype.hideRow = function(row) {};

/**
 * @param {number} afterPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertColumnAfter = function(afterPosition) {};

/**
 * @param {number} beforePosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertColumnBefore = function(beforePosition) {};

/**
 * @param {number} afterPosition
 * @param {number} howMany
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertColumnsAfter = function(afterPosition, howMany) {};

/**
 * @param {number} beforePosition
 * @param {number} howMany
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertColumnsBefore = function(beforePosition, howMany) {};

/**
 * @param {string} url
 * @param {number} column
 * @param {number} row
 */
Spreadsheet.Spreadsheet.prototype.insertImage = function(url, column, row) {};

/**
 * @param {string} url
 * @param {number} column
 * @param {number} row
 * @param {number} offsetX
 * @param {number} offsetY
 */
Spreadsheet.Spreadsheet.prototype.insertImage = function(url, column, row, offsetX, offsetY) {};

/**
 * @param {number} afterPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertRowAfter = function(afterPosition) {};

/**
 * @param {number} beforePosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertRowBefore = function(beforePosition) {};

/**
 * @param {number} afterPosition
 * @param {number} howMany
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertRowsAfter = function(afterPosition, howMany) {};

/**
 * @param {number} beforePosition
 * @param {number} howMany
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertRowsBefore = function(beforePosition, howMany) {};

/**
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertSheet = function() {};

/**
 * @param {number} sheetIndex
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertSheet = function(sheetIndex) {};

/**
 * @param {number} sheetIndex
 * @param {Object} options
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertSheet = function(sheetIndex, options) {};

/**
 * @param {Object} options
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertSheet = function(options) {};

/**
 * @param {string} sheetName
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertSheet = function(sheetName) {};

/**
 * @param {string} sheetName
 * @param {number} sheetIndex
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertSheet = function(sheetName, sheetIndex) {};

/**
 * @param {string} sheetName
 * @param {number} sheetIndex
 * @param {Object} options
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertSheet = function(sheetName, sheetIndex, options) {};

/**
 * @param {string} sheetName
 * @param {Object} options
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.insertSheet = function(sheetName, options) {};

/**
 * @return {boolean}
 */
Spreadsheet.Spreadsheet.prototype.isAnonymousView = function() {};

/**
 * @return {boolean}
 */
Spreadsheet.Spreadsheet.prototype.isAnonymousWrite = function() {};

/**
 * @return {boolean}
 */
Spreadsheet.Spreadsheet.prototype.isReadable = function() {};

/**
 * @return {boolean}
 */
Spreadsheet.Spreadsheet.prototype.isWritable = function() {};

/**
 * @param {number} pos
 */
Spreadsheet.Spreadsheet.prototype.moveActiveSheet = function(pos) {};

/**
 * @param {string} emailAddress
 */
Spreadsheet.Spreadsheet.prototype.removeEditor = function(emailAddress) {};

/**
 * @param {Base.User} user
 */
Spreadsheet.Spreadsheet.prototype.removeEditor = function(user) {};

/**
 * @param {string} name
 */
Spreadsheet.Spreadsheet.prototype.removeMenu = function(name) {};

/**
 * @param {string} name
 */
Spreadsheet.Spreadsheet.prototype.removeNamedRange = function(name) {};

/**
 * @param {string} emailAddress
 */
Spreadsheet.Spreadsheet.prototype.removeViewer = function(emailAddress) {};

/**
 * @param {Base.User} user
 */
Spreadsheet.Spreadsheet.prototype.removeViewer = function(user) {};

/**
 * @param {string} newName
 */
Spreadsheet.Spreadsheet.prototype.rename = function(newName) {};

/**
 * @param {string} newName
 */
Spreadsheet.Spreadsheet.prototype.renameActiveSheet = function(newName) {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.setActiveRange = function(range) {};

/**
 * @param {Spreadsheet.Range} range
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.setActiveSelection = function(range) {};

/**
 * @param {string} a1Notation
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.setActiveSelection = function(a1Notation) {};

/**
 * @param {Spreadsheet.Sheet} sheet
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.setActiveSheet = function(sheet) {};

/**
 * @param {boolean} anonymousReadAllowed
 * @param {boolean} anonymousWriteAllowed
 */
Spreadsheet.Spreadsheet.prototype.setAnonymousAccess = function(anonymousReadAllowed, anonymousWriteAllowed) {};

/**
 * @param {number} columnPosition
 * @param {number} width
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.setColumnWidth = function(columnPosition, width) {};

/**
 * @param {number} columns
 */
Spreadsheet.Spreadsheet.prototype.setFrozenColumns = function(columns) {};

/**
 * @param {number} rows
 */
Spreadsheet.Spreadsheet.prototype.setFrozenRows = function(rows) {};

/**
 * @param {string} name
 * @param {Spreadsheet.Range} range
 */
Spreadsheet.Spreadsheet.prototype.setNamedRange = function(name, range) {};

/**
 * @param {number} rowPosition
 * @param {number} height
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.setRowHeight = function(rowPosition, height) {};

/**
 * @param {Spreadsheet.PageProtection} permissions
 */
Spreadsheet.Spreadsheet.prototype.setSheetProtection = function(permissions) {};

/**
 * @param {string} locale
 */
Spreadsheet.Spreadsheet.prototype.setSpreadsheetLocale = function(locale) {};

/**
 * @param {string} timezone
 */
Spreadsheet.Spreadsheet.prototype.setSpreadsheetTimeZone = function(timezone) {};

/**
 */
Spreadsheet.Spreadsheet.prototype.show = function(userInterface) {};

/**
 * @param {number} columnPosition
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.sort = function(columnPosition) {};

/**
 * @param {number} columnPosition
 * @param {boolean} ascending
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.sort = function(columnPosition, ascending) {};

/**
 * @param {string} msg
 */
Spreadsheet.Spreadsheet.prototype.toast = function(msg) {};

/**
 * @param {string} msg
 * @param {string} title
 */
Spreadsheet.Spreadsheet.prototype.toast = function(msg, title) {};

/**
 * @param {string} msg
 * @param {string} title
 * @param {Number} timeoutSeconds
 */
Spreadsheet.Spreadsheet.prototype.toast = function(msg, title, timeoutSeconds) {};

/**
 * @param {Spreadsheet.Range} column
 */
Spreadsheet.Spreadsheet.prototype.unhideColumn = function(column) {};

/**
 * @param {Spreadsheet.Range} row
 */
Spreadsheet.Spreadsheet.prototype.unhideRow = function(row) {};

/**
 * @param {string} name
 * @param {Array.<Object>} subMenus
 */
Spreadsheet.Spreadsheet.prototype.updateMenu = function(name, subMenus) {};

/**
 * @deprecated
 */
Spreadsheet.Spreadsheet.prototype.addCollaborator = function(email) {};

/**
 * @deprecated
 */
Spreadsheet.Spreadsheet.prototype.addCollaborator = function(user) {};

/**
 * @deprecated
 */
Spreadsheet.Spreadsheet.prototype.addCollaborators = function(collaborators) {};

/**
 * @deprecated
 */
Spreadsheet.Spreadsheet.prototype.addCollaborators = function(collaborators, options) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.find = function(a1Notation) {};

/**
 * @deprecated
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.findSheet = function(index) {};

/**
 * @deprecated
 * @return {Spreadsheet.Sheet}
 */
Spreadsheet.Spreadsheet.prototype.findSheetByName = function(name) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.getActiveSelection = function() {};

/**
 * @deprecated
 * @return {Array.<Base.User>}
 */
Spreadsheet.Spreadsheet.prototype.getCollaborators = function() {};

/**
 * @deprecated
 * @return {string}
 */
Spreadsheet.Spreadsheet.prototype.getKey = function() {};

/**
 * @deprecated
 */
Spreadsheet.Spreadsheet.prototype.removeCollaborator = function(email) {};

/**
 * @deprecated
 */
Spreadsheet.Spreadsheet.prototype.removeCollaborator = function(user) {};

/**
 * @deprecated
 */
Spreadsheet.Spreadsheet.prototype.revealColumn = function(column) {};

/**
 * @deprecated
 */
Spreadsheet.Spreadsheet.prototype.revealRow = function(row) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.setActiveCell = function(cell) {};

/**
 * @deprecated
 * @return {Spreadsheet.Range}
 */
Spreadsheet.Spreadsheet.prototype.setActiveCell = function(a1Notation) {};

/**
 * @deprecated
 */
Spreadsheet.Spreadsheet.prototype.setName = function(name) {};


/**
 * Base Services
 */
var Base = {};

/**
 * Class Browser
 * Last updated June 27, 2013.
 * @constructor
 */
Base.Browser = function() {};

/**
 * @type {Base.ButtonSet}
 */
Base.Browser.prototype.Buttons;

/**
 * @param {string} prompt
 * @return {string}
 */
Base.Browser.prototype.inputBox = function(prompt) {};

/**
 * @param {string} prompt
 * @param {Base.ButtonSet} buttons
 * @return {string}
 */
Base.Browser.prototype.inputBox = function(prompt, buttons) {};

/**
 * @param {string} title
 * @param {string} prompt
 * @param {Base.ButtonSet} buttons
 * @return {string}
 */
Base.Browser.prototype.inputBox = function(title, prompt, buttons) {};

/**
 * @param {string} prompt
 * @return {string}
 */
Base.Browser.prototype.msgBox = function(prompt) {};

/**
 * @param {string} prompt
 * @param {Base.ButtonSet} buttons
 * @return {string}
 */
Base.Browser.prototype.msgBox = function(prompt, buttons) {};

/**
 * @param {string} title
 * @param {string} prompt
 * @param {Base.ButtonSet} buttons
 * @return {string}
 */
Base.Browser.prototype.msgBox = function(title, prompt, buttons) {};


/**
 * @type {Base.Browser}
 */
var Browser;

/**
 * Class Logger
 * Last updated June 27, 2013.
 * @constructor
 */
Base.Logger = function() {};

/**
 */
Base.Logger.prototype.clear = function() {};

/**
 * @return {string}
 */
Base.Logger.prototype.getLog = function() {};

/**
 * @param {Object} data
 * @return {Base.Logger}
 */
Base.Logger.prototype.log = function(data) {};

/**
 * @param {string} format
 * @param {Object...} values
 * @return {Base.Logger}
 */
Base.Logger.prototype.log = function(format, values) {};


/**
 * @type {Base.Logger}
 */
var Logger;

/**
 * Enum MimeType
 * Last updated May 15, 2013.
 * @constructor
 */
Base.MimeType = function() {};

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.GOOGLE_APPS_SCRIPT;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.GOOGLE_DRAWINGS;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.GOOGLE_DOCS;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.GOOGLE_FORMS;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.GOOGLE_SHEETS;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.GOOGLE_SLIDES;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.FOLDER;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.BMP;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.GIF;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.JPEG;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.PNG;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.SVG;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.PDF;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.CSS;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.CSV;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.HTML;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.JAVASCRIPT;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.PLAIN_TEXT;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.RTF;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.OPENDOCUMENT_GRAPHICS;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.OPENDOCUMENT_PRESENTATION;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.OPENDOCUMENT_SPREADSHEET;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.OPENDOCUMENT_TEXT;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.MICROSOFT_EXCEL;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.MICROSOFT_EXCEL_LEGACY;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.MICROSOFT_POWERPOINT;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.MICROSOFT_POWERPOINT_LEGACY;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.MICROSOFT_WORD;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.MICROSOFT_WORD_LEGACY;

/**
 * @type {Base.MimeType}
 */
Base.MimeType.prototype.ZIP;


/**
 * @type {Base.MimeType}
 */
var MimeType;

/**
 * Class Session
 * Last updated March 26, 2013.
 * @constructor
 */
Base.Session = function() {};

/**
 * @return {Base.User}
 */
Base.Session.prototype.getActiveUser = function() {};

/**
 * @return {Base.User}
 */
Base.Session.prototype.getEffectiveUser = function() {};

/**
 * @return {string}
 */
Base.Session.prototype.getTimeZone = function() {};

/**
 * @deprecated
 * @return {Base.User}
 */
Base.Session.prototype.getUser = function() {};


/**
 * @type {Base.Session}
 */
var Session;

/**
 * Class Blob
 * Last updated July 11, 2013.
 * @constructor
 */
Base.Blob = function() {};

/**
 * @return {Base.Blob}
 */
Base.Blob.prototype.copyBlob = function() {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Base.Blob.prototype.getAs = function(contentType) {};

/**
 * @return {Array.<Byte>}
 */
Base.Blob.prototype.getBytes = function() {};

/**
 * @return {string}
 */
Base.Blob.prototype.getContentType = function() {};

/**
 * @return {string}
 */
Base.Blob.prototype.getDataAsString = function() {};

/**
 * @param {string} charset
 * @return {string}
 */
Base.Blob.prototype.getDataAsString = function(charset) {};

/**
 * @return {string}
 */
Base.Blob.prototype.getName = function() {};

/**
 * @return {boolean}
 */
Base.Blob.prototype.isGoogleType = function() {};

/**
 * @param {Array.<Byte>} data
 * @return {Base.Blob}
 */
Base.Blob.prototype.setBytes = function(data) {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Base.Blob.prototype.setContentType = function(contentType) {};

/**
 * @return {Base.Blob}
 */
Base.Blob.prototype.setContentTypeFromExtension = function() {};

/**
 * @param {string} string
 * @return {Base.Blob}
 */
Base.Blob.prototype.setDataFromString = function(string) {};

/**
 * @param {string} string
 * @param {string} charset
 * @return {Base.Blob}
 */
Base.Blob.prototype.setDataFromString = function(string, charset) {};

/**
 * @param {string} name
 * @return {Base.Blob}
 */
Base.Blob.prototype.setName = function(name) {};

/**
 * @deprecated
 * @return {Array.<Base.Blob>}
 */
Base.Blob.prototype.getAllBlobs = function() {};

/**
 * Class Menu
 * Last updated May 15, 2013.
 * @constructor
 */
Base.Menu = function() {};

/**
 * @param {string} caption
 * @param {string} function_
 * @return {Base.Menu}
 */
Base.Menu.prototype.addItem = function(caption, function_) {};

/**
 * @return {Base.Menu}
 */
Base.Menu.prototype.addSeparator = function() {};

/**
 * @param {Base.Menu} menu
 * @return {Base.Menu}
 */
Base.Menu.prototype.addSubMenu = function(menu) {};

/**
 */
Base.Menu.prototype.addToUi = function() {};

/**
 * Class PromptResponse
 * Last updated May 15, 2013.
 * @constructor
 */
Base.PromptResponse = function() {};

/**
 * @return {string}
 */
Base.PromptResponse.prototype.getResponseText = function() {};

/**
 * @return {Base.Button}
 */
Base.PromptResponse.prototype.getSelectedButton = function() {};

/**
 * Class Ui
 * Last updated June 27, 2013.
 * @constructor
 */
Base.Ui = function() {};

/**
 * @type {Base.Button}
 */
Base.Ui.prototype.Button;

/**
 * @type {Base.ButtonSet}
 */
Base.Ui.prototype.ButtonSet;

/**
 * @param {string} prompt
 * @return {Base.Button}
 */
Base.Ui.prototype.alert = function(prompt) {};

/**
 * @param {string} prompt
 * @param {Base.ButtonSet} buttons
 * @return {Base.Button}
 */
Base.Ui.prototype.alert = function(prompt, buttons) {};

/**
 * @param {string} title
 * @param {string} prompt
 * @param {Base.ButtonSet} buttons
 * @return {Base.Button}
 */
Base.Ui.prototype.alert = function(title, prompt, buttons) {};

/**
 * @param {string} caption
 * @return {Base.Menu}
 */
Base.Ui.prototype.createMenu = function(caption) {};

/**
 * @param {string} prompt
 * @return {Base.PromptResponse}
 */
Base.Ui.prototype.prompt = function(prompt) {};

/**
 * @param {string} prompt
 * @param {Base.ButtonSet} buttons
 * @return {Base.PromptResponse}
 */
Base.Ui.prototype.prompt = function(prompt, buttons) {};

/**
 * @param {string} title
 * @param {string} prompt
 * @param {Base.ButtonSet} buttons
 * @return {Base.PromptResponse}
 */
Base.Ui.prototype.prompt = function(title, prompt, buttons) {};

/**
 * @param {Object} userInterface
 */
Base.Ui.prototype.showDialog = function(userInterface) {};

/**
 */
Base.Ui.prototype.showSidebar = function(userInterface) {};

/**
 * Class User
 * Last updated June 27, 2013.
 * @constructor
 */
Base.User = function() {};

/**
 * @return {string}
 */
Base.User.prototype.getEmail = function() {};

/**
 * @deprecated
 * @return {string}
 */
Base.User.prototype.getUserLoginId = function() {};

/**
 * Interface BlobSource
 * Last updated July 11, 2013.
 * @constructor
 */
Base.BlobSource = function() {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Base.BlobSource.prototype.getAs = function(contentType) {};

/**
 * @return {Base.Blob}
 */
Base.BlobSource.prototype.getBlob = function() {};

/**
 * Enum Button
 * Last updated May 15, 2013.
 * @constructor
 */
Base.Button = function() {};

/**
 * @type {Base.Button}
 */
Base.Button.prototype.CLOSE;

/**
 * @type {Base.Button}
 */
Base.Button.prototype.OK;

/**
 * @type {Base.Button}
 */
Base.Button.prototype.CANCEL;

/**
 * @type {Base.Button}
 */
Base.Button.prototype.YES;

/**
 * @type {Base.Button}
 */
Base.Button.prototype.NO;

/**
 * Enum ButtonSet
 * Last updated May 15, 2013.
 * @constructor
 */
Base.ButtonSet = function() {};

/**
 * @type {Base.ButtonSet}
 */
Base.ButtonSet.prototype.OK;

/**
 * @type {Base.ButtonSet}
 */
Base.ButtonSet.prototype.OK_CANCEL;

/**
 * @type {Base.ButtonSet}
 */
Base.ButtonSet.prototype.YES_NO;

/**
 * @type {Base.ButtonSet}
 */
Base.ButtonSet.prototype.YES_NO_CANCEL;

/**
 * Enum Month
 * Last updated June 27, 2013.
 * @constructor
 */
Base.Month = function() {};

/**
 * @type {Base.Month}
 */
Base.Month.prototype.JANUARY;

/**
 * @type {Base.Month}
 */
Base.Month.prototype.FEBRUARY;

/**
 * @type {Base.Month}
 */
Base.Month.prototype.MARCH;

/**
 * @type {Base.Month}
 */
Base.Month.prototype.APRIL;

/**
 * @type {Base.Month}
 */
Base.Month.prototype.MAY;

/**
 * @type {Base.Month}
 */
Base.Month.prototype.JUNE;

/**
 * @type {Base.Month}
 */
Base.Month.prototype.JULY;

/**
 * @type {Base.Month}
 */
Base.Month.prototype.AUGUST;

/**
 * @type {Base.Month}
 */
Base.Month.prototype.SEPTEMBER;

/**
 * @type {Base.Month}
 */
Base.Month.prototype.OCTOBER;

/**
 * @type {Base.Month}
 */
Base.Month.prototype.NOVEMBER;

/**
 * @type {Base.Month}
 */
Base.Month.prototype.DECEMBER;

/**
 * Enum Weekday
 * Last updated June 27, 2013.
 * @constructor
 */
Base.Weekday = function() {};

/**
 * @type {Base.Weekday}
 */
Base.Weekday.prototype.SUNDAY;

/**
 * @type {Base.Weekday}
 */
Base.Weekday.prototype.MONDAY;

/**
 * @type {Base.Weekday}
 */
Base.Weekday.prototype.TUESDAY;

/**
 * @type {Base.Weekday}
 */
Base.Weekday.prototype.WEDNESDAY;

/**
 * @type {Base.Weekday}
 */
Base.Weekday.prototype.THURSDAY;

/**
 * @type {Base.Weekday}
 */
Base.Weekday.prototype.FRIDAY;

/**
 * @type {Base.Weekday}
 */
Base.Weekday.prototype.SATURDAY;


/**
 * Cache Services
 */
var Cache = {};

/**
 * Class CacheService
 * Last updated March 26, 2013.
 * @constructor
 */
Cache.CacheService = function() {};

/**
 * @return {Cache.Cache}
 */
Cache.CacheService.prototype.getPrivateCache = function() {};

/**
 * @return {Cache.Cache}
 */
Cache.CacheService.prototype.getPublicCache = function() {};


/**
 * @type {Cache.CacheService}
 */
var CacheService;

/**
 * Class Cache
 * Last updated March 26, 2013.
 * @constructor
 */
Cache.Cache = function() {};

/**
 * @param {string} key
 * @return {string}
 */
Cache.Cache.prototype.get = function(key) {};

/**
 * @param {Array.<string>} keys
 * @return {Object}
 */
Cache.Cache.prototype.getAll = function(keys) {};

/**
 * @param {string} key
 * @param {string} value
 */
Cache.Cache.prototype.put = function(key, value) {};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} expirationInSeconds
 */
Cache.Cache.prototype.put = function(key, value, expirationInSeconds) {};

/**
 * @param {Object} values
 */
Cache.Cache.prototype.putAll = function(values) {};

/**
 * @param {Object} values
 * @param {number} expirationInSeconds
 */
Cache.Cache.prototype.putAll = function(values, expirationInSeconds) {};

/**
 * @param {string} key
 */
Cache.Cache.prototype.remove = function(key) {};

/**
 * @param {Array.<string>} keys
 */
Cache.Cache.prototype.removeAll = function(keys) {};


/**
 * Charts Services
 */
var Charts = {};

/**
 * Class Charts
 * Last updated June 27, 2013.
 * @constructor
 */
Charts.Charts = function() {};

/**
 * @type {Charts.ChartType}
 */
Charts.Charts.prototype.ChartType;

/**
 * @type {Charts.ColumnType}
 */
Charts.Charts.prototype.ColumnType;

/**
 * @type {Charts.CurveStyle}
 */
Charts.Charts.prototype.CurveStyle;

/**
 * @type {Charts.MatchType}
 */
Charts.Charts.prototype.MatchType;

/**
 * @type {Charts.Orientation}
 */
Charts.Charts.prototype.Orientation;

/**
 * @type {Charts.PickerValuesLayout}
 */
Charts.Charts.prototype.PickerValuesLayout;

/**
 * @type {Charts.PointStyle}
 */
Charts.Charts.prototype.PointStyle;

/**
 * @type {Charts.Position}
 */
Charts.Charts.prototype.Position;

/**
 * @return {Charts.AreaChartBuilder}
 */
Charts.Charts.prototype.newAreaChart = function() {};

/**
 * @return {Charts.BarChartBuilder}
 */
Charts.Charts.prototype.newBarChart = function() {};

/**
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.Charts.prototype.newCategoryFilter = function() {};

/**
 * @return {Charts.ColumnChartBuilder}
 */
Charts.Charts.prototype.newColumnChart = function() {};

/**
 * @return {Charts.DashboardPanelBuilder}
 */
Charts.Charts.prototype.newDashboardPanel = function() {};

/**
 * @return {Charts.DataTableBuilder}
 */
Charts.Charts.prototype.newDataTable = function() {};

/**
 * @return {Charts.DataViewDefinitionBuilder}
 */
Charts.Charts.prototype.newDataViewDefinition = function() {};

/**
 * @return {Charts.LineChartBuilder}
 */
Charts.Charts.prototype.newLineChart = function() {};

/**
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.Charts.prototype.newNumberRangeFilter = function() {};

/**
 * @return {Charts.PieChartBuilder}
 */
Charts.Charts.prototype.newPieChart = function() {};

/**
 * @return {Charts.ScatterChartBuilder}
 */
Charts.Charts.prototype.newScatterChart = function() {};

/**
 * @return {Charts.StringFilterBuilder}
 */
Charts.Charts.prototype.newStringFilter = function() {};

/**
 * @return {Charts.TableChartBuilder}
 */
Charts.Charts.prototype.newTableChart = function() {};

/**
 * @return {Charts.TextStyleBuilder}
 */
Charts.Charts.prototype.newTextStyle = function() {};


/**
 * @type {Charts.Charts}
 */
var Charts;

/**
 * Class AreaChartBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.AreaChartBuilder = function() {};

/**
 * @return {Charts.Chart}
 */
Charts.AreaChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {string} url
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {Charts.DataTableBuilder} tableBuilder
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setDataTable = function(tableBuilder) {};

/**
 * @param {Charts.DataTableSource} table
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setDataTable = function(table) {};

/**
 * @param {Charts.DataViewDefinition} dataViewDefinition
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {Charts.Position} position
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {Charts.PointStyle} style
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {Charts.AreaChartBuilder}
 */
Charts.AreaChartBuilder.prototype.useLogScale = function() {};

/**
 * Class BarChartBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.BarChartBuilder = function() {};

/**
 * @return {Charts.Chart}
 */
Charts.BarChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.reverseCategories = function() {};

/**
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.reverseDirection = function() {};

/**
 * @param {string} cssValue
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {string} url
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {Charts.DataTableBuilder} tableBuilder
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setDataTable = function(tableBuilder) {};

/**
 * @param {Charts.DataTableSource} table
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setDataTable = function(table) {};

/**
 * @param {Charts.DataViewDefinition} dataViewDefinition
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {Charts.Position} position
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {Charts.BarChartBuilder}
 */
Charts.BarChartBuilder.prototype.useLogScale = function() {};

/**
 * Class CategoryFilterBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.CategoryFilterBuilder = function() {};

/**
 * @return {Charts.Control}
 */
Charts.CategoryFilterBuilder.prototype.build = function() {};

/**
 * @param {boolean} allowMultiple
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setAllowMultiple = function(allowMultiple) {};

/**
 * @param {boolean} allowNone
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setAllowNone = function(allowNone) {};

/**
 * @param {boolean} allowTyping
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setAllowTyping = function(allowTyping) {};

/**
 * @param {string} caption
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setCaption = function(caption) {};

/**
 * @param {Charts.DataTableBuilder} tableBuilder
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setDataTable = function(tableBuilder) {};

/**
 * @param {Charts.DataTableSource} table
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setDataTable = function(table) {};

/**
 * @param {number} columnIndex
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setFilterColumnIndex = function(columnIndex) {};

/**
 * @param {string} columnLabel
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setFilterColumnLabel = function(columnLabel) {};

/**
 * @param {string} label
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setLabel = function(label) {};

/**
 * @param {string} labelSeparator
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setLabelSeparator = function(labelSeparator) {};

/**
 * @param {Charts.Orientation} orientation
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setLabelStacking = function(orientation) {};

/**
 * @param {Charts.PickerValuesLayout} layout
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setSelectedValuesLayout = function(layout) {};

/**
 * @param {boolean} sortValues
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setSortValues = function(sortValues) {};

/**
 * @param {Array.<string>} values
 * @return {Charts.CategoryFilterBuilder}
 */
Charts.CategoryFilterBuilder.prototype.setValues = function(values) {};

/**
 * Class Chart
 * Last updated July 11, 2013.
 * @constructor
 */
Charts.Chart = function() {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Charts.Chart.prototype.getAs = function(contentType) {};

/**
 * @return {Base.Blob}
 */
Charts.Chart.prototype.getBlob = function() {};

/**
 * @return {string}
 */
Charts.Chart.prototype.getId = function() {};

/**
 * @return {Charts.ChartOptions}
 */
Charts.Chart.prototype.getOptions = function() {};

/**
 * @return {string}
 */
Charts.Chart.prototype.getType = function() {};

/**
 * @param {string} id
 * @return {Charts.Chart}
 */
Charts.Chart.prototype.setId = function(id) {};

/**
 * Class ChartOptions
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.ChartOptions = function() {};

/**
 * @param {string} option
 * @return {Object}
 */
Charts.ChartOptions.prototype.get = function(option) {};

/**
 * Class ColumnChartBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.ColumnChartBuilder = function() {};

/**
 * @return {Charts.Chart}
 */
Charts.ColumnChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {string} url
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {Charts.DataTableBuilder} tableBuilder
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setDataTable = function(tableBuilder) {};

/**
 * @param {Charts.DataTableSource} table
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setDataTable = function(table) {};

/**
 * @param {Charts.DataViewDefinition} dataViewDefinition
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {Charts.Position} position
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {Charts.ColumnChartBuilder}
 */
Charts.ColumnChartBuilder.prototype.useLogScale = function() {};

/**
 * Class Control
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.Control = function() {};

/**
 * @return {string}
 */
Charts.Control.prototype.getId = function() {};

/**
 * @return {string}
 */
Charts.Control.prototype.getType = function() {};

/**
 * @param {string} id
 * @return {Charts.Control}
 */
Charts.Control.prototype.setId = function(id) {};

/**
 * Class DashboardPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.DashboardPanel = function() {};

/**
 * @param {Ui.Widget} widget
 * @return {Charts.DashboardPanel}
 */
Charts.DashboardPanel.prototype.add = function(widget) {};

/**
 * @return {string}
 */
Charts.DashboardPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Charts.DashboardPanel.prototype.getType = function() {};

/**
 * @param {string} id
 * @return {Charts.DashboardPanel}
 */
Charts.DashboardPanel.prototype.setId = function(id) {};

/**
 * Class DashboardPanelBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.DashboardPanelBuilder = function() {};

/**
 * @param {Charts.Control} control
 * @param {Charts.Chart} chart
 * @return {Charts.DashboardPanelBuilder}
 */
Charts.DashboardPanelBuilder.prototype.bind = function(control, chart) {};

/**
 * @param {Array.<Charts.Control>} controls
 * @param {Array.<Charts.Chart>} charts
 * @return {Charts.DashboardPanelBuilder}
 */
Charts.DashboardPanelBuilder.prototype.bind = function(controls, charts) {};

/**
 * @return {Charts.DashboardPanel}
 */
Charts.DashboardPanelBuilder.prototype.build = function() {};

/**
 * @param {Charts.DataTableBuilder} tableBuilder
 * @return {Charts.DashboardPanelBuilder}
 */
Charts.DashboardPanelBuilder.prototype.setDataTable = function(tableBuilder) {};

/**
 * @param {Charts.DataTableSource} source
 * @return {Charts.DashboardPanelBuilder}
 */
Charts.DashboardPanelBuilder.prototype.setDataTable = function(source) {};

/**
 * Class DataTable
 * Last updated June 27, 2013.
 * @constructor
 */
Charts.DataTable = function() {};

/**
 * Class DataTableBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.DataTableBuilder = function() {};

/**
 * @param {Charts.ColumnType} type
 * @param {string} label
 * @return {Charts.DataTableBuilder}
 */
Charts.DataTableBuilder.prototype.addColumn = function(type, label) {};

/**
 * @param {Array.<Object>} values
 * @return {Charts.DataTableBuilder}
 */
Charts.DataTableBuilder.prototype.addRow = function(values) {};

/**
 * @return {Charts.DataTable}
 */
Charts.DataTableBuilder.prototype.build = function() {};

/**
 * @param {number} row
 * @param {number} column
 * @param {Object} value
 * @return {Charts.DataTableBuilder}
 */
Charts.DataTableBuilder.prototype.setValue = function(row, column, value) {};

/**
 * Class DataViewDefinition
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.DataViewDefinition = function() {};

/**
 * Class DataViewDefinitionBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.DataViewDefinitionBuilder = function() {};

/**
 * @return {Charts.DataViewDefinition}
 */
Charts.DataViewDefinitionBuilder.prototype.build = function() {};

/**
 * @param {Array.<number>} columns
 * @return {Charts.DataViewDefinitionBuilder}
 */
Charts.DataViewDefinitionBuilder.prototype.setColumns = function(columns) {};

/**
 * Class LineChartBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.LineChartBuilder = function() {};

/**
 * @return {Charts.Chart}
 */
Charts.LineChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {Charts.CurveStyle} style
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setCurveStyle = function(style) {};

/**
 * @param {string} url
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {Charts.DataTableBuilder} tableBuilder
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setDataTable = function(tableBuilder) {};

/**
 * @param {Charts.DataTableSource} table
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setDataTable = function(table) {};

/**
 * @param {Charts.DataViewDefinition} dataViewDefinition
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {Charts.Position} position
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {Charts.PointStyle} style
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @param {string} chartTitle
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {Charts.LineChartBuilder}
 */
Charts.LineChartBuilder.prototype.useLogScale = function() {};

/**
 * Class NumberRangeFilterBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.NumberRangeFilterBuilder = function() {};

/**
 * @return {Charts.Control}
 */
Charts.NumberRangeFilterBuilder.prototype.build = function() {};

/**
 * @param {Charts.DataTableBuilder} tableBuilder
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setDataTable = function(tableBuilder) {};

/**
 * @param {Charts.DataTableSource} table
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setDataTable = function(table) {};

/**
 * @param {number} columnIndex
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setFilterColumnIndex = function(columnIndex) {};

/**
 * @param {string} columnLabel
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setFilterColumnLabel = function(columnLabel) {};

/**
 * @param {string} label
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setLabel = function(label) {};

/**
 * @param {string} labelSeparator
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setLabelSeparator = function(labelSeparator) {};

/**
 * @param {Charts.Orientation} orientation
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setLabelStacking = function(orientation) {};

/**
 * @param {number} maxValue
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setMaxValue = function(maxValue) {};

/**
 * @param {number} minValue
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setMinValue = function(minValue) {};

/**
 * @param {Charts.Orientation} orientation
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setOrientation = function(orientation) {};

/**
 * @param {boolean} showRangeValues
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setShowRangeValues = function(showRangeValues) {};

/**
 * @param {number} ticks
 * @return {Charts.NumberRangeFilterBuilder}
 */
Charts.NumberRangeFilterBuilder.prototype.setTicks = function(ticks) {};

/**
 * Class PieChartBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.PieChartBuilder = function() {};

/**
 * @return {Charts.Chart}
 */
Charts.PieChartBuilder.prototype.build = function() {};

/**
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.reverseCategories = function() {};

/**
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.set3D = function() {};

/**
 * @param {string} cssValue
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {string} url
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {Charts.DataTableBuilder} tableBuilder
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setDataTable = function(tableBuilder) {};

/**
 * @param {Charts.DataTableSource} table
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setDataTable = function(table) {};

/**
 * @param {Charts.DataViewDefinition} dataViewDefinition
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {Charts.Position} position
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {string} chartTitle
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.PieChartBuilder}
 */
Charts.PieChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * Class ScatterChartBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.ScatterChartBuilder = function() {};

/**
 * @return {Charts.Chart}
 */
Charts.ScatterChartBuilder.prototype.build = function() {};

/**
 * @param {string} cssValue
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {string} url
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {Charts.DataTableBuilder} tableBuilder
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setDataTable = function(tableBuilder) {};

/**
 * @param {Charts.DataTableSource} table
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setDataTable = function(table) {};

/**
 * @param {Charts.DataViewDefinition} dataViewDefinition
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {Charts.Position} position
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {Charts.PointStyle} style
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {string} chartTitle
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setXAxisLogScale = function() {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setXAxisRange = function(start, end) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setYAxisLogScale = function() {};

/**
 * @param {Number} start
 * @param {Number} end
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setYAxisRange = function(start, end) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {Charts.TextStyle} textStyle
 * @return {Charts.ScatterChartBuilder}
 */
Charts.ScatterChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * Class StringFilterBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.StringFilterBuilder = function() {};

/**
 * @return {Charts.Control}
 */
Charts.StringFilterBuilder.prototype.build = function() {};

/**
 * @param {boolean} caseSensitive
 * @return {Charts.StringFilterBuilder}
 */
Charts.StringFilterBuilder.prototype.setCaseSensitive = function(caseSensitive) {};

/**
 * @param {Charts.DataTableBuilder} tableBuilder
 * @return {Charts.StringFilterBuilder}
 */
Charts.StringFilterBuilder.prototype.setDataTable = function(tableBuilder) {};

/**
 * @param {Charts.DataTableSource} table
 * @return {Charts.StringFilterBuilder}
 */
Charts.StringFilterBuilder.prototype.setDataTable = function(table) {};

/**
 * @param {number} columnIndex
 * @return {Charts.StringFilterBuilder}
 */
Charts.StringFilterBuilder.prototype.setFilterColumnIndex = function(columnIndex) {};

/**
 * @param {string} columnLabel
 * @return {Charts.StringFilterBuilder}
 */
Charts.StringFilterBuilder.prototype.setFilterColumnLabel = function(columnLabel) {};

/**
 * @param {string} label
 * @return {Charts.StringFilterBuilder}
 */
Charts.StringFilterBuilder.prototype.setLabel = function(label) {};

/**
 * @param {string} labelSeparator
 * @return {Charts.StringFilterBuilder}
 */
Charts.StringFilterBuilder.prototype.setLabelSeparator = function(labelSeparator) {};

/**
 * @param {Charts.Orientation} orientation
 * @return {Charts.StringFilterBuilder}
 */
Charts.StringFilterBuilder.prototype.setLabelStacking = function(orientation) {};

/**
 * @param {Charts.MatchType} matchType
 * @return {Charts.StringFilterBuilder}
 */
Charts.StringFilterBuilder.prototype.setMatchType = function(matchType) {};

/**
 * @param {boolean} realtimeTrigger
 * @return {Charts.StringFilterBuilder}
 */
Charts.StringFilterBuilder.prototype.setRealtimeTrigger = function(realtimeTrigger) {};

/**
 * Class TableChartBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.TableChartBuilder = function() {};

/**
 * @return {Charts.Chart}
 */
Charts.TableChartBuilder.prototype.build = function() {};

/**
 * @param {boolean} enablePaging
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.enablePaging = function(enablePaging) {};

/**
 * @param {number} pageSize
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.enablePaging = function(pageSize) {};

/**
 * @param {number} pageSize
 * @param {number} startPage
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.enablePaging = function(pageSize, startPage) {};

/**
 * @param {boolean} rtlEnabled
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.enableRtlTable = function(rtlEnabled) {};

/**
 * @param {boolean} enableSorting
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.enableSorting = function(enableSorting) {};

/**
 * @param {string} url
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {Charts.DataTableBuilder} tableBuilder
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.setDataTable = function(tableBuilder) {};

/**
 * @param {Charts.DataTableSource} table
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.setDataTable = function(table) {};

/**
 * @param {Charts.DataViewDefinition} dataViewDefinition
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {number} number
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.setFirstRowNumber = function(number) {};

/**
 * @param {number} column
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.setInitialSortingAscending = function(column) {};

/**
 * @param {number} column
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.setInitialSortingDescending = function(column) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {boolean} showRowNumber
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.showRowNumberColumn = function(showRowNumber) {};

/**
 * @param {boolean} alternate
 * @return {Charts.TableChartBuilder}
 */
Charts.TableChartBuilder.prototype.useAlternatingRowStyle = function(alternate) {};

/**
 * Class TextStyle
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.TextStyle = function() {};

/**
 * @return {string}
 */
Charts.TextStyle.prototype.getColor = function() {};

/**
 * @return {string}
 */
Charts.TextStyle.prototype.getFontName = function() {};

/**
 * @return {Number}
 */
Charts.TextStyle.prototype.getFontSize = function() {};

/**
 * Class TextStyleBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.TextStyleBuilder = function() {};

/**
 * @return {Charts.TextStyle}
 */
Charts.TextStyleBuilder.prototype.build = function() {};

/**
 * @param {string} cssValue
 * @return {Charts.TextStyleBuilder}
 */
Charts.TextStyleBuilder.prototype.setColor = function(cssValue) {};

/**
 * @param {string} fontName
 * @return {Charts.TextStyleBuilder}
 */
Charts.TextStyleBuilder.prototype.setFontName = function(fontName) {};

/**
 * @param {Number} fontSize
 * @return {Charts.TextStyleBuilder}
 */
Charts.TextStyleBuilder.prototype.setFontSize = function(fontSize) {};

/**
 * Interface DataTableSource
 * Last updated June 27, 2013.
 * @constructor
 */
Charts.DataTableSource = function() {};

/**
 * @return {Charts.DataTable}
 */
Charts.DataTableSource.prototype.getDataTable = function() {};

/**
 * Enum ChartType
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.ChartType = function() {};

/**
 * @type {Charts.ChartType}
 */
Charts.ChartType.prototype.AREA;

/**
 * @type {Charts.ChartType}
 */
Charts.ChartType.prototype.BAR;

/**
 * @type {Charts.ChartType}
 */
Charts.ChartType.prototype.COLUMN;

/**
 * @type {Charts.ChartType}
 */
Charts.ChartType.prototype.LINE;

/**
 * @type {Charts.ChartType}
 */
Charts.ChartType.prototype.PIE;

/**
 * @type {Charts.ChartType}
 */
Charts.ChartType.prototype.SCATTER;

/**
 * @type {Charts.ChartType}
 */
Charts.ChartType.prototype.TABLE;

/**
 * Enum ColumnType
 * Last updated June 27, 2013.
 * @constructor
 */
Charts.ColumnType = function() {};

/**
 * @type {Charts.ColumnType}
 */
Charts.ColumnType.prototype.DATE;

/**
 * @type {Charts.ColumnType}
 */
Charts.ColumnType.prototype.NUMBER;

/**
 * @type {Charts.ColumnType}
 */
Charts.ColumnType.prototype.STRING;

/**
 * Enum CurveStyle
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.CurveStyle = function() {};

/**
 * @type {Charts.CurveStyle}
 */
Charts.CurveStyle.prototype.NORMAL;

/**
 * @type {Charts.CurveStyle}
 */
Charts.CurveStyle.prototype.SMOOTH;

/**
 * Enum MatchType
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.MatchType = function() {};

/**
 * @type {Charts.MatchType}
 */
Charts.MatchType.prototype.EXACT;

/**
 * @type {Charts.MatchType}
 */
Charts.MatchType.prototype.PREFIX;

/**
 * @type {Charts.MatchType}
 */
Charts.MatchType.prototype.ANY;

/**
 * @return {string}
 */
Charts.MatchType.prototype.getName = function() {};

/**
 * Enum Orientation
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.Orientation = function() {};

/**
 * @type {Charts.Orientation}
 */
Charts.Orientation.prototype.HORIZONTAL;

/**
 * @type {Charts.Orientation}
 */
Charts.Orientation.prototype.VERTICAL;

/**
 * Enum PickerValuesLayout
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.PickerValuesLayout = function() {};

/**
 * @type {Charts.PickerValuesLayout}
 */
Charts.PickerValuesLayout.prototype.ASIDE;

/**
 * @type {Charts.PickerValuesLayout}
 */
Charts.PickerValuesLayout.prototype.BELOW;

/**
 * @type {Charts.PickerValuesLayout}
 */
Charts.PickerValuesLayout.prototype.BELOW_WRAPPING;

/**
 * @type {Charts.PickerValuesLayout}
 */
Charts.PickerValuesLayout.prototype.BELOW_STACKED;

/**
 * Enum PointStyle
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.PointStyle = function() {};

/**
 * @type {Charts.PointStyle}
 */
Charts.PointStyle.prototype.NONE;

/**
 * @type {Charts.PointStyle}
 */
Charts.PointStyle.prototype.TINY;

/**
 * @type {Charts.PointStyle}
 */
Charts.PointStyle.prototype.MEDIUM;

/**
 * @type {Charts.PointStyle}
 */
Charts.PointStyle.prototype.LARGE;

/**
 * @type {Charts.PointStyle}
 */
Charts.PointStyle.prototype.HUGE;

/**
 * Enum Position
 * Last updated March 26, 2013.
 * @constructor
 */
Charts.Position = function() {};

/**
 * @type {Charts.Position}
 */
Charts.Position.prototype.TOP;

/**
 * @type {Charts.Position}
 */
Charts.Position.prototype.RIGHT;

/**
 * @type {Charts.Position}
 */
Charts.Position.prototype.BOTTOM;

/**
 * @type {Charts.Position}
 */
Charts.Position.prototype.NONE;


/**
 * Content Services
 */
var Content = {};

/**
 * Class ContentService
 * Last updated March 26, 2013.
 * @constructor
 */
Content.ContentService = function() {};

/**
 * @type {Content.MimeType}
 */
Content.ContentService.prototype.MimeType;

/**
 * @return {Content.TextOutput}
 */
Content.ContentService.prototype.createTextOutput = function() {};

/**
 * @param {string} content
 * @return {Content.TextOutput}
 */
Content.ContentService.prototype.createTextOutput = function(content) {};


/**
 * @type {Content.ContentService}
 */
var ContentService;

/**
 * Class TextOutput
 * Last updated March 26, 2013.
 * @constructor
 */
Content.TextOutput = function() {};

/**
 * @param {string} addedContent
 * @return {Content.TextOutput}
 */
Content.TextOutput.prototype.append = function(addedContent) {};

/**
 * @return {Content.TextOutput}
 */
Content.TextOutput.prototype.clear = function() {};

/**
 * @param {string} filename
 * @return {Content.TextOutput}
 */
Content.TextOutput.prototype.downloadAsFile = function(filename) {};

/**
 * @return {string}
 */
Content.TextOutput.prototype.getContent = function() {};

/**
 * @return {string}
 */
Content.TextOutput.prototype.getFileName = function() {};

/**
 * @return {Content.MimeType}
 */
Content.TextOutput.prototype.getMimeType = function() {};

/**
 * @param {string} content
 * @return {Content.TextOutput}
 */
Content.TextOutput.prototype.setContent = function(content) {};

/**
 * @param {Content.MimeType} mimeType
 * @return {Content.TextOutput}
 */
Content.TextOutput.prototype.setMimeType = function(mimeType) {};

/**
 * Enum MimeType
 * Last updated March 26, 2013.
 * @constructor
 */
Content.MimeType = function() {};

/**
 * @type {Content.MimeType}
 */
Content.MimeType.prototype.ATOM;

/**
 * @type {Content.MimeType}
 */
Content.MimeType.prototype.CSV;

/**
 * @type {Content.MimeType}
 */
Content.MimeType.prototype.ICAL;

/**
 * @type {Content.MimeType}
 */
Content.MimeType.prototype.JAVASCRIPT;

/**
 * @type {Content.MimeType}
 */
Content.MimeType.prototype.JSON;

/**
 * @type {Content.MimeType}
 */
Content.MimeType.prototype.RSS;

/**
 * @type {Content.MimeType}
 */
Content.MimeType.prototype.TEXT;

/**
 * @type {Content.MimeType}
 */
Content.MimeType.prototype.VCARD;

/**
 * @type {Content.MimeType}
 */
Content.MimeType.prototype.XML;


/**
 * Html Services
 */
var Html = {};

/**
 * Class HtmlService
 * Last updated May 15, 2013.
 * @constructor
 */
Html.HtmlService = function() {};

/**
 * @type {Html.SandboxMode}
 */
Html.HtmlService.prototype.SandboxMode;

/**
 * @return {Html.HtmlOutput}
 */
Html.HtmlService.prototype.createHtmlOutput = function() {};

/**
 * @param {Base.BlobSource} blob
 * @return {Html.HtmlOutput}
 */
Html.HtmlService.prototype.createHtmlOutput = function(blob) {};

/**
 * @param {string} html
 * @return {Html.HtmlOutput}
 */
Html.HtmlService.prototype.createHtmlOutput = function(html) {};

/**
 * @param {string} filename
 * @return {Html.HtmlOutput}
 */
Html.HtmlService.prototype.createHtmlOutputFromFile = function(filename) {};

/**
 * @param {Base.BlobSource} blob
 * @return {Html.HtmlTemplate}
 */
Html.HtmlService.prototype.createTemplate = function(blob) {};

/**
 * @param {string} html
 * @return {Html.HtmlTemplate}
 */
Html.HtmlService.prototype.createTemplate = function(html) {};

/**
 * @param {string} filename
 * @return {Html.HtmlTemplate}
 */
Html.HtmlService.prototype.createTemplateFromFile = function(filename) {};


/**
 * @type {Html.HtmlService}
 */
var HtmlService;

/**
 * Class HtmlOutput
 * Last updated July 11, 2013.
 * @constructor
 */
Html.HtmlOutput = function() {};

/**
 * @param {string} addedContent
 * @return {Html.HtmlOutput}
 */
Html.HtmlOutput.prototype.append = function(addedContent) {};

/**
 * @return {Html.HtmlOutput}
 */
Html.HtmlOutput.prototype.appendUntrusted = function(addedContent) {};

/**
 * @return {Html.HtmlTemplate}
 */
Html.HtmlOutput.prototype.asTemplate = function() {};

/**
 * @return {Html.HtmlOutput}
 */
Html.HtmlOutput.prototype.clear = function() {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
Html.HtmlOutput.prototype.getAs = function(contentType) {};

/**
 * @return {Base.Blob}
 */
Html.HtmlOutput.prototype.getBlob = function() {};

/**
 * @return {string}
 */
Html.HtmlOutput.prototype.getContent = function() {};

/**
 * @return {number}
 */
Html.HtmlOutput.prototype.getHeight = function() {};

/**
 * @return {string}
 */
Html.HtmlOutput.prototype.getTitle = function() {};

/**
 * @return {number}
 */
Html.HtmlOutput.prototype.getWidth = function() {};

/**
 * @param {string} content
 * @return {Html.HtmlOutput}
 */
Html.HtmlOutput.prototype.setContent = function(content) {};

/**
 * @param {number} height
 * @return {Html.HtmlOutput}
 */
Html.HtmlOutput.prototype.setHeight = function(height) {};

/**
 * @return {Html.HtmlOutput}
 */
Html.HtmlOutput.prototype.setSandboxMode = function(mode) {};

/**
 * @param {string} title
 * @return {Html.HtmlOutput}
 */
Html.HtmlOutput.prototype.setTitle = function(title) {};

/**
 * @param {number} width
 * @return {Html.HtmlOutput}
 */
Html.HtmlOutput.prototype.setWidth = function(width) {};

/**
 * Class HtmlTemplate
 * Last updated March 26, 2013.
 * @constructor
 */
Html.HtmlTemplate = function() {};

/**
 * @return {Html.HtmlOutput}
 */
Html.HtmlTemplate.prototype.evaluate = function() {};

/**
 * @return {string}
 */
Html.HtmlTemplate.prototype.getCode = function() {};

/**
 * @return {string}
 */
Html.HtmlTemplate.prototype.getCodeWithComments = function() {};

/**
 * @return {string}
 */
Html.HtmlTemplate.prototype.getRawContent = function() {};

/**
 * Enum SandboxMode
 * Last updated May 15, 2013.
 * @constructor
 */
Html.SandboxMode = function() {};

/**
 * @type {Html.SandboxMode}
 */
Html.SandboxMode.prototype.EMULATED;

/**
 * @type {Html.SandboxMode}
 */
Html.SandboxMode.prototype.NATIVE;


/**
 * Lock Services
 */
var Lock = {};

/**
 * Class LockService
 * Last updated June 27, 2013.
 * @constructor
 */
Lock.LockService = function() {};

/**
 * @return {Lock.Lock}
 */
Lock.LockService.prototype.getPrivateLock = function() {};

/**
 * @return {Lock.Lock}
 */
Lock.LockService.prototype.getPublicLock = function() {};


/**
 * @type {Lock.LockService}
 */
var LockService;

/**
 * Class Lock
 * Last updated March 26, 2013.
 * @constructor
 */
Lock.Lock = function() {};

/**
 * @return {boolean}
 */
Lock.Lock.prototype.hasLock = function() {};

/**
 */
Lock.Lock.prototype.releaseLock = function() {};

/**
 * @param {number} timeoutInMillis
 * @return {boolean}
 */
Lock.Lock.prototype.tryLock = function(timeoutInMillis) {};

/**
 * @param {number} timeoutInMillis
 */
Lock.Lock.prototype.waitLock = function(timeoutInMillis) {};


/**
 * Mail Services
 */
var Mail = {};

/**
 * Class MailApp
 * Last updated June 27, 2013.
 * @constructor
 */
Mail.MailApp = function() {};

/**
 * @return {number}
 */
Mail.MailApp.prototype.getRemainingDailyQuota = function() {};

/**
 * @param {Object} message
 */
Mail.MailApp.prototype.sendEmail = function(message) {};

/**
 * @param {string} recipient
 * @param {string} subject
 * @param {string} body
 */
Mail.MailApp.prototype.sendEmail = function(recipient, subject, body) {};

/**
 * @param {string} recipient
 * @param {string} subject
 * @param {string} body
 * @param {Object} options
 */
Mail.MailApp.prototype.sendEmail = function(recipient, subject, body, options) {};

/**
 * @param {string} to
 * @param {string} replyTo
 * @param {string} subject
 * @param {string} body
 */
Mail.MailApp.prototype.sendEmail = function(to, replyTo, subject, body) {};


/**
 * @type {Mail.MailApp}
 */
var MailApp;


/**
 * Properties Services
 */
var Properties = {};

/**
 * Class ScriptProperties
 * Last updated June 27, 2013.
 * @constructor
 */
Properties.ScriptProperties = function() {};

/**
 * @return {Properties.ScriptProperties}
 */
Properties.ScriptProperties.prototype.deleteAllProperties = function() {};

/**
 * @param {string} key
 * @return {Properties.ScriptProperties}
 */
Properties.ScriptProperties.prototype.deleteProperty = function(key) {};

/**
 * @return {Array.<string>}
 */
Properties.ScriptProperties.prototype.getKeys = function() {};

/**
 * @return {Object}
 */
Properties.ScriptProperties.prototype.getProperties = function() {};

/**
 * @param {string} key
 * @return {string}
 */
Properties.ScriptProperties.prototype.getProperty = function(key) {};

/**
 * @param {Object} properties
 * @return {Properties.ScriptProperties}
 */
Properties.ScriptProperties.prototype.setProperties = function(properties) {};

/**
 * @param {Object} properties
 * @param {boolean} deleteAllOthers
 * @return {Properties.ScriptProperties}
 */
Properties.ScriptProperties.prototype.setProperties = function(properties, deleteAllOthers) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {Properties.ScriptProperties}
 */
Properties.ScriptProperties.prototype.setProperty = function(key, value) {};


/**
 * @type {Properties.ScriptProperties}
 */
var ScriptProperties;

/**
 * Class UserProperties
 * Last updated June 27, 2013.
 * @constructor
 */
Properties.UserProperties = function() {};

/**
 * @return {Properties.UserProperties}
 */
Properties.UserProperties.prototype.deleteAllProperties = function() {};

/**
 * @param {string} key
 * @return {Properties.UserProperties}
 */
Properties.UserProperties.prototype.deleteProperty = function(key) {};

/**
 * @return {Array.<string>}
 */
Properties.UserProperties.prototype.getKeys = function() {};

/**
 * @return {Object}
 */
Properties.UserProperties.prototype.getProperties = function() {};

/**
 * @param {string} key
 * @return {string}
 */
Properties.UserProperties.prototype.getProperty = function(key) {};

/**
 * @param {Object} properties
 * @return {Properties.UserProperties}
 */
Properties.UserProperties.prototype.setProperties = function(properties) {};

/**
 * @param {Object} properties
 * @param {boolean} deleteAllOthers
 * @return {Properties.UserProperties}
 */
Properties.UserProperties.prototype.setProperties = function(properties, deleteAllOthers) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {Properties.UserProperties}
 */
Properties.UserProperties.prototype.setProperty = function(key, value) {};


/**
 * @type {Properties.UserProperties}
 */
var UserProperties;


/**
 * Script Services
 */
var Script = {};

/**
 * Class ScriptApp
 * Last updated June 27, 2013.
 * @constructor
 */
Script.ScriptApp = function() {};

/**
 * @type {Script.EventType}
 */
Script.ScriptApp.prototype.EventType;

/**
 * @type {Script.TriggerSource}
 */
Script.ScriptApp.prototype.TriggerSource;

/**
 * @type {Base.Weekday}
 */
Script.ScriptApp.prototype.WeekDay;

/**
 * @param {Script.Trigger} trigger
 */
Script.ScriptApp.prototype.deleteTrigger = function(trigger) {};

/**
 * @return {Array.<Script.Trigger>}
 */
Script.ScriptApp.prototype.getProjectTriggers = function() {};

/**
 * @return {Script.Service}
 */
Script.ScriptApp.prototype.getService = function() {};

/**
 */
Script.ScriptApp.prototype.invalidateAuth = function() {};

/**
 * @param {string} functionName
 * @return {Script.TriggerBuilder}
 */
Script.ScriptApp.prototype.newTrigger = function(functionName) {};

/**
 * @deprecated
 * @return {Array.<Script.Trigger>}
 */
Script.ScriptApp.prototype.getScriptTriggers = function() {};


/**
 * @type {Script.ScriptApp}
 */
var ScriptApp;

/**
 * Class ClockTriggerBuilder
 * Last updated March 26, 2013.
 * @constructor
 */
Script.ClockTriggerBuilder = function() {};

/**
 * @param {number} durationMilliseconds
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.after = function(durationMilliseconds) {};

/**
 * @param {Date} date
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.at = function(date) {};

/**
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.atDate = function(year, month, day) {};

/**
 * @param {number} hour
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.atHour = function(hour) {};

/**
 * @return {Script.Trigger}
 */
Script.ClockTriggerBuilder.prototype.create = function() {};

/**
 * @param {number} n
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.everyDays = function(n) {};

/**
 * @param {number} n
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.everyHours = function(n) {};

/**
 * @param {number} n
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.everyMinutes = function(n) {};

/**
 * @param {number} n
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.everyWeeks = function(n) {};

/**
 * @param {string} timezone
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.inTimezone = function(timezone) {};

/**
 * @param {number} minute
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.nearMinute = function(minute) {};

/**
 * @param {number} day
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.onMonthDay = function(day) {};

/**
 * @param {Base.Weekday} day
 * @return {Script.ClockTriggerBuilder}
 */
Script.ClockTriggerBuilder.prototype.onWeekDay = function(day) {};

/**
 * Class FormTriggerBuilder
 * Last updated May 15, 2013.
 * @constructor
 */
Script.FormTriggerBuilder = function() {};

/**
 * @return {Script.Trigger}
 */
Script.FormTriggerBuilder.prototype.create = function() {};

/**
 * @return {Script.FormTriggerBuilder}
 */
Script.FormTriggerBuilder.prototype.onFormSubmit = function() {};

/**
 * @return {Script.FormTriggerBuilder}
 */
Script.FormTriggerBuilder.prototype.onOpen = function() {};

/**
 * Class Service
 * Last updated March 26, 2013.
 * @constructor
 */
Script.Service = function() {};

/**
 * @type {Script.Service.Restriction}
 */
Script.Service.prototype.Restriction;

/**
 */
Script.Service.prototype.disable = function() {};

/**
 * @param {Script.Service.Restriction} restriction
 */
Script.Service.prototype.enable = function(restriction) {};

/**
 * @return {string}
 */
Script.Service.prototype.getUrl = function() {};

/**
 * @return {boolean}
 */
Script.Service.prototype.isEnabled = function() {};

/**
 * Class SpreadsheetTriggerBuilder
 * Last updated May 6, 2013.
 * @constructor
 */
Script.SpreadsheetTriggerBuilder = function() {};

/**
 * @return {Script.Trigger}
 */
Script.SpreadsheetTriggerBuilder.prototype.create = function() {};

/**
 * @return {Script.SpreadsheetTriggerBuilder}
 */
Script.SpreadsheetTriggerBuilder.prototype.onChange = function() {};

/**
 * @return {Script.SpreadsheetTriggerBuilder}
 */
Script.SpreadsheetTriggerBuilder.prototype.onEdit = function() {};

/**
 * @return {Script.SpreadsheetTriggerBuilder}
 */
Script.SpreadsheetTriggerBuilder.prototype.onFormSubmit = function() {};

/**
 * @return {Script.SpreadsheetTriggerBuilder}
 */
Script.SpreadsheetTriggerBuilder.prototype.onOpen = function() {};

/**
 * Class Trigger
 * Last updated June 27, 2013.
 * @constructor
 */
Script.Trigger = function() {};

/**
 * @return {Script.EventType}
 */
Script.Trigger.prototype.getEventType = function() {};

/**
 * @return {string}
 */
Script.Trigger.prototype.getHandlerFunction = function() {};

/**
 * @return {Script.TriggerSource}
 */
Script.Trigger.prototype.getTriggerSource = function() {};

/**
 * @return {string}
 */
Script.Trigger.prototype.getTriggerSourceId = function() {};

/**
 * @return {string}
 */
Script.Trigger.prototype.getUniqueId = function() {};

/**
 * Class TriggerBuilder
 * Last updated June 4, 2013.
 * @constructor
 */
Script.TriggerBuilder = function() {};

/**
 * @param {Forms.Form} form
 * @return {Script.FormTriggerBuilder}
 */
Script.TriggerBuilder.prototype.forForm = function(form) {};

/**
 * @param {string} key
 * @return {Script.FormTriggerBuilder}
 */
Script.TriggerBuilder.prototype.forForm = function(key) {};

/**
 * @param {Spreadsheet.Spreadsheet} sheet
 * @return {Script.SpreadsheetTriggerBuilder}
 */
Script.TriggerBuilder.prototype.forSpreadsheet = function(sheet) {};

/**
 * @param {string} key
 * @return {Script.SpreadsheetTriggerBuilder}
 */
Script.TriggerBuilder.prototype.forSpreadsheet = function(key) {};

/**
 * @return {Script.ClockTriggerBuilder}
 */
Script.TriggerBuilder.prototype.timeBased = function() {};

/**
 * Enum EventType
 * Last updated March 26, 2013.
 * @constructor
 */
Script.EventType = function() {};

/**
 * @type {Script.EventType}
 */
Script.EventType.prototype.CLOCK;

/**
 * @type {Script.EventType}
 */
Script.EventType.prototype.ON_OPEN;

/**
 * @type {Script.EventType}
 */
Script.EventType.prototype.ON_EDIT;

/**
 * @type {Script.EventType}
 */
Script.EventType.prototype.ON_FORM_SUBMIT;

/**
 * Enum Service.Restriction
 * Last updated March 26, 2013.
 * @constructor
 */
Script.Service.Restriction = function() {};

/**
 * @type {Script.Service.Restriction}
 */
Script.Service.Restriction.prototype.MYSELF;

/**
 * @type {Script.Service.Restriction}
 */
Script.Service.Restriction.prototype.DOMAIN;

/**
 * @type {Script.Service.Restriction}
 */
Script.Service.Restriction.prototype.ALL;

/**
 * Enum TriggerSource
 * Last updated June 13, 2013.
 * @constructor
 */
Script.TriggerSource = function() {};

/**
 * @type {Script.TriggerSource}
 */
Script.TriggerSource.prototype.SPREADSHEETS;

/**
 * @type {Script.TriggerSource}
 */
Script.TriggerSource.prototype.CLOCK;

/**
 * @type {Script.TriggerSource}
 */
Script.TriggerSource.prototype.FORMS;


/**
 * ScriptDb Services
 */
var ScriptDb = {};

/**
 * Class ScriptDb
 * Last updated June 27, 2013.
 * @constructor
 */
ScriptDb.ScriptDb = function() {};

/**
 * @return {ScriptDb.ScriptDbInstance}
 */
ScriptDb.ScriptDb.prototype.getMyDb = function() {};


/**
 * @type {ScriptDb.ScriptDb}
 */
var ScriptDb;

/**
 * Class MutationResult
 * Last updated March 26, 2013.
 * @constructor
 */
ScriptDb.MutationResult = function() {};

/**
 * @return {boolean}
 */
ScriptDb.MutationResult.prototype.successful = function() {};

/**
 * Class QueryOperator
 * Last updated March 26, 2013.
 * @constructor
 */
ScriptDb.QueryOperator = function() {};

/**
 * Class ScriptDbInstance
 * Last updated March 26, 2013.
 * @constructor
 */
ScriptDb.ScriptDbInstance = function() {};

/**
 * @type {ScriptDb.SortDirection}
 */
ScriptDb.ScriptDbInstance.prototype.ASCENDING;

/**
 * @type {ScriptDb.SortDirection}
 */
ScriptDb.ScriptDbInstance.prototype.DESCENDING;

/**
 * @type {ScriptDb.SortStrategy}
 */
ScriptDb.ScriptDbInstance.prototype.LEXICAL;

/**
 * @type {ScriptDb.SortStrategy}
 */
ScriptDb.ScriptDbInstance.prototype.NUMERIC;

/**
 * @param {Array.<Object>} mutateResults
 * @return {boolean}
 */
ScriptDb.ScriptDbInstance.prototype.allOk = function(mutateResults) {};

/**
 * @param {Array.<Object>} values
 * @return {ScriptDb.QueryOperator}
 */
ScriptDb.ScriptDbInstance.prototype.anyOf = function(values) {};

/**
 * @return {ScriptDb.QueryOperator}
 */
ScriptDb.ScriptDbInstance.prototype.anyValue = function() {};

/**
 * @param {Object} value1
 * @param {Object} value2
 * @return {ScriptDb.QueryOperator}
 */
ScriptDb.ScriptDbInstance.prototype.between = function(value1, value2) {};

/**
 * @param {Object} query
 * @return {number}
 */
ScriptDb.ScriptDbInstance.prototype.count = function(query) {};

/**
 * @param {Object} value
 * @return {ScriptDb.QueryOperator}
 */
ScriptDb.ScriptDbInstance.prototype.greaterThan = function(value) {};

/**
 * @param {Object} value
 * @return {ScriptDb.QueryOperator}
 */
ScriptDb.ScriptDbInstance.prototype.greaterThanOrEqualTo = function(value) {};

/**
 * @param {Object} value
 * @return {ScriptDb.QueryOperator}
 */
ScriptDb.ScriptDbInstance.prototype.lessThan = function(value) {};

/**
 * @param {Object} value
 * @return {ScriptDb.QueryOperator}
 */
ScriptDb.ScriptDbInstance.prototype.lessThanOrEqualTo = function(value) {};

/**
 * @param {string} id
 * @return {ScriptDb.ScriptDbMap}
 */
ScriptDb.ScriptDbInstance.prototype.load = function(id) {};

/**
 * @param {Array.<string>} ids
 * @return {Array.<ScriptDb.ScriptDbMap>}
 */
ScriptDb.ScriptDbInstance.prototype.load = function(ids) {};

/**
 * @param {Object} value
 * @return {ScriptDb.QueryOperator}
 */
ScriptDb.ScriptDbInstance.prototype.not = function(value) {};

/**
 * @param {Object} query
 * @return {ScriptDb.ScriptDbResult}
 */
ScriptDb.ScriptDbInstance.prototype.query = function(query) {};

/**
 * @param {ScriptDb.ScriptDbMap} item
 */
ScriptDb.ScriptDbInstance.prototype.remove = function(item) {};

/**
 * @param {Array.<ScriptDb.ScriptDbMap>} items
 * @param {boolean} atomic
 * @return {Array.<ScriptDb.MutationResult>}
 */
ScriptDb.ScriptDbInstance.prototype.removeBatch = function(items, atomic) {};

/**
 * @param {string} id
 */
ScriptDb.ScriptDbInstance.prototype.removeById = function(id) {};

/**
 * @param {Array.<string>} ids
 * @param {boolean} atomic
 * @return {Array.<ScriptDb.MutationResult>}
 */
ScriptDb.ScriptDbInstance.prototype.removeByIdBatch = function(ids, atomic) {};

/**
 * @param {Object} item
 * @return {ScriptDb.ScriptDbMap}
 */
ScriptDb.ScriptDbInstance.prototype.save = function(item) {};

/**
 * @param {ScriptDb.ScriptDbMap} item
 * @return {ScriptDb.ScriptDbMap}
 */
ScriptDb.ScriptDbInstance.prototype.save = function(item) {};

/**
 * @param {Array.<Object>} items
 * @param {boolean} atomic
 * @return {Array.<Object>}
 */
ScriptDb.ScriptDbInstance.prototype.saveBatch = function(items, atomic) {};

/**
 * Class ScriptDbMap
 * Last updated March 26, 2013.
 * @constructor
 */
ScriptDb.ScriptDbMap = function() {};

/**
 * @return {string}
 */
ScriptDb.ScriptDbMap.prototype.getId = function() {};

/**
 * @return {string}
 */
ScriptDb.ScriptDbMap.prototype.toJson = function() {};

/**
 * Class ScriptDbResult
 * Last updated March 26, 2013.
 * @constructor
 */
ScriptDb.ScriptDbResult = function() {};

/**
 * @return {number}
 */
ScriptDb.ScriptDbResult.prototype.getSize = function() {};

/**
 * @return {boolean}
 */
ScriptDb.ScriptDbResult.prototype.hasNext = function() {};

/**
 * @return {ScriptDb.ScriptDbResult}
 */
ScriptDb.ScriptDbResult.prototype.limit = function(number) {};

/**
 * @return {ScriptDb.ScriptDbMap}
 */
ScriptDb.ScriptDbResult.prototype.next = function() {};

/**
 * @param {number} pageNumber
 * @param {number} pageSize
 * @return {ScriptDb.ScriptDbResult}
 */
ScriptDb.ScriptDbResult.prototype.paginate = function(pageNumber, pageSize) {};

/**
 * @return {ScriptDb.ScriptDbResult}
 */
ScriptDb.ScriptDbResult.prototype.sortBy = function(fieldPath) {};

/**
 * @param {string} fieldPath
 * @param {ScriptDb.SortDirection} direction
 * @return {ScriptDb.ScriptDbResult}
 */
ScriptDb.ScriptDbResult.prototype.sortBy = function(fieldPath, direction) {};

/**
 * @param {string} fieldPath
 * @param {ScriptDb.SortDirection} direction
 * @param {ScriptDb.SortStrategy} strategy
 * @return {ScriptDb.ScriptDbResult}
 */
ScriptDb.ScriptDbResult.prototype.sortBy = function(fieldPath, direction, strategy) {};

/**
 * @param {string} fieldPath
 * @param {ScriptDb.SortStrategy} strategy
 * @return {ScriptDb.ScriptDbResult}
 */
ScriptDb.ScriptDbResult.prototype.sortBy = function(fieldPath, strategy) {};

/**
 * @param {number} number
 * @return {ScriptDb.ScriptDbResult}
 */
ScriptDb.ScriptDbResult.prototype.startAt = function(number) {};

/**
 * Enum SortDirection
 * Last updated March 26, 2013.
 * @constructor
 */
ScriptDb.SortDirection = function() {};

/**
 * @type {ScriptDb.SortDirection}
 */
ScriptDb.SortDirection.prototype.DESCENDING;

/**
 * @type {ScriptDb.SortDirection}
 */
ScriptDb.SortDirection.prototype.ASCENDING;

/**
 * Enum SortStrategy
 * Last updated March 26, 2013.
 * @constructor
 */
ScriptDb.SortStrategy = function() {};

/**
 * @type {ScriptDb.SortStrategy}
 */
ScriptDb.SortStrategy.prototype.LEXICAL;

/**
 * @type {ScriptDb.SortStrategy}
 */
ScriptDb.SortStrategy.prototype.NUMERIC;


/**
 * Soap Services
 */
var Soap = {};

/**
 * Class UiApp
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.UiApp = function() {};

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.UiApp.prototype.DateTimeFormat;

/**
 * @type {Soap.FileType}
 */
Soap.UiApp.prototype.FileType;

/**
 * @type {Soap.HorizontalAlignment}
 */
Soap.UiApp.prototype.HorizontalAlignment;

/**
 * @type {Soap.VerticalAlignment}
 */
Soap.UiApp.prototype.VerticalAlignment;

/**
 * @return {Soap.UiInstance}
 */
Soap.UiApp.prototype.createApplication = function() {};

/**
 * @return {Soap.UiInstance}
 */
Soap.UiApp.prototype.getActiveApplication = function() {};

/**
 * @return {string}
 */
Soap.UiApp.prototype.getUserAgent = function() {};


/**
 * @type {Soap.UiApp}
 */
var UiApp;

/**
 * Class AbsolutePanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.AbsolutePanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.add = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {number} left
 * @param {number} top
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.add = function(widget, left, top) {};

/**
 * @param {string} styleName
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.AbsolutePanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.AbsolutePanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.AbsolutePanel.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.remove = function(index) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.remove = function(widget) {};

/**
 * @param {string} height
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @param {number} left
 * @param {number} top
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setWidgetPosition = function(widget, left, top) {};

/**
 * @param {string} width
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.AbsolutePanel}
 */
Soap.AbsolutePanel.prototype.setLayoutData = function(layout) {};

/**
 * Class Anchor
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.Anchor = function() {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.Anchor.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.Anchor.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.Anchor.prototype.getType = function() {};

/**
 * @param {boolean} focus
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setHeight = function(height) {};

/**
 * @param {Soap.HorizontalAlignment} horizontalAlignment
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} href
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setHref = function(href) {};

/**
 * @param {string} id
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setTag = function(tag) {};

/**
 * @param {string} target
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setTarget = function(target) {};

/**
 * @param {string} text
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setWidth = function(width) {};

/**
 * @param {boolean} wordWrap
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setWordWrap = function(wordWrap) {};

/**
 * @deprecated
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setDirection = function(direction) {};

/**
 * @deprecated
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setEnabled = function(enabled) {};

/**
 * @deprecated
 * @return {Soap.Anchor}
 */
Soap.Anchor.prototype.setLayoutData = function(layout) {};

/**
 * Class Button
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.Button = function() {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.Button}
 */
Soap.Button.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.Button}
 */
Soap.Button.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Button}
 */
Soap.Button.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.Button.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.Button.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.Button.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {Soap.Button}
 */
Soap.Button.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.Button}
 */
Soap.Button.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {Soap.Button}
 */
Soap.Button.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.Button}
 */
Soap.Button.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.Button}
 */
Soap.Button.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.Button}
 */
Soap.Button.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.Button}
 */
Soap.Button.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.Button}
 */
Soap.Button.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.Button}
 */
Soap.Button.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.Button}
 */
Soap.Button.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Button}
 */
Soap.Button.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.Button}
 */
Soap.Button.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.Button}
 */
Soap.Button.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.Button}
 */
Soap.Button.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.Button}
 */
Soap.Button.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.Button}
 */
Soap.Button.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.Button}
 */
Soap.Button.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.Button}
 */
Soap.Button.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.Button}
 */
Soap.Button.prototype.setLayoutData = function(layout) {};

/**
 * Class CaptionPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.CaptionPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.CaptionPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.CaptionPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.CaptionPanel.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setCaptionText = function(text) {};

/**
 * @deprecated
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setContentWidget = function(widget) {};

/**
 * @deprecated
 * @return {Soap.CaptionPanel}
 */
Soap.CaptionPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class CheckBox
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.CheckBox = function() {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
Soap.CheckBox.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.CheckBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.CheckBox.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setFocus = function(focus) {};

/**
 * @param {string} formValue
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setFormValue = function(formValue) {};

/**
 * @param {string} html
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setTitle = function(title) {};

/**
 * @param {boolean} value
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setValue = function(value) {};

/**
 * @param {boolean} value
 * @param {boolean} fireEvents
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setValue = function(value, fireEvents) {};

/**
 * @param {boolean} visible
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.CheckBox}
 */
Soap.CheckBox.prototype.setLayoutData = function(layout) {};

/**
 * Class ClientHandler
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.ClientHandler = function() {};

/**
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.forEventSource = function() {};

/**
 * @param {Object...} widgets
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.forTargets = function(widgets) {};

/**
 * @return {string}
 */
Soap.ClientHandler.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.ClientHandler.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.ClientHandler.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.setEnabled = function(enabled) {};

/**
 * @param {string} html
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.setHTML = function(html) {};

/**
 * @param {string} id
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.setId = function(id) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.setStyleAttribute = function(row, column, attribute, value) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {Object} attributes
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.setStyleAttributes = function(row, column, attributes) {};

/**
 * @param {Object} attributes
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} tag
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.setText = function(text) {};

/**
 * @param {boolean} value
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.setValue = function(value) {};

/**
 * @param {boolean} visible
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateEmail = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateInteger = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateLength = function(widget, min, max) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateMatches = function(widget, pattern) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @param {string} flags
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateMatches = function(widget, pattern, flags) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateNotEmail = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateNotInteger = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateNotLength = function(widget, min, max) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateNotMatches = function(widget, pattern) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @param {string} flags
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateNotMatches = function(widget, pattern, flags) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateNotNumber = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {Array.<string>} options
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateNotOptions = function(widget, options) {};

/**
 * @param {Soap.Widget} widget
 * @param {Number} min
 * @param {Number} max
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateNotRange = function(widget, min, max) {};

/**
 * @param {Array.<Soap.Widget>} widgets
 * @param {number} sum
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateNotSum = function(widgets, sum) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateNumber = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {Array.<string>} options
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateOptions = function(widget, options) {};

/**
 * @param {Soap.Widget} widget
 * @param {Number} min
 * @param {Number} max
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateRange = function(widget, min, max) {};

/**
 * @param {Array.<Soap.Widget>} widgets
 * @param {number} sum
 * @return {Soap.ClientHandler}
 */
Soap.ClientHandler.prototype.validateSum = function(widgets, sum) {};

/**
 * Class DateBox
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.DateBox = function() {};

/**
 * @param {string} styleName
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
Soap.DateBox.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.DateBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.DateBox.prototype.getType = function() {};

/**
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.hideDatePicker = function() {};

/**
 * @param {boolean} enabled
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} fireEvents
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setFireEventsForInvalid = function(fireEvents) {};

/**
 * @param {boolean} focus
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setFocus = function(focus) {};

/**
 * @param {Soap.DateTimeFormat} dateTimeFormat
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setFormat = function(dateTimeFormat) {};

/**
 * @param {string} height
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setTitle = function(title) {};

/**
 * @param {Date} date
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setValue = function(date) {};

/**
 * @param {boolean} visible
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setWidth = function(width) {};

/**
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.showDatePicker = function() {};

/**
 * @deprecated
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.DateBox}
 */
Soap.DateBox.prototype.setLayoutData = function(layout) {};

/**
 * Class DatePicker
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.DatePicker = function() {};

/**
 * @param {string} styleName
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
Soap.DatePicker.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.DatePicker.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.DatePicker.prototype.getType = function() {};

/**
 * @param {Date} date
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setCurrentMonth = function(date) {};

/**
 * @param {string} height
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setTitle = function(title) {};

/**
 * @param {Date} date
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setValue = function(date) {};

/**
 * @param {boolean} visible
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.DatePicker}
 */
Soap.DatePicker.prototype.setLayoutData = function(layout) {};

/**
 * Class DecoratedStackPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.DecoratedStackPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.add = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} text
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.add = function(widget, text) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} text
 * @param {boolean} asHtml
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.add = function(widget, text, asHtml) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.DecoratedStackPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.DecoratedStackPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.DecoratedStackPanel.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.remove = function(index) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.remove = function(widget) {};

/**
 * @param {string} height
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setSize = function(width, height) {};

/**
 * @param {number} index
 * @param {string} text
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setStackText = function(index, text) {};

/**
 * @param {number} index
 * @param {string} text
 * @param {boolean} asHtml
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setStackText = function(index, text, asHtml) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.DecoratedStackPanel}
 */
Soap.DecoratedStackPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class DecoratedTabBar
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.DecoratedTabBar = function() {};

/**
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.addStyleName = function(styleName) {};

/**
 * @param {string} title
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.addTab = function(title) {};

/**
 * @param {string} title
 * @param {boolean} asHtml
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.addTab = function(title, asHtml) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.addTab = function(widget) {};

/**
 * @return {string}
 */
Soap.DecoratedTabBar.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.DecoratedTabBar.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.DecoratedTabBar.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.selectTab = function(index) {};

/**
 * @param {string} height
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @param {boolean} enabled
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setTabEnabled = function(index, enabled) {};

/**
 * @param {number} index
 * @param {string} text
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setTabText = function(index, text) {};

/**
 * @param {string} tag
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.addBeforeSelectionHandler = function(handler) {};

/**
 * @deprecated
 * @return {Soap.DecoratedTabBar}
 */
Soap.DecoratedTabBar.prototype.setLayoutData = function(layout) {};

/**
 * Class DecoratedTabPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.DecoratedTabPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.add = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} text
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.add = function(widget, text) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} text
 * @param {boolean} asHtml
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.add = function(widget, text, asHtml) {};

/**
 * @param {Soap.Widget} widget
 * @param {Soap.Widget} tabWidget
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.add = function(widget, tabWidget) {};

/**
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.DecoratedTabPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.DecoratedTabPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.DecoratedTabPanel.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.selectTab = function(index) {};

/**
 * @param {boolean} animationEnabled
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {string} height
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.addBeforeSelectionHandler = function(handler) {};

/**
 * @deprecated
 * @return {Soap.DecoratedTabPanel}
 */
Soap.DecoratedTabPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class DecoratorPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.DecoratorPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.DecoratorPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.DecoratorPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.DecoratorPanel.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.DecoratorPanel}
 */
Soap.DecoratorPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class DialogBox
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.DialogBox = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.add = function(widget) {};

/**
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.addCloseHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.DialogBox.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.DialogBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.DialogBox.prototype.getType = function() {};

/**
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.hide = function() {};

/**
 * @param {boolean} animationEnabled
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {boolean} enabled
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setAutoHideEnabled = function(enabled) {};

/**
 * @param {boolean} enabled
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setGlassEnabled = function(enabled) {};

/**
 * @param {string} html
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setId = function(id) {};

/**
 * @param {boolean} modal
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setModal = function(modal) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} left
 * @param {number} top
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setPopupPosition = function(left, top) {};

/**
 * @param {boolean} previewing
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setPreviewingAllNativeEvents = function(previewing) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setWidth = function(width) {};

/**
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.show = function() {};

/**
 * @deprecated
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.addAutoHidePartner = function(partner) {};

/**
 * @deprecated
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setGlassStyleName = function(styleName) {};

/**
 * @deprecated
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setLayoutData = function(layout) {};

/**
 * @deprecated
 * @return {Soap.DialogBox}
 */
Soap.DialogBox.prototype.setPopupPositionAndShow = function(a) {};

/**
 * Class DocsListDialog
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.DocsListDialog = function() {};

/**
 * @return {Soap.DocsListDialog}
 */
Soap.DocsListDialog.prototype.addCloseHandler = function(handler) {};

/**
 * @return {Soap.DocsListDialog}
 */
Soap.DocsListDialog.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {Soap.FileType} fileType
 * @return {Soap.DocsListDialog}
 */
Soap.DocsListDialog.prototype.addView = function(fileType) {};

/**
 * @return {string}
 */
Soap.DocsListDialog.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.DocsListDialog.prototype.getType = function() {};

/**
 * @param {string} title
 * @return {Soap.DocsListDialog}
 */
Soap.DocsListDialog.prototype.setDialogTitle = function(title) {};

/**
 * @param {number} height
 * @return {Soap.DocsListDialog}
 */
Soap.DocsListDialog.prototype.setHeight = function(height) {};

/**
 * @param {Soap.FileType} fileType
 * @return {Soap.DocsListDialog}
 */
Soap.DocsListDialog.prototype.setInitialView = function(fileType) {};

/**
 * @param {boolean} multiSelectEnabled
 * @return {Soap.DocsListDialog}
 */
Soap.DocsListDialog.prototype.setMultiSelectEnabled = function(multiSelectEnabled) {};

/**
 * @param {number} width
 * @return {Soap.DocsListDialog}
 */
Soap.DocsListDialog.prototype.setWidth = function(width) {};

/**
 * @return {Soap.DocsListDialog}
 */
Soap.DocsListDialog.prototype.showDocsPicker = function() {};

/**
 * Class FileUpload
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.FileUpload = function() {};

/**
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.addChangeHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.FileUpload.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.FileUpload.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.FileUpload.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setEnabled = function(enabled) {};

/**
 * @param {string} height
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.FileUpload}
 */
Soap.FileUpload.prototype.setLayoutData = function(layout) {};

/**
 * Class FlexTable
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.FlexTable = function() {};

/**
 * @param {number} row
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.addCell = function(row) {};

/**
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.addClickHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.FlexTable.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.FlexTable.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.FlexTable.prototype.getType = function() {};

/**
 * @param {number} beforeRow
 * @param {number} beforeColumn
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.insertCell = function(beforeRow, beforeColumn) {};

/**
 * @param {number} beforeRow
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.insertRow = function(beforeRow) {};

/**
 * @param {number} row
 * @param {number} column
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.removeCell = function(row, column) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {number} num
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.removeCells = function(row, column, num) {};

/**
 * @param {number} row
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.removeRow = function(row) {};

/**
 * @param {number} width
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setBorderWidth = function(width) {};

/**
 * @param {number} padding
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setCellPadding = function(padding) {};

/**
 * @param {number} spacing
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setCellSpacing = function(spacing) {};

/**
 * @param {number} column
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setColumnStyleAttribute = function(column, attribute, value) {};

/**
 * @param {number} column
 * @param {Object} attributes
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setColumnStyleAttributes = function(column, attributes) {};

/**
 * @param {string} height
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} row
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setRowStyleAttribute = function(row, attribute, value) {};

/**
 * @param {number} row
 * @param {Object} attributes
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setRowStyleAttributes = function(row, attributes) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setSize = function(width, height) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setStyleAttribute = function(row, column, attribute, value) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {Object} attributes
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setStyleAttributes = function(row, column, attributes) {};

/**
 * @param {Object} attributes
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setTag = function(tag) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {string} text
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setText = function(row, column, text) {};

/**
 * @param {string} title
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setVisible = function(visible) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {Soap.Widget} widget
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setWidget = function(row, column, widget) {};

/**
 * @param {string} width
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.FlexTable}
 */
Soap.FlexTable.prototype.setLayoutData = function(layout) {};

/**
 * Class FlowPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.FlowPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.FlowPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.FlowPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.FlowPanel.prototype.getType = function() {};

/**
 * @param {Soap.Widget} widget
 * @param {number} beforeIndex
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.insert = function(widget, beforeIndex) {};

/**
 * @param {number} index
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.remove = function(index) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.remove = function(widget) {};

/**
 * @param {string} height
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.FlowPanel}
 */
Soap.FlowPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class FocusPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.FocusPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.add = function(widget) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.FocusPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.FocusPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.FocusPanel.prototype.getType = function() {};

/**
 * @param {boolean} focus
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.FocusPanel}
 */
Soap.FocusPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class FormPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.FormPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.addSubmitCompleteHandler = function(handler) {};

/**
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.addSubmitHandler = function(handler) {};

/**
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.FormPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.FormPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.FormPanel.prototype.getType = function() {};

/**
 * @param {string} action
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setAction = function(action) {};

/**
 * @param {string} encoding
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setEncoding = function(encoding) {};

/**
 * @param {string} height
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setId = function(id) {};

/**
 * @param {string} method
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setMethod = function(method) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.FormPanel}
 */
Soap.FormPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class Grid
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.Grid = function() {};

/**
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.addClickHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.Grid.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.Grid.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.Grid.prototype.getType = function() {};

/**
 * @param {number} rows
 * @param {number} columns
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.resize = function(rows, columns) {};

/**
 * @param {number} width
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setBorderWidth = function(width) {};

/**
 * @param {number} padding
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setCellPadding = function(padding) {};

/**
 * @param {number} spacing
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setCellSpacing = function(spacing) {};

/**
 * @param {number} column
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setColumnStyleAttribute = function(column, attribute, value) {};

/**
 * @param {number} column
 * @param {Object} attributes
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setColumnStyleAttributes = function(column, attributes) {};

/**
 * @param {string} height
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} row
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setRowStyleAttribute = function(row, attribute, value) {};

/**
 * @param {number} row
 * @param {Object} attributes
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setRowStyleAttributes = function(row, attributes) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setSize = function(width, height) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setStyleAttribute = function(row, column, attribute, value) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {Object} attributes
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setStyleAttributes = function(row, column, attributes) {};

/**
 * @param {Object} attributes
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setTag = function(tag) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {string} text
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setText = function(row, column, text) {};

/**
 * @param {string} title
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setVisible = function(visible) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {Soap.Widget} widget
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setWidget = function(row, column, widget) {};

/**
 * @param {string} width
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.Grid}
 */
Soap.Grid.prototype.setLayoutData = function(layout) {};

/**
 * Class HTML
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.HTML = function() {};

/**
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.HTML.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.HTML.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.HTML.prototype.getType = function() {};

/**
 * @param {string} html
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setHeight = function(height) {};

/**
 * @param {Soap.HorizontalAlignment} horizontalAlignment
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} id
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setWidth = function(width) {};

/**
 * @param {boolean} wordWrap
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setWordWrap = function(wordWrap) {};

/**
 * @deprecated
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setDirection = function(direction) {};

/**
 * @deprecated
 * @return {Soap.HTML}
 */
Soap.HTML.prototype.setLayoutData = function(layout) {};

/**
 * Class Hidden
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.Hidden = function() {};

/**
 * @return {string}
 */
Soap.Hidden.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.Hidden.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.Hidden.prototype.getType = function() {};

/**
 * @param {string} id
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setName = function(name) {};

/**
 * @param {Object} attributes
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} tag
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setTag = function(tag) {};

/**
 * @param {string} value
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setValue = function(value) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.addStyleDependentName = function(styleName) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.addStyleName = function(styleName) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setDefaultValue = function(value) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setHeight = function(height) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setID = function(id) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setLayoutData = function(layout) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setPixelSize = function(width, height) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setSize = function(width, height) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setStyleName = function(styleName) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setTitle = function(title) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setVisible = function(visible) {};

/**
 * @deprecated
 * @return {Soap.Hidden}
 */
Soap.Hidden.prototype.setWidth = function(width) {};

/**
 * Class HorizontalPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.HorizontalPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.HorizontalPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.HorizontalPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.HorizontalPanel.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.remove = function(index) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.remove = function(widget) {};

/**
 * @param {number} width
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setBorderWidth = function(width) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} height
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setCellHeight = function(widget, height) {};

/**
 * @param {Soap.Widget} widget
 * @param {Soap.HorizontalAlignment} horizontalAlignment
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setCellHorizontalAlignment = function(widget, horizontalAlignment) {};

/**
 * @param {Soap.Widget} widget
 * @param {Soap.VerticalAlignment} verticalAlignment
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setCellVerticalAlignment = function(widget, verticalAlignment) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} width
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setCellWidth = function(widget, width) {};

/**
 * @param {string} height
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setHeight = function(height) {};

/**
 * @param {Soap.HorizontalAlignment} horizontalAlignment
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} id
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setSize = function(width, height) {};

/**
 * @param {number} spacing
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setSpacing = function(spacing) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setTitle = function(title) {};

/**
 * @param {Soap.VerticalAlignment} verticalAlignment
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setVerticalAlignment = function(verticalAlignment) {};

/**
 * @param {boolean} visible
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.HorizontalPanel}
 */
Soap.HorizontalPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class Image
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.Image = function() {};

/**
 * @return {Soap.Image}
 */
Soap.Image.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.Image}
 */
Soap.Image.prototype.addErrorHandler = function(handler) {};

/**
 * @return {Soap.Image}
 */
Soap.Image.prototype.addLoadHandler = function(handler) {};

/**
 * @return {Soap.Image}
 */
Soap.Image.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.Image}
 */
Soap.Image.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.Image}
 */
Soap.Image.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.Image}
 */
Soap.Image.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.Image}
 */
Soap.Image.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.Image}
 */
Soap.Image.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.Image}
 */
Soap.Image.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Image}
 */
Soap.Image.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.Image.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.Image.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.Image.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {Soap.Image}
 */
Soap.Image.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.Image}
 */
Soap.Image.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.Image}
 */
Soap.Image.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.Image}
 */
Soap.Image.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.Image}
 */
Soap.Image.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.Image}
 */
Soap.Image.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.Image}
 */
Soap.Image.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Image}
 */
Soap.Image.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.Image}
 */
Soap.Image.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.Image}
 */
Soap.Image.prototype.setTitle = function(title) {};

/**
 * @param {string} url
 * @return {Soap.Image}
 */
Soap.Image.prototype.setUrl = function(url) {};

/**
 * @param {string} url
 * @param {number} left
 * @param {number} top
 * @param {number} width
 * @param {number} height
 * @return {Soap.Image}
 */
Soap.Image.prototype.setUrlAndVisibleRect = function(url, left, top, width, height) {};

/**
 * @param {boolean} visible
 * @return {Soap.Image}
 */
Soap.Image.prototype.setVisible = function(visible) {};

/**
 * @param {number} left
 * @param {number} top
 * @param {number} width
 * @param {number} height
 * @return {Soap.Image}
 */
Soap.Image.prototype.setVisibleRect = function(left, top, width, height) {};

/**
 * @param {string} width
 * @return {Soap.Image}
 */
Soap.Image.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.Image}
 */
Soap.Image.prototype.setLayoutData = function(layout) {};

/**
 * @deprecated
 * @return {Soap.Image}
 */
Soap.Image.prototype.setResource = function(resource) {};

/**
 * Class InlineLabel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.InlineLabel = function() {};

/**
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.InlineLabel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.InlineLabel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.InlineLabel.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setHeight = function(height) {};

/**
 * @param {Soap.HorizontalAlignment} horizontalAlignment
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} id
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setWidth = function(width) {};

/**
 * @param {boolean} wordWrap
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setWordWrap = function(wordWrap) {};

/**
 * @deprecated
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setDirection = function(direction) {};

/**
 * @deprecated
 * @return {Soap.InlineLabel}
 */
Soap.InlineLabel.prototype.setLayoutData = function(layout) {};

/**
 * Class Label
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.Label = function() {};

/**
 * @return {Soap.Label}
 */
Soap.Label.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.Label}
 */
Soap.Label.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.Label}
 */
Soap.Label.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.Label}
 */
Soap.Label.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.Label}
 */
Soap.Label.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.Label}
 */
Soap.Label.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.Label}
 */
Soap.Label.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.Label}
 */
Soap.Label.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Label}
 */
Soap.Label.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.Label.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.Label.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.Label.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {Soap.Label}
 */
Soap.Label.prototype.setHeight = function(height) {};

/**
 * @param {Soap.HorizontalAlignment} horizontalAlignment
 * @return {Soap.Label}
 */
Soap.Label.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} id
 * @return {Soap.Label}
 */
Soap.Label.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.Label}
 */
Soap.Label.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.Label}
 */
Soap.Label.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.Label}
 */
Soap.Label.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.Label}
 */
Soap.Label.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.Label}
 */
Soap.Label.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Label}
 */
Soap.Label.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.Label}
 */
Soap.Label.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.Label}
 */
Soap.Label.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.Label}
 */
Soap.Label.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.Label}
 */
Soap.Label.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.Label}
 */
Soap.Label.prototype.setWidth = function(width) {};

/**
 * @param {boolean} wordWrap
 * @return {Soap.Label}
 */
Soap.Label.prototype.setWordWrap = function(wordWrap) {};

/**
 * @deprecated
 * @return {Soap.Label}
 */
Soap.Label.prototype.setDirection = function(direction) {};

/**
 * @deprecated
 * @return {Soap.Label}
 */
Soap.Label.prototype.setLayoutData = function(layout) {};

/**
 * Class ListBox
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.ListBox = function() {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addChangeHandler = function(handler) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addFocusHandler = function(handler) {};

/**
 * @param {string} text
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addItem = function(text) {};

/**
 * @param {string} text
 * @param {string} value
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addItem = function(text, value) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.ListBox.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.ListBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.ListBox.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.removeItem = function(index) {};

/**
 * @param {boolean} enabled
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setId = function(id) {};

/**
 * @param {number} index
 * @param {boolean} selected
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setItemSelected = function(index, selected) {};

/**
 * @param {number} index
 * @param {string} text
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setItemText = function(index, text) {};

/**
 * @param {string} name
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} index
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setSelectedIndex = function(index) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setTitle = function(title) {};

/**
 * @param {number} index
 * @param {string} value
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setValue = function(index, value) {};

/**
 * @param {boolean} visible
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setVisible = function(visible) {};

/**
 * @param {number} count
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setVisibleItemCount = function(count) {};

/**
 * @param {string} width
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.ListBox}
 */
Soap.ListBox.prototype.setLayoutData = function(layout) {};

/**
 * Class MenuBar
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.MenuBar = function() {};

/**
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.addCloseHandler = function(handler) {};

/**
 * @param {MenuItem} item
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.addItem = function(item) {};

/**
 * @param {string} text
 * @param {boolean} asHtml
 * @param {Soap.Handler} command
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.addItem = function(text, asHtml, command) {};

/**
 * @param {string} text
 * @param {boolean} asHtml
 * @param {MenuBar} subMenu
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.addItem = function(text, asHtml, subMenu) {};

/**
 * @param {string} text
 * @param {Soap.Handler} command
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.addItem = function(text, command) {};

/**
 * @param {string} text
 * @param {MenuBar} subMenu
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.addItem = function(text, subMenu) {};

/**
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.addSeparator = function() {};

/**
 * @param {MenuItemSeparator} separator
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.addSeparator = function(separator) {};

/**
 * @param {string} styleName
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.MenuBar.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.MenuBar.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.MenuBar.prototype.getType = function() {};

/**
 * @param {boolean} animationEnabled
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {boolean} autoOpen
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setAutoOpen = function(autoOpen) {};

/**
 * @param {string} height
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.MenuBar}
 */
Soap.MenuBar.prototype.setLayoutData = function(layout) {};

/**
 * Class MenuItem
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.MenuItem = function() {};

/**
 * @param {string} styleName
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.MenuItem.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.MenuItem.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.MenuItem.prototype.getType = function() {};

/**
 * @param {Soap.Handler} handler
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setCommand = function(handler) {};

/**
 * @param {string} html
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {MenuBar} subMenu
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setSubMenu = function(subMenu) {};

/**
 * @param {string} tag
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.MenuItem}
 */
Soap.MenuItem.prototype.setWidth = function(width) {};

/**
 * Class MenuItemSeparator
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.MenuItemSeparator = function() {};

/**
 * @param {string} styleName
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.MenuItemSeparator.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.MenuItemSeparator.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.MenuItemSeparator.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.MenuItemSeparator}
 */
Soap.MenuItemSeparator.prototype.setWidth = function(width) {};

/**
 * Class PasswordTextBox
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.PasswordTextBox = function() {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addChangeHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
Soap.PasswordTextBox.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.PasswordTextBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.PasswordTextBox.prototype.getType = function() {};

/**
 * @param {number} position
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setCursorPos = function(position) {};

/**
 * @param {boolean} enabled
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setId = function(id) {};

/**
 * @param {number} length
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setMaxLength = function(length) {};

/**
 * @param {string} name
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {boolean} readOnly
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setReadOnly = function(readOnly) {};

/**
 * @param {number} position
 * @param {number} length
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setSelectionRange = function(position, length) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setTitle = function(title) {};

/**
 * @param {string} value
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setValue = function(value) {};

/**
 * @param {string} value
 * @param {boolean} fireEvents
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setValue = function(value, fireEvents) {};

/**
 * @param {boolean} visible
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setVisible = function(visible) {};

/**
 * @param {number} length
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setVisibleLength = function(length) {};

/**
 * @param {string} width
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setDirection = function(direction) {};

/**
 * @deprecated
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setLayoutData = function(layout) {};

/**
 * @deprecated
 * @return {Soap.PasswordTextBox}
 */
Soap.PasswordTextBox.prototype.setTextAlignment = function(textAlign) {};

/**
 * Class PopupPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.PopupPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.add = function(widget) {};

/**
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.addCloseHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.PopupPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.PopupPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.PopupPanel.prototype.getType = function() {};

/**
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.hide = function() {};

/**
 * @param {boolean} animationEnabled
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {boolean} enabled
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setAutoHideEnabled = function(enabled) {};

/**
 * @param {boolean} enabled
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setGlassEnabled = function(enabled) {};

/**
 * @param {string} height
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setId = function(id) {};

/**
 * @param {boolean} modal
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setModal = function(modal) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} left
 * @param {number} top
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setPopupPosition = function(left, top) {};

/**
 * @param {boolean} previewing
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setPreviewingAllNativeEvents = function(previewing) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setWidth = function(width) {};

/**
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.show = function() {};

/**
 * @deprecated
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.addAutoHidePartner = function(partner) {};

/**
 * @deprecated
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setGlassStyleName = function(styleName) {};

/**
 * @deprecated
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setLayoutData = function(layout) {};

/**
 * @deprecated
 * @return {Soap.PopupPanel}
 */
Soap.PopupPanel.prototype.setPopupPositionAndShow = function(a) {};

/**
 * Class PushButton
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.PushButton = function() {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.PushButton.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.PushButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.PushButton.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.PushButton}
 */
Soap.PushButton.prototype.setLayoutData = function(layout) {};

/**
 * Class RadioButton
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.RadioButton = function() {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
Soap.RadioButton.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.RadioButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.RadioButton.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} formValue
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setFormValue = function(formValue) {};

/**
 * @param {string} html
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} value
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setValue = function(value) {};

/**
 * @param {boolean} value
 * @param {boolean} fireEvents
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setValue = function(value, fireEvents) {};

/**
 * @param {boolean} visible
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.RadioButton}
 */
Soap.RadioButton.prototype.setLayoutData = function(layout) {};

/**
 * Class ResetButton
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.ResetButton = function() {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.ResetButton.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.ResetButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.ResetButton.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.ResetButton}
 */
Soap.ResetButton.prototype.setLayoutData = function(layout) {};

/**
 * Class ScrollPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.ScrollPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.add = function(widget) {};

/**
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.addScrollHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.ScrollPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.ScrollPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.ScrollPanel.prototype.getType = function() {};

/**
 * @param {boolean} alwaysShow
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setAlwaysShowScrollBars = function(alwaysShow) {};

/**
 * @param {string} height
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setHeight = function(height) {};

/**
 * @param {number} position
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setHorizontalScrollPosition = function(position) {};

/**
 * @param {string} id
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} position
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setScrollPosition = function(position) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.ScrollPanel}
 */
Soap.ScrollPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class ServerHandler
 * Last updated May 6, 2013.
 * @constructor
 */
Soap.ServerHandler = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.addCallbackElement = function(widget) {};

/**
 * @return {string}
 */
Soap.ServerHandler.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.ServerHandler.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.ServerHandler.prototype.getType = function() {};

/**
 * @param {string} functionToInvoke
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.setCallbackFunction = function(functionToInvoke) {};

/**
 * @param {string} id
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.setId = function(id) {};

/**
 * @param {string} tag
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.setTag = function(tag) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateEmail = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateInteger = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateLength = function(widget, min, max) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateMatches = function(widget, pattern) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @param {string} flags
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateMatches = function(widget, pattern, flags) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateNotEmail = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateNotInteger = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateNotLength = function(widget, min, max) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateNotMatches = function(widget, pattern) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @param {string} flags
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateNotMatches = function(widget, pattern, flags) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateNotNumber = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {Array.<string>} options
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateNotOptions = function(widget, options) {};

/**
 * @param {Soap.Widget} widget
 * @param {Number} min
 * @param {Number} max
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateNotRange = function(widget, min, max) {};

/**
 * @param {Array.<Soap.Widget>} widgets
 * @param {number} sum
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateNotSum = function(widgets, sum) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateNumber = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {Array.<string>} options
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateOptions = function(widget, options) {};

/**
 * @param {Soap.Widget} widget
 * @param {Number} min
 * @param {Number} max
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateRange = function(widget, min, max) {};

/**
 * @param {Array.<Soap.Widget>} widgets
 * @param {number} sum
 * @return {Soap.ServerHandler}
 */
Soap.ServerHandler.prototype.validateSum = function(widgets, sum) {};

/**
 * Class SimpleCheckBox
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.SimpleCheckBox = function() {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.SimpleCheckBox.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.SimpleCheckBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.SimpleCheckBox.prototype.getType = function() {};

/**
 * @param {boolean} checked
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setChecked = function(checked) {};

/**
 * @param {boolean} enabled
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.SimpleCheckBox}
 */
Soap.SimpleCheckBox.prototype.setLayoutData = function(layout) {};

/**
 * Class SimplePanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.SimplePanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.SimplePanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.SimplePanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.SimplePanel.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.SimplePanel}
 */
Soap.SimplePanel.prototype.setLayoutData = function(layout) {};

/**
 * Class SimpleRadioButton
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.SimpleRadioButton = function() {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.SimpleRadioButton.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.SimpleRadioButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.SimpleRadioButton.prototype.getType = function() {};

/**
 * @param {boolean} checked
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setChecked = function(checked) {};

/**
 * @param {boolean} enabled
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.SimpleRadioButton}
 */
Soap.SimpleRadioButton.prototype.setLayoutData = function(layout) {};

/**
 * Class SplitLayoutPanel
 * Last updated April 21, 2013.
 * @constructor
 */
Soap.SplitLayoutPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.add = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {Number} width
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.addEast = function(widget, width) {};

/**
 * @param {Soap.Widget} widget
 * @param {Number} height
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.addNorth = function(widget, height) {};

/**
 * @param {Soap.Widget} widget
 * @param {Number} height
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.addSouth = function(widget, height) {};

/**
 * @param {string} styleName
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.addStyleName = function(styleName) {};

/**
 * @param {Soap.Widget} widget
 * @param {Number} width
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.addWest = function(widget, width) {};

/**
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.SplitLayoutPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.SplitLayoutPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.SplitLayoutPanel.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.remove = function(index) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.remove = function(widget) {};

/**
 * @param {string} height
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @param {number} minSize
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setWidgetMinSize = function(widget, minSize) {};

/**
 * @param {string} width
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.SplitLayoutPanel}
 */
Soap.SplitLayoutPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class StackPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.StackPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.add = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} text
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.add = function(widget, text) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} text
 * @param {boolean} asHtml
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.add = function(widget, text, asHtml) {};

/**
 * @param {string} styleName
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.StackPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.StackPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.StackPanel.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.remove = function(index) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.remove = function(widget) {};

/**
 * @param {string} height
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setSize = function(width, height) {};

/**
 * @param {number} index
 * @param {string} text
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setStackText = function(index, text) {};

/**
 * @param {number} index
 * @param {string} text
 * @param {boolean} asHtml
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setStackText = function(index, text, asHtml) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.StackPanel}
 */
Soap.StackPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class SubmitButton
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.SubmitButton = function() {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.SubmitButton.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.SubmitButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.SubmitButton.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.SubmitButton}
 */
Soap.SubmitButton.prototype.setLayoutData = function(layout) {};

/**
 * Class TabBar
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.TabBar = function() {};

/**
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.addStyleName = function(styleName) {};

/**
 * @param {string} title
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.addTab = function(title) {};

/**
 * @param {string} title
 * @param {boolean} asHtml
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.addTab = function(title, asHtml) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.addTab = function(widget) {};

/**
 * @return {string}
 */
Soap.TabBar.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.TabBar.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.TabBar.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.selectTab = function(index) {};

/**
 * @param {string} height
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @param {boolean} enabled
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setTabEnabled = function(index, enabled) {};

/**
 * @param {number} index
 * @param {string} text
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setTabText = function(index, text) {};

/**
 * @param {string} tag
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.addBeforeSelectionHandler = function(handler) {};

/**
 * @deprecated
 * @return {Soap.TabBar}
 */
Soap.TabBar.prototype.setLayoutData = function(layout) {};

/**
 * Class TabPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.TabPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.add = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} text
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.add = function(widget, text) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} text
 * @param {boolean} asHtml
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.add = function(widget, text, asHtml) {};

/**
 * @param {Soap.Widget} widget
 * @param {Soap.Widget} tabWidget
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.add = function(widget, tabWidget) {};

/**
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.TabPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.TabPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.TabPanel.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.selectTab = function(index) {};

/**
 * @param {boolean} animationEnabled
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {string} height
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.addBeforeSelectionHandler = function(handler) {};

/**
 * @deprecated
 * @return {Soap.TabPanel}
 */
Soap.TabPanel.prototype.setLayoutData = function(layout) {};

/**
 * Class TextArea
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.TextArea = function() {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addChangeHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
Soap.TextArea.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.TextArea.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.TextArea.prototype.getType = function() {};

/**
 * @param {number} width
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setCharacterWidth = function(width) {};

/**
 * @param {number} position
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setCursorPos = function(position) {};

/**
 * @param {boolean} enabled
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setPixelSize = function(width, height) {};

/**
 * @param {boolean} readOnly
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setReadOnly = function(readOnly) {};

/**
 * @param {number} position
 * @param {number} length
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setSelectionRange = function(position, length) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setTitle = function(title) {};

/**
 * @param {string} value
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setValue = function(value) {};

/**
 * @param {string} value
 * @param {boolean} fireEvents
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setValue = function(value, fireEvents) {};

/**
 * @param {boolean} visible
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setVisible = function(visible) {};

/**
 * @param {number} lines
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setVisibleLines = function(lines) {};

/**
 * @param {string} width
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setDirection = function(direction) {};

/**
 * @deprecated
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setLayoutData = function(layout) {};

/**
 * @deprecated
 * @return {Soap.TextArea}
 */
Soap.TextArea.prototype.setTextAlignment = function(textAlign) {};

/**
 * Class TextBox
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.TextBox = function() {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addChangeHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
Soap.TextBox.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.TextBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.TextBox.prototype.getType = function() {};

/**
 * @param {number} position
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setCursorPos = function(position) {};

/**
 * @param {boolean} enabled
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setId = function(id) {};

/**
 * @param {number} length
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setMaxLength = function(length) {};

/**
 * @param {string} name
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {boolean} readOnly
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setReadOnly = function(readOnly) {};

/**
 * @param {number} position
 * @param {number} length
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setSelectionRange = function(position, length) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setTitle = function(title) {};

/**
 * @param {string} value
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setValue = function(value) {};

/**
 * @param {string} value
 * @param {boolean} fireEvents
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setValue = function(value, fireEvents) {};

/**
 * @param {boolean} visible
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setVisible = function(visible) {};

/**
 * @param {number} length
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setVisibleLength = function(length) {};

/**
 * @param {string} width
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setDirection = function(direction) {};

/**
 * @deprecated
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setLayoutData = function(layout) {};

/**
 * @deprecated
 * @return {Soap.TextBox}
 */
Soap.TextBox.prototype.setTextAlignment = function(textAlign) {};

/**
 * Class ToggleButton
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.ToggleButton = function() {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
Soap.ToggleButton.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.ToggleButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.ToggleButton.prototype.getType = function() {};

/**
 * @param {boolean} down
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setDown = function(down) {};

/**
 * @param {boolean} enabled
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.ToggleButton}
 */
Soap.ToggleButton.prototype.setLayoutData = function(layout) {};

/**
 * Class Tree
 * Last updated May 2, 2013.
 * @constructor
 */
Soap.Tree = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.add = function(widget) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addBlurHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addCloseHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addFocusHandler = function(handler) {};

/**
 * @param {string} text
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addItem = function(text) {};

/**
 * @param {TreeItem} item
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addItem = function(item) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addItem = function(widget) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addOpenHandler = function(handler) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.Tree.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.Tree.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.Tree.prototype.getType = function() {};

/**
 * @param {boolean} animationEnabled
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {boolean} focus
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setPixelSize = function(width, height) {};

/**
 * @param {TreeItem} item
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setSelectedItem = function(item) {};

/**
 * @param {TreeItem} item
 * @param {boolean} fireEvents
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setSelectedItem = function(item, fireEvents) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setAccessKey = function(accessKey) {};

/**
 * @deprecated
 * @return {Soap.Tree}
 */
Soap.Tree.prototype.setLayoutData = function(layout) {};

/**
 * Class TreeItem
 * Last updated May 2, 2013.
 * @constructor
 */
Soap.TreeItem = function() {};

/**
 * @param {string} text
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.addItem = function(text) {};

/**
 * @param {TreeItem} item
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.addItem = function(item) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.addItem = function(widget) {};

/**
 * @param {string} styleName
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.TreeItem.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.TreeItem.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.TreeItem.prototype.getType = function() {};

/**
 * @param {string} html
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setPixelSize = function(width, height) {};

/**
 * @param {boolean} selected
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setSelected = function(selected) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setSize = function(width, height) {};

/**
 * @param {boolean} open
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setState = function(open) {};

/**
 * @param {boolean} open
 * @param {boolean} fireEvents
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setState = function(open, fireEvents) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setVisible = function(visible) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.TreeItem}
 */
Soap.TreeItem.prototype.setUserObject = function(a) {};

/**
 * Class UiInstance
 * Last updated April 21, 2013.
 * @constructor
 */
Soap.UiInstance = function() {};

/**
 * @param {Soap.Widget} child
 * @return {Soap.UiInstance}
 */
Soap.UiInstance.prototype.add = function(child) {};

/**
 * @return {Soap.UiInstance}
 */
Soap.UiInstance.prototype.close = function() {};

/**
 * @return {Soap.AbsolutePanel}
 */
Soap.UiInstance.prototype.createAbsolutePanel = function() {};

/**
 * @param {string} text
 * @param {boolean} asHtml
 * @param {string} href
 * @return {Soap.Anchor}
 */
Soap.UiInstance.prototype.createAnchor = function(text, asHtml, href) {};

/**
 * @param {string} text
 * @param {string} href
 * @return {Soap.Anchor}
 */
Soap.UiInstance.prototype.createAnchor = function(text, href) {};

/**
 * @return {Soap.Button}
 */
Soap.UiInstance.prototype.createButton = function() {};

/**
 * @param {string} html
 * @return {Soap.Button}
 */
Soap.UiInstance.prototype.createButton = function(html) {};

/**
 * @param {string} html
 * @param {Soap.Handler} clickHandler
 * @return {Soap.Button}
 */
Soap.UiInstance.prototype.createButton = function(html, clickHandler) {};

/**
 * @return {Soap.CaptionPanel}
 */
Soap.UiInstance.prototype.createCaptionPanel = function() {};

/**
 * @param {string} caption
 * @return {Soap.CaptionPanel}
 */
Soap.UiInstance.prototype.createCaptionPanel = function(caption) {};

/**
 * @param {string} caption
 * @param {boolean} asHtml
 * @return {Soap.CaptionPanel}
 */
Soap.UiInstance.prototype.createCaptionPanel = function(caption, asHtml) {};

/**
 * @return {Soap.CheckBox}
 */
Soap.UiInstance.prototype.createCheckBox = function() {};

/**
 * @param {string} label
 * @return {Soap.CheckBox}
 */
Soap.UiInstance.prototype.createCheckBox = function(label) {};

/**
 * @param {string} label
 * @param {boolean} asHtml
 * @return {Soap.CheckBox}
 */
Soap.UiInstance.prototype.createCheckBox = function(label, asHtml) {};

/**
 * @return {Soap.ClientHandler}
 */
Soap.UiInstance.prototype.createClientHandler = function() {};

/**
 * @return {Soap.DateBox}
 */
Soap.UiInstance.prototype.createDateBox = function() {};

/**
 * @return {Soap.DatePicker}
 */
Soap.UiInstance.prototype.createDatePicker = function() {};

/**
 * @return {Soap.DecoratedStackPanel}
 */
Soap.UiInstance.prototype.createDecoratedStackPanel = function() {};

/**
 * @return {Soap.DecoratedTabBar}
 */
Soap.UiInstance.prototype.createDecoratedTabBar = function() {};

/**
 * @return {Soap.DecoratedTabPanel}
 */
Soap.UiInstance.prototype.createDecoratedTabPanel = function() {};

/**
 * @return {Soap.DecoratorPanel}
 */
Soap.UiInstance.prototype.createDecoratorPanel = function() {};

/**
 * @return {Soap.DialogBox}
 */
Soap.UiInstance.prototype.createDialogBox = function() {};

/**
 * @param {boolean} autoHide
 * @return {Soap.DialogBox}
 */
Soap.UiInstance.prototype.createDialogBox = function(autoHide) {};

/**
 * @param {boolean} autoHide
 * @param {boolean} modal
 * @return {Soap.DialogBox}
 */
Soap.UiInstance.prototype.createDialogBox = function(autoHide, modal) {};

/**
 * @return {Soap.DocsListDialog}
 */
Soap.UiInstance.prototype.createDocsListDialog = function() {};

/**
 * @return {Soap.FileUpload}
 */
Soap.UiInstance.prototype.createFileUpload = function() {};

/**
 * @return {Soap.FlexTable}
 */
Soap.UiInstance.prototype.createFlexTable = function() {};

/**
 * @return {Soap.FlowPanel}
 */
Soap.UiInstance.prototype.createFlowPanel = function() {};

/**
 * @return {Soap.FocusPanel}
 */
Soap.UiInstance.prototype.createFocusPanel = function() {};

/**
 * @param {Soap.Widget} child
 * @return {Soap.FocusPanel}
 */
Soap.UiInstance.prototype.createFocusPanel = function(child) {};

/**
 * @return {Soap.FormPanel}
 */
Soap.UiInstance.prototype.createFormPanel = function() {};

/**
 * @return {Soap.Grid}
 */
Soap.UiInstance.prototype.createGrid = function() {};

/**
 * @param {number} rows
 * @param {number} columns
 * @return {Soap.Grid}
 */
Soap.UiInstance.prototype.createGrid = function(rows, columns) {};

/**
 * @return {Soap.HTML}
 */
Soap.UiInstance.prototype.createHTML = function() {};

/**
 * @param {string} html
 * @return {Soap.HTML}
 */
Soap.UiInstance.prototype.createHTML = function(html) {};

/**
 * @param {string} html
 * @param {boolean} wordWrap
 * @return {Soap.HTML}
 */
Soap.UiInstance.prototype.createHTML = function(html, wordWrap) {};

/**
 * @return {Soap.Hidden}
 */
Soap.UiInstance.prototype.createHidden = function() {};

/**
 * @param {string} name
 * @return {Soap.Hidden}
 */
Soap.UiInstance.prototype.createHidden = function(name) {};

/**
 * @param {string} name
 * @param {string} value
 * @return {Soap.Hidden}
 */
Soap.UiInstance.prototype.createHidden = function(name, value) {};

/**
 * @return {Soap.HorizontalPanel}
 */
Soap.UiInstance.prototype.createHorizontalPanel = function() {};

/**
 * @return {Soap.Image}
 */
Soap.UiInstance.prototype.createImage = function() {};

/**
 * @param {string} url
 * @return {Soap.Image}
 */
Soap.UiInstance.prototype.createImage = function(url) {};

/**
 * @param {string} url
 * @param {number} left
 * @param {number} top
 * @param {number} width
 * @param {number} height
 * @return {Soap.Image}
 */
Soap.UiInstance.prototype.createImage = function(url, left, top, width, height) {};

/**
 * @return {Soap.InlineLabel}
 */
Soap.UiInstance.prototype.createInlineLabel = function() {};

/**
 * @param {string} text
 * @return {Soap.InlineLabel}
 */
Soap.UiInstance.prototype.createInlineLabel = function(text) {};

/**
 * @return {Soap.Label}
 */
Soap.UiInstance.prototype.createLabel = function() {};

/**
 * @param {string} text
 * @return {Soap.Label}
 */
Soap.UiInstance.prototype.createLabel = function(text) {};

/**
 * @param {string} text
 * @param {boolean} wordWrap
 * @return {Soap.Label}
 */
Soap.UiInstance.prototype.createLabel = function(text, wordWrap) {};

/**
 * @return {Soap.ListBox}
 */
Soap.UiInstance.prototype.createListBox = function() {};

/**
 * @param {boolean} isMultipleSelect
 * @return {Soap.ListBox}
 */
Soap.UiInstance.prototype.createListBox = function(isMultipleSelect) {};

/**
 * @return {Soap.MenuBar}
 */
Soap.UiInstance.prototype.createMenuBar = function() {};

/**
 * @param {boolean} vertical
 * @return {Soap.MenuBar}
 */
Soap.UiInstance.prototype.createMenuBar = function(vertical) {};

/**
 * @param {string} text
 * @param {boolean} asHtml
 * @param {Soap.Handler} command
 * @return {Soap.MenuItem}
 */
Soap.UiInstance.prototype.createMenuItem = function(text, asHtml, command) {};

/**
 * @param {string} text
 * @param {Soap.Handler} command
 * @return {Soap.MenuItem}
 */
Soap.UiInstance.prototype.createMenuItem = function(text, command) {};

/**
 * @return {Soap.MenuItemSeparator}
 */
Soap.UiInstance.prototype.createMenuItemSeparator = function() {};

/**
 * @return {Soap.PasswordTextBox}
 */
Soap.UiInstance.prototype.createPasswordTextBox = function() {};

/**
 * @return {Soap.PopupPanel}
 */
Soap.UiInstance.prototype.createPopupPanel = function() {};

/**
 * @param {boolean} autoHide
 * @return {Soap.PopupPanel}
 */
Soap.UiInstance.prototype.createPopupPanel = function(autoHide) {};

/**
 * @param {boolean} autoHide
 * @param {boolean} modal
 * @return {Soap.PopupPanel}
 */
Soap.UiInstance.prototype.createPopupPanel = function(autoHide, modal) {};

/**
 * @return {Soap.PushButton}
 */
Soap.UiInstance.prototype.createPushButton = function() {};

/**
 * @param {string} upText
 * @return {Soap.PushButton}
 */
Soap.UiInstance.prototype.createPushButton = function(upText) {};

/**
 * @param {string} upText
 * @param {Soap.Handler} clickHandler
 * @return {Soap.PushButton}
 */
Soap.UiInstance.prototype.createPushButton = function(upText, clickHandler) {};

/**
 * @param {string} upText
 * @param {string} downText
 * @return {Soap.PushButton}
 */
Soap.UiInstance.prototype.createPushButton = function(upText, downText) {};

/**
 * @param {string} upText
 * @param {string} downText
 * @param {Soap.Handler} clickHandler
 * @return {Soap.PushButton}
 */
Soap.UiInstance.prototype.createPushButton = function(upText, downText, clickHandler) {};

/**
 * @param {string} name
 * @return {Soap.RadioButton}
 */
Soap.UiInstance.prototype.createRadioButton = function(name) {};

/**
 * @param {string} name
 * @param {string} label
 * @return {Soap.RadioButton}
 */
Soap.UiInstance.prototype.createRadioButton = function(name, label) {};

/**
 * @param {string} name
 * @param {string} label
 * @param {boolean} asHtml
 * @return {Soap.RadioButton}
 */
Soap.UiInstance.prototype.createRadioButton = function(name, label, asHtml) {};

/**
 * @return {Soap.ResetButton}
 */
Soap.UiInstance.prototype.createResetButton = function() {};

/**
 * @param {string} html
 * @return {Soap.ResetButton}
 */
Soap.UiInstance.prototype.createResetButton = function(html) {};

/**
 * @param {string} html
 * @param {Soap.Handler} clickHandler
 * @return {Soap.ResetButton}
 */
Soap.UiInstance.prototype.createResetButton = function(html, clickHandler) {};

/**
 * @return {Soap.ScrollPanel}
 */
Soap.UiInstance.prototype.createScrollPanel = function() {};

/**
 * @param {Soap.Widget} child
 * @return {Soap.ScrollPanel}
 */
Soap.UiInstance.prototype.createScrollPanel = function(child) {};

/**
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerHandler = function() {};

/**
 * @param {string} functionName
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerHandler = function(functionName) {};

/**
 * @return {Soap.SimpleCheckBox}
 */
Soap.UiInstance.prototype.createSimpleCheckBox = function() {};

/**
 * @return {Soap.SimplePanel}
 */
Soap.UiInstance.prototype.createSimplePanel = function() {};

/**
 * @param {string} name
 * @return {Soap.SimpleRadioButton}
 */
Soap.UiInstance.prototype.createSimpleRadioButton = function(name) {};

/**
 * @return {Soap.SplitLayoutPanel}
 */
Soap.UiInstance.prototype.createSplitLayoutPanel = function() {};

/**
 * @return {Soap.StackPanel}
 */
Soap.UiInstance.prototype.createStackPanel = function() {};

/**
 * @return {Soap.SubmitButton}
 */
Soap.UiInstance.prototype.createSubmitButton = function() {};

/**
 * @param {string} html
 * @return {Soap.SubmitButton}
 */
Soap.UiInstance.prototype.createSubmitButton = function(html) {};

/**
 * @return {Soap.TabBar}
 */
Soap.UiInstance.prototype.createTabBar = function() {};

/**
 * @return {Soap.TabPanel}
 */
Soap.UiInstance.prototype.createTabPanel = function() {};

/**
 * @return {Soap.TextArea}
 */
Soap.UiInstance.prototype.createTextArea = function() {};

/**
 * @return {Soap.TextBox}
 */
Soap.UiInstance.prototype.createTextBox = function() {};

/**
 * @return {Soap.ToggleButton}
 */
Soap.UiInstance.prototype.createToggleButton = function() {};

/**
 * @param {string} upText
 * @return {Soap.ToggleButton}
 */
Soap.UiInstance.prototype.createToggleButton = function(upText) {};

/**
 * @param {string} upText
 * @param {Soap.Handler} clickHandler
 * @return {Soap.ToggleButton}
 */
Soap.UiInstance.prototype.createToggleButton = function(upText, clickHandler) {};

/**
 * @param {string} upText
 * @param {string} downText
 * @return {Soap.ToggleButton}
 */
Soap.UiInstance.prototype.createToggleButton = function(upText, downText) {};

/**
 * @return {Soap.Tree}
 */
Soap.UiInstance.prototype.createTree = function() {};

/**
 * @return {Soap.TreeItem}
 */
Soap.UiInstance.prototype.createTreeItem = function() {};

/**
 * @param {string} text
 * @return {Soap.TreeItem}
 */
Soap.UiInstance.prototype.createTreeItem = function(text) {};

/**
 * @param {Soap.Widget} child
 * @return {Soap.TreeItem}
 */
Soap.UiInstance.prototype.createTreeItem = function(child) {};

/**
 * @return {Soap.VerticalPanel}
 */
Soap.UiInstance.prototype.createVerticalPanel = function() {};

/**
 * @param {string} id
 * @return {Soap.Component}
 */
Soap.UiInstance.prototype.getElementById = function(id) {};

/**
 * @return {string}
 */
Soap.UiInstance.prototype.getId = function() {};

/**
 * @return {boolean}
 */
Soap.UiInstance.prototype.isStandardsMode = function() {};

/**
 * @param {string} componentName
 * @return {Soap.Component}
 */
Soap.UiInstance.prototype.loadComponent = function(componentName) {};

/**
 * @param {string} componentName
 * @param {Object} optAdvancedArgs
 * @return {Soap.Component}
 */
Soap.UiInstance.prototype.loadComponent = function(componentName, optAdvancedArgs) {};

/**
 * @param {number} index
 * @return {Soap.UiInstance}
 */
Soap.UiInstance.prototype.remove = function(index) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.UiInstance}
 */
Soap.UiInstance.prototype.remove = function(widget) {};

/**
 * @param {number} height
 * @return {Soap.UiInstance}
 */
Soap.UiInstance.prototype.setHeight = function(height) {};

/**
 * @param {boolean} standardsMode
 * @return {Soap.UiInstance}
 */
Soap.UiInstance.prototype.setStandardsMode = function(standardsMode) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.UiInstance}
 */
Soap.UiInstance.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {string} title
 * @return {Soap.UiInstance}
 */
Soap.UiInstance.prototype.setTitle = function(title) {};

/**
 * @param {number} width
 * @return {Soap.UiInstance}
 */
Soap.UiInstance.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {<s><a href="deck-panel.html">DeckPanel</a></s>}
 */
Soap.UiInstance.prototype.createDeckPanel = function() {};

/**
 * @deprecated
 * @return {<s><a href="decorated-popup-panel.html">DecoratedPopupPanel</a></s>}
 */
Soap.UiInstance.prototype.createDecoratedPopupPanel = function() {};

/**
 * @deprecated
 * @return {<s><a href="decorated-popup-panel.html">DecoratedPopupPanel</a></s>}
 */
Soap.UiInstance.prototype.createDecoratedPopupPanel = function(autoHide) {};

/**
 * @deprecated
 * @return {<s><a href="decorated-popup-panel.html">DecoratedPopupPanel</a></s>}
 */
Soap.UiInstance.prototype.createDecoratedPopupPanel = function(autoHide, modal) {};

/**
 * @deprecated
 * @return {<s><a href="dock-panel.html">DockPanel</a></s>}
 */
Soap.UiInstance.prototype.createDockPanel = function() {};

/**
 * @deprecated
 * @return {<s><a href="hyperlink.html">Hyperlink</a></s>}
 */
Soap.UiInstance.prototype.createHyperlink = function() {};

/**
 * @deprecated
 * @return {<s><a href="hyperlink.html">Hyperlink</a></s>}
 */
Soap.UiInstance.prototype.createHyperlink = function(text, asHtml, targetHistoryToken) {};

/**
 * @deprecated
 * @return {<s><a href="hyperlink.html">Hyperlink</a></s>}
 */
Soap.UiInstance.prototype.createHyperlink = function(text, targetHistoryToken) {};

/**
 * @deprecated
 * @return {<s><a href="inline-hyperlink.html">InlineHyperlink</a></s>}
 */
Soap.UiInstance.prototype.createInlineHyperlink = function() {};

/**
 * @deprecated
 * @return {<s><a href="inline-hyperlink.html">InlineHyperlink</a></s>}
 */
Soap.UiInstance.prototype.createInlineHyperlink = function(text, asHtml, targetHistoryToken) {};

/**
 * @deprecated
 * @return {<s><a href="inline-hyperlink.html">InlineHyperlink</a></s>}
 */
Soap.UiInstance.prototype.createInlineHyperlink = function(text, targetHistoryToken) {};

/**
 * @deprecated
 * @return {<s><a href="layout-panel.html">LayoutPanel</a></s>}
 */
Soap.UiInstance.prototype.createLayoutPanel = function() {};

/**
 * @deprecated
 * @return {<s><a href="rich-text-area.html">RichTextArea</a></s>}
 */
Soap.UiInstance.prototype.createRichTextArea = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerBlurHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerBlurHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerChangeHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerChangeHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerClickHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerClickHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerCloseHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerCloseHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerCommand = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerCommand = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerErrorHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerErrorHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerFocusHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerFocusHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerInitializeHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerInitializeHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerKeyHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerKeyHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerLoadHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerLoadHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerMouseHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerMouseHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerScrollHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerScrollHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerSelectionHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerSelectionHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerSubmitHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerSubmitHandler = function(functionName) {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerValueChangeHandler = function() {};

/**
 * @deprecated
 * @return {Soap.ServerHandler}
 */
Soap.UiInstance.prototype.createServerValueChangeHandler = function(functionName) {};

/**
 * @deprecated
 * @return {<s><a href="suggest-box.html">SuggestBox</a></s>}
 */
Soap.UiInstance.prototype.createSuggestBox = function() {};

/**
 * Class VerticalPanel
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.VerticalPanel = function() {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
Soap.VerticalPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.VerticalPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.VerticalPanel.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.remove = function(index) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.remove = function(widget) {};

/**
 * @param {number} width
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setBorderWidth = function(width) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} height
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setCellHeight = function(widget, height) {};

/**
 * @param {Soap.Widget} widget
 * @param {Soap.HorizontalAlignment} horizontalAlignment
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setCellHorizontalAlignment = function(widget, horizontalAlignment) {};

/**
 * @param {Soap.Widget} widget
 * @param {Soap.VerticalAlignment} verticalAlignment
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setCellVerticalAlignment = function(widget, verticalAlignment) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} width
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setCellWidth = function(widget, width) {};

/**
 * @param {string} height
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setHeight = function(height) {};

/**
 * @param {Soap.HorizontalAlignment} horizontalAlignment
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} id
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setSize = function(width, height) {};

/**
 * @param {number} spacing
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setSpacing = function(spacing) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setTitle = function(title) {};

/**
 * @param {Soap.VerticalAlignment} verticalAlignment
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setVerticalAlignment = function(verticalAlignment) {};

/**
 * @param {boolean} visible
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setWidth = function(width) {};

/**
 * @deprecated
 * @return {Soap.VerticalPanel}
 */
Soap.VerticalPanel.prototype.setLayoutData = function(layout) {};

/**
 * Interface Component
 * Last updated June 27, 2013.
 * @constructor
 */
Soap.Component = function() {};

/**
 * @return {string}
 */
Soap.Component.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.Component.prototype.getType = function() {};

/**
 * Interface Handler
 * Last updated June 27, 2013.
 * @constructor
 */
Soap.Handler = function() {};

/**
 * @return {string}
 */
Soap.Handler.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.Handler.prototype.getTag = function() {};

/**
 * @return {string}
 */
Soap.Handler.prototype.getType = function() {};

/**
 * @param {string} id
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.setId = function(id) {};

/**
 * @param {string} tag
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.setTag = function(tag) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateEmail = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateInteger = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateLength = function(widget, min, max) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateMatches = function(widget, pattern) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @param {string} flags
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateMatches = function(widget, pattern, flags) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateNotEmail = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateNotInteger = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateNotLength = function(widget, min, max) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateNotMatches = function(widget, pattern) {};

/**
 * @param {Soap.Widget} widget
 * @param {string} pattern
 * @param {string} flags
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateNotMatches = function(widget, pattern, flags) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateNotNumber = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {Array.<string>} options
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateNotOptions = function(widget, options) {};

/**
 * @param {Soap.Widget} widget
 * @param {Number} min
 * @param {Number} max
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateNotRange = function(widget, min, max) {};

/**
 * @param {Array.<Soap.Widget>} widgets
 * @param {number} sum
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateNotSum = function(widgets, sum) {};

/**
 * @param {Soap.Widget} widget
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateNumber = function(widget) {};

/**
 * @param {Soap.Widget} widget
 * @param {Array.<string>} options
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateOptions = function(widget, options) {};

/**
 * @param {Soap.Widget} widget
 * @param {Number} min
 * @param {Number} max
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateRange = function(widget, min, max) {};

/**
 * @param {Array.<Soap.Widget>} widgets
 * @param {number} sum
 * @return {Soap.Handler}
 */
Soap.Handler.prototype.validateSum = function(widgets, sum) {};

/**
 * Interface Widget
 * Last updated June 27, 2013.
 * @constructor
 */
Soap.Widget = function() {};

/**
 * @return {string}
 */
Soap.Widget.prototype.getId = function() {};

/**
 * @return {string}
 */
Soap.Widget.prototype.getType = function() {};

/**
 * Enum DateTimeFormat
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.DateTimeFormat = function() {};

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.ISO_8601;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.RFC_2822;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.DATE_FULL;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.DATE_LONG;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.DATE_MEDIUM;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.DATE_SHORT;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.TIME_FULL;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.TIME_LONG;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.TIME_MEDIUM;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.TIME_SHORT;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.DATE_TIME_FULL;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.DATE_TIME_LONG;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.DATE_TIME_MEDIUM;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.DATE_TIME_SHORT;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.DAY;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.HOUR_MINUTE;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.HOUR_MINUTE_SECOND;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.HOUR24_MINUTE;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.HOUR24_MINUTE_SECOND;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.MINUTE_SECOND;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.MONTH;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.MONTH_ABBR;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.MONTH_ABBR_DAY;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.MONTH_DAY;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.MONTH_NUM_DAY;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.MONTH_WEEKDAY_DAY;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.YEAR;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.YEAR_MONTH;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.YEAR_MONTH_ABBR;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.YEAR_MONTH_ABBR_DAY;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.YEAR_MONTH_DAY;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.YEAR_MONTH_NUM;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.YEAR_MONTH_NUM_DAY;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.YEAR_MONTH_WEEKDAY_DAY;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.YEAR_QUARTER;

/**
 * @type {Soap.DateTimeFormat}
 */
Soap.DateTimeFormat.prototype.YEAR_QUARTER_ABBR;

/**
 * Enum FileType
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.FileType = function() {};

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.ALL;

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.ALL_DOCS;

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.DRAWINGS;

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.DOCUMENTS;

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.SPREADSHEETS;

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.FOLDERS;

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.RECENTLY_PICKED;

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.PRESENTATIONS;

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.FORMS;

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.PHOTOS;

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.PHOTO_ALBUMS;

/**
 * @type {Soap.FileType}
 */
Soap.FileType.prototype.PDFS;

/**
 * Enum HorizontalAlignment
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.HorizontalAlignment = function() {};

/**
 * @type {Soap.HorizontalAlignment}
 */
Soap.HorizontalAlignment.prototype.LEFT;

/**
 * @type {Soap.HorizontalAlignment}
 */
Soap.HorizontalAlignment.prototype.RIGHT;

/**
 * @type {Soap.HorizontalAlignment}
 */
Soap.HorizontalAlignment.prototype.CENTER;

/**
 * @type {Soap.HorizontalAlignment}
 */
Soap.HorizontalAlignment.prototype.DEFAULT;

/**
 * @type {Soap.HorizontalAlignment}
 */
Soap.HorizontalAlignment.prototype.JUSTIFY;

/**
 * @type {Soap.HorizontalAlignment}
 */
Soap.HorizontalAlignment.prototype.LOCALE_START;

/**
 * @type {Soap.HorizontalAlignment}
 */
Soap.HorizontalAlignment.prototype.LOCALE_END;

/**
 * Enum VerticalAlignment
 * Last updated March 26, 2013.
 * @constructor
 */
Soap.VerticalAlignment = function() {};

/**
 * @type {Soap.VerticalAlignment}
 */
Soap.VerticalAlignment.prototype.TOP;

/**
 * @type {Soap.VerticalAlignment}
 */
Soap.VerticalAlignment.prototype.MIDDLE;

/**
 * @type {Soap.VerticalAlignment}
 */
Soap.VerticalAlignment.prototype.BOTTOM;


/**
 * UrlFetch Services
 */
var UrlFetch = {};

/**
 * Class UrlFetchApp
 * Last updated March 26, 2013.
 * @constructor
 */
UrlFetch.UrlFetchApp = function() {};

/**
 * @param {string} serviceName
 * @return {UrlFetch.OAuthConfig}
 */
UrlFetch.UrlFetchApp.prototype.addOAuthService = function(serviceName) {};

/**
 * @param {string} url
 * @return {UrlFetch.HTTPResponse}
 */
UrlFetch.UrlFetchApp.prototype.fetch = function(url) {};

/**
 * @return {UrlFetch.HTTPResponse}
 */
UrlFetch.UrlFetchApp.prototype.fetch = function(url, params) {};

/**
 * @param {string} url
 * @return {Object}
 */
UrlFetch.UrlFetchApp.prototype.getRequest = function(url) {};

/**
 * @param {string} url
 * @param {Object} params
 * @return {Object}
 */
UrlFetch.UrlFetchApp.prototype.getRequest = function(url, params) {};

/**
 * @param {string} serviceName
 */
UrlFetch.UrlFetchApp.prototype.removeOAuthService = function(serviceName) {};


/**
 * @type {UrlFetch.UrlFetchApp}
 */
var UrlFetchApp;

/**
 * Class HTTPResponse
 * Last updated July 11, 2013.
 * @constructor
 */
UrlFetch.HTTPResponse = function() {};

/**
 * @return {Object}
 */
UrlFetch.HTTPResponse.prototype.getAllHeaders = function() {};

/**
 * @param {string} contentType
 * @return {Base.Blob}
 */
UrlFetch.HTTPResponse.prototype.getAs = function(contentType) {};

/**
 * @return {Base.Blob}
 */
UrlFetch.HTTPResponse.prototype.getBlob = function() {};

/**
 * @return {Array.<Byte>}
 */
UrlFetch.HTTPResponse.prototype.getContent = function() {};

/**
 * @return {string}
 */
UrlFetch.HTTPResponse.prototype.getContentText = function() {};

/**
 * @param {string} charset
 * @return {string}
 */
UrlFetch.HTTPResponse.prototype.getContentText = function(charset) {};

/**
 * @return {Object}
 */
UrlFetch.HTTPResponse.prototype.getHeaders = function() {};

/**
 * @return {number}
 */
UrlFetch.HTTPResponse.prototype.getResponseCode = function() {};

/**
 * Class OAuthConfig
 * Last updated March 26, 2013.
 * @constructor
 */
UrlFetch.OAuthConfig = function() {};

/**
 * @return {string}
 */
UrlFetch.OAuthConfig.prototype.getAccessTokenUrl = function() {};

/**
 * @return {string}
 */
UrlFetch.OAuthConfig.prototype.getAuthorizationUrl = function() {};

/**
 * @return {string}
 */
UrlFetch.OAuthConfig.prototype.getMethod = function() {};

/**
 * @return {string}
 */
UrlFetch.OAuthConfig.prototype.getParamLocation = function() {};

/**
 * @return {string}
 */
UrlFetch.OAuthConfig.prototype.getRequestTokenUrl = function() {};

/**
 * @return {string}
 */
UrlFetch.OAuthConfig.prototype.getServiceName = function() {};

/**
 * @param {string} url
 */
UrlFetch.OAuthConfig.prototype.setAccessTokenUrl = function(url) {};

/**
 * @param {string} url
 */
UrlFetch.OAuthConfig.prototype.setAuthorizationUrl = function(url) {};

/**
 * @param {string} consumerKey
 */
UrlFetch.OAuthConfig.prototype.setConsumerKey = function(consumerKey) {};

/**
 * @param {string} consumerSecret
 */
UrlFetch.OAuthConfig.prototype.setConsumerSecret = function(consumerSecret) {};

/**
 * @param {string} method
 */
UrlFetch.OAuthConfig.prototype.setMethod = function(method) {};

/**
 * @param {string} location
 */
UrlFetch.OAuthConfig.prototype.setParamLocation = function(location) {};

/**
 * @param {string} url
 */
UrlFetch.OAuthConfig.prototype.setRequestTokenUrl = function(url) {};


/**
 * Utilities Services
 */
var Utilities = {};

/**
 * Class Utilities
 * Last updated June 27, 2013.
 * @constructor
 */
Utilities.Utilities = function() {};

/**
 * @type {Utilities.Charset}
 */
Utilities.Utilities.prototype.Charset;

/**
 * @type {Utilities.DigestAlgorithm}
 */
Utilities.Utilities.prototype.DigestAlgorithm;

/**
 * @type {Utilities.MacAlgorithm}
 */
Utilities.Utilities.prototype.MacAlgorithm;

/**
 * @param {string} encoded
 * @return {Array.<Byte>}
 */
Utilities.Utilities.prototype.base64Decode = function(encoded) {};

/**
 * @param {string} encoded
 * @param {Utilities.Charset} charset
 * @return {Array.<Byte>}
 */
Utilities.Utilities.prototype.base64Decode = function(encoded, charset) {};

/**
 * @param {Array.<Byte>} data
 * @return {string}
 */
Utilities.Utilities.prototype.base64Encode = function(data) {};

/**
 * @param {string} data
 * @return {string}
 */
Utilities.Utilities.prototype.base64Encode = function(data) {};

/**
 * @param {string} data
 * @param {Utilities.Charset} charset
 * @return {string}
 */
Utilities.Utilities.prototype.base64Encode = function(data, charset) {};

/**
 * @param {Utilities.DigestAlgorithm} algorithm
 * @param {string} value
 * @return {Array.<Byte>}
 */
Utilities.Utilities.prototype.computeDigest = function(algorithm, value) {};

/**
 * @param {Utilities.DigestAlgorithm} algorithm
 * @param {string} value
 * @param {Utilities.Charset} charset
 * @return {Array.<Byte>}
 */
Utilities.Utilities.prototype.computeDigest = function(algorithm, value, charset) {};

/**
 * @param {string} value
 * @param {string} key
 * @return {Array.<Byte>}
 */
Utilities.Utilities.prototype.computeHmacSha256Signature = function(value, key) {};

/**
 * @param {string} value
 * @param {string} key
 * @param {Utilities.Charset} charset
 * @return {Array.<Byte>}
 */
Utilities.Utilities.prototype.computeHmacSha256Signature = function(value, key, charset) {};

/**
 * @param {Utilities.MacAlgorithm} algorithm
 * @param {string} value
 * @param {string} key
 * @return {Array.<Byte>}
 */
Utilities.Utilities.prototype.computeHmacSignature = function(algorithm, value, key) {};

/**
 * @param {Utilities.MacAlgorithm} algorithm
 * @param {string} value
 * @param {string} key
 * @param {Utilities.Charset} charset
 * @return {Array.<Byte>}
 */
Utilities.Utilities.prototype.computeHmacSignature = function(algorithm, value, key, charset) {};

/**
 * @param {Date} date
 * @param {string} timeZone
 * @param {string} format
 * @return {string}
 */
Utilities.Utilities.prototype.formatDate = function(date, timeZone, format) {};

/**
 * @param {string} template
 * @param {Object...} args
 * @return {string}
 */
Utilities.Utilities.prototype.formatString = function(template, args) {};

/**
 * @param {string} jsonString
 * @return {Object}
 */
Utilities.Utilities.prototype.jsonParse = function(jsonString) {};

/**
 * @param {Object} obj
 * @return {string}
 */
Utilities.Utilities.prototype.jsonStringify = function(obj) {};

/**
 * @param {Array.<Byte>} data
 * @return {Base.Blob}
 */
Utilities.Utilities.prototype.newBlob = function(data) {};

/**
 * @param {Array.<Byte>} data
 * @param {string} contentType
 * @return {Base.Blob}
 */
Utilities.Utilities.prototype.newBlob = function(data, contentType) {};

/**
 * @param {Array.<Byte>} data
 * @param {string} contentType
 * @param {string} name
 * @return {Base.Blob}
 */
Utilities.Utilities.prototype.newBlob = function(data, contentType, name) {};

/**
 * @param {string} data
 * @return {Base.Blob}
 */
Utilities.Utilities.prototype.newBlob = function(data) {};

/**
 * @param {string} data
 * @param {string} contentType
 * @return {Base.Blob}
 */
Utilities.Utilities.prototype.newBlob = function(data, contentType) {};

/**
 * @param {string} data
 * @param {string} contentType
 * @param {string} name
 * @return {Base.Blob}
 */
Utilities.Utilities.prototype.newBlob = function(data, contentType, name) {};

/**
 * @param {string} csv
 * @return {Array.<Array.<string>>}
 */
Utilities.Utilities.prototype.parseCsv = function(csv) {};

/**
 * @param {string} csv
 * @param {Char} delimiter
 * @return {Array.<Array.<string>>}
 */
Utilities.Utilities.prototype.parseCsv = function(csv, delimiter) {};

/**
 * @param {number} milliseconds
 */
Utilities.Utilities.prototype.sleep = function(milliseconds) {};

/**
 * @param {Base.BlobSource} blob
 * @return {Array.<Base.Blob>}
 */
Utilities.Utilities.prototype.unzip = function(blob) {};

/**
 * @param {Array.<Base.BlobSource>} blobs
 * @return {Base.Blob}
 */
Utilities.Utilities.prototype.zip = function(blobs) {};

/**
 * @param {Array.<Base.BlobSource>} blobs
 * @param {string} name
 * @return {Base.Blob}
 */
Utilities.Utilities.prototype.zip = function(blobs, name) {};


/**
 * @type {Utilities.Utilities}
 */
var Utilities;

/**
 * Enum Charset
 * Last updated March 26, 2013.
 * @constructor
 */
Utilities.Charset = function() {};

/**
 * @type {Utilities.Charset}
 */
Utilities.Charset.prototype.US_ASCII;

/**
 * @type {Utilities.Charset}
 */
Utilities.Charset.prototype.UTF_8;

/**
 * Enum DigestAlgorithm
 * Last updated March 26, 2013.
 * @constructor
 */
Utilities.DigestAlgorithm = function() {};

/**
 * @type {Utilities.DigestAlgorithm}
 */
Utilities.DigestAlgorithm.prototype.MD2;

/**
 * @type {Utilities.DigestAlgorithm}
 */
Utilities.DigestAlgorithm.prototype.MD5;

/**
 * @type {Utilities.DigestAlgorithm}
 */
Utilities.DigestAlgorithm.prototype.SHA_1;

/**
 * @type {Utilities.DigestAlgorithm}
 */
Utilities.DigestAlgorithm.prototype.SHA_256;

/**
 * @type {Utilities.DigestAlgorithm}
 */
Utilities.DigestAlgorithm.prototype.SHA_384;

/**
 * @type {Utilities.DigestAlgorithm}
 */
Utilities.DigestAlgorithm.prototype.SHA_512;

/**
 * Enum MacAlgorithm
 * Last updated March 26, 2013.
 * @constructor
 */
Utilities.MacAlgorithm = function() {};

/**
 * @type {Utilities.MacAlgorithm}
 */
Utilities.MacAlgorithm.prototype.HMAC_MD5;

/**
 * @type {Utilities.MacAlgorithm}
 */
Utilities.MacAlgorithm.prototype.HMAC_SHA_1;

/**
 * @type {Utilities.MacAlgorithm}
 */
Utilities.MacAlgorithm.prototype.HMAC_SHA_256;

/**
 * @type {Utilities.MacAlgorithm}
 */
Utilities.MacAlgorithm.prototype.HMAC_SHA_384;

/**
 * @type {Utilities.MacAlgorithm}
 */
Utilities.MacAlgorithm.prototype.HMAC_SHA_512;


/**
 * Xml Services
 */
var Xml = {};

/**
 * Class XmlService
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.XmlService = function() {};

/**
 * @type {Xml.ContentType}
 */
Xml.XmlService.prototype.ContentTypes;

/**
 * @param {string} text
 * @return {Xml.Cdata}
 */
Xml.XmlService.prototype.createCdata = function(text) {};

/**
 * @param {string} text
 * @return {Xml.Comment}
 */
Xml.XmlService.prototype.createComment = function(text) {};

/**
 * @param {string} elementName
 * @return {Xml.DocType}
 */
Xml.XmlService.prototype.createDocType = function(elementName) {};

/**
 * @param {string} elementName
 * @param {string} systemId
 * @return {Xml.DocType}
 */
Xml.XmlService.prototype.createDocType = function(elementName, systemId) {};

/**
 * @param {string} elementName
 * @param {string} publicId
 * @param {string} systemId
 * @return {Xml.DocType}
 */
Xml.XmlService.prototype.createDocType = function(elementName, publicId, systemId) {};

/**
 * @return {Xml.Document}
 */
Xml.XmlService.prototype.createDocument = function() {};

/**
 * @param {Xml.Element} rootElement
 * @return {Xml.Document}
 */
Xml.XmlService.prototype.createDocument = function(rootElement) {};

/**
 * @param {string} name
 * @return {Xml.Element}
 */
Xml.XmlService.prototype.createElement = function(name) {};

/**
 * @param {string} name
 * @param {Xml.Namespace} namespace
 * @return {Xml.Element}
 */
Xml.XmlService.prototype.createElement = function(name, namespace) {};

/**
 * @param {string} text
 * @return {Xml.Text}
 */
Xml.XmlService.prototype.createText = function(text) {};

/**
 * @return {Xml.Format}
 */
Xml.XmlService.prototype.getCompactFormat = function() {};

/**
 * @param {string} uri
 * @return {Xml.Namespace}
 */
Xml.XmlService.prototype.getNamespace = function(uri) {};

/**
 * @param {string} prefix
 * @param {string} uri
 * @return {Xml.Namespace}
 */
Xml.XmlService.prototype.getNamespace = function(prefix, uri) {};

/**
 * @return {Xml.Namespace}
 */
Xml.XmlService.prototype.getNoNamespace = function() {};

/**
 * @return {Xml.Format}
 */
Xml.XmlService.prototype.getPrettyFormat = function() {};

/**
 * @return {Xml.Format}
 */
Xml.XmlService.prototype.getRawFormat = function() {};

/**
 * @return {Xml.Namespace}
 */
Xml.XmlService.prototype.getXmlNamespace = function() {};

/**
 * @param {string} xml
 * @return {Xml.Document}
 */
Xml.XmlService.prototype.parse = function(xml) {};


/**
 * @type {Xml.XmlService}
 */
var XmlService;

/**
 * Class Attribute
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.Attribute = function() {};

/**
 * @return {string}
 */
Xml.Attribute.prototype.getName = function() {};

/**
 * @return {Xml.Namespace}
 */
Xml.Attribute.prototype.getNamespace = function() {};

/**
 * @return {string}
 */
Xml.Attribute.prototype.getValue = function() {};

/**
 * @param {string} name
 * @return {Xml.Attribute}
 */
Xml.Attribute.prototype.setName = function(name) {};

/**
 * @param {Xml.Namespace} namespace
 * @return {Xml.Attribute}
 */
Xml.Attribute.prototype.setNamespace = function(namespace) {};

/**
 * @param {string} value
 * @return {Xml.Attribute}
 */
Xml.Attribute.prototype.setValue = function(value) {};

/**
 * Class Cdata
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.Cdata = function() {};

/**
 * @param {string} text
 * @return {Xml.Text}
 */
Xml.Cdata.prototype.append = function(text) {};

/**
 * @return {Xml.Content}
 */
Xml.Cdata.prototype.detach = function() {};

/**
 * @return {Xml.Element}
 */
Xml.Cdata.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
Xml.Cdata.prototype.getText = function() {};

/**
 * @return {string}
 */
Xml.Cdata.prototype.getValue = function() {};

/**
 * @param {string} text
 * @return {Xml.Text}
 */
Xml.Cdata.prototype.setText = function(text) {};

/**
 * Class Comment
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.Comment = function() {};

/**
 * @return {Xml.Content}
 */
Xml.Comment.prototype.detach = function() {};

/**
 * @return {Xml.Element}
 */
Xml.Comment.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
Xml.Comment.prototype.getText = function() {};

/**
 * @return {string}
 */
Xml.Comment.prototype.getValue = function() {};

/**
 * @param {string} text
 * @return {Xml.Comment}
 */
Xml.Comment.prototype.setText = function(text) {};

/**
 * Class DocType
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.DocType = function() {};

/**
 * @return {Xml.Content}
 */
Xml.DocType.prototype.detach = function() {};

/**
 * @return {string}
 */
Xml.DocType.prototype.getElementName = function() {};

/**
 * @return {string}
 */
Xml.DocType.prototype.getInternalSubset = function() {};

/**
 * @return {Xml.Element}
 */
Xml.DocType.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
Xml.DocType.prototype.getPublicId = function() {};

/**
 * @return {string}
 */
Xml.DocType.prototype.getSystemId = function() {};

/**
 * @return {string}
 */
Xml.DocType.prototype.getValue = function() {};

/**
 * @param {string} name
 * @return {Xml.DocType}
 */
Xml.DocType.prototype.setElementName = function(name) {};

/**
 * @param {string} data
 * @return {Xml.DocType}
 */
Xml.DocType.prototype.setInternalSubset = function(data) {};

/**
 * @param {string} id
 * @return {Xml.DocType}
 */
Xml.DocType.prototype.setPublicId = function(id) {};

/**
 * @param {string} id
 * @return {Xml.DocType}
 */
Xml.DocType.prototype.setSystemId = function(id) {};

/**
 * Class Document
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.Document = function() {};

/**
 * @param {Xml.Content} content
 * @return {Xml.Document}
 */
Xml.Document.prototype.addContent = function(content) {};

/**
 * @param {number} index
 * @param {Xml.Content} content
 * @return {Xml.Document}
 */
Xml.Document.prototype.addContent = function(index, content) {};

/**
 * @return {Array.<Xml.Content>}
 */
Xml.Document.prototype.cloneContent = function() {};

/**
 * @return {Xml.Element}
 */
Xml.Document.prototype.detachRootElement = function() {};

/**
 * @return {Array.<Xml.Content>}
 */
Xml.Document.prototype.getAllContent = function() {};

/**
 * @param {number} index
 * @return {Xml.Content}
 */
Xml.Document.prototype.getContent = function(index) {};

/**
 * @return {number}
 */
Xml.Document.prototype.getContentSize = function() {};

/**
 * @return {Array.<Xml.Content>}
 */
Xml.Document.prototype.getDescendants = function() {};

/**
 * @return {Xml.DocType}
 */
Xml.Document.prototype.getDocType = function() {};

/**
 * @return {Xml.Element}
 */
Xml.Document.prototype.getRootElement = function() {};

/**
 * @return {boolean}
 */
Xml.Document.prototype.hasRootElement = function() {};

/**
 * @return {Array.<Xml.Content>}
 */
Xml.Document.prototype.removeContent = function() {};

/**
 * @param {Xml.Content} content
 * @return {boolean}
 */
Xml.Document.prototype.removeContent = function(content) {};

/**
 * @param {number} index
 * @return {Xml.Content}
 */
Xml.Document.prototype.removeContent = function(index) {};

/**
 * @param {Xml.DocType} docType
 * @return {Xml.Document}
 */
Xml.Document.prototype.setDocType = function(docType) {};

/**
 * @param {Xml.Element} element
 * @return {Xml.Document}
 */
Xml.Document.prototype.setRootElement = function(element) {};

/**
 * Class Element
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.Element = function() {};

/**
 * @param {Xml.Content} content
 * @return {Xml.Element}
 */
Xml.Element.prototype.addContent = function(content) {};

/**
 * @param {number} index
 * @param {Xml.Content} content
 * @return {Xml.Element}
 */
Xml.Element.prototype.addContent = function(index, content) {};

/**
 * @return {Array.<Xml.Content>}
 */
Xml.Element.prototype.cloneContent = function() {};

/**
 * @return {Xml.Content}
 */
Xml.Element.prototype.detach = function() {};

/**
 * @return {Array.<Xml.Content>}
 */
Xml.Element.prototype.getAllContent = function() {};

/**
 * @param {string} name
 * @return {Xml.Attribute}
 */
Xml.Element.prototype.getAttribute = function(name) {};

/**
 * @param {string} name
 * @param {Xml.Namespace} namespace
 * @return {Xml.Attribute}
 */
Xml.Element.prototype.getAttribute = function(name, namespace) {};

/**
 * @return {Array.<Xml.Attribute>}
 */
Xml.Element.prototype.getAttributes = function() {};

/**
 * @param {string} name
 * @return {Xml.Element}
 */
Xml.Element.prototype.getChild = function(name) {};

/**
 * @param {string} name
 * @param {Xml.Namespace} namespace
 * @return {Xml.Element}
 */
Xml.Element.prototype.getChild = function(name, namespace) {};

/**
 * @param {string} name
 * @return {string}
 */
Xml.Element.prototype.getChildText = function(name) {};

/**
 * @param {string} name
 * @param {Xml.Namespace} namespace
 * @return {string}
 */
Xml.Element.prototype.getChildText = function(name, namespace) {};

/**
 * @return {Array.<Xml.Element>}
 */
Xml.Element.prototype.getChildren = function() {};

/**
 * @param {string} name
 * @return {Array.<Xml.Element>}
 */
Xml.Element.prototype.getChildren = function(name) {};

/**
 * @param {string} name
 * @param {Xml.Namespace} namespace
 * @return {Array.<Xml.Element>}
 */
Xml.Element.prototype.getChildren = function(name, namespace) {};

/**
 * @param {number} index
 * @return {Xml.Content}
 */
Xml.Element.prototype.getContent = function(index) {};

/**
 * @return {number}
 */
Xml.Element.prototype.getContentSize = function() {};

/**
 * @return {Array.<Xml.Content>}
 */
Xml.Element.prototype.getDescendants = function() {};

/**
 * @return {Xml.Document}
 */
Xml.Element.prototype.getDocument = function() {};

/**
 * @return {string}
 */
Xml.Element.prototype.getName = function() {};

/**
 * @return {Xml.Namespace}
 */
Xml.Element.prototype.getNamespace = function() {};

/**
 * @param {string} prefix
 * @return {Xml.Namespace}
 */
Xml.Element.prototype.getNamespace = function(prefix) {};

/**
 * @return {Xml.Element}
 */
Xml.Element.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
Xml.Element.prototype.getQualifiedName = function() {};

/**
 * @return {string}
 */
Xml.Element.prototype.getText = function() {};

/**
 * @return {string}
 */
Xml.Element.prototype.getValue = function() {};

/**
 * @param {Xml.Element} other
 * @return {boolean}
 */
Xml.Element.prototype.isAncestorOf = function(other) {};

/**
 * @return {boolean}
 */
Xml.Element.prototype.isRootElement = function() {};

/**
 * @param {Xml.Attribute} attribute
 * @return {boolean}
 */
Xml.Element.prototype.removeAttribute = function(attribute) {};

/**
 * @param {string} attributeName
 * @return {boolean}
 */
Xml.Element.prototype.removeAttribute = function(attributeName) {};

/**
 * @param {string} attributeName
 * @param {Xml.Namespace} namespace
 * @return {boolean}
 */
Xml.Element.prototype.removeAttribute = function(attributeName, namespace) {};

/**
 * @return {Array.<Xml.Content>}
 */
Xml.Element.prototype.removeContent = function() {};

/**
 * @param {Xml.Content} content
 * @return {boolean}
 */
Xml.Element.prototype.removeContent = function(content) {};

/**
 * @param {number} index
 * @return {Xml.Content}
 */
Xml.Element.prototype.removeContent = function(index) {};

/**
 * @param {Xml.Attribute} attribute
 * @return {Xml.Element}
 */
Xml.Element.prototype.setAttribute = function(attribute) {};

/**
 * @param {string} name
 * @param {string} value
 * @return {Xml.Element}
 */
Xml.Element.prototype.setAttribute = function(name, value) {};

/**
 * @param {string} name
 * @param {string} value
 * @param {Xml.Namespace} namespace
 * @return {Xml.Element}
 */
Xml.Element.prototype.setAttribute = function(name, value, namespace) {};

/**
 * @param {string} name
 * @return {Xml.Element}
 */
Xml.Element.prototype.setName = function(name) {};

/**
 * @param {Xml.Namespace} namespace
 * @return {Xml.Element}
 */
Xml.Element.prototype.setNamespace = function(namespace) {};

/**
 * @param {string} text
 * @return {Xml.Element}
 */
Xml.Element.prototype.setText = function(text) {};

/**
 * Class EntityRef
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.EntityRef = function() {};

/**
 * @return {Xml.Content}
 */
Xml.EntityRef.prototype.detach = function() {};

/**
 * @return {string}
 */
Xml.EntityRef.prototype.getName = function() {};

/**
 * @return {Xml.Element}
 */
Xml.EntityRef.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
Xml.EntityRef.prototype.getPublicId = function() {};

/**
 * @return {string}
 */
Xml.EntityRef.prototype.getSystemId = function() {};

/**
 * @return {string}
 */
Xml.EntityRef.prototype.getValue = function() {};

/**
 * @param {string} name
 * @return {Xml.EntityRef}
 */
Xml.EntityRef.prototype.setName = function(name) {};

/**
 * @param {string} id
 * @return {Xml.EntityRef}
 */
Xml.EntityRef.prototype.setPublicId = function(id) {};

/**
 * @param {string} id
 * @return {Xml.EntityRef}
 */
Xml.EntityRef.prototype.setSystemId = function(id) {};

/**
 * Class Format
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.Format = function() {};

/**
 * @param {Xml.Document} document
 * @return {string}
 */
Xml.Format.prototype.format = function(document) {};

/**
 * @param {Xml.Element} element
 * @return {string}
 */
Xml.Format.prototype.format = function(element) {};

/**
 * @param {string} encoding
 * @return {Xml.Format}
 */
Xml.Format.prototype.setEncoding = function(encoding) {};

/**
 * @param {string} indent
 * @return {Xml.Format}
 */
Xml.Format.prototype.setIndent = function(indent) {};

/**
 * @param {string} separator
 * @return {Xml.Format}
 */
Xml.Format.prototype.setLineSeparator = function(separator) {};

/**
 * @param {boolean} omitDeclaration
 * @return {Xml.Format}
 */
Xml.Format.prototype.setOmitDeclaration = function(omitDeclaration) {};

/**
 * @param {boolean} omitEncoding
 * @return {Xml.Format}
 */
Xml.Format.prototype.setOmitEncoding = function(omitEncoding) {};

/**
 * Class Namespace
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.Namespace = function() {};

/**
 * @return {string}
 */
Xml.Namespace.prototype.getPrefix = function() {};

/**
 * @return {string}
 */
Xml.Namespace.prototype.getURI = function() {};

/**
 * Class ProcessingInstruction
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.ProcessingInstruction = function() {};

/**
 * @return {Xml.Content}
 */
Xml.ProcessingInstruction.prototype.detach = function() {};

/**
 * @return {string}
 */
Xml.ProcessingInstruction.prototype.getData = function() {};

/**
 * @return {Xml.Element}
 */
Xml.ProcessingInstruction.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
Xml.ProcessingInstruction.prototype.getTarget = function() {};

/**
 * @return {string}
 */
Xml.ProcessingInstruction.prototype.getValue = function() {};

/**
 * Class Text
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.Text = function() {};

/**
 * @param {string} text
 * @return {Xml.Text}
 */
Xml.Text.prototype.append = function(text) {};

/**
 * @return {Xml.Content}
 */
Xml.Text.prototype.detach = function() {};

/**
 * @return {Xml.Element}
 */
Xml.Text.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
Xml.Text.prototype.getText = function() {};

/**
 * @return {string}
 */
Xml.Text.prototype.getValue = function() {};

/**
 * @param {string} text
 * @return {Xml.Text}
 */
Xml.Text.prototype.setText = function(text) {};

/**
 * Interface Content
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.Content = function() {};

/**
 * @return {Xml.Cdata}
 */
Xml.Content.prototype.asCdata = function() {};

/**
 * @return {Xml.Comment}
 */
Xml.Content.prototype.asComment = function() {};

/**
 * @return {Xml.DocType}
 */
Xml.Content.prototype.asDocType = function() {};

/**
 * @return {Xml.Element}
 */
Xml.Content.prototype.asElement = function() {};

/**
 * @return {Xml.EntityRef}
 */
Xml.Content.prototype.asEntityRef = function() {};

/**
 * @return {Xml.ProcessingInstruction}
 */
Xml.Content.prototype.asProcessingInstruction = function() {};

/**
 * @return {Xml.Text}
 */
Xml.Content.prototype.asText = function() {};

/**
 * @return {Xml.Content}
 */
Xml.Content.prototype.detach = function() {};

/**
 * @return {Xml.Element}
 */
Xml.Content.prototype.getParentElement = function() {};

/**
 * @return {Xml.ContentType}
 */
Xml.Content.prototype.getType = function() {};

/**
 * @return {string}
 */
Xml.Content.prototype.getValue = function() {};

/**
 * Enum ContentType
 * Last updated July 11, 2013.
 * @constructor
 */
Xml.ContentType = function() {};

/**
 * @type {Xml.ContentType}
 */
Xml.ContentType.prototype.CDATA;

/**
 * @type {Xml.ContentType}
 */
Xml.ContentType.prototype.COMMENT;

/**
 * @type {Xml.ContentType}
 */
Xml.ContentType.prototype.DOCTYPE;

/**
 * @type {Xml.ContentType}
 */
Xml.ContentType.prototype.ELEMENT;

/**
 * @type {Xml.ContentType}
 */
Xml.ContentType.prototype.ENTITYREF;

/**
 * @type {Xml.ContentType}
 */
Xml.ContentType.prototype.PROCESSINGINSTRUCTION;

/**
 * @type {Xml.ContentType}
 */
Xml.ContentType.prototype.TEXT;
