var teamMemberCategoryModel = function(){
    var self = this,
        mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    self.model = mongoose.model('TeamMemberCategory', {
        name : String,
        attributeRange : {
            problemSolvingMin : Number,
            problemSolvingMax : Number,
            learnSkillsMin : Number,
            learnSkillsMax : Number,
            frustrationFactorMin : Number,
            frustrationFactorMax : Number
        },
        skillRange : {
            architectureMin : Number,
            architectureMax : Number,
            middleTierMin : Number,
            middleTierMax : Number,
            uiUxMin : Number,
            uiUxMax : Number,
            findBugsMin : Number,
            findBugsMax : Number,
            testingMin : Number,
            testingMax : Number
        }
    });
};

module.exports = new teamMemberCategoryModel().model;