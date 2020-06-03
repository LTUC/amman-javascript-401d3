'use strict';

const foodSchema = require('./food-schema');
const Model = require('./model');

class Food extends Model {
   constructor(schema) {
       super(schema);
   }
}

module.exports = new Food(foodSchema);