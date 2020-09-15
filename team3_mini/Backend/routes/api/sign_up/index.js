const router = require('express').Router();
const { render } = require('pug');
const controller = require('./sign_up.controller');

router.get('/get', controller.get);

router.post('/create', controller.register);

module.exports = router
