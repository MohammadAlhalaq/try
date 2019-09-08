const bcrypt = require('bcrypt');
const { signup } = require('../models/queries');
const { validSchema } = require('./validate');
const { signupSc } = require('./schema');

exports.getSignUp = (req, res) => {
  if (req.logedIn) res.redirect('/');
  else res.render('signup', { logedOut: !req.logedIn });
};

exports.postSignUp = (req, res) => {
  if (req.logedIn) res.redirect('/');
  else {
    const {
      username, email, password, gender, type, birthday,
    } = req.body;

    validSchema(req.body, signupSc)
      .then(() => bcrypt.genSalt(10))
      .then((salt) => bcrypt.hash(password, salt))
      .then((hash) => signup({
        username, email, hash, gender, type, birthday,
      }))
      .then(() => res.redirect('/login'))
      .catch((err) => res.render('signup', { logedOut: true, error: err }));
  }
  // --> add user
};
