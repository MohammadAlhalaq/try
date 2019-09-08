const { addcategory, getposts, addpost } = require('../models/queries');

exports.addcategory = (req, res) => {
  if (req.userTry.type === 'saller') {
    addcategory(req.body.title)
      .then(() => res.redirect('/profile'))
      .catch((err) => {
        const isSaller = req.userTry.type === 'saller';
        const id = isSaller ? req.userTry.userid : false;
        getposts(id)
          .then((posts) => res.render('userProfile', {
            error: err,
            logedOut: !req.logedIn,
            posts: posts.rows,
            isSaller,
          }));
      });
  }
};
exports.addpost = (req, res) => {
  if (req.userTry.type === 'saller') {
    addpost(req.body, req.userTry.userid).then(() => res.redirect('/profile')).catch((err) => {
      const isSaller = req.userTry.type === 'saller';
      const id = isSaller ? req.userTry.userid : false;
      getposts(id)
        .then((posts) => res.render('userProfile', {
          error: err,
          logedOut: !req.logedIn,
          posts: posts.rows,
          isSaller,
        }));
    });
  } else res.redirect('/profile');
};
