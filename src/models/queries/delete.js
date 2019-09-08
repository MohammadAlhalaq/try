const dbconnection = require('../config/connection');

exports.deletepost = (id) => dbconnection
  .query('DELETE FROM posts WHERE $1 = posts.postid;', [id]);
