var app = angular.module("myApp")

app.controller("homeController", ["$scope", "HomeService",function($scope,HomeService){
    $scope.getAllReview = function(){
        HomeService.getAllReview()
            .then(function(coffeeReviews){
                console.log(coffeeReviews)
                $scope.review = coffeeReviews;
        })
    }
    
    
function init(){
    $scope.getAllReview();
}
init()
    
}])

app.controller("aboutController", ["$scope", function($scope){
    $scope.test = "This is the about page"
}]);