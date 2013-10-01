var teamModel = function(){
    var self = this,
        mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    self.model = mongoose.model('Team', {
        userAccountId : { type : Schema.Types.ObjectId, ref : 'UserAccount'},
        name : String,
        teamMembers : [],
        skillsLab : [],
        createdOn : Date,
        retired : Boolean,
        retiredOn : Date
    });


};

module.exports = new teamModel().model;