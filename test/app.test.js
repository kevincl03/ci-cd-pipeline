import request from 'supertest';
import app from '../app.js';

describe('Test al endpoint GET /', () => {
  test('debe responder con "¡Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('¡Hello World!');
  });
});
