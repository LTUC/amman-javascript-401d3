'use strict';

const express = require('express');
const router = express.Router();

function getZip(req, res, next) {
    // random zip number, it starts with zero
    req.body.zip = Math.floor(Math.random() * 10000).toString().padStart(5, 0);
    next();
}

router.param('city', getZip);

// localhost:4000/places/amman

router.get('/places/amman', (req, res, next)=> {
    res.send(`Zip:::: ${req.body.zip} `); //Zip:::: undefined
});

router.get('/places/:city', (req, res, next)=> {
    res.send(`Zip:::: ${req.body.zip} `); // Zip:::: 00391
});

router.get('/xxx/yyyy/:city', (req, res, next)=> {
    res.send(`Zip:::: ${req.body.zip} `) // // Zip:::: 00452
});

module.exports = router;