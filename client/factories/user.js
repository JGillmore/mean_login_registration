app.factory("UserFactory", function ($http) {

   var user = {};
   var factory = {};
   var loggedin = {};

   factory.getLoggedin = function(callback){
     callback(loggedin);
   }
   factory.register = function(userToRegister, callback){
     $http.post('/register', userToRegister).then(function(data){
       if(data.data.success){
         user = userToRegister;
         user.password = '';
         callback(false);
       }else{
         callback(true);
       }
      })
   }
   factory.login = function(login, callback){
     $http.post('/login', login).then(function(res){
       if(res.data.user){
         loggedin = res.data;
         console.log("in the factory after loggin before controller", loggedin);
         callback(false, loggedin);
       }else{
         callback(true, {});
       }
      })
   }
   factory.logout = function(){
     loggedin = {};
   }

   return factory;

});
