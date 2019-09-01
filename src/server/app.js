const { join } = require('path');
const express = require('express');
const exhbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3012;
const app = express();

app.set('port', port);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'view', 'public')));

app.set('views', join(__dirname, '..', 'views'));
app.set('view engine', 'hbs');

app.engine('hbs', exhbs({
  extname: 'hbs',
  layoutsDir: join(__dirname, '..', 'views', 'layouts'),
  defaultLayout: 'main',
}));

module.exports = app;
