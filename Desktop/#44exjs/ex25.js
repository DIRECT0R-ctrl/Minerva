function twoSum(arr, target){
    let sum;
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            sum=arr[i]+arr[j];
            if(sum===target){
                return i && j ;
            }
        }
    }
    return 
}