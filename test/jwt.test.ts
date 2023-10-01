import { describe, expect, test } from 'bun:test';
import request from 'supertest';
import { app } from '@/server';
import { API_RESPONSE_MESSAGES } from '@/constants';
import { users } from '@/users';
describe('Test api', () => {
  test('Guest should not be allowed to login', async () => {
    const result = await request(app).get('/');
    expect(result.statusCode).toBe(401);
    expect(result.body?.message).toBe(API_RESPONSE_MESSAGES.UNAUTHORIZED_MESSAGE);
  });
  test('Authorized user  be able to login and get token', async () => {
    const result = await request(app).post('/signin').send({
      username: users.mbags.username,
      password: users.mbags.password,
    });
    expect(result.statusCode).toBe(200);
    expect(result.body?.jwt).toBeString();
  });
});
// Generate a function to add 2 numbers
