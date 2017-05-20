'use strict';

app.controller('paginationsCtrl', ['$scope', "$http", "PaginationsService", "$log",
    function ($scope, $http, PaginationsService, $log) {
        var vm = $scope;
        vm.paginations;

        PaginationsService.getPaginations()
            .then(
                function (response) {
                    vm.paginations = response.Data;
                },
                function (errResponse) {
                    console.log("Error get paginations service on paginationsCtrl");
                }
            )

        vm.totalItems = 64;
        vm.currentPage = 1;
        vm.itemsPerPage = 10;
        vm.maxSize = 5;

        vm.pageChanged = function(currentPage) {
            var data = ({
                currentPage: vm.currentPage
            });
            PaginationsService.postPaginations(data)
                .then(
                    function (response) {
                        vm.paginations = response.Data;
                    },
                    function (errResponse) {
                        console.log("Error get paginations service on paginationsCtrl");
                    }
                );
        };
}]);