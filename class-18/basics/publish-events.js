'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.emit('sunrise');

// case of namespaces
// couple this with weather.js
const weatherChannel = io.connect('http://localhost:3000/weather');
weatherChannel.emit('snow');

const emergencyChannel = io.connect('http://localhost:3000/emergency');
emergencyChannel.emit('fire', 'sth is on Fire!!');

emergencyChannel.emit('crime', 'Broke in my house!!');


