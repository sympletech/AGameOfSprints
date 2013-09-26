var db = function(){
    var self = this;

    self.mongoose = require('mongoose');
    self.mongoose.connect('mongodb://localhost/test');


    self.connect = function(onConnected){


        var conn = self.mongoose.connection;
        conn.on('error', console.error.bind(console, 'connection error:'));
        conn.once('open', function(){
            onConnected();
        });
    };




};

module.exports = new db();
