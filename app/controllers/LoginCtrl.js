"use strict";
																			// vv actorStorage vv
app.controller("LoginCtrl", function($scope, $location, AuthFactory){
	let currentUserData = null;
	// currentUserData = AuthFactory.getUser();
	$scope.actors = [];
	// AuthFactory.authenticate();
	// console.log(firebase);
	
	// var getActorList = function(){
	// var actors = [];
 //        let user = AuthFactory.getUser();
 //        return $q(function(resolve, reject){
 //            $http.get(`${firebaseURL}actors.json?orderBy="uid"&equalTo="${user.uid}"`)
 //            .success(function(actorObject){
 //                var actorCollection = actorObject;
 //                Object.keys(actorCollection).forEach(function(key){
 //                    actorCollection[key].id = key;
 //                    actors.push(actorCollection[key]);
 //                });
 //                resolve(actors);
 //            })
 //            .error(function(error){
 //                reject(error);
 //            });
 //        });
 //    };

	// actorStorage.getActorList().then(function(actorCollection){
	// 	console.log(actorCollection);  
	// 	$scope.actors = actorCollection;
	// });

	// $scope.account = {
	// 	email: "",
	// 	password: ""
	// };

	// if im in logout, log me out
	// if($location.path() === "/logout"){
	// 	firebase.auth().signOut().then(function() {
	// 		console.log("Successfully logged out.");
	// 	}, function(error) {
	// 		console.log(error.code);
	// 		console.log(error.message);
	// 	});
	// }

				// = function(){} same as = () => {}  es6
	$scope.register = () => {
		// currentUserData = AuthFactory.getUser();
			firebase.auth().signOut();
			AuthFactory.createNewUser($scope.account.email, $scope.account.password);
			$location.path("/actors/new");

		// AuthFactory.authenticate();
		// $location.path("/actors/new");
		// console.log("User successfully registered");
		// console.log("after register", firebase.auth().currentUser);
	};

	$scope.login = () => {
		currentUserData = AuthFactory.getUser();
		// console.log("before login", firebase.auth().currentUser);
		if(currentUserData === null){
			// firebase.auth().signOut();
			AuthFactory.signIn($scope.account.email, $scope.account.password);
			$location.path("/actors/new");
		}else{
			console.log(currentUserData.email, " is already logged in");
		}
		// console.log("after login", firebase.auth().currentUser);
	};

	$scope.logout = () => {
		// console.log("before logout", firebase.auth().currentUser);
		firebase.auth().signOut().
      		catch(function(error) {
        	console.log("logout failed: ", error.message);
        	// alert(error.message);
        });

		// AuthFactory.authenticate();
		// console.log("User successfully logged out");
		if(AuthFactory.getUser()){
			console.log(AuthFactory.getUser().email, " has logged out");
			$location.path("/logout");
		}else{
			console.log("You are already logged out");
			$location.path("/logout");
		}

	};
	
	// $scope.isAuthenticatedTest = () => {
 //      let authData = firebase.auth().currentUser;
 //      return (authData) ? true : false;
 //    }
	

});








