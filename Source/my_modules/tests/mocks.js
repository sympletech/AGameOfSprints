var mocks = {
    testUser : function(name){
        return{
            username : name,
            password : name + '_password',
            firstName : name + '_first',
            lastName : name + '_last',
            emailAddress : name + '@sympletech.com',
            active : true
        };
    },

    testTeamMember : function(name){
        return{
            generationHash : (new Date()).getTime(),
            name : name,
            category : name + "_category",
            attributes : {
                problemSolving : 5,
                learnSkills : 5,
                frustrationFactor : 5
        },
        skills : {
            architecture : 5,
            middleTier : 5,
            uiUx : 5,
            findBugs : 5,
            testing : 5
        }
        };
    }
};

module.exports = mocks;