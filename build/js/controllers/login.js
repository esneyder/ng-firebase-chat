myApp.controller('loginController',['$scope','$firebaseObject',function($scope,$firebaseObject){
  //$scope.message = "Welcome to Register-Login Component";

  $scope.login=function(){
    $scope.message = "Welcome"+ $scope.user.email;

  }
  const rootRef = firebase.database().ref().child('Object');
  $scope.object = $firebaseObject(rootRef);

}]);
