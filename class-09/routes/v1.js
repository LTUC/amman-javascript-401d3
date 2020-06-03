'use strict';

const express = require('express');
const router = express.Router();

const food = require('../models/food-model');
const books = require('../models/books-model');

/* TODO : 
    move this to middleware folder
    create a folder for each model+schema : in this case food folder and books folder
    figure out a way to require the model file in a dynamic way instead of requiring them one by one.
*/

// How are we going to get the right model? (acts like a middleware)
function getModel(req, res, next) {
    let model = req.params.model; // this will be food, books, whatever is after api/v1/
    switch(model) {
        case "food":
            req.model = food;
            next();
            return;
        case "books":
            req.model = books;
            next();
            return;
        default:
            next("Invalid Model");
            return;
    }
}
// use router.param to dynamically load the suitable model.
router.param('model', getModel);

// generic routes
// api/v1/food/11
// api/v1/book
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost )
router.get('/api/v1/:model/:id',handleGetOne);

function handleGetAll(req, res, next) {
    req.model.get()
        .then(result => {
            let count = result.length;
            res.json({count, result}); // {count: count, result:result }
        }).catch(next);
}

function handlePost(req, res, next) {
    req.model
        .post(req.body)
        .then(result => res.json(result))
        .catch(next);
}

function handleGetOne(req, res, next) {
    let id = req.params.id;
    req.model
        .get(id)
        .then(record => res.json(record))
        .catch(next);
}

module.exports = router;