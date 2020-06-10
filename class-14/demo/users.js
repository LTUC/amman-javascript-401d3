'use strict';
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'mysecrettokenkey'; // place this in your .env

let db = {

};

let users = {};

let roles = {
    user: ['read'],
    editor: ['read', 'update', 'create'],
    admin: ['read', 'update', 'create', 'delete']
};

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
            username: 'test@test.com', 
            role: 'admin'
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
    console.log("@@@@@@@ user :::: ", user)
    let token = jwt.sign({
        username: user.username,
        capabilities: roles[user.role]
    }, SECRET );
    return token;
}
users.list = ()=> db;

users.verifyToken = function (token) {
    return jwt.verify(token, SECRET, function(err, decoded) {
        if (err) {
            console.log("err>>> ", err)
            return Promise.reject(err);
        }
        console.log("decoded >>>> ",decoded); // {username: usernameValue, ...}
        let username = decoded['username']; // decoded.username
        if (db[username]) {
            return Promise.resolve(decoded);
        } 
        return Promise.reject();
    });
}


module.exports = users;