var userlib = function(){
    var self = this,
        db = require('./db');

    self.CreateAccount = function(accountSettings, done){
        var newAccount = db.userAccountModel(accountSettings);
        newAccount.save(function(err, newAccount){
            done(err, newAccount);
        });
    };


};

module.exports = new userlib();