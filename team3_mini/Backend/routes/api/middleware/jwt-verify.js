const jwt = require('jsonwebtoken');

module.exports = {


    verifyToken: function (req, res, next) {

        // const token = req.cookies['authorization']
        const token = req.body.token;

        if (token == null) {
            return res.status(401).json({
                message: '인증 실패'
            });
        } else {
            jwt.verify(token, 'secretKey', (err, userData) => {
                if (err) return res.status(401).json({
                    message: '인증 실패'
                });

                if (userData) {
                    req.userData = userData;
                    //미들웨어에서 변수를 넘김
                    next();

                }


            })
        }

    }
};