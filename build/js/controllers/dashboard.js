myApp.controller('dashboardController',['$scope','$state',function($scope,$state){
  $scope.welcomeMsg = "Welcome to Register-Login Component";

  $scope.logout = function(){
    firebase.auth().signOut();

  }
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log("Logged in");
    }else{
      $state.go('login');
      console.log('Logged out');
    }
  });
}]);
