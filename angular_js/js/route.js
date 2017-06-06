angular.module('myApp').config(function($routeProvider){

$routeProvider.when('/',{
	templateUrl:'templates/home.html'
})


.when('/register',{
	templateUrl:'templates/register.html' ,
	controller:"formController"

})

.when('/login',{
	templateUrl:'templates/login.html' ,
	controller:"loginCtr"

})

.when('/profile',{
	templateUrl:'templates/profile.html' 
})

})
