"use strict";

app.controller("LoginCtrl", function($scope, $location, AuthFactory){

	$scope.register = () => {
		firebase.auth().signOut();
		AuthFactory.storeNewUser($scope.account.email, $scope.account.password).
			then(()=>{
				$location.path("/actors/new");
				$scope.$apply();
			})
	};

	$scope.login = () => {
		firebase.auth().signOut();
		AuthFactory.signIn($scope.account.email, $scope.account.password).
			then(()=>{
				let currentUser = AuthFactory.getUser();
				console.log("Logged in under", currentUser.email);
				$location.path("/actors/new");
				$scope.$apply();
			}, (error)=>{
				console.log("Hold on kimosabi:", error.message);
			});
	};

	$scope.logout = () => {
		firebase.auth().signOut().
			then(()=>{
				let currentUser = AuthFactory.getUser();
				if(currentUser){
					console.log(currentUser.email, "has logged out");
					$location.path("/logout");
					$scope.$apply();
				}else{
					console.log("You are already logged out");
					$location.path("/logout");
					$scope.$apply();
				}
			}, (error)=>{
				console.log("Whoa there cowboy:", error.message);
			});
	};
});








