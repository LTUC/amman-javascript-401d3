'use strict';

const LinkedList = require('../lib/linked-list');

describe('Linked List', ()=> {
    it('constructor()', ()=> {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    });
    
    it('append()', ()=> {
        let list = new LinkedList();
        let initialValue = 'test First';
        list.append(initialValue);
        expect(list.head.value).toEqual(initialValue);
        console.log(list);

        let secondValue = 'test second'; 
        list.append(secondValue);
        expect(list.head.value).toEqual(initialValue);
        console.log(list);
        let next = list.head.next;
        console.log("next: ",next , " secondValue: ",secondValue)
        expect(next.value).toEqual(secondValue);
    });
    
});