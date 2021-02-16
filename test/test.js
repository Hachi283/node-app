// We are ready to write our first integration test. Our test is going to navigate to the site root (“/”) and verify that 
// the page responds with the text “hello world”.
const request = require('supertest');
const app = require('../index.js');

describe('GET /', function() {
    it('respond with hello there, you did it!', function(done) {
    //navigate to root and check the the response is "hello world"
    request(app).get('/').expect('Hello there. You did it!', done);
    });
});

