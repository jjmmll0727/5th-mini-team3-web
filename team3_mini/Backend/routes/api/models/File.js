const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    
    
    files : [{
        type: String      
    }]


});

module.exports = mongoose.model('files', FileSchema);
