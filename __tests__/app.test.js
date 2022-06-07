const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { zodiac } = require('../data/zodiac');

describe('zodiac backend routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiac should return a list of zodiac signs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiac.map((z) => {
      return { id: z.id, name: z.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/1 should return details for the sign of aquarius', async () => {
    const results = await request(app).get('/zodiac/1');
    const expected = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(results.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
