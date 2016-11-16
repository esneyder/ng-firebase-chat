myApp.controller('registrationController',['$scope','$state',function($scope,$state){
  //$scope.message = "Welcome to Register-Login Component";
  $scope.register = function(){
    var email = $scope.user.email;
    var pwd = $scope.user.password;

    const auth = firebase.auth();
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email,pwd);
    // If auth fails show message in console
    promise
    .then(user => console.log(user))
    .catch(e=> console.log(e.message));

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
      $state.go('dashboard');
        console.log(firebaseUser);
      }else{
        console.log('Not logged in');
      }
    })
  }
}]);
