const test = require('tape');

exports.initialtest = test('initial test ', (t) => {
  t.equals(1, 1, 'heloo');
  t.end();
});
