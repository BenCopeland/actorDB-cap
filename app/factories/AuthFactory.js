"use strict";

app.factory("AuthFactory", function(firebaseURL, $http, $location) {

      // let isAuth = false;

  // let ref = new Firebase(firebaseURL);
  let currentUserData = null;

  // firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       currentUserData = user;
  //       console.log(currentUserData);
  //       $location.path("/actors/new")
  //     } else {
  //       $location.path("/logout");
  //     }
  //   });


  // return whole page same as return {blah:blah, dose:dose} at bottom
  return {

    isAuthenticated () {
      // let authData = currentUserData;
      return (currentUserData) ? true : false;
    },

    getUser(){
      // firebase.auth().currentUser;
      return currentUserData;
    },

    authenticate () {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        currentUserData = user;
        console.log(currentUserData);
        $location.path("/actors/new")
      } else {
        $location.path("/logout");
      }
    });
    },


    createNewUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).
      catch(function(error) {
        console.log("New user register failed: ", error.message);
        // alert(error.message);
        });
    },

    // signIn(email, password) {
    // firebase.auth().signInWithEmailAndPassword(email, password).
    //   catch(function(error) {
    //     console.log("login failed: ", error.message);
    //     // alert(error.message);
    //   });
    // // $location.path("/actors/new");
    // },

    // signOut() {
    // firebase.auth().signOut().
    //   catch(function(error) {
    //     console.log("logout failed: ", error.message);
    //     // alert(error.message);
    //     });
    // },


  }
})