const request = require('supertest');

const app = require('../index');

describe('GET /swapi', () => {
  it('respond with json containing a list of all persons of swapi', (done) => {
    request(app)
      .get('/swapi')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });
});
