var app = angular.module("myApp", []);
app.controller("myController",['$scope',function($scope){
        $scope.num1;
        $scope.num2;
        $scope.add = function(){
            $scope.sum= $scope.num1 + $scope.num2;
    }
    
    
}])

app.controller("myCtrl",['$scope',function($scope){
    $scope.num1;
    $scope.num2;
    $scope.mult = function(){
        $scope.multiply =  $scope.num1 * $scope.num2;
    }
}])