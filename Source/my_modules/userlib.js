var userLib = function(){
    var self = this,
        db = require('../database/db'),
        cryptools = require('cryptools'),
        teamLib = require('./teamLib');

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
            var newAccount = db.userAccountModel(accountSettings);
            newAccount.password = cryptools.sha256(accountSettings.password);
            newAccount.active = true;

            newAccount.save(function(err, newAccount){
                teamLib.CreateNewTeam(newAccount, accountSettings.teamName, function(){
                    done(err, newAccount, true, 'Account Created Successfully');
                });
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
                'active'   : true})
            .select('_id username firstName lastName password')
            .exec(function(err, account){
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
                account.password = '';
                done(err, success, message, account);

            });
    };
};

module.exports = new userLib();