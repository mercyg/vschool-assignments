var app = angular.module("myApp", []);

app.service("BountyService", ["$http", function ($http) {
    //var self = this;
    var bounty = {};
    this.getBounty = function () {
        return $http.get("http://localhost:8000/bounties")
            .then(function (response) {
                bounty = response.data;
                return bounty;
            })

    }
    this.creatBounty = function(input){
        return $http.post("http://localhost:8000/bounties/", input)
            .then(function(response){
                return response.data;
            })
    }
}])

app.controller("myCtrl", ["$scope", "BountyService", function ($scope, BountyService) {

    //$scope.test = "Hello";
    $scope.getBounty = function () {
        BountyService.getBounty()
            .then(function (bounty) {
                //console.log("bounty", bounty);
                $scope.bounty = bounty;

            })
    }

    $scope.createBounty = function(input){
        BountyService.creatBounty(input)
            .then(function(response){
                console.log(response)
        })
    }


}])