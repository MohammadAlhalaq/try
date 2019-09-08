const { join } = require('path');
const express = require('express');
const exhbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const router = require('../controller');

const port = process.env.PORT || 3012;
const app = express();

app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', '..', 'public')));
app.set('port', port);
app.disable('x-powered-by');

app.set('views', join(__dirname, '..', 'views'));
app.set('view engine', 'hbs');
app.use(router);
app.enable('view cache');
app.engine('hbs', exhbs({
  extname: 'hbs',
  layoutsDir: join(__dirname, '..', 'views', 'layouts'),
  partialsDir: join(__dirname, '..', 'views', 'partials'),
  defaultLayout: 'main',

}));

module.exports = app;
