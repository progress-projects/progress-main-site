var mongoose = require('lib/mongoose') ;
var Schema = mongoose.Schema;

var schema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

exports.User = mongoose.model('User', schema);