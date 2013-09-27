var loginRoutes = function(app){
    var userLib = require('../my_modules/userlib');

    app.RegisterPage('/login', 'login');

    app.RegisterRestEndPoint({
        path : '/login/Authenticate',
        post : function(req, res){
            userLib.AuthenticateUser(req.body.username, req.body.password, function(err, isValid, message){
                res.json({
                    isValid : isValid,
                    message : message
                });
            });
        }
    });

};

module.exports = loginRoutes;