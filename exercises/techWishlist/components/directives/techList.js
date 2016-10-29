var app = angular.module("myApp");

app.directive("wishList", [function(){
    return{
        restrict: "E",
        templateUrl: "components/directives/tech-list.html",
        scope: {
            phone: "="
        }
    }
    
}])