const express = require("express");
const router = express();

const Order = require('../models/order');
const Product = require("../models/product");
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    Order
    .find()
    .select('id product')
    .populate('product', '_id name price')
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({message:err});
    });
});

router.get('/:orderID', (req, res, next) => {
    const order = Order.findById(req.params.orderID);
    order
    .then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(500).json({error: "nenhum pedido encontrado"});
        }
        
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
});

router.post('/', (req, res, next) => {
    const product = Product.findById(req.body.productId);

    product.then(result => {
        if(!result){
            res.status(500).json({error: "Produto nao encontrado"});
        }

        const order = new Order({
            _id: mongoose.Types.ObjectId(),
            quantity: req.body.quantity,
            product: req.body.productId
        });
    
        order
        .save()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({error: err});
        });
    }).catch(err => {
        res.status(500).json({error: err});
    })
});

router.patch('/:orderID', (req, res, next) => {
    res.status(200).json({
        "message" : "Atualizando pedido " + req.params.orderID
    });
});

router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        "message" : "Removendo pedido " + req.params.orderID
    });
});

module.exports = router;