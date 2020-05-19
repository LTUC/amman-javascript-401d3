'use strict';

const mongoose = require('mongoose');

// make a blueprint for our data and the type of data for each prop.
const food = mongoose.Schema({
    name: {type: String, required: true},
    calories: {type: Number, required: true},
    type: {type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'BREAD']}
});

// convention is to have the name of the const as the model name
module.exports = mongoose.model('food', food);