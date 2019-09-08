const dbconnection = require('../config/connection');

exports.login = (email) => dbconnection
  .query('SELECT * FROM users WHERE $1 = users.email ;', [email]);

exports.signup = (data) => {
  const {
    username, email, hash, gender, type, birthday,
  } = data;

  return dbconnection
    .query({ text: 'INSERT INTO users (name, email, password,gender, type, birthday) VALUES ($1, $2, $3, $4, $5, $6);', values: [username, email, hash, gender, type, birthday] });
};
