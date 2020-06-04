'use strict';

const Stack = require('../stack');

describe('stack', ()=> {

    it('creates an instance', ()=> {
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
    });

});

describe('peek()', ()=> {
    it('return null on empty stack', ()=> {
        let stack = new Stack();
        expect(stack.peek()).toBeNull();
    });

    it('returns the last item', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
    });

    it('pop() points to then ew head of stack', ()=> {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        expect(stack.peek()).toEqual(2);
    });

});

describe('pop()', ()=> {
    it('returns and removes the top item', ()=> {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toEqual(3);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
        console.log("stack.peek() : ",stack.peek())
        expect(stack.peek()).toBeUndefined();
    });
});


describe('push()', ()=> {
    it('adds a value to the top of the stack', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
        stack.push(3);
        expect(stack.peek()).toEqual(3);
    });
});
