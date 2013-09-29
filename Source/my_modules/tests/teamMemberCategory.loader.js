describe('Loads The Possible Team Categories', function(){


    it('architect', function(done){
        var catName = 'architect';
        var db = require('../db');

        db.teamMemberCategoryModel.findOne({name : catName}, function(err, category){
            if(category === null){
                category = db.teamMemberCategoryModel({
                    name : catName,
                    attributeRange : {
                        problemSolvingMin : 10,
                        problemSolvingMax : 30,
                        learnSkillsMin : 15,
                        learnSkillsMax : 35,
                        frustrationFactorMin : 15,
                        frustrationFactorMax : 35
                    },
                    skillRange : {
                        architectureMin : 20,
                        architectureMax : 40,
                        middleTierMin : 10,
                        middleTierMax : 30,
                        uiUxMin : 0,
                        uiUxMax : 20,
                        findBugsMin : 5,
                        findBugsMax : 15,
                        testingMin : 0,
                        testingMax : 10
                    }
                });
                category.save(done);
            }else{
                done(err);
            }
        });
    });

    //**************************************************************
    it('codeMonkey', function(done){
        var catName = 'codeMonkey';
        var db = require('../db');

        db.teamMemberCategoryModel.findOne({name : catName}, function(err, category){
            if(category === null){
                category = db.teamMemberCategoryModel({
                    name : catName,
                    attributeRange : {
                        problemSolvingMin : 15,
                        problemSolvingMax : 35,
                        learnSkillsMin : 15,
                        learnSkillsMax : 35,
                        frustrationFactorMin : 10,
                        frustrationFactorMax : 30
                    },
                    skillRange : {
                        architectureMin : 5,
                        architectureMax : 15,
                        middleTierMin : 20,
                        middleTierMax : 40,
                        uiUxMin : 10,
                        uiUxMax : 30,
                        findBugsMin : 15,
                        findBugsMax : 25,
                        testingMin : 0,
                        testingMax : 10
                    }
                });
                category.save(done);
            }else{
                done(err);
            }
        });
    });

    //**************************************************************
    it('scriptKitty', function(done){
        var catName = 'scriptKitty';
        var db = require('../db');

        db.teamMemberCategoryModel.findOne({name : catName}, function(err, category){
            if(category === null){
                category = db.teamMemberCategoryModel({
                    name : catName,
                    attributeRange : {
                        problemSolvingMin : 0,
                        problemSolvingMax : 15,
                        learnSkillsMin : 0,
                        learnSkillsMax : 20,
                        frustrationFactorMin : 20,
                        frustrationFactorMax : 40
                    },
                    skillRange : {
                        architectureMin : 0,
                        architectureMax : 15,
                        middleTierMin : 0,
                        middleTierMax : 20,
                        uiUxMin : 5,
                        uiUxMax : 30,
                        findBugsMin : 0,
                        findBugsMax : 15,
                        testingMin : 0,
                        testingMax : 10
                    }
                });
                category.save(done);
            }else{
                done(err);
            }
        });
    });

    //**************************************************************
    it('UxDesigner', function(done){
        var catName = 'UxDesigner';
        var db = require('../db');

        db.teamMemberCategoryModel.findOne({name : catName}, function(err, category){
            if(category === null){
                category = db.teamMemberCategoryModel({
                    name : catName,
                    attributeRange : {
                        problemSolvingMin : 0,
                        problemSolvingMax : 10,
                        learnSkillsMin : 0,
                        learnSkillsMax : 20,
                        frustrationFactorMin : 5,
                        frustrationFactorMax : 25
                    },
                    skillRange : {
                        architectureMin : 0,
                        architectureMax : 15,
                        middleTierMin : 0,
                        middleTierMax : 20,
                        uiUxMin : 25,
                        uiUxMax : 40,
                        findBugsMin : 0,
                        findBugsMax : 15,
                        testingMin : 0,
                        testingMax : 10
                    }
                });
                category.save(done);
            }else{
                done(err);
            }
        });
    });

    //**************************************************************
    it('QA Tester', function(done){
        var catName = 'QA Tester';
        var db = require('../db');

        db.teamMemberCategoryModel.findOne({name : catName}, function(err, category){
            if(category === null){
                category = db.teamMemberCategoryModel({
                    name : catName,
                    attributeRange : {
                        problemSolvingMin : 15,
                        problemSolvingMax : 35,
                        learnSkillsMin : 15,
                        learnSkillsMax : 30,
                        frustrationFactorMin : 5,
                        frustrationFactorMax : 20
                    },
                    skillRange : {
                        architectureMin : 0,
                        architectureMax : 10,
                        middleTierMin : 0,
                        middleTierMax : 10,
                        uiUxMin : 10,
                        uiUxMax : 20,
                        findBugsMin : 30,
                        findBugsMax : 40,
                        testingMin : 30,
                        testingMax : 40
                    }
                });
                category.save(done);
            }else{
                done(err);
            }
        });
    });
});