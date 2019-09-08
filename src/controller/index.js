const express = require('express');

const { home } = require('./home');
const { getLogin, postLogin, logout } = require('./login');
const { getSignUp, postSignUp } = require('./signUp');
const { profile } = require('./profile');
const { isLogedIn } = require('./validate');
const { addcategory, addpost } = require('./add');
const { client, server } = require('./error');
const { deletePost } = require('./delete');
const { editPost } = require('./editPost');
const { category } = require('./category');
const { trader } = require('./trader');

const router = express.Router();
router.use(isLogedIn);
router.get('/', home);
router.get('/logout', logout);
router.get('/profile', profile);
router.get('/category/:value', category);
router.get('/trader/:value', trader);
router.route('/login').get(getLogin).post(postLogin);
router.route('/signup').get(getSignUp).post(postSignUp);
router.post('/addcategory', addcategory);
router.post('/addpost', addpost);
router.post('/editpost', editPost);
router.post('/deletepost', deletePost);


router.use(client);
router.use(server);

module.exports = router;
