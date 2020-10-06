const router = require('express').Router();
const { render } = require('pug');
const controller = require('./main.controller');
const {verifyToken} = require('../middleware/jwt-verify');

router.get('/all_rank_title', controller.all_rank_title);
router.get('/community/categories', verifyToken, controller.categories);
router.get('/community/sites', verifyToken, controller.sites);
router.get('/community/category_site', verifyToken, controller.category_site);
router.get('/mypage/user',verifyToken,controller.user);
router.get('/mypage/my_categories',verifyToken,controller.my_categories);
router.get('/mypage/user_category_site',verifyToken,controller.user_category_site);
router.get('/mypage/like_category_site',verifyToken,controller.like_category_site);
router.get('/mypage/category_sites_rank',verifyToken,controller.category_sites_rank);






module.exports = router
