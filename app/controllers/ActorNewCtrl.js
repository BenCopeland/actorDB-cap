app.controller("ActorNewCtrl", function($scope, $location, actorStorage, AuthFactory){
	let currentUserID = AuthFactory.getUser().uid;
    // $scope.submitButtonText = "Add New Contact";
    $scope.newTask = {
        actors: {
            firstName: "",
            lastName: ""
        }
        // streetAddress: "",
        // city: "",
        // state: "",
        // zipcode: "",
        // phone: "",
        // email: "",
        // gender: "",
        // hairColor: "",
        // eyeColor: "",
        // training: "",
        // ethnicRange: "",
        // ageRangeMin: 0,
        // ageRangeMax: 0,
        // heightFtMin: 0,
        // heightInMin: 0,
        // heightFtMax: 0,
        // heightInMax: 0,
        // weight: 0,
        // equityStatus: false,
        // applicableTags: "",
        // headshotUrl: "",
        // resumeUrl: "",
        // active: true,
        // notes: "",
        // uid: ""
    };
      
    $scope.addNewActor = function(){
        actorStorage.postNewActor(currentUserID, $scope.newTask)
    };
});