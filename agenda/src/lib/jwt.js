const jwt = require("jsonwebtoken");

module.exports = {
    getToken: function(req){
        try {
            return req.headers.authorization.split(" ")[2];
        }catch(err){
            return false;
        }
    },

    getUser: function(token){
        try {
            return jwt.decode(token, process.env.JWT_KEY);
        }catch(err){
            return false;
        }
    }
}