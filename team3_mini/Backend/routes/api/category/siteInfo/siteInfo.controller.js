// 사이트 추가에 대한 로직구현

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Site = require('../../models/Site');

exports.create = (req, res) => {
    Site.findOne({ url: req.body.url }).then(url =>{
        if(url){
            res.status(409).json({
                code: 113, // 이미 있는 url주소의 사이트를 추가하려고 함
                message: "이미 추가한 url입니다"
            })
        }else{
           
            const category = req.params.category_id; // todo1: 수정해야해. ex) router.get('api/category/:category_id')
            const url = req.body.url;
            const title = req.body.title;
            const description = req.body.description;
            const open = req.body.open;
            const like = req.body.like; // 처음에 default로 0으로 세팅해야 해

            /*
            const img = req.body.img;
            const double_id = req.body.double_id;
            const double_pw = req.body.double_pw;
            const open = req.body.open;
            // 이중 비밀번호를 어떻게 할까... 
            */
             
            if(!title){
                res.status(409).json({
                    code: 111, /// 사이트의 이름 미입력
                    message: '사이트의 이름이 입력되지 않았습니다'

                });
            }
            else if(!url){
                res.status(409).json({
                    code: 111, /// 사이트의 이름 미입력
                    message: '사이트의 이름이 입력되지 않았습니다'
                });
            } // description와 img는 입력하지 않아도 상관 x
            else{
                const newSite = new Site({
                   category, title, url, description, open, like //img, double_id, double_pw, date 
                });
                newSite.save().then(result => {
                    res.status(201).json({
                        code: 211, // 사이트 추가 성공
                        message: "사이트 추가 성공",
                        savedSite: newSite
                    });
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({
                        code: 112, // 사이트 저장 실패
                        error: err
                    });
                })
            }
            

        }
    })
    
}

