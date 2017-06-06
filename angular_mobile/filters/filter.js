angular.module("myApp")
.filter("round", function() {

  return function(item,option){
      console.log(item);
      console.log(option);

      return item.toFixed(option)
  }
});
