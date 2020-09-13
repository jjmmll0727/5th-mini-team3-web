// 회원가입에 대한 로직구현

//get & post

const express = require('express');
const router = express.Router();
const crypto = require("crypto");

exports.get = (req, res) => {
    res.send('here is for sign_up');
}
