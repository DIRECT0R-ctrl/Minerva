function uper(sentence){
    reslt = sentence.split(" ");
    for (let i=0;i< reslt.length;i++){
       let str= reslt[i].split("");
       for(let j=0;j<str.length;j++){
        up=str[0].toUpperCase();
       }
    }
     return reslt
}
console.log(uper("salam sarra abbih "))