angular.module('myApp').config(function($routeProvider){

$routeProvider.when('/',{
	templateUrl:'templates/home.html',
	controller:"home"
})


.when('/products',{
	templateUrl:'templates/products.html' ,
	controller:"products"
	// ,
	// resolve:{
	// 	resolvedProducts :function(){
	// 			return products.getALLpRODUCTS.then(function(res){
	// 					return
	// 			})
	// 	}
	// }

})

.when('/singleProduct/:product_id',{
	templateUrl:'templates/singleProduct.html',
	controller:"singleProduct"
})

})
