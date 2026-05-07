function maxnumber(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(maxnumber([5,8,9,4]));
function maxnumber(arr){
   let reslt=Math.max(...arr);
   return reslt
}

console.log(maxnumber([5,8,9,4]));