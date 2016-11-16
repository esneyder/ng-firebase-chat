var myApp = angular.module('sathyaApp',['ngRoute','firebase','ui.router']);

// Configured ui-router instead of ngRoute
myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
  $urlRouterProvider
  .when('','/dashboard')
  .when('/dashboard', function($state, appService){ //logic to authenticate dashboard else navigate to login page
    if (appService.authToken === undefined) {
        $state.go('login');
    }
  });
  $stateProvider
  .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller:'loginController'
        })
  .state('register', {
            url: '/register',
            templateUrl: 'views/register.html',
            controller:'registrationController'
        })
  .state('dashboard', {
              url: '/dashboard/',
              templateUrl: 'views/dashboard.html',
              controller:'dashboardController'
        })
  $urlRouterProvider.otherwise("dashboard"); //any other urls will go to dashboard

}]);
