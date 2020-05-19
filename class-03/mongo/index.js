'use strict';
// 1) pulling mongoose
const mongoose = require('mongoose');
// 2) bring in Food Schema 
const Food = require('./models/food-schema');

// connecting to my DB 
const MONGOOSE_URI = 'mongodb://localhost:27017/food';
// mongoose.connect() // URI
console.log("Hello we are in index.js")
// mongo docs says to stick to this
mongoose.connect(MONGOOSE_URI, {userNewUrlParse: true, useUnifiedTopology: true} )
// async await
// request data from an API, 
// 1- callbacks :
// getData(callback) {
//      // hitting the API code(req, res) {
                // callback()
        // })
        // perform some steps  
//}
// .then() , .catch() Promises.then() 
// await apiFunction()--> go to the server and take 5 sec
// code --> 
const doDataStuff = async()=> {
    // console.log("do stuff !!!")
    let carrot = {
        name: 'Apple',
        calories: 30,
        type: 'VEGETABLE'
    }
    let food = new Food(carrot); 

    await food.save();
    // console.log("food  ::::: ",food);
     // { _id: 5ec3b32888e06c1c421e01cd,
    //     name: 'Carrots',
    //     calories: 30,
    //     type: 'VEGETABLE'
    // }
    // console.log('FOOD Created');

    let oneFood = await Food.findById(food.id); // random id
    // console.log("oneFood ::: ",oneFood)
    // { _id: 5ec3b38880eab01cd930ffad,
    //     name: 'Carrots',
    //     calories: 30,
    //     type: 'VEGETABLE',
    //     __v: 0
    // }
    
    let foods = await Food.find({name: 'Apple'}); // select foods with apple name
    console.log("foods >>>>>> ",foods)
    // [ { _id: 5ec3b3f160df6a1d94c9a481,
    //     name: 'Apple',
    //     calories: 30,
    //     type: 'VEGETABLE',
    //     __v: 0 },
    //   { _id: 5ec3b3fe4bb7001dae58e17c,
    //     name: 'Apple',
    //     calories: 30,
    //     type: 'VEGETABLE',
    //     __v: 0 },
    //   { _id: 5ec3b40ca36a091dd8ef297e,
    //     name: 'Apple',
    //     calories: 30,
    //     type: 'VEGETABLE',
    //     __v: 0 } ]
    
    let allFoods = await Food.find({}); // select all 
   // prints everything

    // mongoose.disconnect();
};

doDataStuff();
