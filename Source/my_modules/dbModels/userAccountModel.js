var userAccountModel = function(){
    var self = this;
    var mongoose = require('mongoose');

    self.model = mongoose.model('userAccount', {
        username : String,
        password : String,
        firstName : String,
        lastName : String,
        emailAddress : String,
        active : Boolean
    });
};

module.exports = new userAccountModel().model;
