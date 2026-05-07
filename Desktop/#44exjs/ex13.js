function shortestWord(sentence){
    let words=sentence.split(" ");
    let short=words[0];
    for(let word of words){
        if(word.length<short.length){
            short=word;
        }
    }
    return short;
}
console.log(shortestWord("je suis sarra abbih de nador"));
