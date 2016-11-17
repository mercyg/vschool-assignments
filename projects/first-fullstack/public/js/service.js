var app = angular.module("myApp")

app.service("HomeService",["$http", function($http){
    this.getAllReview = function(){
        return $http.get("/coffees")
            .then(function(response){
                return response.data;
        })
    }
}])

app.service("AboutService", ["$http", function($http){
    
}])