const products = [
  { id: 1, name: "A", qty: 5, seuil: 10 },
  { id: 2, name: "B", qty: 12, seuil: 10 },
  { id: 3, name: "C", qty: 8, seuil: 7 },
  { id: 4, name: "D", qty: 3, seuil: 5 }
];
let total=products.reduce((acc,x)=>{
    acc+=x.qty
    return acc;
},0);
console.log(total);