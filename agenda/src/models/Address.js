const mongoose = require('mongoose');
const message = require("../config/messages");

const addressSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address_line_1: {
        type: String,
        required: [true, message.fn.replace("endereço", message.validation.REQUIRED)]
    },
    address_line_2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    zipcode: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Address', addressSchema);