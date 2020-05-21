'use strict';

class Validator {
    
    constructor(schema) {
        this.schema = schema;
    }

    isValid(data) {
        let valid = true;
        for (let fieldName in this.schema) {
            let field = this.schema[fieldName];
            
            // required validation 
            let required = field.required ? this.isTruthy(data[fieldName]) : true;
            // type validation 
            let type = field.type ?
                this.isCorrectType(data[fieldName], field): true;
        
            if (!(required && type)) {
                valid = false;
            }   
        }
    }
    
    isString(str) {
        return typeof str == 'string';
    }

    isNumber(num) {
        return typeof num == 'number';
    }

    isObject(input) {
        return typeof input == 'object'&& !(input instanceof Array);
    }

    isArray(arr, valueType) {
        return Array.isArray(arr) && ( valueType ? input.every(val => typeof val == valueType) : true);
    }

    isTruthy(input) {
        return !!input ;
    }

    isCorrectType(input, field) {
        switch (field.type) {
            case 'string': return this.isString(input);
            case 'number' : return this.isNumber(input);
            case 'array' : return this.isArray(input, field.valueType);
            case 'object': return this.isObject(input);
            case 'boolean': return this.isBoolean(input);
            default: return false;
        }
    }


}

module.exports = Validator;