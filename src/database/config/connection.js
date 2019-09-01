const { Pool } = require('pg');

let dbURL = '';
switch (process.env.NODE_ENV) {
  case 'test': dbURL = process.env.TEST_DB; break;
  case 'DEV': dbURL = process.env.DEV_DB; break;
  case 'heroku': dbURL = process.env.HEROKU_DB; break;
  default: throw new Error('no database found');
}
const options = {
  connectionString: dbURL,
  ssl: true,
};
module.exports = new Pool(options);
