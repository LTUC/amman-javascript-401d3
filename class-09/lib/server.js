'use strict';

// TODO: .env file 
const express = require('express');
const morgan = require('morgan');
const paramsRouter = require('../routes/params');
const v1Router = require('../routes/v1');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(paramsRouter);
app.use(v1Router);

//  404 handler , err handle 500


module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, ()=> console.log(`Listening on ${PORT}` ))
    }
}