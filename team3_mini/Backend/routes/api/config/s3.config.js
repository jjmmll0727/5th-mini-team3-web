//s3 연동
const AWS = require('aws-sdk');
const { EnvironmentCredentials } = require('aws-sdk');
//require('dotenv').config({path:__dirname + '\\' + '.env'});


const s3Client = new AWS.S3({
    accessKeyId: 'AKIAI2C3D5YENEYRL4ZA',
    secretAccessKey: '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',
    region : 'AP-NorthEast-2'
})



const s3 = {};
s3.s3Client = s3Client;
//s3.downloadParams = downloadParams;

module.exports = s3;