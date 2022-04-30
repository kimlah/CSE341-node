const routes = require('express').Router();

// if / then go to home doc
routes.use('/', require('./home'));

// if /contacts then go to contacts doc
routes.use('/contacts', require('./contacts'));

module.exports = routes;