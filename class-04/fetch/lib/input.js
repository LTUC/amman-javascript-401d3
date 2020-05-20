'use strict';

const isUrl = require('is-url');
const minimist = require('minimist');
const Validator = require('./validator');

class Input {
    
    constructor() {
        const args = minimist(process.argv.slice(2));
        this.method = this.getMethod(args.m);
        this.url = this.getUrl(args.u);
    }

    getUrl(url = '') {
        // TODO: allow localhost 
        return isUrl(url) ? url : undefined;
    };

    getMethod(method = '') {
        let validMethods = /get|post|put|delete/i;
        return validMethods.test(method) ? method : 'GET';
    };

    //TODO: add getBody
    // -b is the body.
    getBody(body) {
        try {
            return JSON.parse(body);
        } catch(e) {
            return body;
        }
    }

    // isValid() {
    //     // TODO: Create a validator in TDD mode then replace this 
    //     return this.url && this.method; 
    // }

    valid() {
        const schema = {
            url : {type : 'string', required: true},
            method: {type: 'string' , required: true}
        }
        const validator = new Validator(schema);
        let result =  validator.isValid(this);
        console.log(result);
        return result;
    }

}

module.exports = Input;
