'use strict';

const net = require('net');

const PORT = process.env.PORT || 3000;

const server = net.createServer(); 
server.listen(PORT, ()=> console.log(`Server is up on ${PORT}`));

let socketPool = {};

// event of connecting to the server
server.on('connection', (socket)=> {

    // create a unique ID for the connection of each client
    const id = `Socket-${Math.random()}`; // uuid package
    // add the socket objec to the SocketPool Object
    socketPool[id] = socket;
    // add subscriber to recieving data on the socket 
    socket.on('data', (buffer)=> dispatchEvent(buffer));
    
    socket.on('error', (e) => {console.log("SOCKET ERR", e)});

    socket.on('end', (end) => {
        console.log("connection ended", end);
        delete socketPool[id];
    });
});

server.on('error', (e)=> {
    console.log('SERVER ERROR', e);
});

function dispatchEvent(buffer) {
    // I am recieving the msg, Buffer (Binary), 
    // parse it to string
    let message = JSON.parse(buffer.toString().trim());
    // send a msg : broadcast a msg to all clients.
    broadcast(message);
}

function broadcast(msg) {
    // Send the msg to all clients connected to you.
    let payload = JSON.stringify(msg);
    // We are sending the msg to all sockets by looping through them 
    // and using the socket object that we saved previously.
    for (let socket in socketPool) {
        socketPool[socket].write(payload);
    }
}