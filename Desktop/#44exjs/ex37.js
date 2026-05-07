const array = [
  {id:1 , name: "mon1", qty:10 , seuil:12},
  {id:2 , name: "mon1", qty:10 , seuil:5},
  {id:3 , name: "mon1", qty:10 , seuil:15},
  {id:4 , name: "mon1", qty:14 , seuil:12}
];
let reslt=array.filter(x=>x.qty<x.seuil).map(x=>{...x.qty+x.qty*0.2});
console.log(reslt);