const { getPostCategorys, getcategorys } = require('../models/queries');

exports.category = (req, res) => {
  let isSaller;
  let name = '';
  if (req.logedIn) {
    isSaller = req.userTry.type === 'saller';
    name = req.userTry.name;
  }
  getPostCategorys(req.params.value)
    .then((posts) => {
      getcategorys()
        .then((categories) => {
          res.render('home', {
            username: name,
            logedOut: !req.logedIn,
            posts: posts.rows,
            isSaller,
            categories: categories.rows,
          });
        });
    });
};
