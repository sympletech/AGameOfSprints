describe('teamLib Tests', function(){
    var teamLib = require('../teamLib'),
        userLib = require('../userLib'),
        assert = require('better-assert'),
        db = require('../../database/db'),
        _ = require('underscore'),
        mocks = require('./mocks');

    it('CreateNewTeam Tests', function(done){
        userLib.CreateAccount(mocks.testUser('Create_Team'), function(err, account, success, message){
            assert(success === true);

            teamLib.CreateNewTeam(account, 'Create_Team', function(err, team, success, message){
                team.remove();
                account.remove();
                done(err);
            });
        });
    });

    it('AddTeamMember Test', function(done){
        userLib.CreateAccount(mocks.testUser('Add_Team_Member'), function(err, account, success, message){
            assert(success === true);

            teamLib.CreateNewTeam(account, 'Add_Team_Member', function(err, team, success, message){

                var testTeamMember = mocks.testTeamMember('NewMember');
                teamLib.AddMemberToTeam(team, testTeamMember, function(err, team, success, message){

                    var memberOnTeam = _.find(team.teamMembers, function(tMember){
                        return tMember.generationHash === testTeamMember.generationHash;
                    });
                    assert(memberOnTeam);

                    team.remove();
                    account.remove();
                    done(err);
                });
            });
        });
    });
});