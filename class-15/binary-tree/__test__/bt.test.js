'use strict';

const BinaryTree = require('../binaryTree');
const Node = require('../node');

describe('Binary Tree', ()=> {

    let tree = null;

    beforeAll(()=> {
        // create my tree 
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new BinaryTree(one);
    });

    it('preOrder()', ()=> {
        let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrder = tree.preOrder();
        expect(preOrder).toEqual(expected);
    });

    it('inOrder()', ()=> {
        let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expected);
    });
    
    it('postOrder()', ()=> {
        let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expected);
    });

});