angular.module("myApp")
.factory("Product", function($http,$q) {

    return {
       getAllProducts:function(){
        //  console.log('hhhhhhhhhhhhhh')
        //  url:'http:/test.w34.co/json/',
         var def = $q.defer();
             $http({
                 url:'products.json',
                 method:'GET'
             }).then(function(res){
                 console.log(res.data)
                 console.log(typeof res)
                 if(res.data.length){
                    def.resolve(res.data)
                 }else{
                     def.reject('there is no data')
                 }
             },function(err){
                  def.reject(err)
             })
             return def.promise;
       },

       getOneProduct:function(product_id){
         var def = $q.defer();
             $http({
                 url:'products.json',
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
