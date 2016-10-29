var app = angular.module("myApp");

app.controller('homeController', ['$scope',function($scope){
    
    $scope.lists = [
         {
             name: "surface Pro 4",
             image: "https://c.s-microsoft.com/en-us/CMSImages/SurfacePro4_Home_1_Hero_V2.jpg?version=10348085-a3d8-ddb5-b31d-4a3f9385d985",
             price: 894
         },
         {
             name: "surface Pro 4",
             image: "https://c.s-microsoft.com/en-us/CMSImages/SurfacePro4_Home_1_Hero_V2.jpg?version=10348085-a3d8-ddb5-b31d-4a3f9385d985",
             price: 896
         },
         {
             name: "surface Pro 4",
             image: "https://c.s-microsoft.com/en-us/CMSImages/SurfacePro4_Home_1_Hero_V2.jpg?version=10348085-a3d8-ddb5-b31d-4a3f9385d985",
             price: 889
         }
         
        
    ]
    
  
}])