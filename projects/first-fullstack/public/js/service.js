var app = angular.module("myApp")

app.service("HomeService",["$http", function($http){
    this.getAllReview = function(){
        return $http.get("/coffees")
            .then(function(response){
                return response.data;
        })
    }
    
    this.updateRating = function(newRating, input){
        return $http.post("/coffees/" + input + "/rating", newRating)
            .then(function(response){
                 return response.data;
        })
    }
    
}])


app.service("AboutService", ["$http", function($http){
    
}])