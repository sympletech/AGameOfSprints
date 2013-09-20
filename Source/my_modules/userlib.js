var userlib = function(){
    var self = this;

    self.SayHello = function(name) {
        console.log(name);
        return name;
    };
};

module.exports = new userlib();