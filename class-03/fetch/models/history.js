'use strict';

const mongoose = require('mongoose'); // npm Package

const history = mongoose.Schema({
    url: { type: String, required: true},
    mehtod: { type: String, uppercase: true, enum: ['GET', 'POST', 'PUT', 'DELETE']}
    // body  + header
});

module.exports = mongoose.model('history', history);