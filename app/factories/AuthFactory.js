"use strict";

app.factory("AuthFactory", function(firebaseURL, $http) {



  // let ref = new Firebase(firebaseURL);
  let currentUser = null;

  // return whole page same as return {blah:blah, dose:dose} at bottom
  return {

    createNewUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).
      catch(function(error) {
        console.log(error.code);
        alert(error.message);
        });
    },

    signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).
      catch(function(error) {
        console.log(error.code);
        alert(error.message);
      });
    },

    isAuthenticated () {
      let authData = firebase.auth().currentUser;
      return (authData) ? true : false;
    }

  }
})