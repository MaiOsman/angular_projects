angular.module("myApp")
.controller("home", function($scope,$location,$rootScope,Product) {
  // console.log($scope)
    Product.getAllProducts().then(function(data){
        $scope.products = data
        // console.log(data)
    },function(err){
        console.log("no data");
    });
});
