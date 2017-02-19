var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = {
    register: function (request, response) {
        var user = new User(request.body);
        user.save(function(err){
          if (err){
            response.json(err);
          }else{
            response.json({success: true});
          }
        })
    },
    login : function (req, res){
      User.findOne({'name.user':req.body.user}, function(err, user){
        if (err){
          res.json({err:true})
        }else{
          if (user.password == req.body.password){
            var loggedin = {};
            loggedin.user = user.name.user;
            loggedin._id = user._id;
            console.log(loggedin);
            res.json(loggedin)
          }else{
            res.json({err:true})
          }
        }
      })
    }
};
