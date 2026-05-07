function longestWord(sentence){
  let words=sentence.splite("");
  let longest="";
  for(let word of words){
    if(word.length>longest.length){
        longest=word;
    }
  }
  return longest;

}