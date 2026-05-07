function filterEven(arr){
    let tab=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            tab.push(arr[i]);
        }
    }
    return tab;
}

console.log(filterEven([2,3,6,8,9]));