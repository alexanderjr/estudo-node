const mongoose = require('mongoose');
const message = require("../config/messages");
var mongoosePaginate = require('mongoose-paginate-v2');


const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: false
    },
    telephone: {
        type: String,
        required: [true, message.fn.replace("telefone", message.validation.REQUIRED)]
    },
    email: {
        type: String,
        required: [true, message.fn.replace("email", message.validation.REQUIRED)],
        match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true   
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: false
    }]
});

contactSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Contact', contactSchema);

