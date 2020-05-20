'use strict';
// const mongoose = require('mongoose');
// const MONGOOSE_URI = 'mongodb://localhost:27017/food';
// mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

require('@code-fellows/supergoose');

const Food = require('../models/food-collection');
const food = new Food();

describe('Food Model', ()=> {
    it('can create() a new food item ', ()=> {
        let obj = {name: 'test food 1', calories: 99, type: 'FRUIT'};
        return food.create(obj)
            .then(record => {
                Object.keys(obj).forEach(key => {
                    expect(record[key]).toEqual(obj[key]);
                });
             });
    }) ;

    it('can get() a food item()', ()=> {
        let obj = {name: 'test food 2', calories: 99, type: 'FRUIT'};
        return food.create(obj)
            .then(record => {
                return food.get(record._id)
                    .then(foodItem => {
                        Object.keys(obj).forEach(key=> {
                            expect(foodItem[key]).toEqual(obj[key]);
                        })
                    });
            });

    });
});

