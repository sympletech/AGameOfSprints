var settings = function(){
    var self = this;

    self.port = 3000;
    self.databasepath = "mongodb://localhost/AGameOfSprints";
    self.sessiondatabasepath = "mongodb://localhost/AGameOfSprints_Session";
};

module.exports = new settings();