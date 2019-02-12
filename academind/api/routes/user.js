const express = require("express");
const router = express();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

router.post('/signup', function(req, res, next){
    bcrypt.hash(req.body.password,10, (err, hash) => {
        if(err){
            return res.status(500).json({"message" : err});
        }else{
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash
            });

            user
            .save()
            .then(result => {res.status(200).json(user);})
            .catch(err => res.status(500).json({message:err}));
        }
    });
});

router.post('/login', function(req, res, next){
    User.find({email: req.body.email})
    .then(user => {
        if(user.length < 1){
            res.status(401).json({message: "User not found"});    
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            console.log(err)
            if(err){
                return res.status(401).json({message: "Email or password invalid"});    
            }
            
            if(user){
                const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                }, 
                process.env.JWT_KEY, {
                    expiresIn: "1h"
                })

                return res.status(200).json({message: "Auth success", token: token});    
            }

            return;
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: err});
    });
});

module.exports = router;