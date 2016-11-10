myApp.controller('loginController',['$scope',function($scope){
  //$scope.message = "Welcome to Register-Login Component";

  $scope.login=function(){
    $scope.message = "Welcome"+ $scope.user.email;
  }
}]);
