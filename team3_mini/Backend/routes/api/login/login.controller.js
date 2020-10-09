// 로그인에 대한 로직구현

//get & post

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


exports.login =( (req, res) => {
    
    User.findOne({ userId: req.body.userId })
        .then(log => {
            if (!log) {
                return res.status(401).json({
                    code: 101, //아이디 혹은 비밀번호 실패
                    message: '인증 실패'
                });
            } else {
                bcrypt.compare(req.body.password, log.password, (err, matched) => {

                    if (err) return res.status(401).json({
                        code: 109, //로그인시 해싱 에러
                        message: '서버 측에서 발생한 에러입니다.'
                    });
                    if (matched) {
                        jwt.sign({ user: log }, process.env.Access_SecretKey, { expiresIn: '3h' }, (err, token) => {
                            res.cookie('authorization', token);
                            res.status(200).json({
                                code: 201, // 로그인 성공
                                message: '로그인 성공',
                                token: token
                                
                            });
                            redirect('/');
                            
                        })

                    } else {
                        res.status(401).json({
                            code: 102, //비밀번호 실패
                            message: '인증 실패'
                        });
                    }
                })
            }
        }).catch((err)=>{
            res.status(500).json({
                code: 104, //로그인시 서버 에러
                message: '서버측 에러입니다',
                err: err
            })

        });
})


exports.get = (req, res) => {
    res.send('here is for login');
}
