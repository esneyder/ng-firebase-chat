myApp.controller('dashboardController',['$scope','$state','appService',function($scope,$state,appService){
  $scope.welcomeMsg = "Welcome to Register-Login Component";
  const provider = new firebase.auth.GoogleAuthProvider();
  $scope.appToken = appService.authToken = localStorage.getItem("token");
  $scope.logout = function(){
    firebase.auth().signOut()

    .then(function() {
       $state.go('login');
       localStorage.removeItem('token');
       console.log('Signout Succesfull')
    }, function(error) {
       console.log('Signout Failed')
    });

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
