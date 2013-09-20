describe('userlib Tests', function(){
    var userlib = require('../userlib');
    var assert = require('assert');
    describe('hello', function(){

        it('should return -1 when the value is not present', function(){
            assert.equal(userlib.SayHello('bob'), 'bob');
        });


    });

});