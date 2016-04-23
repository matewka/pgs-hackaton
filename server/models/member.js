'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    email: {type: String, required: true, index: {unique: true}},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    present: {type: Boolean, default: false},
    gifted: {type: Boolean, default: false}
});

const MemberModel = mongoose.model('Member', memberSchema);

module.exports = MemberModel;
module.exports.Schema = memberSchema;