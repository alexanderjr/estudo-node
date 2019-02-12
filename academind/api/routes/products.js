const express = require("express");
const router = express();
const checkAuth = require('../middleware/check-auth');

const Product = require('../models/product');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    Product.find()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({message:err});
    });
});

router.post('/', checkAuth, (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
    });

    product.save().then(result => {
        console.log(result);
        res.status(200).json({
            "message" : "Criando produto",
            createdProduct: result
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({message: err});
    });
});

router.get('/:productId', (req, res, next) => {
    const product = Product.findById(req.params.productId)
    .then(doc => {
        if(doc){
            res.status(200).json({"product" : doc });
        } else {
            res.status(404).json({"message" : "Produto não encontrado"});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: err});
    });
});

router.patch('/:productId', (req, res, next) => {
    console.log(req.params.productId);
    const product = Product.findByIdAndUpdate(req.params.productId, req.body, {new: true})
    .then(doc => {
        res.status(200).json({
            "product" : doc
        });
    })
    .catch(err => console.log(err));
});

router.delete('/:productId', (req, res, next) => {
    Product.findByIdAndDelete(req.params.productId)
    .then(result => {
        res.status(200).json({"message" : "Removido com sucesso"});
    })
    .catch(err => {
        res.status(500).json({"message" : "Erro ao remover"});
    });
});

module.exports = router;