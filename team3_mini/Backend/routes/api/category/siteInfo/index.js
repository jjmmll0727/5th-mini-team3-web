const router = require('express').Router();
const { render } = require('pug');
const controller = require('./siteInfo.controller');
const {verifyToken} = require('../../middleware/jwt-verify');
// 이 부분은 나중에 사용자가 로그인해야 접근할수 있는 라우팅에 
// exports.OOO(verifytoken,(req, res) => 형태로 사용하면됩니다!



router.post('/create', verifyToken, controller.create);
router.delete('/delete',verifyToken, controller.delete);
router.post('/download', verifyToken, controller.download);
router.put('/like',verifyToken,controller.like);



module.exports = router
