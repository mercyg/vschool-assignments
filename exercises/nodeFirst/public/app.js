var app = angular.module("myApp", []);

app.service("BountyService", ["$http", function ($http) {
    //var self = this;
    this.getBounties = function () {
        return $http.get("http://localhost:8000/bounties")
            .then(function (response) {
                return response.data;
            })

    }
    this.createBounty = function(input){
        return $http.post("http://localhost:8000/bounties/", input)
            .then(function(response){
                return response.data;
            })
    }
    
    this.editBounty = function(item){
        return $http.put("http://localhost:8000/bounties/" + item.id, item)
            .then(function(response){
                return response.data
        })
    }
    
    this.deleteBounty = function(item){
        return $http.delete("http://localhost:8000/bounties/" + item.id)
            .then(function(response){
                return response.data
        })
    }
    
    
}])

app.controller("myCtrl", ["$scope", "BountyService", function ($scope, BountyService) {
    $scope.editMode = false;
    //$scope.test = "Hello";
    $scope.getBounties = function () {
        BountyService.getBounties()
            .then(function (bounties) {
                //console.log("bounty", bounty);
                $scope.bounties = bounties;
                
            })
    }

    $scope.createBounty = function(input){
        console.log(input)
        BountyService.createBounty(input)
            .then(function(data){
                $scope.bounties.push(data);
        });
    }
    
    $scope.editBounty = function(item){
        BountyService.editBounty(item)
            .then(function(bounties){
                $scope.bounties = bounties;
        })
        
    }
    $scope.deleteBounty = function(item,index){
        BountyService.deleteBounty(item,index)
            .then(function(bounties){
                $scope.bounties = bounties;
        })
    }
    

    

}])