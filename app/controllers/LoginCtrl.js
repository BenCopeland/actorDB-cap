"use strict";

app.controller("LoginCtrl", function($scope, $location, AuthFactory){
	let currentUserData = null;

	$scope.register = () => {
		firebase.auth().signOut();
		AuthFactory.storeNewUser($scope.account.email, $scope.account.password);
		$location.path("/actors/new");
	};

	$scope.login = () => {
		currentUserData = AuthFactory.getUser();
		if(currentUserData === null){
			AuthFactory.signIn($scope.account.email, $scope.account.password);
			console.log("Logged in under", $scope.account.email);
			$location.path("/actors/new");
		}else{
			console.log(currentUserData.email, "is already logged in");
		}
	};

	$scope.logout = () => {
		firebase.auth().signOut().
      		catch(function(error) {
        	console.log("logout failed:", error.message);
        });
		if(AuthFactory.getUser()){
			console.log(AuthFactory.getUser().email, "has logged out");
			$location.path("/logout");
		}else{
			console.log("You are already logged out");
			$location.path("/logout");
		}
	};
});








