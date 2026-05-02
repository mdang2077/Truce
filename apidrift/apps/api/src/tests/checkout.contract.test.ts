// apps/api/src/tests/checkout.contract.test.ts
// Placeholder — will be replaced by Bob Task 3 output
// Run: cd apps/api && npm test

import request from 'supertest';
import app from '../server';

describe('Checkout contract test', () => {
  it('PLACEHOLDER: replace with Bob Task 3 generated test', async () => {
    const response = await request(app)
      .post('/api/checkout')
      .send({ items: [{ id: '1', qty: 1 }] });

    expect(response.status).toBe(200);
    // Bob Task 3 will add assertions for:
    // - totalCents exists (Number)
    // - total does NOT exist
    // - status is "PAID"
  });
});
