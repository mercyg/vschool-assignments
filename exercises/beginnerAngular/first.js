var app = angular.module("MyApp", []);
app.controller("MainController",["$scope",function($scope){
    //$scope.myWord = "hello";
   // console.log($scope.myWord);
   
    $scope.hello = function(){
         $scope.name = " ";
        
    }
}])

