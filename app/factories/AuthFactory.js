"use strict";

app.factory("AuthFactory", function($http, $location) {

      // let isAuth = false;
// let currentUserData = firebase.auth().currentUser;
  // let ref = new Firebase(firebaseURL);
  let currentUserData = null;
  // ()=>{
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       currentUserData = user;
  //       // console.log(currentUserData);
  //       // $location.path("/actors/new")
  //     } else {
  //       return null;
  //       $location.path("/logout");
  //     }
  //   });
  //   console.log("currentUserData");
  // }

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

    var isAuthenticated = () => {
      // let authData = currentUserData;
      currentUserData = firebase.auth().currentUser;
      return (currentUserData) ? true : false;
    };

    var getUser = () => {
      currentUserData = firebase.auth().currentUser;
      // firebase.auth().currentUser;

      return currentUserData;
    };

    var authenticate = () =>  {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        currentUserData = user;
        // console.log(currentUserData);
        // $location.path("/actors/new")
      } else {
        return null;
        $location.path("/logout");
      }
    });
    console.log(currentUserData);
    };


    var createNewUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).
      catch(function(error) {
        console.log("New user register failed: ", error.message);
        // $location.path("/logout");
        // console.log(firebase.auth().currentUser);
        // alert(error.message);
        });
      // currentUserData = firebase.auth().currentUser;
      // $location.path("/actors/new")
    };

    var signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).
      catch(function(error) {
        console.log("login failed: ", error.message);
        // alert(error.message);
      });
    // $location.path("/actors/new");
    };

    // signOut() {
    // firebase.auth().signOut().
    //   catch(function(error) {
    //     console.log("logout failed: ", error.message);
    //     // alert(error.message);
    //     });
    // },


  return {isAuthenticated:isAuthenticated,
          getUser:getUser,
          authenticate:authenticate,
          createNewUser:createNewUser,
          signIn:signIn
  };
})