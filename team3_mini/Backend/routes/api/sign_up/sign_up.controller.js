// 회원가입에 대한 로직구현

//get & post

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');


exports.register = (req, res, next) => {
    User.findOne({ userId: req.body.userId }).exec().then(user => {
        if (user) {
            return res.status(409).json({
                message: "이미 존재하는 ID 입니다"

            });
        } else {
            const newUser = new User({

                userId: req.body.userId,
                password: req.body.password,
                birth: req.body.birth,
                email: req.body.email,
                phone: req.body.phone,
                homephone: req.body.homephone

            });

            bcrypt.genSalt(10, (err, salt) => {

                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash;
                    newUser.save().then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: "POST 요청을 통한 사용자데이터 저장",
                            savedUser: newUser
                        });
                    }).catch((err) => {
                        console.log(err);
                        res.status(500).json({
                            error: err

                        });
                    });
                });
            })
        };
    })

}


exports.get = (req, res) => {
    res.send('here is for sign_up');
}
