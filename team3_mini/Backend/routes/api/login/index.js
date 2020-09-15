const router = require('express').Router();
const { render } = require('pug');
const controller = require('./login.controller');

router.get('/get', controller.get);

router.post('/create', controller.login);

module.exports = router
