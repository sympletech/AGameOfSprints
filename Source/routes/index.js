var routes = function () {
    var self = this;

    self.RegisterAppRoutes = function (app) {
        app.RegisterPage('/', 'index');
        app.RegisterPage('/homePage', 'homePage');

        app.RegisterPage('/visitor/about', 'about');
        app.RegisterPage('/visitor/rules', 'rules');

        app.RegisterPage('/projectStatus', 'projectStatus', true);


        require('./loginRoutes')(app);
        require('./sessionRoutes')(app);
        require('./teamRoomRoutes')(app);
    };


    self.DefineRoutingTemplates = function (app) {
        app.RegisterPage = function (path, viewname, secured) {
            app.get(path, function (req, res) {
                if(secured && !req.session.currentUser){
                    res.render('noaccess');
                }else{
                    res.render(viewname);
                }
            });
        };

        app.RegisterRestEndPoint = function (endpointConfig) {

            if(endpointConfig.get){
                app.get(endpointConfig.path, function (req, res) {
                        endpointConfig.get(req, res);
                });
            }

            if(endpointConfig.getOne){
                app.get(endpointConfig.path + '/:id', function (req, res) {
                        endpointConfig.getOne(req.params.id, req, res);
                });
            }

            if(endpointConfig.put){
                app.put(endpointConfig.path, function (req, res) {
                        endpointConfig.put(req, res);
                });
            }

            if(endpointConfig.post){
                app.post(endpointConfig.path, function (req, res) {
                        endpointConfig.post(req, res);
                });
            }

            if(endpointConfig.delete){
                app.delete(endpointConfig.path, function (req, res) {
                        endpointConfig.delete(req, res);
                });
            }
        };

    };



};

module.exports = new routes();