const router = require('express').Router();
const { render } = require('pug');
const Site = require('../models/Site');
const Category = require('../models/Categories');
const {verifyToken} = require('../middleware/jwt-verify');

//router.get('/get', controller.get);
router.get('/', (req, res) => {

    Site.find({}).lean()
        .then(sites => {

                Category.find({}).lean().
                then(categories => {

                    res.send({ 
                        sites: sites,
                        categories: categories
                         
                    });
                })
        })
})


module.exports = router
