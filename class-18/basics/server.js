'use strict';

const io = require('socket.io')(3000);

// client connects to server
io.on('connection', (socket) => {
    console.log('CONNECTED', socket.id);

    // custom events socket.on('')
    socket.on('sunrise', (payload)=> {
        console.log("server recieved sunrise!")
        io.emit('sunrise' ,payload);
    });
});


const weather = io.of('/weather');
weather.on('connection', (socket)=>{
    socket.on('snow', (payload)=> {
        console.log("SERVER recieved snow and will send it to namespace")
        weather.emit('snow', payload);
    })
});

// rooms
const emergency = io.of('/emergency');
emergency.on('connection', (socket)=>{
    
    socket.on('join', room=> {
        console.log('joined', room);
        socket.join(room);
    });
    
    socket.on('fire', (payload)=> {
        // emergency
        console.log(" fire payload:: ", payload);
        emergency.to('fireDepartment').emit('fire', payload);
    });

    socket.on('crime', (payload)=> {
        // emergency
        console.log("crime payload:: ", payload);
        emergency.to('policeDepartment').emit('crime', payload);
    })
});