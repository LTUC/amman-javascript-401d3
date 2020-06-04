'use strict';

class Stack {

    constructor() {
        this.storage = new Array() //[];
        this.top = null;
    }

    push(item) {
        // update the top, add to the storage
        this.storage.unshift(item);
        this.top = item;
    }

    pop() {
        let item = this.storage.shift();
        this.top = this.storage[0];
        return item;
    }

    peek() {
        return this.top;
    }

}

module.exports = Stack;