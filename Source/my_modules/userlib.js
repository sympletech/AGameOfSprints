var userlib = function(){
    var self = this,
        db = require('./db'),
        cryptools = require('cryptools');

    self.CreateAccount = function(accountSettings, done){

        var accountLookup = db.userAccountModel
            .findOne({
                'emailAddress' : accountSettings.emailAddress,
                'active'   : true},
            function(err, account){
                var accountExists = account != null;
                if(accountExists){
                    done(err, account, 'Account Already Exists For : ' + accountSettings.emailAddress);
                }else{
                    accountSettings.password = cryptools.sha256(accountSettings.password);

                    var newAccount = db.userAccountModel(accountSettings);
                    newAccount.save(function(err, newAccount){
                        done(err, newAccount, 'Account Created Successfully');
                    });
                }
            });


    };

    self.AuthenticateUser = function(username, password, done){
        password = cryptools.sha256(password);
        var accountLookup = db.userAccountModel
            .findOne({
                'username' : username,
                'password' : password,
                'active'   : true},
            function(err, account){
                done(err, account != null);

            });
    };

    self.DeleteUserAccount = function(id, done){
        db.userAccountModel.findById(id, function(err, account){
            var found = account !== null;
            if(found){
                account.remove();
            }
            done(err, found);
        });
    };


};

module.exports = new userlib();