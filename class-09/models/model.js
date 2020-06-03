'use strict';

class Model {

    constructor(schema) {
        this.schema = schema;
    }

    get(_id) {
        if (_id) {
            return this.schema.findById(_id);
        } else {
            return this.schema.find({});
        }
    }

    post(record) {
        let newRecord = new this.schema(record);
        return newRecord.save();
    }
    // add the rest of the CRUD methods
}

module.exports = Model;