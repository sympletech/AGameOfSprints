var routes = function () {
    var self = this;

    self.DefineRoutingTemplates = function (app) {

        app.RegisterPage = function (path, viewname, viewmodel) {
            app.get(path, function (req, res) {
                res.render(viewname, viewmodel);
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


    self.RegisterAppRoutes = function (app) {
        app.RegisterPage('/', 'index');
        app.RegisterPage('/homePage', 'homePage');
        app.RegisterPage('/projectStatus', 'projectStatus');
        app.RegisterPage('/teamRoom', 'teamRoom');
        //app.RegisterPage('/login', 'login');

        require('./loginRoutes')(app);
    }
};

module.exports = new routes();