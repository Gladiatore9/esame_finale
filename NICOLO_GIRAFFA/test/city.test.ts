import request from 'supertest';
import app from '../src/app';

describe('GET /api/cities', () => {
  it('responds with json containing a list of all cities', (done) => {
    request(app)
      .get('/api/cities')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /api/cities/:id', () => {
  it('responds with json containing a single city', (done) => {
    request(app)
      .get('/api/cities/1')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /api/cities', () => {
  it('responds with json containing the newly created city', (done) => {
    const newCity = {
      name: 'New York',
      population: 8398748,
      male: 4096024,
      female: 4302724,
      isCapital: false,
    };

    request(app)
      .post('/api/cities')
      .send(newCity)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject(newCity);
        done();
      });
  });
});

describe('PUT /api/cities/:id', () => {
  it('responds with json containing the updated city', (done) => {
    const updatedCity = {
      name: 'Updated City',
      population: 1000000,
      male: 500000,
      female: 500000,
      isCapital: true,
    };

    request(app)
      .put('/api/cities/1')
      .send(updatedCity)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject(updatedCity);
        done();
      });
  });
});

describe('DELETE /api/cities/:id', () => {
  it('responds with 204 status code', (done) => {
    request(app)
      .delete('/api/cities/1')
      .expect(204, done);
  });
});
