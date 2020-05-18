'use strict';

const isUrl = require('is-url');
const minimist = require('minimist');

class Input {
    
    constructor() {
        const args = minimist(process.argv.slice(2));
        this.method = this.getMethod(args.m);
        this.url = this.getUrl(args.u);
    }

    getUrl(url = '') {
        return isUrl(url) ? url : undefined;
    };
  
    getMethod(method = '') {
        let validMethods = /get|post|put|delete/i;
        return validMethods.test(method) ? method : 'GET';
    };
}

module.exports = Input;
