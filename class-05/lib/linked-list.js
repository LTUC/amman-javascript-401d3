'use strict';

const Node = require('./node');

class LinkedList {
    
    constructor() {
        this.head = null;
    }
    // TARGET: 1 -> 2 -> 3-> null
    // null
    // 1 ->null
    // when the next is null (tail) add the new value .
    // 1->2 ->null
    // 1->2->3->null
    append(value) {
        let node = new Node(value);
        // if there is no head .
        if (!this.head) {
            this.head = node;
            return this;
        }   
        // we have other stuff , need to add to end
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
    
}

module.exports = LinkedList;