var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", "$http", function ($scope, $http) {
    $scope.editMode = false;

    $http.get("http://api.vschool.io/meheret/todo")
        .then(function (response) {
            $scope.todolist = response.data;
        })

    $scope.createtodo = function () {

        $http.post("http://api.vschool.io/meheret/todo", $scope.todo).then(function (response) {
            $scope.todolist.push(response.data);
        })
    }

    $scope.deletetodo = function (item, index) {
        // item_to_delete = $scope.todolist[idx];
        // console.log(item_to_delete);
        $http.delete("http://api.vschool.io/meheret/todo/" + item._id)
            .then(function (response) {
                $scope.todolist.splice(index, 1);
            })
    }

    $scope.updatetodo = function (item) {
        $http.put("http://api.vschool.io/meheret/todo/" + item._id, item)
            .then(function (response) {
                console.log(response);
                item.editMode = false;
            });
    }

    //$scope.edittodo = function()
    //    $http.put("http://api.vschool.io/meheret/todo" +  $scope.item.id)
    //        .then(function(response){
    //            console.log(response)
    //})


}])