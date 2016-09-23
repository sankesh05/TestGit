
var app= angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'login.html', controller: 'loginController' });
    $routeProvider.when('/home', { templateUrl: 'home.html', controller: 'homeController' });
  $routeProvider.otherwise({redirectTo: '/'});
});






