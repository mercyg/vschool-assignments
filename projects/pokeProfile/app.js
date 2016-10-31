var app = angular.module("myApp", [])

app.service("PokeService", ["$http",function($http){
    this.getPoke = function(id){
        var pokeman = {};
        
     return $http.get("http://pokeapi.co/api/v1/pokemon/" + id)
            .then(function(response){
                pokeman.name = response.data.name;
                pokeman.attack = response.data.attack;
                pokeman.ablility = response.data.abilities[0].name;   
               pokeman.sprites =" http://pokestadium.com/sprites/xy/" + pokeman.name.toLowerCase() + ".gif";
               return pokeman;
            
          });
         
//                return $http.get("http://pokeapi.co/"+   response.data.sprites[0].resource_uri);
 
//        .then(function(response){
//          pokeman.sprites = response.data.image;
//         return pokeman;
//     })
    }
    
}])

app.controller('myCtrl',["$scope","PokeService",function($scope,PokeService ){
    
   $scope.getPoke = function(){
    
    PokeService.getPoke($scope.id)
        .then(function(pokeman){
            $scope.pokeman = pokeman;
        
    })
    
  
   }
    
}]);