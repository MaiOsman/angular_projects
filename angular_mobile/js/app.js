angular.module("myApp", ["ngRoute"])

angular.module("myApp").run(function($rootScope,$location){

  $rootScope.searchProducts=  function(){
    $location.url('/search');
  }
})
