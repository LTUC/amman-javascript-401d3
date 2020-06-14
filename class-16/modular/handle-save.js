'use strict';

const events = require('./events');

events.on('save', handleSave);

function handleSave(payload) {
    console.log(`Record ${payload.id} was saved`);
    events.emit('another-update', {id: 33333 });
}