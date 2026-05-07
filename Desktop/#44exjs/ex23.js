function areAnagrams(s1, s2){
    let reslt=s1.split("").sort();
    let resltb=s2.split("").sort();
    return reslt.join("")===resltb.join("");

}
console.log(areAnagrams("sarra","khalid"));