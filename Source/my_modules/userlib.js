var userlib = function(){
    var self = this;

    self.kittyTest = function(done){
        var mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost/test');

        var Cat = mongoose.model('Cat', { name: String });

        var kitty = new Cat({ name: 'TestKitty' });
        kitty.save(function (err) {
            console.log('wtf');
            console.log(err);
            done(err);
        });
    };


    //var userModel = require('./dbmodels/userModel.js')

    self.CreateAccount = function(accountSettings, done){
//        var mongoose = require('mongoose');
//        mongoose.connect('mongodb://localhost/test');

        var userAccount = mongoose.model('userAccount', {
            username : String,
            password : String,
            firstName : String,
            lastName : String,
            emailAddress : String,
            active : Boolean
        });


        var newAccount = new userAccount(accountSettings);
        newAccount.save(function(err, newAccount){
            done(err, newAccount);
        });
    };


};

module.exports = new userlib();