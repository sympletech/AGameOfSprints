var teamRoomRoutes = function(app){
    var teamLib = require('../my_modules/teamLib'),
        teamMemberLib = require('../my_modules/teamMemberLib');

    app.RegisterPage('/teamRoom', 'teamRoom/teamRoom', true);

    app.get('/teamRoom/service/', function(req, res){
        teamLib.GetActiveTeamForUser(req.session.currentUser._id, function(err, team){
            res.json(team);
        });
    });

    app.get('/teamRoom/service/teamMemberSelect', function(req, res){
        var results = {};
        teamMemberLib.GetTeamMemberCategoryNames(function(err, categories){
            results.categories = categories;
            results.selectedCategory = categories[0];

            teamMemberLib.GetCandidates(results.selectedCategory, function(candidates){
                results.candidates = candidates;

                res.json(results);
            });
        });
    });

    app.get('/teamRoom/service/teamMemberSelect/:category', function(req, res){
        var category = req.params.category;
        teamMemberLib.GetCandidates(category, function(candidates){
            res.json(candidates);
        });
    });

    app.post('/teamRoom/service/teamMemberSelect/', function(req, res){
        teamLib.GetActiveTeamForUser(req.session.currentUser._id, function(err, team){
            teamLib.AddMemberToTeam(team, req.body, function(err, updatedTeam, success, message){
                res.json({
                    success : success,
                    message : message,
                    team : updatedTeam
                });
            });
        });


    });
};

module.exports = teamRoomRoutes;