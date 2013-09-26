describe('userlib Tests', function(){
    var userlib = require('../userlib');
    var assert = require('assert');

    describe('CreateAccount Tests', function(){

        it('should create a new account', function(done){
//            userlib.kittyTest(done);

            var newAccount = {
                username : 'testUser',
                password : '12345',
                firstName : 'test',
                lastName : 'user',
                emailAddress : 'test@abc.com',
                active : true
            };

            userlib.CreateAccount(newAccount, function(err, newAccount){
                assert.notEqual(newAccount._id, null, 'hello');
                done(err);
            });

        });


    });

});