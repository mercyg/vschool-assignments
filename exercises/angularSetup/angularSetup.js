var app = angular.module("MyApp", []);
app.controller("MainController",["$scope",function($scope){
    $scope.player = {
        kills:[
            {
                handle: "jk400",
                rank: 14932,
                clan: ["hpburne200", "sputnik", "sololobo21"]
            },
            {
                handle: "dragonbobz",
                rank: 83655,
                clan: ["asdf", "sputnik", "peoplesrepublic"]
            },
            {
                handle: "joeschmoe",
                rank: 9274,
                clan: ["hpburner200", "sputnik", "sololobo21"]
            },
            {
                handle: "sarz",
                rank: 10,
                clan: ["peoplesrepublic", "asdf", "sololobo21"]
            },
            {
                handle: "zikamademethiswayl",
                rank: 9580,
                clan: ["hpburner200", "peoplesrepublic", "asdf"]
            }
        ]
    }
    
    
}])