var app = angular.module("myApp")

app.controller("homeController", ["$scope", "HomeService",function($scope,HomeService){
    $scope.getAllReview = function(){
        HomeService.getAllReview()
            .then(function(coffeeReviews){
                $scope.review = coffeeReviews;
        })
    }
    
    $scope.updateRating = function(newRating, index){
        var rateId = $scope.review[index]._id;
        HomeService.updateRating(newRating, rateId)
            .then(function(response){
            
        })
        HomeService.getAllReview()
            .then(function(review){
                $scope.review = review;
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