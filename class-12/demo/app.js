'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

const users = require('./users');

const basicAuth = require('./basic-auth-middleware');
const oath = require('./oauth-middleware');

app.use(express.static('./public'));
app.use(express.json()); // body
app.use(morgan('dev'));


app.post('/signup', (req, res)=> {
    //sign up route if we have the user, return failure, else return generated token.
    let user = req.body;
    users.save(user).then(result => {
        // generate a token and return it.
        let token = users.generateToken(result);
        res.status(200).send(token);
    }).catch(err=> {
        console.log("ERR!!")
        res.status(403).send('Invalid Signup! email is taken');
    });
});


app.get('/oauth', oath, (req, res)=> {
    res.status(200).send(req.token);
});


// check this username if the password submitted matches the encrypted one we have saved in our db
app.post('/signin', basicAuth, (req, res)=> {
    res.status(200).send(req.token); // return token 
});




app.get('/list', /* basicAuth, */ (req, res)=> {
    res.status(200).send(users.list());
});



app.listen(3000, ()=> console.log("Running on 3000"));

