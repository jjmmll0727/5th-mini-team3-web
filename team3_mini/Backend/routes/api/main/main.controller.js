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

                    res.status(200).json({ // res.send --> 중복이라 if) send이면  error 200이라는 http status를 전송하고 json을 또 전송 --> status에 대해서 ok 가 뜬다
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
