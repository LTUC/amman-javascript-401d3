'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../lib/server');
const mockRequest = supergoose(server);

describe('Food API', ()=> {

        it('it can get() food ', ()=> {
            let obj = {name: 'test-post-2', calories: 5433};
            return mockRequest
                    .post('/api/v1/food')
                    .send(obj)
                    .then(data => {
                        // get all will return an array of all records
                        return mockRequest.get('/api/v1/food')
                            .then(result => {
                                // console.log(result.body[0]);
                                Object.keys(obj).forEach(key=> {
                                    expect(result.body[0][key]).toEqual(obj[key]);
                                })
                            })
                    });
        });

        it('can post() a new food ', ()=> {
            let obj = {name: 'test-post-1', calories: 234, type: 'FRUIT'};
            return mockRequest
                    .post('/api/v1/food')
                    .send(obj)
                    .then(data => {
                        // compare what the post has returned with hwat we submitted
                        // console.log(data.body);
                        expect(data.status).toBe(201);
                        Object.keys(obj).forEach(key => {
                            // check data.body[key] if it matches obj[key]
                            expect(data.body[key]).toEqual(obj[key]);
                        })
                    });
        });

        it('TEST post() failure ', ()=> {
            let obj = {name: 'test-post-1'};
            return mockRequest
                    .post('/api/v1/food')
                    .send(obj)
                    .then(data => {
                        // compare what the post has returned with hwat we submitted
                        // console.log(data.body);
                        expect(data.status).toBe(500);
                    });
        });

        


});