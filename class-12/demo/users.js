'use strict';
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'mysecrettokenkey'; // place this in your .env

let db = {

};

let users = {};

// TODO For lab 11 : read this link : https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
// 1- schema.methods.authenticateBasic .. follow the demo logic.

// save the password as hashed.
// 2- Mongoose : hooks pre hook. : https://mongoosejs.com/docs/middleware.html#pre

// bcrypt usage so we are doing async function.
users.save = async function(record) {
    // signup : username + password
    if (!db[record.username]) {
        // replace the password text with an encrypted password
        record.password  = await bcrypt.hash(record.password, 5);
        db[record.username] = record;
        return record;
        /* 
        'test@test.com' : {
            password: 'xxasd3sRRTdff==',
            username: 'test@test.com'
        }
        */
    }
    return Promise.reject();
}

// compare the password with the encrypted one
users.authenticateBasic = async function(username, password) {
    let valid = await bcrypt.compare(password, db[username].password);
    return valid ? db[username] : Promise.reject();
}

users.generateToken = function (user) {
    let token = jwt.sign({username: user.username}, SECRET );
    return token;
}
users.list = ()=> db;


module.exports = users;