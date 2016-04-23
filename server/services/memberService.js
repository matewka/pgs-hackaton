'use strict';

const Event = require('../models/event');
const Member = require('../models/member');


const getByCode = function (code, callback) {

  Event.findOne({'members.code': code}, {'members.$': 1}, (err, event) => {
    if (err)
      callback(err);

    if (event && event.members && event.members.length) {
      let member = event.members[0];
      return callback(null, member, event);
    }

    callback(null, null);
  });
};


const updateRegistered = function (code, registered, callback) {

  Event.update({'members.code': code}, {
    "$set": {
      "members.$.registered": registered
    }
  }, (err) => {
    if (err)
      callback(err);

    getByCode(code, callback);
  });
};


const createNew = function (event_id, memberModel, callback) {

  Event.findOne(event_id, (err, event) => {

    if (err) {
      callback(err);
    }

    if (!event) {
      callback({error: 'Event not found'});
    }

    let member = new Member(memberModel);
    event.members.push(member);
    event.save(callback);
  });
};


module.exports.getByCode = getByCode;
module.exports.createNew = createNew;
module.exports.updateRegistered = updateRegistered;