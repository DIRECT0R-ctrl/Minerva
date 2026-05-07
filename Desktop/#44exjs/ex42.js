const products = [
  { id: 1, name: "A", qty: 5, seuil: 10 },
  { id: 2, name: "B", qty: 12, seuil: 10 },
  { id: 3, name: "C", qty: 8, seuil: 7 },
  { id: 4, name: "D", qty: 3, seuil: 5 }
];


let reslt = products.filter(x=>x.name==="A"||x.name==="B").filter(x=>x.qty<x.seuil);
console.log(reslt)