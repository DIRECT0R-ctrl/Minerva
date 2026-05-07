function containnumer(arr,n){
    for(let i =0;i<arr.length;i++){
        if(arr[i]===n){
            return true;
        }
      
    }
return false;


}
console.log(containnumer([1,2,5,60],60))

function containnumer(arr,n){
 reslt=arr.includes(n);
 return reslt
}
console.log(containnumer([1,2,5,60],9))
