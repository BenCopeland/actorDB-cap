"use strict";

var app = angular.module("ActorDBApp", ["ngRoute"])
	.constant("firebaseURL", "https://actor-db.firebaseio.com/");


let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
	if(AuthFactory.getUser()){
		console.log("user is authenticated, resolve route promise");
		resolve();
	}else{
		console.log("user is NOT authenticated, reject route promise");
		reject();
	}
});

// let isAuth = false;

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     isAuth = true;
//   } else {
//     isAuth = false;
//   }
// });

//vvv angular method run once
app.config(function($routeProvider){
	$routeProvider.
		// when("/", {
		// 	templateUrl: "partials/contact-list.html",
		// 	controller: "ContactListCtrl",
		// 	resolve: {isAuth}
		// }).
		// when("/contacts/list", {
		// 	templateUrl: "partials/contact-list.html",
		// 	controller: "ContactListCtrl",
		// 	resolve: {isAuth}
		// }).
		when("/actors/new", {
			templateUrl: "partials/actor-new.html",
			controller: "ActorNewCtrl",
			resolve: {isAuth}
		}).
		// when("/contacts/:contactId", {
		// 	templateUrl: "partials/contact-details.html",
		// 	controller: "ContactDetailsCtrl",
		// 	resolve: {isAuth}
		// }).
		// when("/contacts/:contactId/edit", {
		// 	templateUrl: "partials/contact-new.html",
		// 	controller: "ContactEditCtrl",
		// 	resolve: {isAuth}
		// }).
		// when("/login", {
		// 	templateUrl: "partials/login.html",
		// 	controller: "LoginCtrl"
		// }).
		when("/logout", {
			templateUrl: "partials/login.html",
			controller: "LoginCtrl"
		}).
		otherwise("/");
});

// app.run(($location) => {
// 	let actorsRef = new Firebase("https://actor-db.firebaseio.com/");

// 	actorsRef.onAuth(authData => {
// 		if(!authData){
// 			$location.path("/login");
// 		}
// 	});
// });

var config = {
    apiKey: "AIzaSyDhDejwfBORMv-Q9zCP-45cHOobjWzMFok",
    authDomain: "actor-db.firebaseapp.com",
    databaseURL: "https://actor-db.firebaseio.com",
    storageBucket: "actor-db.appspot.com",
 };
 firebase.initializeApp(config);
 // console.log(firebase);





