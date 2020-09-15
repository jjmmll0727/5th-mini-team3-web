// 로그인에 대한 로직구현

//get & post

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const verifytoken = require('../middleware/jwt-verify');
// 이 부분은 나중에 사용자가 로그인해야 접근할수 있는 라우팅에 
// exports.OOO(verifytoken,(req, res) => 형태로 사용하면됩니다!

exports.login =( (req, res) => {

    User.findOne({ userId: req.body.userId })
        .then(log => {
            if (!log) {
                return res.status(401).json({
                    message: '아이디 실패'
                });
            } else {
                bcrypt.compare(req.body.password, log.password, (err, matched) => {

                    if (err) return res.status(401).json({
                        message: '오류 실패'
                    });
                    if (matched) {
                        jwt.sign({ user: log }, 'secretKey', { expiresIn: '1h' }, (err, token) => {
                            // res.cookie('authorization', token);
                            res.status(200).json({
                                message: '로그인 성공',
                                token: token
                            });
                        })

                    } else {
                        res.status(401).json({
                            message: '비밀번호 실패'
                        });
                    }

                })

            }


        });

})


exports.get = (req, res) => {
    res.send('here is for login');
}
