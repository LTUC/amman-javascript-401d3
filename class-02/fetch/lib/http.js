'use strict';

class Http {
    constructor() {

    }

    fetch(opts) {
        if (opts) {
            console.log(`Fetching ${opts.url}`);
            console.log(`Fetching ${opts.method}`);
        }
    }
};

module.exports = Http;