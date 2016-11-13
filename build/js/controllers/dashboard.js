myApp.controller('dashboardController',['$scope','$state',function($scope,$state){
  $scope.welcomeMsg = "Welcome to Register-Login Component";
  const provider = new firebase.auth.GoogleAuthProvider();
  $scope.logout = function(){
    firebase.auth().signOut()

    .then(function() {
       $state.go('login');
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
