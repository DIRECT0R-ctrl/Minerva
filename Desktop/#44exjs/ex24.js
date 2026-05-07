function intersection(a, b){
    let tab=[];
    for(let i =0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]===b[j]){
                tab.push(a[i]);
            }
        }
    }
    return tab;
    
}
console.log(intersection([1,2,5],[1,5]));