const Contact = require("../models/Contact");
const Address = require("../models/Address");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const messages = require("../config/messages");
const fn = require("../lib/jwt");
// const obs = require("../observable/Contact");

module.exports = {
    async create(req, res, next){
        const token = fn.getToken(req);
        const user = fn.getUser(token);
        
        try {
            const contact = Contact.create({
                "name" : req.body.name,
                "birthday": req.body.birthday,
                "telephone": req.body.telephone,
                "email": req.body.email,
                "user" : user._id
            });
    
            contact
            .then(result => {
                if(result){
                     res.status(200).json({
                         message: messages.contact.SUCCESS_REGISTER,
                         data: result
                        });
                }
            })
            .catch(err => {
                 res.status(500).json({"message": messages.user.DEFAULT_ERROR});
            });
        } catch(err) {
            res.status(500).json({"message": messages.user.DEFAULT_ERROR});
        }
    },

    async update(req, res, next){
        try {
            const contact = Contact.findByIdAndUpdate(req.params.contact, req.body);
            contact.then(result => {
                if(result){
                     res.status(200).json({message: messages.contact.UPDATE_REGISTER, data: result});
                }
            })
            .catch(err => {
                 res.status(500).json({"message": messages.user.DEFAULT_ERROR});
            });
        } catch(err) {
            res.status(500).json({"message": messages.user.DEFAULT_ERROR});
        }
    },

    async delete(req, res, next){
        const token = fn.getToken(req);
        const user = fn.getUser(token);
        
        try {
            const contact = Contact.findOne({_id: req.params.contact});
            contact.then(result => {
                if(result){
                    const address = result.address;
                    result.remove();
                    for(let c = 0; c < address.length; c++){
                        Address.findByIdAndRemove(address[c]);
                    }
                }
                res.status(200).json({"message": messages.contact.REMOVE_REGISTER});
            }).catch(err => {
                res.status(500).json({"message": messages.contact.DEFAULT_ERROR});    
            })
        } catch(err) {
            res.status(500).json({"message": messages.contact.DEFAULT_ERROR});
        }
    },

    async index(req, res, next){
        const token = fn.getToken(req);
        const user = fn.getUser(token);
        const { page = 0} = req.query;
        
        try {
            const contacts = Contact
            .paginate({user: user._id}, {
                offset: page,
                limit: eval(process.env.PAGINATE),
                populate: 'address',
                select: 'name email birthday telephone'
            });
            
            contacts
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json({"message": err});
            });
        } catch(err) {
            res.status(500).json({"message": err});            
        }
    },

    async single(req,res, next){
        const token = fn.getToken(req);
        const user = fn.getUser(token);
        
        try {
            const contact = Contact.findOne({_id: req.params.contact, user: user._id}).populate('address');
            
            contact.then(result => {
                if(result){
                    res.status(200).json(result);
                    return;
                }

                res.status(500).json({"message": messages.contact.DEFAULT_ERROR});
            })
            .catch(err => {
                res.status(500).json({"message": messages.contact.DEFAULT_ERROR});
            });
        } catch(err) {
            res.status(500).json({"message": messages.contact.DEFAULT_ERROR});            
        }
    }
}