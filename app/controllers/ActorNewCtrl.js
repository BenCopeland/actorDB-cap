app.controller("ActorNewCtrl", function($scope, $location, actorStorage, AuthFactory){
	var currentUserID = AuthFactory.getUser().uid;

    $scope.newTask = {
        uid: "",
        firstName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        state: "",
        zipcode: "",
        phone: "",
        email: "",
        gender: "",
        hairColor: "",
        eyeColor: "",
        training: "",
        black: false,
        asian: false,
        hispanic: false,
        nativeAmerican: false,
        middleEastern: false,
        ageRangeMin: 0,
        ageRangeMax: 0,
        heightFtMin: 0,
        heightInMin: 0,
        heightFtMax: 0,
        heightInMax: 0,
        weight: "",
        equityStatus: false,
        applicableTags: "",
        headshotUrl: "",
        resumeUrl: "",
        active: true,
        notes: ""

    }
      
    $scope.addNewActor = function(){
        actorStorage.postNewActor($scope.newTask)
    };
});