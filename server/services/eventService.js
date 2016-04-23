'use strict';

const Event = require('../models/event');


const getAll = function (callback) {
    callback = (typeof callback == 'function') ? callback : function () {};

    Event.find({}, {"members": 0}, callback);
};


const getEvent = function (uuid, callback) {
    callback = (typeof callback == 'function') ? callback : function () {};

    Event.findById(uuid, callback);
};


module.exports.getAll = getAll;
module.exports.getEvent = getEvent;