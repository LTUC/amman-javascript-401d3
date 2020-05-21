'use strict';

const Validator = require('../lib/validator');

const validator = new Validator();
const faker = require('faker');

let str = 'example';
let num = 1;
let arr = ['a'];
let obj = {x: 'y'};
let func = ()=> {};
let bool = false;

const schema = {
    id: {type: 'string', required: true },
    name: {type: 'string', required:true},
    age: {type: 'number'},
    children: {type: 'array', valueType: 'string'}
};

describe('Validator module with basic validations', ()=> {
    it('string', ()=> {
        expect(validator.isString(str)).toBeTruthy();
        expect(validator.isString(num)).toBeFalsy();
        expect(validator.isString(arr)).toBeFalsy();
        expect(validator.isString(obj)).toBeFalsy();
        expect(validator.isString(func)).toBeFalsy();
        expect(validator.isString(bool)).toBeFalsy();
    });

    it('number', ()=> {
        expect(validator.isNumber(str)).toBeFalsy();
        expect(validator.isNumber(num)).toBeTruthy();
        expect(validator.isNumber(arr)).toBeFalsy();
        expect(validator.isNumber(obj)).toBeFalsy();
        expect(validator.isNumber(func)).toBeFalsy();
        expect(validator.isNumber(bool)).toBeFalsy();
    });

    it('arrays', ()=> {
        expect(validator.isArray(str)).toBeFalsy();
        expect(validator.isArray(num)).toBeFalsy();
        expect(validator.isArray(arr)).toBeTruthy();
        expect(validator.isArray(obj)).toBeFalsy();
        expect(validator.isArray(func)).toBeFalsy();
        expect(validator.isArray(bool)).toBeFalsy();
    });

    it('array of type', () => {
        const numArray = [1, 2, 3];
        const strArray = ['a', 'b', 'c'];
        expect(validator.isArray(str)).toBeFalsy();
        expect(validator.isArray(num)).toBeFalsy();
        expect(validator.isArray(arr)).toBeTruthy();
        expect(validator.isArray(obj)).toBeFalsy();
        expect(validator.isArray(func)).toBeFalsy();
        expect(validator.isArray(bool)).toBeFalsy();
        expect(validator.isArray(numArray, 'number')).toBeTruthy();
        expect(validator.isArray(numArray, 'string')).toBeFalsy();
        expect(validator.isArray(strArray, 'number')).toBeFalsy();
        expect(validator.isArray(strArray, 'string')).toBeTruthy();
    });
    it('objects', () => {
        expect(validator.isObject(str)).toBeFalsy();
        expect(validator.isObject(num)).toBeFalsy();
        expect(validator.isObject(arr)).toBeFalsy();
        expect(validator.isObject(obj)).toBeTruthy();
        expect(validator.isObject(func)).toBeFalsy();
        expect(validator.isObject(bool)).toBeFalsy();
      });
      it('functions', () => {
        expect(validator.isFunction(str)).toBeFalsy();
        expect(validator.isFunction(num)).toBeFalsy();
        expect(validator.isFunction(arr)).toBeFalsy();
        expect(validator.isFunction(obj)).toBeFalsy();
        expect(validator.isFunction(func)).toBeTruthy();
        expect(validator.isFunction(bool)).toBeFalsy();
      });
      it('booleans', () => {
        expect(validator.isBoolean(str)).toBeFalsy();
        expect(validator.isBoolean(num)).toBeFalsy();
        expect(validator.isBoolean(arr)).toBeFalsy();
        expect(validator.isBoolean(obj)).toBeFalsy();
        expect(validator.isBoolean(func)).toBeFalsy();
        expect(validator.isBoolean(bool)).toBeTruthy();
      });
});


// add Objects, Boolean, Function, 
describe('Validator module validating a basic shcema', ()=> {
    it('isValid() validate a record ', () => {
        // go through the schema and faker. to fill in some data
        // switch case
        var testRecord = {};
        for (let field in schema) {
            switch(schema[field].type) {
                case 'boolean':
                    testRecord[field] = falr.random.boolean();
                case 'number':
                    testRecord[field] = faker.random.number();
                    break;
                case 'string':
                    testRecord[field] = faker.random.word();
                    break;
                case 'array':
                    testRecord[field]= [];
                    testRecord[field].push(faker.random.arrayElement());
                    testRecord[field].push(faker.random.arrayElement());
                    break;
            }
        }
        console.log("testRecord")
        expect(validator.isValid(testRecord)).toBeTruthy();
    });


    it('isValid() type mismatch ', () => {
        // go through the schema and faker. to fill in some data
        // switch case
        var testRecord = {};
        for (let field in schema) {
            switch(schema[field].type) {
                case 'number':
                    testRecord[field] = faker.random.word();
                    break;
                case 'string':
                    testRecord[field] = faker.random.number();
                    break;
                case 'array':
                    testRecord[field] = faker.random.number();
                    break;
            }
        }
        expect(validator.isValid(testRecord)).toBeFalsy();
    });
});