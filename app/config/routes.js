var r = require('express').Router();
const { append } = require('express/lib/response');
var User = require('../controllers/userController');
var Auth = require('../controllers/authController');

r.get('/user',User.userList);
r.post('/user',User.userAdd);
r.post('/login',Auth.login);
module.exports = r;