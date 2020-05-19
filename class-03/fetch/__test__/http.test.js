'use strict';

const HTTP = require('../lib/http.js');

// jest.spyOn
jest.spyOn(global.console, 'log');

describe('HTTP Mdule', ()=> {
    it('fetch() does nothing with invalid opts', ()=> {
        const http = new HTTP();
        http.fetch();
        expect(console.log).not.toHaveBeenCalled();
    })
    
    it('fetch() will log out opts when given', ()=> {
        const http = new HTTP();
        http.fetch({url: 'foo'});
        expect(console.log).toHaveBeenCalled();
    })

})


