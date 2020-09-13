const router = require('express').Router()
const sign_up = require('./sign_up')
const { render } = require('pug');

router.use('/sign_up', sign_up)

module.exports = router
