'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// my own modules
const foodRouter = require('../routes/food');
const app = express();
//Global Middlewares 
// Express middleware
app.use(express.json());
// 3rd party middleware
app.use(cors());
app.use(morgan('dev'));

// all of routes code 
// add foodRouter
console.log("here !!!! ")
app.use('/api/v1', foodRouter);
// get /api/v1/food
// post /api/v1/food
// delete /api/v1/food/:id

module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, ()=> {console.log(`Listening on ${PORT}`)})
    }
};
