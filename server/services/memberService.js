'use strict';

const Event = require('../models/event');
const Member = require('../models/member');

const getByCode = function(code, callback) {

  Event.findOne({'members.code': code}, {'members.$': 1}, (err, event) => {
    if (err)
      callback(err);

    if (event && event.members && event.length) {
      let member = event.members[0];
      return callback(null, member);
    }

    callback(null, null);
  });
};


module.exports.getByCode = getByCode;