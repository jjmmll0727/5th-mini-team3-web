const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Category = require('../models/Categories');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.include = (req, res) => {

    Category.findOne({ _id: req.body.id })
        .then((category) => {
            if (category.user.includes(req.userData)) {
                res.status(409).json({
                    code: 115, //이미 추가한 카테고리
                    message: "이미 추가한 카테고리 입니다"
                });
            } else {
                category.user.push(req.userData);
                category.save().then(result => {
                    res.status(201).json({
                        code: 211, //카테고리 추가 성공
                        message: "카테고리를 성공적으로 추가하였습니다",
                        result: result
                    });
                })
            }

        }).catch(err => {
            res.status(409).json({
                code: 116, //카테고리 추가시, _id 오류
                message: "카테고리를 찾지 못하였습니다",
                err: err
            });

        });
};


exports.exclude = (req, res) => {
    Category.findOne({ _id: req.body.id })
        .then((category) => {
            if (!category.user.includes(req.userData)) {
                res.status(409).json({
                    code: 119, //이미 제외한 카테고리
                    message: "이미 제외한 카테고리 입니다"
                });
            } else {
                category.user.pull(req.userData);
                category.save().then(result => {
                    res.status(201).json({
                        code: 213, //카테고리 추가 성공
                        message: "카테고리를 성공적으로 제외하였습니다",
                        result: result
                    });
                });
            }

        }).catch(err => {
            res.status(409).json({
                code: 118, //카테고리 제외시 _id 오류
                message: "카테고리를 찾지 못하였습니다",
                err: err
            });
        });
}




///////////////////////////////////////////

exports.create = (req, res) => {
    Category.findOne({ name: req.body.name }).then(category => {
        if (category) {
            res.status(409).json({
                message: "이미 존재하는 카테고리"
            });
        } else {
            const newCategory = new Category({
                name: req.body.name
            });
            newCategory.save().then((result) => {
                res.status(200).json({
                    message: "카테고리 추가 성공"
                });
            });
        };

    })

};

exports.get = (req, res) => {
    res.send("here is for category");
}

