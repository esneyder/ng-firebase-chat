myApp.controller('loginController',['$scope','$firebaseObject','$state','appService',function($scope,$firebaseObject,$state,appService){
  //$scope.message = "Welcome to Register-Login Component";
  const provider = new firebase.auth.GoogleAuthProvider();
  const fbprovider = new firebase.auth.FacebookAuthProvider();
  // fbprovider.setCustomParameters({
  //   'display': 'popup'
  // });
  $scope.appToken = appService.authToken = localStorage.getItem("token");
  /****force logout if user try to navigate to login page**/
  if($scope.appToken){
    localStorage.removeItem("token");
    firebase.auth().signOut();
  }
  /****force logout if user try to navigate to login page**/
  $scope.updateMsg = function(){
    $scope.$apply(function () {
          $scope.message = appService.errorMsg;
      });
  }

  $scope.login=function(){
    var vm = this;

    //$scope.error = "";
    var email = $scope.user.email;
    var pwd = $scope.user.pwd;

    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email,pwd);
    // If auth fails show message in console
    //promise.catch(e=> console.log(e.message));

    promise.catch(function(e) {
      console.log(e); // calling it as a method, btw
      appService.errorMsg = e.message;
      $scope.updateMsg();
    });



    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        appService.authToken = true;
        localStorage.setItem("token", true);
        $state.go('dashboard');
        console.log(firebaseUser);
      }else{
        console.log('Not logged in');
        //appService.authToken = false;
      }
    });


  }

  $scope.googleSignin = function() {
   firebase.auth()

   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      if(user.emailVerified){
        appService.authToken = token;
        localStorage.setItem("token", token);
        $state.go('dashboard');
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
      appService.errorMsg = error.message;
      $scope.updateMsg();
      //appService.authToken = false;
      console.log(error.code)
      console.log(error.message)
   });
}

  $scope.facebookSignin = function(){
    $scope.error = "";

    firebase.auth().signInWithPopup(fbprovider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    appService.authToken = token;
    localStorage.setItem("token", token);
    $state.go('dashboard');
    console.log(token);
    console.log(user);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      appService.errorMsg = error.message;
      $scope.updateMsg();
      //appService.authToken = false;
      console.log(error.code);
      console.log(error.message);
    });
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        appService.authToken = token;
        localStorage.setItem("token", token);
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      appService.errorMsg = error.message;
      $scope.updateMsg();
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }


  //Display user name in login html header
  /*const rootRef = firebase.database().ref().child('Object'); // referring to database object in firebase
  $scope.object = $firebaseObject(rootRef); // assigning to your scope object to view in html
  */


}]);
