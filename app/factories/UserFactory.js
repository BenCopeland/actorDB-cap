app.factory("UserFactory", function($http, AuthFactory){
	
	return {

    registerTest(email, password) {
    AuthFactory.createNewUser(email, password);
    // $location.path("/actors/new");
    // console.log("User successfully registered");
    // console.log("after register", firebase.auth().currentUser);
    },

    loginTest(email, password) {
        // console.log("before login", firebase.auth().currentUser);
        AuthFactory.signIn(email, password);
        // $location.path("/actors/new");      
        // console.log("after login", firebase.auth().currentUser);
    },

    logoutTest() {
        // console.log("before logout", firebase.auth().currentUser);
        AuthFactory.signOut();
        // $location.path("/logout");
        // console.log("User successfully logged out");
        // console.log("after logout", firebase.auth().currentUser);

    },




    isAuthTest(){
        let authData = firebase.auth().currentUser;
        return (authData) ? true : false;
    }

    // registerTest(email, password){
    //     firebase.auth().createUserWithEmailAndPassword(email, password).
    //         catch(function(error) {
    //         console.log("New user register failed: ", error.message);
    //       // alert(error.message);
    //     });
    // }


    };
 //^^return closer 
});
//^^app.factory closers