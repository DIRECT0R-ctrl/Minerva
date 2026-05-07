function multiplyAll(arr){
    totl=array.reduce((acc,i)=>{
       return acc*i
    },1)
}

function multiplayAll(arr){
    let acc=1;
    for (let i=1;i<arr.length;i++){
        acc=acc*arr[i];
    }
    return acc;
}