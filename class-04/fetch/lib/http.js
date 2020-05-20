'use strict';
const superagent = require('superagent');
const History = require('../models/history');

class Http {
    constructor() {

    }

    fetch(opts) {
        if (opts) {
            return superagent(opts.method, opts.url)
                .then(()=> this.save(opts))
        }
    }

    async save(opts) {
        //TODO: history Collection, replace new with history.create
        let record = new History(opts);
        let saved = await record.save();
    }
};

module.exports = Http;