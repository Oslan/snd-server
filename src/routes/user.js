const app = require('express');
const userConroller = require('../controllers/user');
const routes = app.Router();

routes.get('/', userConroller.index);

module.exports = routes;