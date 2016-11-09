var myApp = angular.module('sathyaApp',['ngRoute']);

// myApp.controller('appController',['$scope',function($scope){
//   $scope.message = "Welcome to Angular Registration-Login component.";
// }])

myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.
  when('/login',{
    templateUrl:'views/login.html',
    controller:'loginController'
  }).
  when('/register',{
    templateUrl:'views/register.html',
    controller:'registrationController'
  }).
  when('/dashboard',{
    templateUrl:'views/dashboard.html',
    controller:'dashboardController'
  }).
  otherwise({
    redirectTo:'/login'
  });
}]);
