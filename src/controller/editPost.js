const { editPost } = require('../models/queries');

exports.editPost = (req, res) => editPost(req.body)
  .then(() => res.redirect('/profile'))
  .catch((err) => res.render('userProfile', {
    error: err,
  }));
