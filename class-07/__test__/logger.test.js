'use strict';

const loggerMiddleWare = require('../lib/logger');

describe('logger middleware', () => {

    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn() //function;

    // Spy
    // Mock, restore the mock
    // Hooks in jest 
    
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });

    it ('log some output .. ', ()=> {
        loggerMiddleWare(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('properly moved to next .. ', ()=> {
        loggerMiddleWare(req, res, next);
        expect(next).toHaveBeenCalled();
    })


});
