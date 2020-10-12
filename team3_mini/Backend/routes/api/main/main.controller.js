const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Site = require('../models/Site');
const Category = require('../models/Categories');
const jwt = require('jsonwebtoken');

exports.all_rank_title = (req, res) => {

    Site.find({ open: true }).sort({ like: 'desc' }).then(sites => {
        // console.log(site.title);
        const sites_rank = sites.map((site) => {
            return site.title
        })
        res.status(200).json({
            code: 304,
            sites_rank: sites_rank,
            message: "전체 사이트 순위 조회 성공"
        })

    }).catch(err => {
        res.status(409).json({
            code: 454,
            message: "전체 사이트 순위 조회 실패",
            err: err
        })

    })
}




exports.categories = (req, res) => {

    Category.find({}).lean()
        .then(categories => {
            res.status(200).json({
                code: 301,
                categories: categories,
                message: "커뮤니티 카테고리 정보 조회 성공"
            })
        }).catch(err => {
            res.status(409).json({
                code: 451,
                message: "커뮤니티 카테고리 정보 조회 실패",
                err: err
            })

        })
}

exports.sites = (req, res) => {

    Site.find({ open: true }).lean().populate('category_id').sort({ like: 'desc' })
        .then(sites => {
            res.status(200).json({
                code: 302,
                sites: sites,
                message: "커뮤니티 사이트 정보 조회 성공"
            })
        }).catch(err => {
            res.status(409).json({
                code: 452,
                message: "커뮤니티 사이트 정보 조회 실패",
                err: err
            })
        })
}

exports.category_site = (req, res) => {

    Site.find({ category_id: req.query.category_id, open: true }).sort({ like: 'desc' }).populate('category_id').lean()
        .then(cat_sites => {
            
            res.status(200).json({
                code: 303,
                category: cat_sites[0].category_id.name,
                category_sites: cat_sites,
                message: "커뮤니티 카테고리별 사이트 정보 조회 성공"
            })

        }).catch(err => {
            res.status(409).json({
                code: 453,
                message: "커뮤니티 카테고리별 사이트 정보 조회 실패",
                err: err
            })
        })
}

exports.user = (req, res) => {

    User.find({ _id: req.userData }).lean()
        .then(user => {
            res.status(200).json({
                code: 305,
                username: user[0].name, // 회원가입을 할때 name 속성 값도 기입한다. 
                message: "마이페이지 유저 이름 조회 성공"
            })

        }).catch(err => {
            res.status(409).json({
                code: 455,
                message: "마이페이지 유저 이름 조회 실패",
                err: err
            })
        })
}

exports.my_categories = (req, res) => {

    Category.find({ user: req.userData }).lean()
        .then(user_categories => {
            
            res.status(200).json({
                code: 306,
                user_categories: user_categories,
                message: "내 카테고리 조회 성공"
            })

        }).catch(err => {
            res.status(409).json({
                code: 456,
                message: "내 카테고리 조회 실패",
                err: err
            })
        })
}

exports.user_category_site = (req, res) => {

    Site.find({ category_id: req.query.category_id,user_id:req.userData }).sort({ like: 'desc' }).lean()
        .then(my_category_sites => {
            
            res.status(200).json({
                code: 307,
                my_category_sites: my_category_sites,
                message: "마이페이지 카테고리별 사이트 정보 조회 성공"
            })

        }).catch(err => {
            res.status(409).json({
                code: 457,
                message: "마이페이지 카테고리별 사이트 정보 조회 실패",
                err: err
            })
        })
}


exports.like_category_site = (req, res) => {

    Site.find({ category_id: req.query.category_id,like_user_id:req.userData }).sort({ like: 'desc' }).lean()
        .then(like_category_sites => {
            
            res.status(200).json({
                code: 308,
                like_category_sites: like_category_sites,
                message: "마이페이지 카테고리별 좋아요 사이트 정보 조회 성공"
            })

        }).catch(err => {
            res.status(409).json({
                code: 458,
                message: "마이페이지 카테고리별 좋아요 사이트 정보 조회 실패",
                err: err
            })
        })
}

exports.category_sites_rank = (req, res) => {

    Site.find({ category_id: req.query.category_id }).sort({ like: 'desc' }).lean()
        .then(category_sites_rank => {
            
            res.status(200).json({
                code: 309,
                category_sites_rank: category_sites_rank,
                message: "마이페이지 카테고리별 사이트 좋아요 랭킹 조회 성공"
            })

        }).catch(err => {
            res.status(409).json({
                code: 459,
                message: "마이페이지 카테고리별 사이트 좋아요 랭킹 조회 실패",
                err: err
            })
        })
}
