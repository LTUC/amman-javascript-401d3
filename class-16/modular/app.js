'use strict';

// everything will fall in here
const events = require('./events');

// 
require('./logger');
require('./handle-save');

events.emit('save', {id: 12});

///
// require('./handle-save');
// require('./logger');
// events.emit('save', {id: 12});

////
// require('./handle-save');
// events.emit('save', {id: 12});
// require('./logger');

