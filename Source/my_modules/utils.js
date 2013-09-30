var utils = function(){
    var self = this;

    self.RollDice = function(lowValue, highValue){
        if(lowValue > highValue){
            throw 'low Value Cannot be greater than high value';
        }

        if(lowValue === highValue){
            return highValue;
        }else{
            var randRange = highValue - lowValue;
            var randValue = Math.floor(Math.random() * randRange);
            return randValue + lowValue;
        }

    };


};

module.exports = new utils();