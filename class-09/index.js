'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server');
const MONGODB_URI = 'mongodb+srv://admin-test:test123@cluster0-fpo2a.mongodb.net/test-2';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};

mongoose.connect(MONGODB_URI, options);

server.start(4000);

// use env 