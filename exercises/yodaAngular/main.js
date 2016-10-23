var app = angular.module("myApp", []);
app.controller("myController", ["$scope", "$http", function ($scope, $http) {

    var config = {
        headers: {
            'X-Mashape-key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    $scope.something = function(){
         $http.get("https://yoda.p.mashape.com/yoda?sentence=" + $scope.translate , config)
             .then(function (response) {
                $scope.translate1= response.data;
        })
    }

}])