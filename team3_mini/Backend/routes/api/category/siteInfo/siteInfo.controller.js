// 사이트 추가에 대한 로직구현

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Site = require('../../models/Site');
const Category = require('../../models/Categories');

// file download from s3
const Minio = require('minio');
const stream = require('stream');

const fs = require('fs');
const s3_download = require('../../config/s3.config');
const AWS = require('aws-sdk');
const { EnvironmentCredentials } = require('aws-sdk');

const s3_upload = new AWS.S3({
    accessKeyId: 'AKIAI2C3D5YENEYRL4ZA',
    secretAccessKey: '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',
    region : 'AP-NorthEast-2'
})

// const uploadfFile = (fileName) =>{
//     const fileContent = fs.readFileSync(fileName);
//     const param = {
//         'Bucket': 'restoreimage',
//         'ACL': 'public-read',
//         'Key': 'image/' + Date.now() + 'texttt.txt',
//         'Body': 'fileContent'
//         //'ContentType':'file/png'
//     };
//     s3.upload(param, function(err, data){
//         console.log(err);
//         console.log(data);
//     });
// };



exports.create = (req, res) => {
    const category_id = req.body.category_id; // 카테고리테이블의 document의 고유id 
    const url = req.body.url;
    const title = req.body.title;
    const description = req.body.description;
    const open = req.body.open;
    const user_id = req.userData;
    const file = req.body.file; // 로컬의 파일 위치가 담긴다.  
    // description와 img는 입력하지 않아도 상관 x

    //같은 유저가 같은 url을 입력하지 못하게 막음
    //다른 유저가 같은 url 입력하는건 ㄱㅊ
    
    

    if (!category_id || !url || !title || !description || !open) {
        res.status(409).json({
            code: 131, // 사이트추가시, 필수 입력값 미입력
            message: "필수 입력값이 누락되었습니다"
        })
    } else {

        Site.find({ user_id : req.userData }).then(site_url => {
            let urlArray = new Array();
            let i = 0;
            while (i < site_url.length) {
                urlArray[i] = site_url[i].url;
                i++;             
            }
            
            if(urlArray.includes(url)){
                res.status(409).json({
                    code: 133, // 사용자가 이미 url주소의 사이트
                    message: "사용자가 이미 추가한 url입니다"
                })
            }else{
                const newSite = new Site({
                    category_id, user_id, title, url, description, open //img, double_id, double_pw, date 
                });

                newSite.save().then(result => {
                    res.status(201).json({
                        code: 230, // 사이트 추가 성공
                        message: "사이트 추가 성공",
                        savedSite: newSite
                    });

                    // newSite 저장하면서 _id로 파일명 설정하여 s3에 저장 -- start
                    const uploadfFile = (fileName) =>{
                        const fileContent = fs.readFileSync(fileName);
                        const param = {
                            'Bucket': 'restoreimage',
                            'ACL': 'public-read',
                            'Key': 'image/' + newSite._id + '.txt',
                            'Body': fileContent // s3에 업로드 되는 파일 
                            //'ContentType':'file/png'
                        };
                        s3_upload.upload(param, function(err, data){
                            console.log(err);
                            console.log(data);
                        });
                    };
                    uploadfFile(file);
                    // end

                }).catch(err => {
                    console.log(err);
                    res.status(500).json({
                        code: 130, // 사이트 저장 실패
                        message: "서버측 에러입니다",
                        error: err
                    });
                })
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

exports.delete = (req,res)=>{

    Site.deleteOne({_id : req.body.id}).then( // req.body.id --> 사이트의 id
        result =>{
            res.status(200).json({
                code: 231, //사이트 삭제 성공
                message: "사이트를 성공적으로 삭제하였습니다",
                result : result
            })

        }
    ).catch((err)=>{
        res.status(500).json({
            code: 136, //사이트 db _id 오류
            message: "서버측 에러입니다",
            err:err
        })

    })
};

exports.download = (req, res) => {
    const s3Client = s3_download.s3Client;
    const params = s3_download.downloadParams;

    params.key = req.params.id + '.txt';

    s3Client.getObject(params).createReadStream().on('error', function(err){
        res.status(500).json({
            error: "error -> " + err
        });
    }).pipe(res);
}

