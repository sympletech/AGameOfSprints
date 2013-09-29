var sessionRoutes = function(app){

    var userNavigation = [
        {title : 'Team Room', link : 'TeamRoom'},
        {title : 'Project Status', link : 'ProjectStatus'}
    ];

    var visitorNavigation = [
        {title : 'About The Game', link : 'visitor/about'},
        {title : 'Rules', link : 'visitor/rules'}
    ];

    app.RegisterRestEndPoint({
        path : '/Session',
        get : function(req, res){
            if(req.session.currentUser){
                res.json({
                    navigation : userNavigation,
                    currentUser : req.session.currentUser
                });
            }else{
                res.json({
                    navigation : visitorNavigation
                });
            }
        },
        delete : function(req, res){
            req.session.destroy();
            res.end();
        }
    });

};

module.exports = sessionRoutes;