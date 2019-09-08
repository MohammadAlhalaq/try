exports.client = (req, res) => {
  res.render('error/error', { error: 'YOUR SEARCH NOT FOUND 404' });
};

exports.server = (err, req, res, next) => {
  res.render('error/error', { error: ' WE ARE SORRY SERVER SIDE ERROR 500' });
};
