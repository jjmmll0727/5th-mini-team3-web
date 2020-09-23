const express = require('express');
const session = require('express-session');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Category = require('../models/Categories');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { resolve } = require('path');

exports.create = (req, res) => {
    Category.findOne({ name: req.body.name }).then(category => {
        if (category) {
            res.status(409).json({
                code: 113, //카테고리 이름 중복
                message: "이미 존재하는 카테고리 입니다"

            })
        } else {
            console.log(req.userData);
            const name = req.body.name;
            const user = req.userData;
            //req.session.uid = user;
            if (!name) {
                res.status(409).json({
                    code: 111, //카테고리 이름 미입력
                    message: '카테고리 이름이 입력되지 않았습니다'
                });
            } 
            else {
                const newCategory = new Category({
                    name, user
                });
                newCategory.save().then(result => {
                    res.status(201).json({
                        code: 211, //카테고리 생성 성공
                        message: "카테고리 생성 성공",
                        savedCategory: newCategory
                    });
                    
                }).catch((err) => {
                    console.log(err);
                    res.status(500).json({
                        code: 112, // 카테고리 저장 실패
                        error: err
                    });

                });
                
            }
            
            
        }

    });
}



exports.delete = (req, res) =>{
    Category.findOne({ name: req.body.name }).then(category_name => {
        if (category_name) {
            Category.deleteOne({ name: req.body.name }).lean()
            .then(result => {
                req.flash('success_message','Category was deleted successfully');
                //res.redirect('/admin/categories');
                res.status(201).json({
                    code: 211, //카테고리 삭제 완료
                    message: "카테고리 삭제 완료"
    
                })
            }).catch(err => {
                res.status(500).json({
                    code: 112, // 카테고리 삭제 실패
                    message: "카테고리 삭제 실패"
                });
            
            })
            
        } else {
            res.status(409).json({
                code: 113, //해당 카테고리 없음
                message: "없는 카테고리입니다"

            })
            
                
        }

    });
}




///////////////////////////////////////////

exports.get = (req, res) =>{
    res.send("here is for category");
}

