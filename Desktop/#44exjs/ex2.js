let array = [20,14,2,60]


function minMax(arr){
    let min = [0]
    let max = [0]
    for(let i=0;i<arr.length;i++){

        if (arr[i]<min){
            min = arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    }
}


function minMax(arr){
return{
    max:Math.max(...arr),
    min:Math.min(...arr)

}
}