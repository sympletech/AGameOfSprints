describe('teamLib Tests', function(){
    var teamMemberLib = require('../teamMemberLib'),
        assert = require('better-assert');

    it("GenerateTeamMemberName Test", function(done){
        teamMemberLib.GenerateTeamMemberName('female', function(name){
            assert(name !== null);
            done();
        });
    });

    it("GenerateTeamMemberImage Test", function(done){
        teamMemberLib.GenerateTeamMemberImage('male', [], function(imgUrl){
            assert(imgUrl !== null);
            done();
        });
    });

    it("GenerateTeamMemberImageExclude Test", function(done){
        teamMemberLib.GenerateTeamMemberImage('male', ['wh10.jpg'], function(imgUrl){
            assert(imgUrl !== 'wh10.jpg');
            done();
        });
    });

    it("GenerateTeamMemberCategory Test", function(done){
        teamMemberLib.GenerateTeamMemberCategory('codeMonkey', function(err, category){
            assert(category.name == 'codeMonkey');
            done(err);
        });
    });

    it("GenerateTeamMember Test", function(done){
        teamMemberLib.GenerateTeamMember('QA Tester',[],function(err, teamMember){
            assert(teamMember.generationHash !== null);
            assert(teamMember.name !== null);
            assert(teamMember.sex !== null);
            assert(teamMember.category !== null);
            assert(teamMember.attributes.problemSolving !== null);
            assert(teamMember.attributes.learnSkills !== null);
            assert(teamMember.attributes.stressManagement !== null);
            assert(teamMember.skills.architecture !== null);
            assert(teamMember.skills.middleTier !== null);
            assert(teamMember.skills.uiUx !== null);
            assert(teamMember.skills.findBugs !== null);
            assert(teamMember.skills.testing !== null);
            done();
        });
    });
});