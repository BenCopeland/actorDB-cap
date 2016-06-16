app.factory("actorStorage", function($q, $http, firebaseURL, AuthFactory){
	var getActorList = function(){
        var actors = [];
        let user = AuthFactory.getUser();
        return $q(function(resolve, reject){
            $http.get(`${firebaseURL}actors.json?orderBy="uid"&equalTo="${user.uid}"`)
            .success(function(actorObject){
                var actorCollection = actorObject;
                Object.keys(actorCollection).forEach(function(key){
                    actorCollection[key].id = key;
                    actors.push(actorCollection[key]);
                });
                resolve(actors);
            })
            .error(function(error){
                reject(error);
            });
        });
    };

	var deleteContact = function(contactId){
		return $q(function(resolve, reject){
			$http
            	.delete(firebaseURL + "contacts/" + contactId + ".json")
            	.success(function(objectFromFirebase){
            		resolve(objectFromFirebase);
            	});
		});
	};

	var postNewContact = function(newContact){
        let user = AuthFactory.getUser();
        return $q(function(resolve, reject) {
            $http.post(
                firebaseURL + "contacts.json",
                JSON.stringify({
                    firstName: newContact.firstName,
                    lastName: newContact.lastName,
                    phone: newContact.phone,
                    address: newContact.address,
                    email: newContact.address,
                    company: newContact.company,
                    shitListed: newContact.shitListed,
                    notes: newContact.notes,
                    uid: user.uid
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
	};

	var getSingleContact = function(contactId){
		return $q(function(resolve, reject){
			$http.get(firebaseURL + "contacts/" + contactId + ".json")
			.success(function(contactObject){
				resolve(contactObject);
			})
			.error(function(error){
				reject(error);
			});
		});
	};

	var updateContact = function(contactId, newContact){
        let user = AuthFactory.getUser();
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "contacts/" + contactId + ".json",
                JSON.stringify({
                    firstName: newContact.firstName,
                    lastName: newContact.lastName,
                    phone: newContact.phone,
                    address: newContact.address,
                    email: newContact.address,
                    company: newContact.company,
                    shitListed: newContact.shitListed,
                    notes: newContact.notes,
                    uid: user.uid
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
	};

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

	return {getContactList:getContactList,
            deleteContact:deleteContact,
            postNewContact:postNewContact,
            getSingleContact:getSingleContact};

});