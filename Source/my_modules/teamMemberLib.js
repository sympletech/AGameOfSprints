var teamMemberLib = function(){
    var self = this,
        shred = new (require('shred'))(),
        db = require('../database/db'),
        utils = require('./utils'),
        cryptools = require('cryptools');

    self.GenerateTeamMemberName = function(sex, done){
        shred.get({
            url : 'http://namey.muffinlabs.com/name.json?type=' + sex,
            headers: {
                Accept: "application/json"
            },
            on : {
                200: function(res){
                    done(res.content.data[0]);
                },
                response : function(res){
                    done(sex == 'male' ? 'John Smith' : 'Jane Smith');
                }
            }
        });
    };

    self.GenerateTeamMemberCategory = function(done){
        var catCount = db.teamMemberCategoryModel.count({}, function(err, count){
            var rand = Math.floor(Math.random() * count);
            db.teamMemberCategoryModel.findOne().skip(rand).exec(function(err, category){
                done(err, category._doc);
            });
        });
    };

    self.GenerateTeamMemberStats = function(teamMember, category, done){
        teamMember.attributes = {
            problemSolving : utils.RollDice(category.attributeRange.problemSolvingMin, category.attributeRange.problemSolvingMax),
            learnSkills : utils.RollDice(category.attributeRange.learnSkillsMin, category.attributeRange.learnSkillsMax),
            stressManagement : utils.RollDice(category.attributeRange.stressManagementMin, category.attributeRange.stressManagementMax)
        };

        teamMember.skills = {
            architecture : utils.RollDice(category.skillRange.architectureMin, category.skillRange.architectureMax),
            middleTier : utils.RollDice(category.skillRange.middleTierMin, category.skillRange.middleTierMax),
            uiUx : utils.RollDice(category.skillRange.uiUxMin, category.skillRange.uiUxMax),
            findBugs : utils.RollDice(category.skillRange.findBugsMin, category.skillRange.findBugsMax),
            testing : utils.RollDice(category.skillRange.testingMin, category.skillRange.testingMax)
        };
        done(teamMember);
    };

    self.GenerateTeamMember = function(done){
        var teamMember = {};
        var ticks = 'createTime_' + (new Date()).getTime();
        teamMember.generationHash = cryptools.sha256(ticks);
        teamMember.sex = (utils.RollDice(0,1)) === 0 ? 'male' : 'female';

        self.GenerateTeamMemberName(teamMember.sex, function(name){
            teamMember.name = name;
            self.GenerateTeamMemberCategory(function(err, category){
                teamMember.category = category.name;
                self.GenerateTeamMemberStats(teamMember, category, function(teamMember){
                    done(err, teamMember);
                });
            });
        });

    };
};

module.exports = new teamMemberLib();