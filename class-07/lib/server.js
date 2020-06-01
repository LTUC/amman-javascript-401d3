'use strict';

const express = require('express');
const logRequest = require('./logger.js');

const app = express();

// Global MiddleWare 
app.use(express.json());

//Global Middleware Logger
app.use(logRequest);

// function logRequest(req, res, next) {
//     console.log('__REQUEST__', req.method, req.path);
//     next();
// }


app.get('/fruit', (req, res) => {
    // http://localhost:3000/fruit?type=apple
    console.log(req.query); // {type: 'apple'}
    let output = {
       type: req.query.type
    }
    res.status(200).json(output)
});

// ORDER MATTERS 

// fruit/apple route
// app.get('/fruit/apple', (req, res) => {
//   res.status(200).send("I Love Apples!");
// });

app.get('/fruit/:type', (req, res)=> {
    // http://localhost:3000/fruit/apple
    // http://localhost:3000/fruit/banana
    console.log("req.query: ", req.query); // {} no query strings in this request
    console.log("req.params: ", req.params); // { type: 'apple' } request params
    let output = {
        type: req.params.type
     }
    res.status(200).json(output);
});

app.get('/number', square(10), (req, res)=> {
   console.log("req.number : ", req.number)
    let output = {
        number : req.number
    };
    res.status(200).json(output);
});


app.get('/bad', (req, res)=> {
    res.status(500).json({});
 });

app.get('/bad-number', square('stringggg'), (req, res)=> {
    console.log("req.number : ", req.number)
     let output = {
         number : req.number
     };
     res.status(200).json(output);
 });

function square(n) {
    return (req, res, next) => {
        if (typeof n !== 'number') {
            // error handling 
            next('Not a number !!');
        } else {
            // add a property to my request object
            req.number = n * n ;
            next();
        }
    }
}

app.get('/staticnumber', staticSquare, (req, res)=> {
    console.log("req.static_number : ", req.static_number)
     let output = {
        static_number : req.static_number
     };
     res.status(200).json(output);
 });


let db = [];
app.post('/api/food', (req, res) => {
    console.log("req.body: ", req.body);
    let name = req.body.name;
    let record = {
        name: name
    }
    record.id = db.length + 1;
    db.push(record);
    res.json(record);
});


function staticSquare(req, res, next) {
    
    console.log("MIDDLEWARE::: req User Query String>> ", req.query)
    if (req.query.passedquery > 5000) {
        req.static_number = 0 ;
    } else {
         // add a property to my request object
        req.static_number = req.query.passedquery ;
    }
   
    next();
}


// Global MiddleWares
app.use('*', notFoundHandler); // 404
app.use(errorHandler); //500



// notFoundHandler: 404 : client error
function notFoundHandler(req, res, next) {
    res.status(404);
    res.send({err: 'not found'})
}


// error Handler : 500 : Server Error
function errorHandler(err, req, res, next) {
    res.status(500);
    res.json({err: err});
}

module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
    }
}