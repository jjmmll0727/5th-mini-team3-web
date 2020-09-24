// 사이트 추가에 대한 로직구현

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Site = require('../../models/Site');
const Category = require('../../models/Categories');

// exports.create = (req, res) => {

//     Site.findOne({ url: req.body.url }).then(url => {
//         if (url) {
//             res.status(409).json({
//                 code: 133, // 이미 있는 url주소의 사이트
//                 message: "이미 추가한 url입니다"
//             })
//         } else {
//             Category.findOne({ _id: req.body.category_id }).then((category) => { // 프론트에서 카테고리의 id값을 받아와야 해
//                 if (!category) {
//                     res.status(409).json({
//                         code: 135, //사이트 추가시 카테고리_id 오류
//                         message: "카테고리를 찾지 못하였습니다",

//                     });
//                 } else {
//                     const category = req.body.category_id;
//                     const url = req.body.url;
//                     const title = req.body.title;
//                     const description = req.body.description;
//                     const open = req.body.open;
//                     const like = req.body.like; // 처음에 default로 0으로 세팅해야 해

//                     /*
//                     const img = req.body.img;
//                     const double_id = req.body.double_id;
//                     const double_pw = req.body.double_pw;
//                     const open = req.body.open;
//                     // 이중 비밀번호를 어떻게 할까... 
//                     */

//                     if (!title) {
//                         res.status(409).json({
//                             code: 131, /// 사이트의 제목 미입력
//                             message: '사이트의 제목이 입력되지 않았습니다'

//                         });
//                     }
//                     else if (!url) {
//                         res.status(409).json({
//                             code: 132, /// 사이트의 url 미입력
//                             message: '사이트의 url이 입력되지 않았습니다'
//                         });
//                     } // description와 img는 입력하지 않아도 상관 x
//                     else {
//                         const newSite = new Site({
//                             category, title, url, description, open, like //img, double_id, double_pw, date 
//                         });
//                         newSite.save().then(result => {
//                             res.status(201).json({
//                                 code: 230, // 사이트 추가 성공
//                                 message: "사이트 추가 성공",
//                                 savedSite: newSite
//                             });
//                         }).catch(err => {
//                             console.log(err);
//                             res.status(500).json({
//                                 code: 130, // 사이트 저장 실패
//                                 message: "서버측 에러입니다",
//                                 error: err
//                             });
//                         })
//                     }

//                 }


//             }).catch((err)=>{
//                 res.status(500).json({
//                     code: 139, //사이트 추가시 MongoDB 에러
//                     message: "서버측 에러입니다",
//                     err: err
//                 })

//             })
//         }
//     })

// }


exports.create = (req, res) => {

    Site.findOne({ url: req.body.url }).then(url => {
        if (url) {
            res.status(409).json({
                code: 133, // 이미 있는 url주소의 사이트
                message: "이미 추가한 url입니다"
            })
        } else {
            Category.findOne({ _id: req.body.category_id }).then((category) => { // 프론트에서 카테고리의 id값을 받아와야 해
                if (!category) {
                    res.status(409).json({
                        code: 135, //사이트 추가시 카테고리_id 오류
                        message: "카테고리를 찾지 못하였습니다",

                    });
                } else {
                    const category = req.body.category_id;
                    const url = req.body.url;
                    const title = req.body.title;
                    const description = req.body.description;
                    const open = req.body.open;
                    // const like = req.body.like; // 처음에 default로 0으로 세팅해야 해

                    /*
                    const img = req.body.img;
                    const double_id = req.body.double_id;
                    const double_pw = req.body.double_pw;
                    const open = req.body.open;
                    // 이중 비밀번호를 어떻게 할까... 
                    */

                    if (!title) {
                        res.status(409).json({
                            code: 131, /// 사이트의 제목 미입력
                            message: '사이트의 제목이 입력되지 않았습니다'

                        });
                    }
                    else if (!url) {
                        res.status(409).json({
                            code: 132, /// 사이트의 url 미입력
                            message: '사이트의 url이 입력되지 않았습니다'
                        });
                    } // description와 img는 입력하지 않아도 상관 x
                    else {
                        const newSite = new Site({
                            category, title, url, description, open //img, double_id, double_pw, date 
                        });
                        newSite.save().then(result => {
                            res.status(201).json({
                                code: 230, // 사이트 추가 성공
                                message: "사이트 추가 성공",
                                savedSite: newSite
                            });
                        }).catch(err => {
                            console.log(err);
                            res.status(500).json({
                                code: 130, // 사이트 저장 실패
                                message: "서버측 에러입니다",
                                error: err
                            });
                        })
                    }

                }


            })
            .catch((err)=>{
                res.status(500).json({
                    code: 139, //사이트 추가시 MongoDB 에러
                    message: "서버측 에러입니다",
                    err: err
                })

            })
        }
    })

}
