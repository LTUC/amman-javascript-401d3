'use strict';
// Animal class
class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('Walking ... Inside Class ');
    }
} 

class Dog extends Animal{
   
    /// age = 10 ; X does not work
    constructor(name, age) {
        super(name);
        this.name = name;
        this.age = age + 50;
    }
    
    speak() {
        console.log('Speaking .....');
    }

    run() {
        console.log("calling run will call super ----->");
        super.walk();
    }
}

module.exports = Dog;