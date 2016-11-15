var app = angular.module("myApp", [])

app.service("VoteService", ["$http", function ($http) {
    this.getAllIssues = function () {
        //var votes = {}
        return $http.get('/votes')
            .then(function (response) {
                return response.data

            })
    }

    this.creatIssue = function (input) {
        return $http.post('/votes/', input)
            .then(function (response) {
                return response.data
            })
    }

    this.deleteIssue = function (item) {
        //console.log("***" + item._id)
        return $http.delete('/votes/' + item._id)
            .then(function (response) {
                //console.log(response)
                return response.data
            })
    }
    
    this.createComment = function(newComment, input){
        //console.log(newComment)
        return $http.post('/votes/' + input + '/comments', newComment)
            .then(function(response){
            //console.log(response)
                return response.data
        })
    }
    

}])


app.controller("myCtrl", ["$scope", "VoteService", function ($scope, VoteService) {

        //$scope.edit = false
    $scope.getAllIssue = function () {
        VoteService.getAllIssues()
            .then(function (votes) {
                $scope.votes = votes;
            })
    }

    $scope.creatIssue = function (input) {
        VoteService.creatIssue(input)
            .then(function (data) {
                $scope.votes.push(data);
            })
    }

    $scope.deleteIssue = function (item, index) {
        VoteService.deleteIssue(item, index)
            .then(function (response) {
                $scope.votes = response;
            })
    }
    
    $scope.creatComment = function(newComment,index){
        //console.log(index)
        var demoId = $scope.votes[index]._id;
        //console.log(demoId);
        VoteService.createComment(newComment, demoId)
            .then(function(response){
            console.log(response.comments)
//                $scope.votes.comments.push(response);
        });
        VoteService.getAllIssues()
            .then(function (votes) {
                $scope.votes = votes;
            })
        
    }
//    

    function init() {
        $scope.getAllIssue()
    }
    init();

}])