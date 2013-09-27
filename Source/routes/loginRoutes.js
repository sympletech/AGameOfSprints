var loginRoutes = function(app){
    var userLib = require('../my_modules/userlib');

    app.RegisterPage('/login', 'login/loginScreen');

    app.RegisterRestEndPoint({
        path : '/login/Authenticate',
        post : function(req, res){
            console.log(req.session.currentUser);

            userLib.AuthenticateUser(req.body.username, req.body.password, function(err, isValid, message, account){
                req.session.currentUser = isValid ? account._doc : null;

                res.json({
                    isValid : isValid,
                    message : message
                });

                console.log(req.session.currentUser);
            });
        }
    });

    app.RegisterRestEndPoint({
        path : '/login/CreateAccount',
        post : function(req, res){
            userLib.CreateAccount(req.body, function(err, account, success, message){
                res.json({
                    success : success,
                    message : message
                });
            });
        }
    });

};

module.exports = loginRoutes;