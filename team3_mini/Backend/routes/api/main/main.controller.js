const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Site = require('../models/Site');
const Category = require('../models/Categories');
const jwt = require('jsonwebtoken');


exports.show = (req, res) => {

    Site.find({}).lean().
        then(sites => {

            Category.find({}).lean().
                then(categories => {

                    res.status(200).json({
                        sites: sites,
                        categories: categories,
                        userData: req.userData

                    })
                })
        })

}
