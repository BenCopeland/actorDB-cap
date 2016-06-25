"use strict";

app.factory("AuthFactory", function($http, $location) {
  let currentUserData = null;

  var isAuthenticated = () => {
    currentUserData = firebase.auth().currentUser;
    return (currentUserData) ? true : false;
  };

  var getUser = () => {
    return currentUserData;
  };

  var storeNewUser = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password).
      then((userData, error)=>{
        if(error){
          return error;
        }else{
          currentUserData = userData;
        }
      });
  };

  var signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password).
      then((userData, error)=>{
        if(error){
          return error;
        }else{
          currentUserData = userData;
        }
      });
  };

  return {isAuthenticated:isAuthenticated,
          getUser:getUser,
          storeNewUser:storeNewUser,
          signIn:signIn
  };
});