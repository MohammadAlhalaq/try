const { deletepost } = require('../models/queries');

exports.deletePost = (req, res, next) => {
  if (req.logedIn) {
    deletepost(req.body.delete)
      .then(() => res.redirect('/profile'))
      .catch(() => next());
  } else {
    res.redirect('/logedIn');
  }
};
