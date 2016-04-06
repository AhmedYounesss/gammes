/**
 * Created by younes on 05/04/2016.
 */

var app = angular.module('commerceApp', ['ngRoute']);

app.config(function($routeProvider ) {
    $routeProvider
        .when('/', {
            templateUrl : '/templates/home.html',
            controller  : 'homeController'
        })

        .when('/reference', {
            templateUrl : '/templates/reference.html',
            controller  : 'referenceController'
        })

        .when('/fonctionnalite', {
            templateUrl : '/templates/fonctionnalite.html',

            controller  : 'fonctionnaliteController'
        })

        .when('/contact', {
        templateUrl : 'templates/contact.html',

        controller  : 'contactController'
    });
});

app.controller('mainController', function($scope) {
    $scope.message = 'bonjour!';

});

app.controller('referenceController', function($scope) {

});

app.controller('fonctionnaliteController', function($scope) {

});
app.controller('contactController', function($scope) {

    console.log("bjr")

});
