#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');

const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

const DB_URI = 'mongodb://localhost:27017/fetch';

console.log("trying to connect ---> ")
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log(" ------connected ---> ")

const http = new HTTP();
const options = new Input();

if (options.isValid()) {
    http.fetch(options)
        .then(mongoose.disconnect);
} else {
    help();
}

function help(){
    console.log( ` api USAGE -m <method> -u <url> ..bodyheader` );
    process.exit();
}

