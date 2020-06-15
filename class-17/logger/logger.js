'use strict';

const net = require('net');

const client = new net.Socket();

// connect to server.js using port + host(ip-address)
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

client.connect(PORT, HOST, ()=> {console.log('logger got connected')});

client.on('data', function(data) {
    let event = JSON.parse(data); // {event: event, paypload: payload}
    console.log(new Date().toUTCString(), event.event, event.payload);
});

client.on('close', function() {
    console.log('Logger Connection got closed');
});