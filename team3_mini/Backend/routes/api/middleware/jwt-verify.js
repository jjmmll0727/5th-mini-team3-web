const jwt = require('jsonwebtoken');

module.exports = {

    verifyToken: function (req, res, next) {
        // console.log('req.header : ', req.headers)
        // const token = req.cookies['authorization']
        const token = req.headers['authorization'];

        if (token == null) {
            return res.status(401).json({
                code: 109, // 토큰 만료
                message: '인증 실패'
            });
        } else {
            jwt.verify(token, 'secretKey', (err, userData) => {
                if (err) return res.status(401).json({
                    code: 108, // 토큰 인증 실패
                    message: '인증 실패'
                });

                if (userData) {
                    req.userData = userData['user']._id;
                    //미들웨어에서 변수를 넘김
                    next();

                }


            })
        }

    }
};