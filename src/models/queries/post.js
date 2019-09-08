const dbconnection = require('../config/connection');

exports.getposts = (userId = '') => (userId ? dbconnection.query('SELECT * FROM posts  JOIN users ON users.userid = posts.user_id and users.type = $1 and users.userid = $2;', ['saller', userId])
  : dbconnection.query('SELECT name, userid FROM users where type = $1 ;', ['saller']));

exports.homePosts = () => dbconnection.query('SELECT * FROM posts  JOIN users ON users.userid = posts.user_id;');

exports.addpost = (data, id) => {
  const {
    title, content, image, price, category,
  } = data;
  return dbconnection.query('INSERT INTO posts (title, content, image, price, category, user_id) VALUES ($1, $2, $3, $4, $5, $6);', [title, content, image, price, category, id]);
};
exports.editPost = (data) => {
  const {
    title, content, image, price, category, postid,
  } = data;
  return dbconnection.query('UPDATE posts SET title = $1, content = $2, image = $3, price = $4, category = $5 WHERE postid = $6;', [title, content, image, price, category, postid]);
};
