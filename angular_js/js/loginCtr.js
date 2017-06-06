angular.module("myApp")
.controller("loginCtr", function($scope,$location,$rootScope) {
    //login function
    $scope.login= function(valid){
        if(valid){
          $location.url('/profile');
      //     if($scope.user.savedname == $rootScope.user.name){
      //         $scope.login_loginError = false;
      //         if(valid){
      //         if($scope.user.savedpasswd == $rootScope.user.passwd){
      //           $scope.login_loginError = false;
      //
      //           console.log('yeeeeeeeeeees');
      //       $location.url('/profile');
      //
      //         }else{
      //           $scope.login_loginError = true;
      //           $scope.user.savedpasswd = "";
      //         }
      //     }else{
      //         $scope.login_loginError = true;
      //         $scope.user.savedpasswd = "";
      //     }
      // }

        }
      }
});
