const router = require('express').Router();
const { render } = require('pug');
const controller = require('./login.controller');
const {verifyToken} = require('../middleware/jwt-verify');
// 이 부분은 나중에 사용자가 로그인해야 접근할수 있는 라우팅에 
// exports.OOO(verifytoken,(req, res) => 형태로 사용하면됩니다!


router.get('/get', controller.get);

router.post('/create', controller.login);


module.exports = router
