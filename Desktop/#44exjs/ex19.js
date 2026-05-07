function frequency(arr){
    let obj = {};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
            
        }
        else{
            obj[arr[i]]=1;
        }
    }
 return obj;
}
console.log(frequency([1,2,2,5,9,9]))
