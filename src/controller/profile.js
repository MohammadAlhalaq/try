const { getposts } = require('../models/queries/post');

exports.profile = (req, res) => {
  if (req.logedIn) {
    const isSaller = req.userTry.type === 'saller';
    const id = isSaller ? req.userTry.userid : false;

    getposts(id)
      .then((posts) => {
        res.render('userProfile', {
          username: req.userTry.name,
          logedOut: !req.logedIn,
          posts: posts.rows,
          isSaller,
        });
      })
      .catch(console.log);
  } else res.redirect('/login');
};
