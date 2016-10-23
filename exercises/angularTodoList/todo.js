var app = angular.module("myApp",[]);
app.controller("myCtrl",["$scope","$http" ,function($scope,$http){
   
    
  $http.get("http://api.vschool.io/meheret/todo")
            .then(function(response){
           $scope.todolist = response.data;
       })
                         
//$scope.sendData = function(){
//    var data = {
//        title: $scope.title,
//        lName:
//    }
//}
 
$scope.createtodo = function(){
    
    $http.post("http://api.vschool.io/meheret/todo", $scope.todo ).then(function(response){
     $scope.todolist.push(response.data);
    })
}

$scope.deletetodo = function(){
    $http.delete("http://api.vschool.io/meheret/todo", )
}
                         
}])