const app = require('express');

const routes = app.Router();

routes.use('/users', require('./user'));
routes.use('/auth', require('./auth'));
routes.use('/sms', require('./sms'));

module.exports = routes;