var teamMemberModel = function(){
    var self = this,
        mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    self.model = mongoose.model('TeamMember', {
        generationHash : String,            //Unique Hash Created When Member is Generated to prevent adding same member
        name : String,
        sex : String,
        category : String,
        imagePath : String,
        attributes : {
            problemSolving : Number,
            learnSkills : Number,
            stressManagement : Number
        },
        skills : {
            architecture : Number,
            middleTier : Number,
            uiUx : Number,
            findBugs : Number,
            testing : Number
        }
    });
};

module.exports = new teamMemberModel().model;
