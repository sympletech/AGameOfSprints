var teamRoomRoutes = function(app){
    app.RegisterPage('/teamRoom', 'teamRoom/teamRoom', true);

    app.RegisterRestEndPoint({
        path : '/teamRoom/members/',
        get : function(req, res){

        }
    });
};

module.exports = teamRoomRoutes;