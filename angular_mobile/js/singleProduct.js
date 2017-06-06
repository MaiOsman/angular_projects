angular.module("myApp")
.controller("singleProduct", function($scope,$location,$rootScope,Product,$routeParams) {
    var id = $routeParams['product_id'];
    Product.getOneProduct(id).then(function(data){
        $scope.product = data
        $scope.number = 15.2676589
        // console.log(data)
    },function(err){
        console.log("no data");
    });
});
