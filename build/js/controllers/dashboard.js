myApp.controller('dashboardController',['$scope','$state','appService',function($scope,$state,appService){
  $scope.welcomeMsg = "Welcome to Chat App.";
  const provider = new firebase.auth.GoogleAuthProvider();
  $scope.appToken = appService.authToken = localStorage.getItem("token");
  if(!$scope.appToken){
    $scope.logout();
  }
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
  function initChat(user) {
      // Get a Firebase Database ref
      var chatRef = firebase.database().ref("chat");

      // Create a Firechat instance
      var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));
      if(user.displayName == undefined){
        var email = user.email;
        var name = email.split('.');
        // Set the Firechat user
        chat.setUser(user.uid, name[0]);
      }else{
        chat.setUser(user.uid, user.displayName);
      }

  }

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log("Logged in");
      initChat(firebaseUser);
    }else{
      $state.go('login');
      console.log('Logged out');
    }
  });
}]);
