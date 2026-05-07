// function count0add(arr){
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(count0add([2,5,8,9]))
function count0add(arr){
    reslt= arr.filter(n=>n%2 !==0).length;
    return reslt;
}
console.log(count0add([2,5,8,9]))
