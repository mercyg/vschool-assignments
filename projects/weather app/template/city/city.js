var app = angular.module("myApp");


app.service("CityService", ["$http", function ($http) {
    var self = this;
    var cities = {};
    var nextLocation;
//    this.setLocation = function(state) {
//        self.nextLocation = state;
//    }
    // var self = this
    this.cityWeather = function (state) {
        var baseUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + state + "&mode=json&appid=18a926c00a15bf7072316e88506a8add&units=imperial&cnt=7"
        //self.location = state
        return $http.get(baseUrl)
            .then(function (response) {
                
                cities.weather = response.data.main.temp;
                cities.highLow = response.data.main.temp_min;
                cities.lowHigh = response.data.main.temp_max;
            var icons = response.data.weather[0].icon
//                cities.icons = response.data.weather[0].icon;
     //         return cities;
                return $http.get("http://openweathermap.org/img/w/" + icons + ".png");
            })
            .then(function(response){
                cities.icons = response.data
                return cities;
        })

    };
    
   
}])

app.controller("cityController", ["$scope", "CityService", "SharedService",function ($scope, CityService, SharedService) {

    console.log(SharedService.savedData);
//    SharedService.get(); 
    
    
        CityService.cityWeather(SharedService.savedData)
            .then(function (cities) {
                $scope.cities= cities;
            })
    
        $scope.myJson = {
    type : 'line',
    scaleX:{
    "values":"0:16:1",
    "format":"Day %v"
  },
    series : [ 
      { values : [10,15,16,20,40] }
    ]
};

}])