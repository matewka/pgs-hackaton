'use strict';
const Event = require('../models/event');
const Member = require('../models/member');

const members = require('./members.mock.json');

let mocks = function () {

  let mockEvent = new Event({name: "Przykładowy event JS", date: Date.now(), members: members});
  let eventId = 0;

  Event.find((err, o) => {
    if (err) {
      return console.error(err);
    }
    if (!o || o.length === 0) {
      console.log('Mocks: No events found');
      mockEvent.save((er)=> {
        if (er) {
          console.error(er);
        } else {
          console.log('Mocks: Added event');
          Event.find((e, a)=> {
            if (e) return console.error(e);
            eventId = a[0]._id;
            console.log('Mocks: Event ID is: ' + eventId);
          });
        }
      });
    } else {
      console.log('Mocks: Event exists');
      eventId = o[0]._id;
      if (!o[0].members || !o[0].members.length) {
        console.log('Mocks: Updating members only');
        Event.update({_id: eventId}, {members: members}, {}, (er, r)=> {
          console.log(er);
          console.log(r);
        });
      }
    }
  });

};

module.exports = mocks;
