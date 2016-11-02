var app = angular.module("myApp", ['ngGeolocation'])

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
        var baseUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=18a926c00a15bf7072316e88506a8add&units=metric"
        return $http.get(baseUrl);
    }
}])


app.controller("myCtrl", ["$scope", "WeatherService", function ($scope, WeatherService) {

    WeatherService.getLocation().then(function (response) {
        $scope.temp = response.data.main.temp;
       $scope.describe = response.data.weather[0].description;
        
    });
}]);