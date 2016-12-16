// Declares the initial angular module "valeroApp". Module grabs other controllers and services.
var app = angular.module('valeroApp', ['queryCtrl', 'headerCtrl', 'geolocation', 'gservice', 'ngRoute'])

    // Configures Angular routing -- showing the relevant view and controller when needed.
    .config(function($routeProvider){

        // Find Valero Stores Control Panel
        $routeProvider.when('/find', {
            controller: 'queryCtrl',
            templateUrl: 'partials/addForm.html',


        }).when('/find', {
            controller: 'queryCtrl',
            templateUrl: 'partials/queryForm.html',

        // All else forward to the Join Team Control Panel
        }).otherwise({redirectTo:'/find'})
    });
