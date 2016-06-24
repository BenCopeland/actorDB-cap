"use strict";

app.factory("AuthFactory", function($http, $location) {
  let currentUserData = null;


  var isAuthenticated = () => {
    currentUserData = firebase.auth().currentUser;
    return (currentUserData) ? true : false;
  };

  var getUser = () => {
    currentUserData = firebase.auth().currentUser;
    return currentUserData;
  };

  var storeNewUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).
      catch(function(error) {
        console.log("New user register failed:", error.message);
      });
    console.log("New user stored");
  };

  var signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).
      catch(function(error) {
        console.log("login failed:", error.message);
      });
  };

  return {isAuthenticated:isAuthenticated,
          getUser:getUser,
          storeNewUser:storeNewUser,
          signIn:signIn
  };
});