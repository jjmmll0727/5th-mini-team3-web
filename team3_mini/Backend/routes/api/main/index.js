const router = require('express').Router();
const { render } = require('pug');
const controller = require('./main.controller');
const {verifyToken} = require('../middleware/jwt-verify');

router.get('/list', verifyToken, controller.show);
router.get('/', function(req, res){
    console.log(req.session);
})

module.exports = router
