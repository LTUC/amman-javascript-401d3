'use strict';

const Model = require('../model');
const schema = require('./food-schema');

class Food extends Model {
    constructor() {
        super(schema);
    }
}

module.exports = new Food();

// require it, then make instance new Food();
// beside not doing new, use the methods directly + Singlton 