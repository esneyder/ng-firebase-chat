myApp.controller('loginController',['$scope','$firebaseObject','$state',function($scope,$firebaseObject,$state){
  //$scope.message = "Welcome to Register-Login Component";

  $scope.login=function(){
    $scope.message = "Welcome"+ $scope.user.email;
    var email = $scope.user.email;
    var pwd = $scope.user.pwd;

    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email,pwd);
    // If auth fails show message in console
    promise.catch(e=> console.log(e.message));

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        $state.go('dashboard');
        console.log(firebaseUser);
      }else{
        console.log('Not logged in');
      }
    });

  }
  //Display user name in login html header
  /*const rootRef = firebase.database().ref().child('Object'); // referring to database object in firebase
  $scope.object = $firebaseObject(rootRef); // assigning to your scope object to view in html
  */


}]);
