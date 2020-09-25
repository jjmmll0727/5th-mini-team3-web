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

                    res.send(200).json({
                        sites: sites,
                        categories: categories,
                        userData: req.userData

                    })
                }).catch(err => {
                    res.status(409).json({
                        code: 118, // 카테고리 테이블을 찾지 못했습니다
                        message: "카테고리 테이블을 찾지 못하였습니다",
                        err: err
                    });
                });
        }).catch(err => {
            res.status(409).json({
                code: 118, // 사이트 테이블을 찾지 못하였습니다
                message: "사이트 테이블을 찾지 못하였습니다",
                err: err
            });
        });

}
