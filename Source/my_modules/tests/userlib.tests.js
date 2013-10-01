describe('userLib Tests', function(){
    var userLib = require('../userLib'),
        teamLib = require('../teamLib'),
        assert = require('better-assert'),
        mocks = require('./mocks');

    describe('CreateAccount Tests', function(){

        it('should create a new account', function(done){
            var newAccount = mocks.testUser('create_new_account');
            userLib.CreateAccount(newAccount, function(err, account, success, message){
                assert(success === true);
                teamLib.DeleteTeam(account._id, newAccount.teamName, function(){
                    account.remove();
                    done(err);
                });

            });
        });

        it('should be able to authenticate an account', function(done){
            var newAccount = mocks.testUser('authenticate_account');
            userLib.CreateAccount(newAccount, function(err, account, success, message){
                assert(success === true);

                userLib.AuthenticateUser(newAccount.username, newAccount.password, function(err, success, message, account){
                    assert(success === true);
                    teamLib.DeleteTeam(account._id, newAccount.teamName, function(){
                        account.remove();
                        done(err);
                    });
                });
            });
        });


    });

});