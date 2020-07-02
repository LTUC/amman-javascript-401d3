'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        // return values of nodes in linkedlist : values in array []
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) { 
        // I will has my key to get the index of where to store my data.
        return key.split('').reduce((p, n) => {
            return p + n.charCodeAt(0)
        }, 0) * 599 % this.size;
    }

    set(key, value) {
        // add to our hashmap
        // 1st get me the hashed of my key
        // if the key does not exist in my map(new Array) then create it and add the new linkedlist to it, and add to the linkedlist
        // if this resulting key existed in the map then add to it.
        
        // {'stuff': 'laptop'}
        // hash stuff
        // 1456 : LinkedList has previosly added values so just add Headers
        // 1456 : create LinkedList and then add {'stuff': 'laptop'} to it

        let hash = this.hash(key);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        // pass entry to the map 
        // using object, you can use anything
        let entry = {[key]: value};
        // add to our linkedlist
        this.map[hash].add(entry);
    }

    get() {
        // find a key in the hashmap and return its value
    }


}



let myHash = new Hashmap(1024);
myHash.set('Cat', 'Paghera');
myHash.set('Owner' ,'Israa');

myHash.map.forEach( (data, i )=> {
    console.log(i, data && data.values());
});
