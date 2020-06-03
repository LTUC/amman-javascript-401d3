'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server');
const MONGODB_URI = 'mongodb://localhost:27017/class-09';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};

mongoose.connect(MONGODB_URI, options);

server.start(4000);

// use env 