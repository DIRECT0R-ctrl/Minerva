const tasks = [
    {id: 1, member: "amine", cycle: 1},
    {id: 2, member: "hamza", cycle: 2},
    {id: 3, member: "amine", cycle: 1},
    {id: 4, member: "hassan", cycle: 2},
    {id: 5, member: "hassan", cycle: 2},
    {id: 6, member: "amine", cycle: 1},
]
let reslt=tasks.reduce((acc,x)=>{
    if(!acc[x.member]){acc[x.member]=0}
    acc[x.member]+=1;
    return acc;
},{});
console.log(reslt)