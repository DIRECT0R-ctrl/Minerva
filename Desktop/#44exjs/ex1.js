

function sumArray(arr){
    let sum=0;
    for(let i =0;i<arr.length;i++){
        sum+=i;

    }
    return sum;
}
console.log(sumArray);


function sumArray(arr){
    let sum=0
    reslt=arr.reduce((acc,i)=>
    sum +=i),0
} 
