angular.module("myApp")
.factory("Product", function($http,$q) {

    return {
       getAllProducts:function(){
        //  console.log('hhhhhhhhhhhhhh')

         var def = $q.defer();
             $http({
                 url:'http://test.w34.co/json/',
                 method:'GET'
             }).then(function(res){
                 console.log("mmmm",res)
                 console.log("sssss",res.status);
                 console.log(typeof res)
                 if(res.data.length){
                   console.log(res.data);
                    def.resolve(res.data)
                 }else{
                     def.resolve('there is no data')
                 }
             },function(err){
                  def.reject(err)
             })
             return def.promise;
       },

       getOneProduct:function(product_id){
         var def = $q.defer();
             $http({
                 url:'http://test.w34.co/json/',
                 method:'GET'
             }).then(function(res){
                 console.log(res.data[product_id])
                 console.log(typeof res)
                 if(res.data.length){
                    def.resolve(res.data[product_id])
                 }else{
                     def.reject('there is no data')
                 }
             },function(err){
                  def.reject(err)
             })
             return def.promise;
       }
    }
});
