var teamLib = function(){
    var self = this,
        db = require('./../database/db'),
        _ = require('underscore');

    self.CreateNewTeam = function(userAccount, teamName, done){
        var success = false,
            message = '';

        var CheckForExistingTeam = function(nextStep){
            var teamLookup = db.teamModel
                .findOne({
                    name: teamName,
                    userAccountId : userAccount._id
                },function(err, team){
                    if(team != null){
                        message = 'You Already Have A Team By This Name';
                        done(err, team, success, message);
                    }else{
                        nextStep();
                    }
                });
        };

        var CreateTeam = function(){
            var newTeam = db.teamModel({
                userAccountId: userAccount._id,
                name : teamName
            });

            newTeam.save(function(err, newTeam){
                success = err === null;
                message = success ? 'Team Created Successfully.' : 'There Was an error creating Team';
                done(err, newTeam, success, message);
            });
        };

        CheckForExistingTeam(function(){
            CreateTeam();
        });
    };


    self.AddMemberToTeam = function(team, member, done){
        var success = false,
            message = '';

        var CheckToEnsureMemberNotOnTeam = function(nextStep){
            var alreadyOnTeam = _.find(team.teamMembers, function(tMember){
                return tMember.generationHash === member.generationHash;
            });
            if(alreadyOnTeam){
                message = "Member Is Already On The Team";
                done(err, team, success, message);
            }else{
                nextStep();
            }
        };

        var CheckToEnsureTeamIsNotFull = function(nextStep){
            if(team.teamMembers.length > 5){
                message = "Your Team Is Already At Capacity";
                done(err, team, success, message);
            }else{
                nextStep();
            }
        };

        var AddMember = function(){
            team.teamMembers.push(member);
            team.save(function(err, updatedTeam){
                success = err === null;
                message = success ? 'Member added successfully.' : 'There Was an error adding member';
                done(err, updatedTeam, success, message);
            });
        };

        CheckToEnsureMemberNotOnTeam(function(){
            CheckToEnsureTeamIsNotFull(function(){
                AddMember();
            });
        });
    };
}

module.exports = new teamLib();

