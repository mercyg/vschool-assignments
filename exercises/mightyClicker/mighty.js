var app = angular.module("myapp",['ngRoute'])

.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'blueController',
        templateUrl: '/buttonblue.html'
    }).when('/red',{
        controller: 'redController',
        templateUrl: '/buttonred.html'
    })
})

app.service("redService",function(){
//    var self = this;
    this.count = 100;
    this.increment = function() {
        this.count++;
    }
    this.decrement = function(){
        this.count--;
    };
    this.reset;
    
    
});
app.service("blueService", function(){
//    var self = this
    this.count = 100; 
     this.increment = function(){
         this.count++;
     }
    this.decrement = function(){
        this.count--;
        
    }
    this.reset = function(){
        this.count = 100
    };
    
    
})
//
app.controller("blueController",["$scope","blueService", "redService" ,function($scope, blueService, redService){
       $scope.redserv = redService.count;
        $scope.blueserv = blueService.count;
  $scope.bluebutton = function(){
      blueService.increment();
      
      redService.decrement();
      if(redService.count <= 0){
          redService.reset();
      }
      $scope.redserv = redService.count;
      $scope.blueserv = blueService.count;
//      $scope.incrementNum = blueService.count;
//      $scope.decrementNum = redService.count
//      console.log(blueService.increment())
//        redService.decrement = $scope.decrement;
}
  
        

}])
app.controller("redController", ["$scope", "blueService", "redService", function($scope,blueService, redService){
        $scope.redserv = redService.count;
        $scope.blueserv = blueService.count;
    $scope.redbutton = function(){
        redService.increment();
        blueService.decrement();
        if(blueService.count <= 0){
            blueService.reset();
        }
         $scope.redserv = redService.count;
      $scope.blueserv = blueService.count;
    }
    
}])