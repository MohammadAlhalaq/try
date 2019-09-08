const { readFileSync } = require('fs');
const { join } = require('path');
const dbconnection = require('./connection');

const sql = readFileSync(join(__dirname, 'build.sql'));
dbconnection
  .query(sql);
