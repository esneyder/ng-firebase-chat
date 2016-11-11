var myApp = angular.module('sathyaApp',['ngRoute','firebase']);

// myApp.controller('appController',['$scope',function($scope){
//   $scope.message = "Welcome to Angular Registration-Login component.";
// }])

// (function(){
//   var config = {
//     apiKey: "AIzaSyAJeGsL7KtKHdaFeTSiLnVRE3x7-ovGpyo",
//     authDomain: "sathya-ngreglogin.firebaseapp.com",
//     databaseURL: "https://sathya-ngreglogin.firebaseio.com/",
//     storageBucket: "gs://sathya-ngreglogin.appspot.com",
//     messagingSenderId: "<SENDER_ID>",
//   };
//   firebase.initializeApp(config);
// }());

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
