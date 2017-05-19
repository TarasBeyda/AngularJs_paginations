'use strict';

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'firstCtrl',
            templateUrl: 'views/first.html',
            title: 'START'
        })
        .when('/home', {
            controller: '',
            templateUrl: 'views/home.html',
            title: 'HOME'
        })
        .when('/paginations', {
            controller: 'paginationsCtrl',
            templateUrl: 'views/paginations.html',
            title: 'PAGINATIONS'
        })
        .otherwise({
            template: '<h1>ERROR TEMPLATES</h1>',
            title: 'ERROR'
        });
    $locationProvider
        .html5Mode(true)
        .hashPrefix('');
})

.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    })
}]);