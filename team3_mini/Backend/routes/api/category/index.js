const router = require('express').Router();
const { render } = require('pug');
const controller = require('./category.controller');
const {verifyToken} = require('../middleware/jwt-verify');



router.get('/get', controller.get);

router.post('/create', controller.create);


module.exports = router
