const mongoose = require('mongoose');
const message = require("../config/messages");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, message.fn.replace("email", message.validation.REQUIRED)],
        unique: true,
        match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);