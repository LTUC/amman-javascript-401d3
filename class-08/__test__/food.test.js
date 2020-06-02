'use strict';
const supergoose = require('@code-fellows/supergoose');

const food = require('../models/food/food-model');

let testObj = {name: 'test-apples', calories: 100, type: 'FRUIT'};

describe('Food Model', () =>{
    it('can post() a food', ()=> {
        return food.post(testObj)
            .then(record => {
                Object.keys(testObj).forEach(key=> {
                    expect(record[key]).toEqual(testObj[key]);
                })
            })
    });

    it('can get() food', ()=> {
        return food.get()
            .then(results => {
                Object.keys(testObj).forEach(key=> {
                    expect(results[0][key]).toEqual(testObj[key]);
                });
            })
    });
});

