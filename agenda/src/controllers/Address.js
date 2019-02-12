const Contact = require("../models/Contact");
const Address = require("../models/Address");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const messages = require("../config/messages");
const fn = require("../lib/jwt");

module.exports = {
    async create(req, res, next){
        const token = fn.getToken(req);
        const user = fn.getUser(token);
    
        const contact = Contact.findOne({_id: req.params.contact, user: user._id});

        contact
        .then(result => {
            if(result){
                const address = Address.create(req.body);
                
                address.then(resultAddress => {
                    result.address.push(resultAddress._id);
                    result.save();
                    res.status(500).json({"message": messages.address.SUCCESS_REGISTER});
                }).catch(err => {
                    res.status(500).json({"message": err});
                });
            }
        })
        .catch(err => {
            //messages.user.DEFAULT_ERROR
            res.status(500).json({"message": err});
        })
    },

    async delete(req, res, next){

        const token = fn.getToken(req);
        const user = fn.getUser(token);
    
        const contact = Contact.findOne({_id: req.params.contact, user: user._id});

        contact.then(result => {
            if(result){
                result.address.pop(req.params.address);
                result.save();
                // const address = Address.findById(req.params.address);

                res.status(200).json({"message": message.address.REMOVE_REGISTER});
                return;
            }
            res.status(500).json({"message": err});
        }).catch(err => {
            //messages.user.DEFAULT_ERROR
            res.status(500).json({"message": err});
        })
    }
}