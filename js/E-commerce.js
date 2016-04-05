/**
 * Created by younes on 05/04/2016.
 */

var commerceApp = angular.module('commerceApp', ['ngRoute']);

commerceApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })

        .when('/reference', {
            templateUrl : 'pages/reference.html',
            controller  : 'referenceController'
        })

        .when('/fonctionnalite', {
            templateUrl : 'pages/fonctionnalite.html',

            controller  : 'fonctionnaliteController'
        })

        .when('/contact', {
        templateUrl : 'pages/contact.html',

        controller  : 'contactController'
    });
});

commerceApp.controller('homeController', function($scope) {

});

commerceApp.controller('referenceController', function($scope) {

});

commerceApp.controller('fonctionnaliteController', function($scope) {

});
commerceApp.controller('contactController', function($scope) {

});
