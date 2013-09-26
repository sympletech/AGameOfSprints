var userModel = function(){
    var self = this;
    var db = require('../db');

    var schema = db.mongoose.Schema("User",{
        username : String,
        password : String,
        firstName : String,
        lastName : String,
        emailAddress : String,
        active : Boolean
    });

    self.user = db.mongoose.model("User", schema);

    db.connect(function(){


    });


};

module.exports = new userModel().user;
