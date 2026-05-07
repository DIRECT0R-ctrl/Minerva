let constnumbers= [10,5,80,20,100];
// let total=Math.max(...constnumbers);

// function maxnum(arr){
//     let max = arr[0];
//     for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
//     }
// return max;
// }



let max = constnumbers[0];

constnumbers.forEach(x => {
    
    if (x>max){
        max=x;
    }

   
});

console.log(max)