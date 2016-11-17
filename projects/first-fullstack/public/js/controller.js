var app = angular.module("myApp")

app.controller("homeController", ["$scope", function($scope){
    $scope.test = "hello"
}])

app.controller("aboutController", ["$scope", function($scope){
    $scope.test = "This is the about page"
}]);