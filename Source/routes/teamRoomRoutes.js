var teamRoomRoutes = function(app){
    var teamLib = require('../my_modules/teamLib'),
        teamMemberLib = require('../my_modules/teamMemberLib');

    app.RegisterPage('/teamRoom', 'teamRoom/teamRoom', true);

    app.RegisterRestEndPoint({
        path : '/teamRoom/service/',
        get : function(req, res){
            teamLib.GetActiveTeamForUser(req.session.currentUser._id, function(err, team){
                res.json(team);
            });
        }
    });

    app.RegisterRestEndPoint({
        path : '/teamRoom/service/teamMemberSelect',
        get : function(req, res){
            var results = {};
            teamMemberLib.GetTeamMemberCategoryNames(function(err, categories){
                results.categories = categories;
                results.selectedCategory = categories[0];

                teamMemberLib.GetCandidates(results.selectedCategory, function(candidates){
                    results.candidates = candidates;

                    res.json(results);
                });
            });
        }
    });
};

module.exports = teamRoomRoutes;