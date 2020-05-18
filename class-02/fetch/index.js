#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

const http = new HTTP();
const options = new Input();
http.fetch(options);
