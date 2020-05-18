'use strict';

const Animal = function(name) {
    this.name = name;
};

Animal.prototype.walk = ()=> {
    console.log("walking .... inside Constructor");
}

const Dog = function(name) {
    // this is the Dog scope
    Animal.call(this, name); // access to Animal (parent);
    // this.name = name;
}
// Dog is both Dog and Animal
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = () => {
    console.log('speaking ....');
}
// function x() {
//     // this = x scope
//     let self = this;
//     this.prop = 10;
//     function y() {
//         // now this refers to y;
//        console.log(self.prop);
//     }
// }
module.exports = Dog;