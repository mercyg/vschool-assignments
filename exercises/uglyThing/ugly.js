var app = angular.module("myApp",[]);
app.controller("myController",["$scope",function($scope){
    $scope.newugly= [];
    $scope.ugly = function(){
        $scope.newugly.push($scope.uglies)
    }
}])