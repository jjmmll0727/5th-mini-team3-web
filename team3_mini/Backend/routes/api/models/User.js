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
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    },
    phone : {

        type: String,
        required: true,
        match: /^((01[016789]{1}|070|02|0[3-9]{1}[0-9]{1})-[0-9]{3,4}-[0-9]{4})|((01[016789]{1}|070|02|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4})$/

        
    },
    homephone : {

        type: String,
        match: /^((01[016789]{1}|070|02|0[3-9]{1}[0-9]{1})-[0-9]{3,4}-[0-9]{4})|((01[016789]{1}|070|02|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4})$/


    }

});

module.exports = mongoose.model('users',UserSchema);
