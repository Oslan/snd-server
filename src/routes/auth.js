const app = require('express');
const authConroller = require('../controllers/auth');
const routes = app.Router();

routes.post('/signin', authConroller.signin);
routes.post('/signup', authConroller.signup);

module.exports = routes;