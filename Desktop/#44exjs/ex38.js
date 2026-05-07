const products = [
  { id: 1, name: "A", qty: 5, seuil: 10 },
  { id: 2, name: "B", qty: 12, seuil: 10 },
  { id: 3, name: "C", qty: 8, seuil: 7 },
  { id: 4, name: "D", qty: 3, seuil: 5 }
];

let result = products.filter(x=>x.qty<x.seuil).reduce(x=>({...x,qty : x.qty+x.qty*0.3}));
console.log(result);