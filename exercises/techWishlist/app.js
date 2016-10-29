var app = angular.module('myApp', ['ngRoute'])
 
.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: 'components/home/home.html'
    }).when('/wish',{
        controller: 'wishController',
        templateUrl: 'components/wish/wish.html'
    })
})






