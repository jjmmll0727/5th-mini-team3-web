const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    userId : {

        type: String,
        required: true,
        unique: true

    },
    password : {

        type: String,
        required: true,
        trim : true

    },
    birth : {
        type: String,
        required: true,
        trim: true
    },
    email : {

        type: String,
        required: true

    },
    phone : {

        type: String,
        required: true
    },
    homephone : {

        type: String

    }

});

module.exports = mongoose.model('users',UserSchema);
