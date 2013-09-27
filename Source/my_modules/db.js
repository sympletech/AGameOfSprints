var db = function(){
    var self = this,
        mongoose = require('mongoose'),
        fs = require('fs');

    self.connectionString = 'mongodb://localhost/test';
    mongoose.connection.on('error', function(err) {
        console.log('Connection Error : ' + err);
    });
    mongoose.connect(self.connectionString);

    //Models
    self.userAccountModel = require('./dbModels/userAccountModel.js');


};

module.exports = new db();
