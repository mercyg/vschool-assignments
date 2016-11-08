var app = angular.module("myApp", []);

app.service("BountyService", ["$http", function ($http) {
    //var self = this;
    var bounty = [];
    this.getBounty = function () {
        return $http.get("http://localhost:8000/bounties")
            .then(function (response) {
                bounty = response.data;
                return bounty;
            })

    }
    this.creatBounty = function(){
        return $http.post("http://localhost:8000/bounties/", bounty){
            .then(function(response){
                
            })
        }
    }
}])

app.controller("myCtrl", ["$scope", "BountyService", function ($scope, BountyService) {

    //$scope.test = "Hello";
    $scope.getBounty = function () {
        BountyService.getBounty()
            .then(function (bounty) {
            console.log("bounty", bounty);
                $scope.bounty = bounty;

            })
    }

    $scope.createBounty = function($scope.bounce){
        BountyService.creatBounty()
            .then
    }


}])