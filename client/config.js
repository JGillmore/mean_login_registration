var app = angular.module("wallApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/register", {
        templateUrl: "partials/register.html",
        controller: "UsersController"
    }).when("/login", {
        templateUrl: "partials/login.html",
        controller: "UsersController"
    }).when('/', {
        templateUrl: "partials/index.html",
        controller: "UsersController"
    })

});
