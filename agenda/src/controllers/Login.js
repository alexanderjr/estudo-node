const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const messages = require("../config/messages");

module.exports = {
    async signup(req, res, next){
        try {
            const findUser = User.find({email: req.body.email});

            findUser.then(result => {
                if(result.length){
                    return res.status(500).json({"message" : messages.user.USER_ALREADY_EXIST});
                }

                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if(err){
                        return res.status(500).json({"message" : messages.user.DEFAULT_ERROR});
                    }

                    const user = User.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: hash,
                    });

                    user.then(result => {
                        if(result){
                            res.status(200).json({
                                "message": messages.user.SUCCESS_REGISTER,
                                "data" : result
                            });
                        }
                    }).catch(err => {
                        res.status(500).json({"message": messages.user.DEFAULT_ERROR});
                    });
                });
            })
            .catch();
            
        } catch(err){
            res.status(500).json({"message" : messages.user.DEFAULT_ERROR});
        }
    },
    
    async login(req, res, next) {
        const user = User.find({email: req.body.email});
        user.then(user => {
            if(!user.length){
                res.status(500).json({message: "Nenhum usuário encontrado"});
            }

            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if(!result){
                    return res.status(500).json({message: messages.user.EMAIL_PASSWORD_INVALID});
                }

                const {name, email, _id} = user[0];
                
                return res.status(200).json({
                    token: jwt.sign({name: name, email: email, _id: _id}, process.env.JWT_KEY, {expiresIn: '1h'})
                });

            });

        })
        .catch(err => {
            res.status(500).json({message: messages.user.DEFAULT_ERROR});
        });
    },

    async logout(req, res, next) {
    }
}