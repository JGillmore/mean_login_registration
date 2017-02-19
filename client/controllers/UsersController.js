app.controller('UsersController', function (UserFactory, $scope, $location){
  $scope.user = {};
  UserFactory.getLoggedin(function(loggedin){
    $scope.loggedin = loggedin;
  })

  $scope.register = function(){
    $scope.error = {};
    if ($scope.user.password == $scope.password){
      UserFactory.register($scope.user, function(err){
        if (err){

        }else{
          $location.path('/')
        }
      })
    }else{
      $scope.error.passwordConfirm = "passwords did not match";
    }
  }
  $scope.login = function(){
    UserFactory.login($scope.logininfo, function(err, user){
      if (err){
        $scope.err = "User name or password is incorrcet"
      }else{
        $scope.loggedin = user;
        console.log("after login is done loggedin is ", $scope.loggedin);
        $location.path('/')
      }
    })
  };
  $scope.logout = function(){
    UserFactory.logout();
    $scope.loggedin = {};
  };
});
