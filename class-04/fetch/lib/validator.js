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
        }
    }
    
    isString(str) {
        return typeof str == 'string';
    }

    isNumber(num) {
        return typeof num == 'number';
    }

    isArray(arr) {
        return Array.isArray(arr);
    }

    isTruthy(input) {
        return !!input ;
    }

    isCorrectType(input, field) {
        switch (field.type) {
            case 'string': return this.isString(input);
            case 'number' : return this.isNumber(input);
            case 'array' : return this.isArray(input);
        }
    }


}

module.exports = Validator;