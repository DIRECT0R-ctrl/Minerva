function removeDuplicates(arr){
    let tab=[];
    for(let i=0;i<arr.length;i++){
        if(!tab.includes(arr[i])){
            tab.push(arr[i]);
        }
    }
    return tab;
}
console.log(removeDuplicates("[1,5,5,6,8,9,8]"))