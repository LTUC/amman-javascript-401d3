'use strict';
const superagent = require('superagent');
const History = require('../models/history');

class Http {
    constructor() {

    }

    fetch(opts) {
        if (opts) {
            console.log("@@@@@@ ", opts)
        //    superagent.get(api) ;
        //    superagent('get', api)
            return superagent(opts.method, opts.url)
                .then(()=> this.save(opts))
        } else {
            console.log("inside ELSE!! <<<<< ")
        }
    }

    async save(opts) {
        // saving to my DB= mongo : ORM= mongoose
        // use schema ... obj = new ObjectSchema(data) ,, ob.save();
        let record = new History(opts);
        let saved = await record.save();
        let allHistory = await History.find({});
       
        console.log({allHistory : allHistory})
        console.log({allHistory});


        // do select all 

    }
};

module.exports = Http;