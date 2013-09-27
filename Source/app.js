
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var settings = require('./settings');

var mongoose = require('mongoose');
var mongoStore = require('connect-mongo')(express);
var app = express();

// all environments
app.set('port', process.env.PORT || settings.port);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.cookieParser());
//app.use(express.session({secret: 'SCRUMB@CONestim@tes'}));
app.use(express.session({
    store : new mongoStore({
        url : settings.sessiondatabasepath
    }),
    secret: 'SCRUMB@CONestim@tes'
}));


app.use(app.router);



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


routes.DefineRoutingTemplates(app);
routes.RegisterAppRoutes(app);




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
