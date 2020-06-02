'use strict';

const express = require('express');
const router = express.Router();

// require food model  , use it in my router fnts.
const food = require('../models/food/food-model');

router.get('/food', getFood);
router.post('/food', postFood);
router.delete('/food/:id', deleteFood);

function getFood(req, res, next) {
    // CRUD operation
    food.get()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}

function postFood(req,res, next ) {
    console.log("I am inisde postFood route !@@@@@@@@")
    // CRUD operation
    food.post(req.body)
        .then(data => {
            res.status(201).json(data); // {_id: monogid, }
        }).catch(next);
}

function deleteFood(req,res, next) {
    // CRUD operation
    console.log("----->>>> testing delete route ")
    food.delete(req.params.id)
        .then(data => {
            res.status(200).json(data);
        }).catch(next);
}

module.exports = router;