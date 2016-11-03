var app = angular.module("myApp", ['ngGeolocation', 'ngRoute'])

.config(function($routeProvider){
    $routeProvider.when('/',{
        controller: 'searchController',
        templateUrl: 'template/search.html'
    })
        .when('/city',{
        controller: 'cityController',
        templateUrl: 'template/city.html'
    })
})

app.service("WeatherService", ["$geolocation", "$http", function ($geolocation, $http) {
    var self = this;
    
    this.getLocation = function () {
        return $geolocation.getCurrentPosition()
            .then(function (position) {
                var long = position.coords.longitude;
                var lat = position.coords.latitude;
                return self.weather(long, lat);
            })
    }
    this.weather = function (long, lat) {
//     var baseUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=18a926c00a15bf7072316e88506a8add&units=metric"
        var baseUrl = "https://api.darksky.net/forecast/37b36f0ccffe23b0d9ec4169e1fa9afc/" + lat + "," + long;
        return $http.get(baseUrl);
    }
}])

app.controller('cityController',['$scope', function($scope){
    
}])

app.controller("myCtrl", ["$scope", "WeatherService", function ($scope, WeatherService) {

    WeatherService.getLocation().then(function (response) {
        $scope.temp = response.data.currently.temperature;
       $scope.describe = response.data.currently.icon;

    });
}]);