exports.index = function(req, res){
  res.render('index', { title: 'Home', someValue : 'dude' });
};

exports.homePage = function(req, res){
    res.render('homePage');
};

exports.projectStatus = function(req, res){
    res.render('projectStatus');
};

exports.teamRoom = function(req, res){
    res.render('teamRoom');
};

exports.login = function(req, res){
    res.render('login');
};