const dbConnection = require('../config/connection');

exports.addcategory = (title) => dbConnection
  .query('INSERT INTO category(title) VALUES($1);', [title]);
exports.getcategorys = () => dbConnection
  .query('SELECT * FROM category;');
exports.getPostCategorys = (title) => dbConnection
  .query('SELECT * FROM posts JOIN users ON posts.category = $1;', [title]);
