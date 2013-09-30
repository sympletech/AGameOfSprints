var db = function(){
    var self = this,
        mongoose = require('mongoose'),
        fs = require('fs'),
        settings = require('../settings');

    self.connectionString = settings.databasepath;
    mongoose.connection.on('error', function(err) {
        console.log('Connection Error : ' + err);
    });
    mongoose.connect(self.connectionString);

    //Models
    self.userAccountModel = require('./models/userAccountModel');
    self.teamModel = require('./models/teamModel');
    self.teamMemberModel = require('./models/teamMemberModel');
    self.teamMemberCategoryModel = require('./models/teamMemberCategoryModel');


};

module.exports = new db();
