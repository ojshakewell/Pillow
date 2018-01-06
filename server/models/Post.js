const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PostSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },

    password: {
        type: String,
        trim: true,
        required: true
    }
});

let User = mongoose.model('User', PostSchema);

module.exports = User;
 