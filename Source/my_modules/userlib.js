var userlib = function(){
    var self = this,
        db = require('./db'),
        cryptools = require('cryptools');

    self.CreateAccount = function(accountSettings, done){
        var success = false,
            message = '';

        var CheckForExistingEmail = function(nextStep){
            var accountLookup = db.userAccountModel
                .findOne({
                    'emailAddress' : accountSettings.emailAddress,
                    'active'   : true},
                function(err, account){
                    if(account !== null){
                        message = 'Account Already Exists For : ' + accountSettings.emailAddress;
                        done(err, account, success, message);
                    }else{
                        nextStep();
                    }
                });
        };

        var CheckForExistingUserName = function(nextStep){
            var accountLookup = db.userAccountModel
                .findOne({
                    'username' : accountSettings.username,
                    'active'   : true},
                function(err, account){
                    if(account !== null){
                        message = 'Username is Already In Use.';
                        done(err, account, success, message);
                    }else{
                        nextStep();
                    }
                });
        };

        var CreateAccount = function(){
            accountSettings.password = cryptools.sha256(accountSettings.password);

            var newAccount = db.userAccountModel(accountSettings);
            newAccount.active = true;

            newAccount.save(function(err, newAccount){
                done(err, newAccount, true, 'Account Created Successfully');
            });
        }

        CheckForExistingEmail(function(){
            CheckForExistingUserName(function(){
                CreateAccount();
            });
        });

    };

    self.AuthenticateUser = function(username, password, done){
        password = cryptools.sha256(password);
        var accountLookup = db.userAccountModel
            .findOne({
                'username' : username,
                'active'   : true},
            function(err, account){
                var message = '',
                    success = false,
                    accountExists = account != null;

                if(!accountExists){
                    message = 'No Account Found For Username';
                }else{
                    success = account.password === password;
                    if(!success){
                        message = 'Invalid Password';
                    }
                }

                done(err, success, message, account);

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