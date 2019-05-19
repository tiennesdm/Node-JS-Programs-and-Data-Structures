module.exports = function sum(arr){
             
    if (toString.call(arr) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<arr.length;i++)
                 {                  
                   if(isNaN(arr[i])){
                   continue;
                    }
                     total += Number(arr[i]);
                  }
                return total;
               }
