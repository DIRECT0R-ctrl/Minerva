function longestword(str){
    let words=str.split(" ");
let longest="";
for (let word of words){
    if(word.length>longest.length){
        longest=word;
    }
}
return longest;
}
console.log(longestword("salam labs elik ana smiti sarrra"))
