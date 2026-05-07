function countChar(str, char){
   let count=0;
   for(c of str){
    if (c===char){
        count++;
    }
   }
   return count;


}
console.log(countChar("salam labs elik","s"))