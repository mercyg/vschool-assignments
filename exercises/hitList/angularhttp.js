var app = angular.module("myApp",[]);

app.controller("hitController", ["$scope","$http" ,function($scope,$http){
    var requesthttp = $http.get("http://api.vschool.io:6543/hitlist.json");
    requesthttp.then(function(response){
             $scope.items =response.data;                   
    })
}])