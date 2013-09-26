describe('userlib Tests', function(){
    var userlib = require('../userlib');
    var assert = require('better-assert');

    describe('CreateAccount Tests', function(){

        it('should create a new account', function(done){
            var newAccount = {
                username : 'testUser',
                password : '12345',
                firstName : 'test',
                lastName : 'user',
                emailAddress : 'test@abc.com',
                active : true
            };

            userlib.CreateAccount(newAccount, function(err, newAccount, message){
                assert(message === 'Account Created Successfully');
                userlib.DeleteUserAccount(newAccount._id, function(err, found){
                    assert(found);
                    done(err);
                });
            });
        });

        it('should be able to authenticate an account', function(done){
            var newAccount = {
                username : 'testUser',
                password : '12345',
                active : true
            };

            userlib.CreateAccount(newAccount, function(err, newAccount){
                assert(newAccount._id !== null);

                userlib.AuthenticateUser('testUser', '12345', function(err, isValid){
                    assert(isValid === true);

                    userlib.DeleteUserAccount(newAccount._id, function(err, found){
                        assert(found);
                        done(err);
                    });
                });
            });
        });


    });

});