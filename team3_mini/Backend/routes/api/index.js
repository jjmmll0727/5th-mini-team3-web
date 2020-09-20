const router = require('express').Router();
const sign_up = require('./sign_up');
const login = require('./login');
const category = require('./category');
//const siteInfo = require('./siteInfo');
const { render } = require('pug');

router.use('/sign_up', sign_up)
router.use('/login',login)
router.use('/category',category);
//router.use('/siteInfo',siteInfo);


module.exports = router
