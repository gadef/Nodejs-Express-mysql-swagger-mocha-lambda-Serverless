const request = require('supertest');

const app = require('../index');

app.listen(3000);

describe('GET /persona', () => {
  it('respond with json containing a list of all persons', (done) => {
    request(app)
      .get('/persona')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });
});
describe('POST /persona', () => {
  it('respond with 401 on bad request', (done) => {
    const data = {
      // no username and password
    };
    request(app)
      .post('/persona')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(401)
      .expect({
        error: true,
        status: 401,
        body: 'Invalid entry.',
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
