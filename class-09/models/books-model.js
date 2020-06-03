'use strict';
const Model = require('./model');
const booksSchema = require('./books-schema');

class Books extends Model {
    constructor(schema) {
        super(schema);
    }
}

module.exports = new Books(booksSchema);

