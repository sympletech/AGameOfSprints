describe('utils Tests', function(){
    var utils = require('../utils'),
        assert = require('better-assert');

    it('Roll Dice Test', function(){
        var result = utils.RollDice(50,60);
        assert(result >= 50 && result <= 60);
    });
});