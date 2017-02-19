var UsersController = require('../controllers/users');
module.exports = function(app){
  app.post('/register', function(req,res){
    UsersController.register(req,res);
  });
  app.post('/login', function(req,res){
     UsersController.login(req,res);
  });
}
