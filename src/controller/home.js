const { homePosts, getcategorys } = require('../models/queries');

exports.home = (req, res) => {
  let isSaller;
  let name = '';
  if (req.logedIn) {
    isSaller = req.userTry.type === 'saller';
    name = req.userTry.name;
  }

  homePosts()
    .then((posts) => {
      getcategorys().then((categories) => {
        res.render('home', {
          username: name,
          logedOut: !req.logedIn,
          posts: posts.rows,
          isSaller,
          categories: categories.rows,
        });
      });
    }).catch(console.log);
};
