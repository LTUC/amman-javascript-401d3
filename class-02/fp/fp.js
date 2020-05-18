'use strict';

// Pure function: the fuction is not effected or dependant on outside variables
// does not have side effects.
function pureMultiply(a, b) {
    return a * b;
}

function impureMultiply(a, b) {
    console.log("hello"); // side effect;
    return a * b;
}

const count = 10;
function impureMultiply2(a, b) {
    return a * b * count;
}

function canRide(height, heightRequirment) {
    return height >= heightRequirment;
}

// Pass By Reference, Pass by Value
let arr = [1, 2, 3, 4, 5]; // 1, 4, 9, 16, 25
function impureSquares(nums) {
    for(let i= 0; i< nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }
    return nums;
}
// console.log("squares(arr) : ", squares(arr));
// console.log("origional arr", arr);
function squares([...nums]) {
    for(let i= 0; i< nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }
    return nums;
}
console.log("squares(arr) : ", squares(arr));
console.log("origional arr", arr);

//High Order Function and function as param
let hi = function(name) {
    console.log('Hi', name);
}

function sayHi(person, callback) {
    return function() {
        callback(person); // Student
    }
}

let greetHello = sayHi('Student', hi);
greetHello();