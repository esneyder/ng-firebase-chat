myApp.controller('registrationController',['$scope',function($scope){
  //$scope.message = "Welcome to Register-Login Component";

  $scope.register = function(){
    $scope.message = "Welcome"+ $scope.user.firstname;
  }
}]);
