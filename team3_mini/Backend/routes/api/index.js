const router = require('express').Router();
const sign_up = require('./sign_up');
const login = require('./login');
const { render } = require('pug');

router.use('/sign_up', sign_up)
router.use('/login',login)


module.exports = router
