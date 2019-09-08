const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');

exports.isLogedIn = (req, res, next) => {
  jwt.verify(req.cookies.userTry, process.env.PRIVATEKEY, (err, userTry) => {
    if (err) {
      req.logedIn = false;
    } else {
      req.logedIn = true;
      req.userTry = userTry;
    }
    next();
  });
};


exports.validSchema = (data, schema) => Joi.validate(data, schema);
