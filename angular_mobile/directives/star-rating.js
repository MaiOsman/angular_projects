angular.module('myApp').directive('starRating',function(){
    return{
        // template: '<i class="glyphicon glyphicon-star" ng-repeat="rate in rates track by $index"></i>\
        // <i class="glyphicon glyphicon-star-empty" ng-repeat="rate in norates track by $index"></i>',
        link:function(scope,ele,attr){
          console.log(attr.rating);
            scope.rates=new Array(parseInt(attr.rating))
            scope.norates=new Array(5-parseInt(attr.rating))
            // <!-- scope.rates=attr.rating -->
            // scope.rates= []
            for(var i= 0; i< scope.rates.length; i++){
                ele.append('<i class="glyphicon glyphicon-star" ng-repeat="rate in rates track by $index"></i>')
            }
            for(var i= 0; i< scope.norates.length; i++){
                ele.append('<i class="glyphicon glyphicon-star-empty" ng-repeat="rate in norates track by $index"></i>')
            }
            // for(var i= 0; i< attr.rating; i++){
            //     scope.rates.push(i)
            // }
        }
    }
})
