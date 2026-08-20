const request = require('supertest');
const app = require('./server');

describe('GET /webhook', () => {
  test('returns the challenge for valid Meta verification', async () => {
    const response = await request(app)
      .get('/webhook')
      .query({
        'hub.mode': 'subscribe',
        'hub.verify_token': 'MY_VERIFY_TOKEN',
        'hub.challenge': 'test-challenge'
      });

    expect(response.status).toBe(200);
    expect(response.text).toBe('test-challenge');
    expect(response.type).toBe('text/plain');
  });

  test('rejects an invalid verification token', async () => {
    const response = await request(app)
      .get('/webhook')
      .query({
        'hub.mode': 'subscribe',
        'hub.verify_token': 'wrong-token',
        'hub.challenge': 'test-challenge'
      });

    expect(response.status).toBe(403);
  });
});