'use strict';

const mongoose = require('mongoose');
// const Food = require('./models/food-schema');
const Food = require('./models/food-collection');
const food = new Food();

const MONGOOSE_URI = 'mongodb://localhost:27017/food';
mongoose.connect(MONGOOSE_URI, {userNewUrlParse: true, useUnifiedTopology: true} )

const doDataStuff = async()=> {
    let carrot = {
        name: 'Carrot',
        calories: 30,
        type: 'VEGETABLE'
    }
    // let food = new Food(carrot); 
    // await food.save();
    let newFood = await food.create(carrot);
    console.log("newFood >>>> ",newFood)
    // let oneFood = await Food.findById(food.id);
    let oneFood = await food.get(newFood.id);
    console.log("oneFood > ",oneFood)
    // let foods = await Food.find({name: 'Apple'});
    let id = oneFood.id;
    console.log("delete oneFood.id > ",id)
    await food.delete(id);
    console.log("get after delete : ")
    let oneFoodAfterDelete = await food.get(id);
    console.log("oneFoodAfterDelete > ",oneFoodAfterDelete)
    // let allFoods = await Food.find({});
    
    // let foods = await food.get();
    // console.log({foods}) // {foods} => {foods: foods};
    // console.log("allFoods : ",allFoods)

    mongoose.disconnect();
};

doDataStuff();