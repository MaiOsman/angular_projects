angular.module("myApp")
.controller("formController", function($scope,$location,$rootScope) {
    // register function
    $scope.register= function(valid){
        if(valid){
            // console.log("form is valid");
            if($scope.user.passwd.length >4){
                  $scope.passError = false;
            }else{
                $scope.passError = true;
            }
            if($scope.user.passwd == $scope.user.rePasswd){
                  $scope.repassError = false;
                  // localStorage.setItem("user", JSON.stringify($scope.user));
                  $rootScope.user = $scope.user ;
                  $location.url('/login');
                  // document.getElementById('reg_form').style.display = "none";
                  // $scope.f_head = "Login Form"
                  // document.getElementById('log_head').innerHTML = "Login Form";
                  // $scope.f_head = "login";

                  // document.getElementById('login_form').style.display = "block";

            }else{
                $scope.repassError = true;
            }
        }
    }
    //login function
    // $scope.login= function(valid){
    //         var userObject = JSON.parse(localStorage.getItem('user'));
    //         console.log(userObject.name);
    //         if($scope.user.savedname == userObject.name){
    //             $scope.login_loginError = false;
    //             if(valid){
    //             if($scope.user.savedpasswd == userObject.passwd){
    //               $scope.login_loginError = false;
    //
    //               console.log('yeeeeeeeeeees');
    //               $location.url('/profile');
    //
    //             }else{
    //               $scope.login_loginError = true;
    //               $scope.user.savedpasswd = "";
    //             }
    //         }else{
    //             $scope.login_loginError = true;
    //             $scope.user.savedpasswd = "";
    //         }
    //     }
    //   }
});
