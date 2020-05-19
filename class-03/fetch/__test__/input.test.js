'use strict';

///// mock 
const Input = require('../lib/input.js');

describe('Input Module', ()=> {
    
    it('getMethods() defaults to GET when there is no method or invalid', ()=> {
        let options = new Input();
        expect(options.getMethod('wrongMethod')).toEqual('GET');
    });

    it('getMethods() validating and using the proper methods', ()=> {
        let options = new Input();
        expect(options.getMethod('get')).toEqual('get');
        expect(options.getMethod('post')).toEqual('post');
        expect(options.getMethod('delete')).toEqual('delete');
        expect(options.getMethod('put')).toEqual('put');
    });

    it('getUrl() returns undefned when it is invalid', ()=> {
        let options = new Input();
        expect(options.getUrl('google')).toBeUndefined();
    });

    it('getUrl() returns our url when it is properly formatted', ()=> {
        let options = new Input();
        let url = 'http://google.com';
        expect(options.getUrl(url)).toEqual(url);
    });

});
