const router = require('express').Router();
const { render } = require('pug');
const controller = require('./siteInfo.controller');
const {verifyToken} = require('../../middleware/jwt-verify');
// 이 부분은 나중에 사용자가 로그인해야 접근할수 있는 라우팅에 
// exports.OOO(verifytoken,(req, res) => 형태로 사용하면됩니다!
const {upload} = require('../../middleware/S3_upload');



router.post('/create', verifyToken,upload.array('files'), controller.create);
router.delete('/delete',verifyToken, controller.delete);
router.get('/download', verifyToken, controller.download);
router.put('/like',verifyToken,controller.like);



// const Files = require('../../models/File');
// router.post('/files',verifyToken,upload.array('files'),(req,res)=>{
//     const files = req.files.map((files) => {
//         return files.key
//     })
//     console.log(files);
//     const newFile = new Files({
//         files
//     });
//     newFile.save().then(result => {
//         res.status(201).json({
//             code: 230, // 파일 추가 성공
//             message: "파일 추가 성공",
//             savedFile: newFile
//         })
//     });
// });
// router.delete('/deletefile',verifyToken,controller.deletefile);



module.exports = router
