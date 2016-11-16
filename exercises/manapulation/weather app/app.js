var app = angular.module("myApp", ['ngGeolocation'])


app.service("WeatherService",["$geolocation", "$http", function($geolocation,$http){
    this.location = function(){
        $geolocation.getCurrentPosition().then(function(position){
            return position;
        })
    }
}])


app.controller("myCtrl", ["$scope", "WeatherService",function($scope,WeatherService){
    
        WeatherService.
    
}])