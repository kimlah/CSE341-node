const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Spencer Imlah');
  });

module.exports = routes;