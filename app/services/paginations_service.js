'use strict';

app.service("PaginationsService", ["$http", "$q", function ($http, $q) {
    return {
        getPaginations: function () {
            return $http.get("/api/paginations")
                .then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                      console.log("Error while get paginations");
                      return $q.reject(errResponse);
                    }
                )
        }


        // Post
        // createUser: function(user){
        //     return $http.post('http://localhost:8080/SpringMVC4RestAPI/user/', user)
        //         .then(
        //             function(response){
        //                 return response.data;
        //             },
        //             function(errResponse){
        //                 console.error('Error while creating user');
        //                 return $q.reject(errResponse);
        //             }
        //         );
        // },


        // Put
        // updateUser: function(user, id){
        //     return $http.put('http://localhost:8080/SpringMVC4RestAPI/user/'+id, user)
        //         .then(
        //             function(response){
        //                 return response.data;
        //             },
        //             function(errResponse){
        //                 console.error('Error while updating user');
        //                 return $q.reject(errResponse);
        //             }
        //         );
        // },


        // Delete
        // deleteUser: function(id){
        //     return $http.delete('http://localhost:8080/SpringMVC4RestAPI/user/'+id)
        //         .then(
        //             function(response){
        //                 return response.data;
        //             },
        //             function(errResponse){
        //                 console.error('Error while deleting user');
        //                 return $q.reject(errResponse);
        //             }
        //         );
        // }



    }
}]);