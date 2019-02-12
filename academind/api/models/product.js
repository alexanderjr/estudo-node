const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, "Preencha o campo nome"]
    },
    price: {
        type: Number,
        required: [true, "Preencha o campo preço corretamente"]
    }
});

module.exports = mongoose.model('Product', productSchema);