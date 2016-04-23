'use strict';

const mongoose = require('mongoose');
const MemberModel = require('./member');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {type: String, required: true},
    date: {type: Date},
    members : [MemberModel.Schema]
});

const EventModel = mongoose.model('Event', eventSchema);

module.exports = EventModel;