const router = require('express').Router();
const { render } = require('pug');
const controller = require('./category.controller');
const {verifyToken} = require('../middleware/jwt-verify');
const siteInfo = require('./siteInfo');

router.use('/siteInfo', verifyToken, siteInfo)

router.get('/get', controller.get);

router.post('/create', verifyToken, controller.create);


module.exports = router
