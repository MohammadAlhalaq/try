const { getposts } = require('../models/queries');

exports.trader = (req, res) => {
  if (req.logedIn && req.userTry.type !== 'saller') {
    getposts(req.params.value).then((posts) => {
      getposts().then((traders) => res.render('trader', {
        username: req.userTry.name,
        posts: posts.rows,
        trader: traders.rows,
      }));
    });
  } else {
    res.redirect('/');
  }
};
