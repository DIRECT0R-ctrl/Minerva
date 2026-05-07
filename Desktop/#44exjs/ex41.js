const tasks = [
  { id: 1, member: "amine" },
  { id: 2, member: "hamza" },
  { id: 3, member: "amine" },
  { id: 4, member: "hassan" }
];
 let reslt=
tasks.reduce((acc,x)=>{
    if(!acc[x.member]){acc[x.member]=0}
    acc[x.member+=1]
    return acc;
    
},{})
console.log(reslt)