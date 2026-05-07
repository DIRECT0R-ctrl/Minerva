function sumeven(arr){
    result=arr.filter(x=>x%2===0).reduce((acc,n)=>acc+=n),0
    return result

}
console.log(sumeven([2,3,2,5]))

function sumeven(arr){
    let tab=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            tab.push(arr[i]);
        }
        
    }
    let sum=0;
    for(let j=0;j<tab.length;j++){
         sum +=tab[j];
    }
    return sum;
}
console.log(sumeven([2,3,2,5,2]))
