myApp.controller('loginController',['$scope','$firebaseObject','$state',function($scope,$firebaseObject,$state){
  //$scope.message = "Welcome to Register-Login Component";
  const provider = new firebase.auth.GoogleAuthProvider();

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

  $scope.googleSignin = function() {
   firebase.auth()

   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      if(user.emailVerified){
        $state.go('dashboard')
      }
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      //var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      //var credential = error.credential;
      console.log(error.code)
      console.log(error.message)
   });
}


  //Display user name in login html header
  /*const rootRef = firebase.database().ref().child('Object'); // referring to database object in firebase
  $scope.object = $firebaseObject(rootRef); // assigning to your scope object to view in html
  */


}]);
