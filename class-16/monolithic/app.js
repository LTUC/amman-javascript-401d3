'use strict';

const events = require('events');

const eventsEmmiter = new events();

// What if we added the event emitter before the listerner? 
// the listener will not work if it happened after the event.
// eventsEmmiter.emit('save', {id:1} );

// Add some Listeners
eventsEmmiter.on('save', handleSave)
eventsEmmiter.on('delete', payload => logIt('delete', payload))
eventsEmmiter.on('update', payload => logIt('update', payload))
eventsEmmiter.on('another-update', payload => logIt('another-update', payload));
// Emit some events
eventsEmmiter.emit('save', {id:1} ); /*shouting out this event to the world*/
// eventsEmmiter.emit('save', {id:1} );
// eventsEmmiter.emit('save', {id:1} );
// eventsEmmiter.emit('save', {id:1} );
eventsEmmiter.emit('delete', {id:1});
eventsEmmiter.emit('update', {id:1});

function handleSave(payload) {
    console.log(`Record ${payload.id} was saved`);
    eventsEmmiter.emit('another-update', {id: payload.id });
}

function logIt(event, payload) {
    let time = new Date();
    console.log({event, time, payload});
}