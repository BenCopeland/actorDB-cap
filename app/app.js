"use strict";

var app = angular.module("ActorDBApp", ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
	if(AuthFactory.isAuthenticated() === false){
		console.log("Uh uh uh, you didnt say the magic word.");
		reject();
	}else{
		let currentUser = AuthFactory.getUser();
		console.log("Oh hey", currentUser.email);
		resolve();
	}
});

app.config(function($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: "partials/login.html",
			controller: "LoginCtrl"
		}).
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
		when("/login", {
			templateUrl: "partials/login.html",
			controller: "LoginCtrl"
		}).
		when("/logout", {
			templateUrl: "partials/login.html",
			controller: "LoginCtrl"
		}).
		otherwise("/");
});

var config = {
    apiKey: "AIzaSyDhDejwfBORMv-Q9zCP-45cHOobjWzMFok",
    authDomain: "actor-db.firebaseapp.com",
    databaseURL: "https://actor-db.firebaseio.com",
    storageBucket: "actor-db.appspot.com",
 };
 firebase.initializeApp(config);





