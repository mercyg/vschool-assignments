var app = angular.module("myApp",[]);
app.controller("badgeController",function($scope){
    $scope.budge = function(){
        $scope.newBudget = [];
           $scope.newBudget.push($scope.badge)
       
    }
    
    $scope.showUser = function(badge) {
        console.log(badge);
    }
})