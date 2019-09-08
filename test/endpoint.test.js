const test = require('tape');
const supertest = require('supertest');

exports.home = test('test home route / ', (t) => {
  t.equals(1, 1, 'heloo');
  t.end();
});
