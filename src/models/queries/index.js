const {
  getposts, addpost, homePosts, editPost,
} = require('./post');
const { login, signup } = require('./users');
const { addcategory, getcategorys, getPostCategorys } = require('./category');
const { deletepost } = require('./delete');

module.exports = {
  getposts,
  login,
  signup,
  homePosts,
  addcategory,
  getcategorys,
  getPostCategorys,
  addpost,
  deletepost,
  editPost,
};
