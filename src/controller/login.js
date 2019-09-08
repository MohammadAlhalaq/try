const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { loginSc } = require('./schema');
const { validSchema } = require('./validate');
const { login } = require('../models/queries');

exports.getLogin = (req, res) => {
  if (req.logedIn) res.redirect('/');
  else res.render('login', { logedOut: !req.logedIn });
};

exports.postLogin = (req, res) => {
  if (req.logedIn) res.redirect('/'); // home
  else {
    validSchema(req.body, loginSc)
      .then((data) => login(data.email))
      .then((user) => bcrypt.compare(req.body.password, user.rows[0].password)
        .then((isvalid) => {
          if (isvalid) {
            const {
              userid, name, email, gender, type, birthday,
            } = user.rows[0];
            const token = jwt.sign({
              userid, name, email, gender, type, birthday,
            }, process.env.PRIVATEKEY);
            res.cookie('userTry', token);
          } else {
            res.render('login', { error: 'wrong Password', logedOut: !req.logedIn });
          }
        }))
      .then(() => res.redirect('/'))
      .catch((err) => res.render('login', { error: err, logedOut: !req.logedIn }));
  } // -->>login
};
exports.logout = (req, res) => {
  res.clearCookie('userTry').redirect('/');
};
