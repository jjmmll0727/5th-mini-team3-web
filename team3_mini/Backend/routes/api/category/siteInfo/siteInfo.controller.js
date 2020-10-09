// 사이트 추가에 대한 로직구현

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Site = require('../../models/Site');
const Category = require('../../models/Categories');

// file download from s3
const { s3 } = require('../../middleware/S3_upload')



exports.create = (req, res) => {
    const category_id = req.body.category_id; // 카테고리테이블의 document의 고유id 
    const url = req.body.url;
    const title = req.body.title;
    const description = req.body.description;
    const user_id = req.userData;
    const open = req.body.open;
    //같은 유저가 같은 url을 입력하지 못하게 막음
    //다른 유저가 같은 url 입력하는건 ㄱㅊ

    if (!category_id || !url || !title || !description || open === null) {
        res.status(409).json({
            code: 131, // 사이트추가시, 필수 입력값 미입력
            message: "필수 입력값이 누락되었습니다"
        })
    } else {

        Site.find({ user_id: req.userData }).then(site_url => {
            let urlArray = new Array();
            let i = 0;
            while (i < site_url.length) {
                urlArray[i] = site_url[i].url;
                i++;
            }

            if (urlArray.includes(url)) {
                res.status(409).json({
                    code: 133, // 사용자가 이미 url주소의 사이트
                    message: "사용자가 이미 추가한 url입니다"
                })
            } else {
                if (!req.files) {
                    const newSite = new Site({
                        category_id, user_id, title, url, description, open
                    });
                    newSite.save().then(result => {
                        res.status(201).json({
                            code: 230, // 사이트 추가 성공
                            message: "사이트 추가 성공",
                            savedSite: newSite
                        });


                    }).catch(err => {
                        // console.log(err);
                        res.status(500).json({
                            code: 130, // 사이트 저장 실패
                            message: "서버측 에러입니다",
                            error: err
                        });
                    })
                } else {

                    const files = req.files.map((files) => {
                        return files.key
                    })
                    const newSite = new Site({
                        category_id, user_id, title, url, description, open,
                        files //img, double_id, double_pw, date 
                    });

                    newSite.save().then(result => {
                        res.status(201).json({
                            code: 230, // 사이트 추가 성공
                            message: "사이트 추가 성공",
                            savedSite: newSite
                        });


                    }).catch(err => {
                        // console.log(err);
                        res.status(500).json({
                            code: 130, // 사이트 저장 실패
                            message: "서버측 에러입니다",
                            error: err
                        });
                    })
                }
            }

        }).catch((err) => {
            res.status(500).json({
                code: 139, //사이트 추가시 MongoDB 에러
                message: "서버측 에러입니다",
                err: err
            })

        })
    }

}

exports.delete = (req, res) => {

    Site.findOne({ _id: req.body.id }).then(result => {
        let i = 0;
        while (i <= result.files.length) {
            const params = {
                Bucket: "restoreimage",
                Key: result.files[i]
            };
            s3.deleteObject(params)
            i++;
        }
    })
    Site.deleteOne({ _id: req.body.id }).then( // req.body.id --> 사이트의 id
        result => {
            res.status(200).json({
                code: 231, //사이트 삭제 성공
                message: "사이트를 성공적으로 삭제하였습니다",
                result: result
            })

        }
    ).catch((err) => {
        res.status(500).json({
            code: 136, //사이트 db _id 오류
            message: "서버측 에러입니다",
            err: err
        })

    })
};

// const File = require('../../models/File')
// exports.deletefile = (req, res) => {
//     File.findOne({ _id: req.body.id }).then(result => {
//         console.log(result.files);
//         const { s3 } = require('../../middleware/S3_upload')
//         let i = 0;
//         while(i <= result.files.length){
//         const params = {
//             Bucket: "restoreimage",
//             Key: result.files[i]
//         };
//         s3.deleteObject(params, (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         })
//         i++;
//     }
//     res.json("success")
//     })
//     File.deleteOne({ _id: req.body.id });
// }

exports.download = (req, res) => { // id --> 업로드된 파일의 이름(site의 id+txt와 동일해)
    const params = {
        Bucket: "restoreimage",
        Key: req.query.filename
    };
    // console.log(s3)
    //const result = 
    s3.getObject(params).createReadStream().on('error', (err) => {
        res.status(409).json({
            code: 132,
            message : "서버측 오류입니다",
            error: err
        })
    }).pipe(res);

}

exports.like = (req, res) => {
    Site.findOne({ _id: req.body.id }) // 내가 좋아요를 누를지 말지 정하는 사이트 --> site table의 
        .then((site) => {

            if (site.like_user_id.includes(req.userData)) {
                site.like = site.like - 1; // 좋아요 누른거를 다시 누르면 좋아요 해제 --> site테이블에서 like_user_id 속성에서 userData 제외
                site.like_user_id.pull(req.userData);
                site.save().then(result => {
                    res.status(200).json({
                        code: 235, //좋아요 취소
                        message: "사이트 '좋아요'를 취소하였습니다",
                        like: site.like
                    });
                })

            } else { // 내가 좋아요를 누르지 않았다면 
                site.like_user_id.push(req.userData);
                site.like = site.like + 1;
                site.save().then(result => {
                    res.status(200).json({
                        code: 236, //좋아요
                        message: "사이트를 '좋아요' 하였습니다",
                        like: site.like
                    });
                })
            }
        }).catch(err => {
            res.status(500).json({
                code: 133, //사이트 좋아요시 _id 오류
                message: "사이트를 찾지 못하였습니다",
                err: err
            });
        })
}



