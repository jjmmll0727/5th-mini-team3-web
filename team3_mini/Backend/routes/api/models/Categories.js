const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    
    user : { // 회원가입시 생성되는 고유아이디

        type: Schema.Types.ObjectId,
        ref: 'users'

    },
    
    name : {
        type: String,
        required: true
    }
    

});

module.exports = mongoose.model('categories',CategorySchema);
