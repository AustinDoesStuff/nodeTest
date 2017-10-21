const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it("should return 'hey there'", (done) => {
    request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
         expect(res.body).toInclude({
             error: 'page not found'
         });
      })
      .end(done);
});

it("should return the users table", (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({name: 'Austin', age:24});
      })
      .end(done);
});
