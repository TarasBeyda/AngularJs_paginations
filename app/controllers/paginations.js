'use strict';

app.controller('paginationsCtrl', ['$scope', "$http", "PaginationsService",
    function ($scope, $http, PaginationsService) {
    var vm = $scope;
    vm.paginations;

    PaginationsService.getPaginations()
        .then(
            function (response) {
            vm.paginations = response;
            console.log(vm.paginations);
            },
            function (errResponse) {
                console.log("Error get paginations service on paginationsCtrl");
            }
        )
}]);