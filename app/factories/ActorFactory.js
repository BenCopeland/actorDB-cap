app.factory("actorStorage", function($q, $http, AuthFactory){
	// var getActorList = function(){
 //        var actors = [];
 //        let user = AuthFactory.getUser();
 //        return $q(function(resolve, reject){
 //            $http.get(`${firebaseURL}actors.json?orderBy="uid"&equalTo="${user.uid}"`)
 //            .success(function(actorObject){
 //                var actorCollection = actorObject;
 //                Object.keys(actorCollection).forEach(function(key){
 //                    actorCollection[key].id = key;
 //                    actors.push(actorCollection[key]);
 //                });
 //                resolve(actors);
 //            })
 //            .error(function(error){
 //                reject(error);
 //            });
 //        });
 //    };

	// var deleteContact = function(contactId){
	// 	return $q(function(resolve, reject){
	// 		$http
 //            	.delete(firebaseURL + "contacts/" + contactId + ".json")
 //            	.success(function(objectFromFirebase){
 //            		resolve(objectFromFirebase);
 //            	});
	// 	});
	// };

    var postNewActor = (entryObj) => {
        let userID = AuthFactory.getUser().uid;
        // let newActorObject = newActor;
        firebase.database().ref('actors/').push({
            uid: userID,
            firstName: entryObj.firstName,
            lastName: entryObj.lastName,
            streetAddress: entryObj.streetAddress,
            city: entryObj.city,
            state: entryObj.state,
            zipcode: entryObj.zipcode,
            phone: entryObj.phone,
            email: entryObj.email,
            gender: entryObj.gender,
            hairColor: entryObj.hairColor,
            eyeColor: entryObj.eyeColor,
            training: entryObj.training,
            ethnicRange: entryObj.ethnicRange,
            ageRangeMin: entryObj.ageRangeMin,
            ageRangeMax: entryObj.ageRangeMax,
            heightFtMin: entryObj.heightFtMin,
            heightInMin: entryObj.heightInMin,
            heightFtMax: entryObj.heightFtMax,
            heightInMax: entryObj.heightInMax,
            weight: entryObj.weight,
            equityStatus: entryObj.equityStatus,
            applicableTags: entryObj.applicableTags,
            headshotUrl: entryObj.headshotUrl,
            resumeUrl: entryObj.resumeUrl,
            active: entryObj.active,
            notes: entryObj.notes,
        })
    };

	// var postNewActor = function(newActor){
 //        let user = AuthFactory.getUser();
 //        return $q(function(resolve, reject) {
 //            $http.post(
 //                firebaseURL + "actors.json",
 //                JSON.stringify({
 //                    firstName: newActor.firstName,
 //                    lastName: newActor.lastName,
 //                    streetAddress: newActor.streetAddress,
 //                    city: newActor.city,
 //                    state: newActor.state,
 //                    zipcode: newActor.zipcode,
 //                    phone: newActor.phone,
 //                    email: newActor.email,
 //                    gender: newActor.gender,
 //                    hairColor: newActor.hairColor,
 //                    eyeColor: newActor.eyeColor,
 //                    training: newActor.training,
 //                    ethnicRange: newActor.ethnicRange,
 //                    ageRangeMin: newActor.ageRangeMin,
 //                    ageRangeMax: newActor.ageRangeMax,
 //                    heightFtMin: newActor.heightFtMin,
 //                    heightInMin: newActor.heightInMin,
 //                    heightFtMax: newActor.heightFtMax,
 //                    heightInMax: newActor.heightInMax,
 //                    weight: newActor.weight,
 //                    equityStatus: newActor.equityStatus,
 //                    applicableTags: newActor.applicableTags,
 //                    headshotUrl: newActor.headshotUrl,
 //                    resumeUrl: newActor.resumeUrl,
 //                    active: newActor.active,
 //                    notes: newActor.notes,
 //                    uid: user.uid
 //                })
 //            )
 //            .success(
 //                function(objectFromFirebase) {
 //                    resolve(objectFromFirebase);
 //                }
 //            );
 //        });
	// };

	// var getSingleContact = function(contactId){
	// 	return $q(function(resolve, reject){
	// 		$http.get(firebaseURL + "contacts/" + contactId + ".json")
	// 		.success(function(contactObject){
	// 			resolve(contactObject);
	// 		})
	// 		.error(function(error){
	// 			reject(error);
	// 		});
	// 	});
	// };

	// var updateContact = function(contactId, newContact){
 //        let user = AuthFactory.getUser();
 //        return $q(function(resolve, reject) {
 //            $http.put(
 //                firebaseURL + "contacts/" + contactId + ".json",
 //                JSON.stringify({
 //                    firstName: newContact.firstName,
 //                    lastName: newContact.lastName,
 //                    phone: newContact.phone,
 //                    address: newContact.address,
 //                    email: newContact.address,
 //                    company: newContact.company,
 //                    shitListed: newContact.shitListed,
 //                    notes: newContact.notes,
 //                    uid: user.uid
 //                })
 //            )
 //            .success(
 //                function(objectFromFirebase) {
 //                    resolve(objectFromFirebase);
 //                }
 //            );
 //        });
	// };

	// var updateShitlistStatus = function(newContact){
 //        return $q(function(resolve, reject) {
 //            $http.put(
 //                firebaseURL + "contacts/" + newContact.id + ".json",
 //                JSON.stringify({
 //                    firstName: newContact.firstName,
 //                    lastName: newContact.lastName,
 //                    phone: newContact.phone,
 //                    address: newContact.address,
 //                    email: newContact.address,
 //                    company: newContact.company,
 //                    shitListed: newContact.shitListed,
 //                    notes: newContact.notes
 //                })
 //            )
 //            .success(
 //                function(objectFromFirebase) {
 //                    resolve(objectFromFirebase);
 //                }
 //            );
 //        });
	// };

	return {postNewActor:postNewActor};

});