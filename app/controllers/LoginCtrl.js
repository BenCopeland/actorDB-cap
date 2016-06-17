"use strict";
																			// vv actorStorage vv
app.controller("LoginCtrl", function($scope, $location, firebaseURL, AuthFactory){
	let ref = new Firebase(firebaseURL);
	$scope.actors = [];
	
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

	$scope.account = {
		email: "",
		password: ""
	};

	// if im in logout, log me out
	if($location.path() === "/logout"){
		ref.unauth();
	}

				// = function(){} same as = () => {}  es6
	$scope.register = () => {
		console.log("you clicked register");
		ref.createUser({
			email: $scope.account.email,
			password: $scope.account.password
		}, (error, userData) => {
			if (error){
				console.log(`error creating user: ${error}`);
			}else{
				console.log(`created user account with uid: ${userData.uid}`);
				$scope.login();
			}
		});
	};

	$scope.login = () => {
		console.log("you clicked login");
		AuthFactory
			.authenticate($scope.account)
			.then(() => {
				// $scope.hasUser = true;
				$location.path("/");
				// wierd angular method? magic fix
				$scope.$apply();
			});
	};
});