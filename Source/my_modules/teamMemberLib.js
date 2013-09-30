var teamMemberLib = function(){
    var self = this,
        shred = new (require('shred'))(),
        db = require('../database/db'),
        utils = require('./utils'),
        cryptools = require('cryptools'),
        fs = require('fs'),
        _ = require('underscore');

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

    self.GenerateTeamMemberImage = function(sex, excludeImages, done){
        var rootPath = __dirname.replace('my_modules', '');
        var imageDir = rootPath + 'public\\images\\teamMembers\\' + sex;

        fs.readdir(imageDir, function(err, files){
            var usableFiles = _.without(files, excludeImages.join(","));
            var count = usableFiles.length;
            var i = utils.RollDice(0,count - 1);

            var filePath = 'images/teamMembers/' + sex + '/' + usableFiles[i];

            done(filePath);
        });
    };

    self.GenerateTeamMemberCategory = function(categoryName, done){
        db.teamMemberCategoryModel.findOne({name : categoryName}, function(err, category){
            done(err, category._doc);
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

    self.GenerateTeamMember = function(category, excludeImages, done){
        var teamMember = {};
        var ticks = 'createTime_' + (new Date()).getTime();
        teamMember.generationHash = cryptools.sha256(ticks);
        teamMember.sex = (utils.RollDice(0,1)) === 0 ? 'male' : 'female';

        self.GenerateTeamMemberName(teamMember.sex, function(name){
            teamMember.name = name;

            self.GenerateTeamMemberImage(teamMember.sex, excludeImages, function(imagePath){
                teamMember.imagePath = imagePath;

                self.GenerateTeamMemberCategory(category, function(err, category){
                    teamMember.category = category.name;
                    self.GenerateTeamMemberStats(teamMember, category, function(teamMember){
                        done(err, teamMember);
                    });
                });
            });
        });

    };
};

module.exports = new teamMemberLib();