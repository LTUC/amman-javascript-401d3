'use strict';

const events = require('./events');

events.on('delete', payload => logIt('delete', payload))
events.on('update', payload => logIt('update', payload))
events.on('another-update', payload => logIt('another-update', payload));
events.on('save', payload => logIt('---->>>> save-from-logger-file', payload ) )
function logIt(event, payload) {
    let time = new Date();
    console.log({event, time, payload});
}
