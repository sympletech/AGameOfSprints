var db = function(){
    var self = this,
        mongoose = require('mongoose'),
        fs = require('fs');

    self.connectionString = 'mongodb://localhost/test';
    mongoose.connect(self.connectionString);

    mongoose.connect = function(){
        var conn = self.mongoose.connection;
        conn.on('error', console.error.bind(console, 'connection error:'));
    };

    //Models
    self.userAccountModel = require('./dbModels/userAccountModel.js');


};

module.exports = new db();
