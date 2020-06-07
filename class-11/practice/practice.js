'use strict';

let base64 = require('base-64');
let bcrypt = require('bcrypt');

console.log('-----------Base64-------------');
let string = 'user:developersAssemblyPassword';
// Basic Auth: userpass 

let encoded = base64.encode(string);
let decoded = base64.decode(encoded);

// console.log({string});
// console.log({encoded});
// console.log({decoded});


console.log('-----------End of Base64-------------');
// to save passwords in DB:
let password = 'pa$$woRd123';
let complexity = 10;

async function encrypt(pw) {
    let hashed = await bcrypt.hash(pw, complexity);

    console.log({pw});
    console.log({hashed});

    let p1 = '$2b$10$PakLX7pPj9unDS5PHXI08.xH9kj1YZmgmfKsReRBJEYh0SpUnS6om'; // output from hash
    let p2 = '$2b$10$PakLZ7pPj9unDS5PHXI08.xH9kj1YZmgmfKsReRBJEYh0SpUnS6om'; // changed manually 
    let p3 = '$2b$10$SjKvixEiMCK/UttvYVVKd.u1mDGFNu2zQSy8ffV/WPfHJTEXGC4Ei';// another output from hash

    let isValidHashed = await bcrypt.compare(pw, hashed);
    let isValidP1 = await bcrypt.compare(pw, p1);
    let isValidP2 = await bcrypt.compare(pw, p2);
    let isValidP3 = await bcrypt.compare(pw, p3);

    console.log({isValidHashed});
    console.log({isValidP1});
    console.log({isValidP2});
    console.log({isValidP3});

    
}

encrypt(password);
