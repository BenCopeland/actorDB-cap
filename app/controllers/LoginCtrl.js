"use strict";
																			// vv actorStorage vv
app.controller("LoginCtrl", function($scope, $location, firebaseURL, AuthFactory){
	// let ref = new Firebase(firebaseURL);
	$scope.actors = [];
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
		AuthFactory.createNewUser($scope.account.email, $scope.account.password);
		$location.path("/actors/new");
	}

	$scope.login = () => {
		AuthFactory.signIn($scope.account.email, $scope.account.password);
		$location.path("/actors/new");		
	};

	$scope.logout = () => {
		// let errorMessage = "";
		firebase.auth().signOut().then(function() {
			// console.log("Successfully logged out.");
		}, function(error) {
			console.log(error.code);
			console.log(error.message);
		});
		$location.path("/logout");
	}
		
	

});








