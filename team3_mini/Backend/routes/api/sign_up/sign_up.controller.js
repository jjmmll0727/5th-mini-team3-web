// 회원가입에 대한 로직구현

//get & post

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');


exports.register = (req, res, next) => {
    const { userId, password, birth,name, email, phone, homephone } = req.body
    if (!userId || !password || !birth || !email || !phone || !name) {
        res.status(409).json({
            code: 105, //필수 입력값 미입력
            message: '필수입력값이 입력되지 않았습니다'
        })
    } else {
        User.findOne({ userId: req.body.userId }).exec().then(user => {
            // evec() mongo query에서 버전3 에서는 promise를 위해 exec이 필요했어, 버전4에서는 필요 x
            if (user) {
                return res.status(409).json({
                    code: 106, //존재하는 아이디 실패
                    message: "이미 존재하는 ID 입니다"

                });
            }

            const newUser = new User({
                userId, password, birth,name, email, phone, homephone
                // userId: req.body.userId,
                // password: req.body.password,
                // birth: req.body.birth,
                // email: req.body.email,
                // phone: req.body.phone,
                // homephone: req.body.homephone
                
            });



            
            bcrypt.genSalt(10, (err, salt) => {

                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash;
                    newUser.save().then(result => {
                        // console.log(result);
                        res.status(201).json({
                            code: 202, //회원가입 성공
                            message: "POST 요청을 통한 사용자데이터 저장",
                            savedUser: newUser
                        });
                    }).catch((err) => {
                        console.log(err);
                        res.status(500).json({
                            code: 110, //해싱 에러
                            error: "서버 측에서 발생한 에러입니다."

                        });
                    });
                });
            })
        })
    }

}


exports.get = (req, res) => {
    res.send('here is for sign_up');
}
