"use strict";
																			// vv actorStorage vv
app.controller("LoginCtrl", function($scope, $location, AuthFactory){
	let currentUserData = null;
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








