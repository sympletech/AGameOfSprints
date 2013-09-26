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

            userlib.CreateAccount(newAccount, function(err, newAccount){
                assert(newAccount._id !== null);
                done(err);
            });
        });
    });

});