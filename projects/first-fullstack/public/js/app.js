var app = angular.module("myApp", ["ngRoute"])

.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: '../template/home.html'
    }).when('/about',{
        controller: 'aboutController',
        templateUrl: '../template/about.html'
    })
})



