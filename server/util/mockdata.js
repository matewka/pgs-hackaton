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

//mockMember.save((err)=> {
//  if (err) {
//    console.error(err);
//  } else {
//    console.log('added member');
//    Member.find((e, a)=> {
//      if (err) return console.error(e);
//      console.log(a);
//    });
//  }
//});
//let memb;
//Member.find((e, a)=> {
//  if (e) return console.error(e);
//  memb = a[0];
//  Event.update({_id: eventId}, {members: [memb]}, {}, (er, r)=> {
//    console.log(er);
//
//  });
//});

};

module.exports = mocks;
