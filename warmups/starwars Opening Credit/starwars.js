var app = angular.module("myapp",[])
app.controller("myController",["$scope", "$http", function($scope,$http){
    $http.get("http://swapi.co/api/films/1")
        .then(function(response){
           $scope.stars = response.data.opening_crawl;
        
       
    })
}])