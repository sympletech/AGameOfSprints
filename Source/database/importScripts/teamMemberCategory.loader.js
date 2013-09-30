var db = require('../db');
console.log('Loading teamMemberCategory Data');

(function(){
    var catName = 'architect';
    db.teamMemberCategoryModel.findOne({name : catName}, function(err, category){
        if(category === null){
            category = db.teamMemberCategoryModel({
                name : catName,
                attributeRange : {
                    problemSolvingMin : 10,
                    problemSolvingMax : 30,
                    learnSkillsMin : 15,
                    learnSkillsMax : 35,
                    stressManagementMin : 15,
                    stressManagementMax : 35
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
            category.save();
            console.log("Added " + catName + " to teamMemberCategory");
        }else{
            console.log(catName + " Already Exists");
        }
    });
})();

(function(){
    var catName = 'codeMonkey';

    db.teamMemberCategoryModel.findOne({name : catName}, function(err, category){
        if(category === null){
            category = db.teamMemberCategoryModel({
                name : catName,
                attributeRange : {
                    problemSolvingMin : 15,
                    problemSolvingMax : 35,
                    learnSkillsMin : 15,
                    learnSkillsMax : 35,
                    stressManagementMin : 10,
                    stressManagementMax : 30
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
            category.save();
            console.log("Added " + catName + " to teamMemberCategory");
        }else{
            console.log(catName + " Already Exists");
        }
    });
})();

(function(){
    var catName = 'scriptKitty';

    db.teamMemberCategoryModel.findOne({name : catName}, function(err, category){
        if(category === null){
            category = db.teamMemberCategoryModel({
                name : catName,
                attributeRange : {
                    problemSolvingMin : 0,
                    problemSolvingMax : 15,
                    learnSkillsMin : 0,
                    learnSkillsMax : 20,
                    stressManagementMin : 20,
                    stressManagementMax : 40
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
            category.save();
            console.log("Added " + catName + " to teamMemberCategory");
        }else{
            console.log(catName + " Already Exists");
        }
    });
})();

(function(){
    var catName = 'UxDesigner';

    db.teamMemberCategoryModel.findOne({name : catName}, function(err, category){
        if(category === null){
            category = db.teamMemberCategoryModel({
                name : catName,
                attributeRange : {
                    problemSolvingMin : 0,
                    problemSolvingMax : 10,
                    learnSkillsMin : 0,
                    learnSkillsMax : 20,
                    stressManagementMin : 5,
                    stressManagementMax : 25
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
            category.save();
            console.log("Added " + catName + " to teamMemberCategory");
        }else{
            console.log(catName + " Already Exists");
        }
    });
})();

(function(){
    var catName = 'QA Tester';

    db.teamMemberCategoryModel.findOne({name : catName}, function(err, category){
        if(category === null){
            category = db.teamMemberCategoryModel({
                name : catName,
                attributeRange : {
                    problemSolvingMin : 15,
                    problemSolvingMax : 35,
                    learnSkillsMin : 15,
                    learnSkillsMax : 30,
                    stressManagementMin : 5,
                    stressManagementMax : 20
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
            category.save();
            console.log("Added " + catName + " to teamMemberCategory");
        }else{
            console.log(catName + " Already Exists");
        }
    });
})();