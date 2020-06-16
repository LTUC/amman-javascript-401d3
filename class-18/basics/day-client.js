'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

socket.on('sunrise', (payload)=> {
    console.log("ready to Wake up!")
});