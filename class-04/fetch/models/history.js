'use strict';

const mongoose = require('mongoose');

const history = mongoose.Schema({
    url: { type: String, required: true},
    mehtod: { type: String, uppercase: true, enum: ['GET', 'POST', 'PUT', 'DELETE']},
    body: { type: String }
});

module.exports = mongoose.model('history', history);