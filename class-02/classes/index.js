'use strict';

const Constr = require('./constructor.js');
const DogClass = require('./classes'); 
// make instance 
const dogExample = new Constr('dog1');
// parent name property, child age property.
const dogClassExample = new DogClass('dog2', 10); 

dogExample.walk();
dogClassExample.walk();
dogClassExample.run();

console.log("age ... ", dogClassExample);

