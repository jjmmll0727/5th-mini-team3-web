const router = require('express').Router();
const { render } = require('pug');
const controller = require('./main.controller');
const {verifyToken} = require('../middleware/jwt-verify');

router.get('/list', verifyToken, controller.show);

module.exports = router
