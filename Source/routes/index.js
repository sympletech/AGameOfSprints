var routes = function () {
    var self = this;

    self.RegisterAppRoutes = function (app) {
        app.RegisterPage('/', 'index');
        app.RegisterPage('/homePage', 'homePage');

        app.RegisterPage('/visitor/about', 'about');
        app.RegisterPage('/visitor/rules', 'rules');

        app.RegisterPage('/projectStatus', 'projectStatus', true);
        app.RegisterPage('/teamRoom', 'teamRoom/teamRoom', true);

        require('./loginRoutes')(app);
        require('./sessionRoutes')(app);
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

            app.get(endpointConfig.path, function (req, res) {
                if(endpointConfig.get)
                    endpointConfig.get(req, res);
            });

            app.get(endpointConfig.path + '/:id', function (req, res) {
                if(endpointConfig.getOne)
                    endpointConfig.getOne(req.params.id, req, res);
            });

            app.put(endpointConfig.path, function (req, res) {
                if(endpointConfig.put)
                    endpointConfig.put(req, res);
            });

            app.post(endpointConfig.path, function (req, res) {
                if(endpointConfig.post)
                    endpointConfig.post(req, res);
            });

            app.delete(endpointConfig.path, function (req, res) {
                if(endpointConfig.delete)
                    endpointConfig.delete(req, res);
            });
        };

    };



};

module.exports = new routes();