'use strict';
// const serverMod = require('../lib/server');
// const server = serverMod.server;
const {server} = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
    it('should respond with 500', ()=> {
        
        return mockRequest.get('/bad')
            .then(results=> {
                expect(results.status).toBe(500);
            }).catch(console.error);
    });

    it('should respond 404 of an invalid route',() => {

        return mockRequest
            .get('/invalidroute')
            .then(results => {
                expect(results.status).toBe(404);
            }).catch(console.log);
    });

    it('should respond properly /fruit', ()=> {
        return mockRequest
            .get('/fruit?query=apple')
            .then(results => {
                expect(results.status).toBe(200);
            })
    });

    it('should post data', ()=> {
        return mockRequest
            .post('/api/food')
            .send({name: "test name"})
            .then(results => {
                expect(results.status).toBe(200);
            })
    });

});