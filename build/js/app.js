var myApp = angular.module('sathyaApp',['ngRoute','firebase','ui.router']);

/*myApp.controller('appController',['$scope',function($scope){
  $scope.message = "Welcome to Angular Registration-Login component.";
}])

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
*/
// Configured ui-router instead of ngRoute
myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('/-KWTVx53Fxn4v2l66b-B', '/dashboard/')
  .when('/-KWW8772Q1sfG7rZizI4','/dashboard')
  .when('/-KW*','/dashboard')
  .when('','/dashboard')
  .when('/dashboard', function($state, appService){
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
  // .state('dashboard.detail', {
  //         url: 'dashboard/:provider',
  //         templateUrl: function (stateParams){
  //             return 'views/dashboard/' + stateParams.provider + '.html';
  //         },
  //         controller: 'dashboardController'
  // })
  // .state('notFound', {
  //       url: '{path:.*}',
  //       templateUrl: 'views/login.html'
  //   });
  $urlRouterProvider.otherwise("dashboard");

}]);
