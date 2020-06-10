'use strict';

const users = require('./users');

module.exports = (req, res, next) => {

    if (!req.headers.authorization) {
        next('User is not loggedin');
        return;
    }

    // Bearer tokenvalue
    console.log("req.headers.authorization >>>> ",req.headers.authorization)
    let bearerToken = req.headers.authorization.split(' ').pop();

    users.verifyToken(bearerToken)
        .then(decodedUserObject => {
            req.user = decodedUserObject;
            next();
        }).catch(err=> next('Protected: Invalid User Token'))
    
};