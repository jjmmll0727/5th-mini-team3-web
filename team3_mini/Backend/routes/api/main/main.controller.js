const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Site = require('../models/Site');
const Category = require('../models/Categories');
const session = require('express-session');


exports.show = (req, res) => {

    Site.find({}).lean()
        .then(sites => {

                Category.find({}).lean().
                then(categories => {

                    res.send({ 
                        sites: sites,
                        categories: categories,
                        userData: req.session.uid // req.session.uid 변수로 어느 페이지에서도 사용 가능하다. 
                         
                    });
                })
        })
}
