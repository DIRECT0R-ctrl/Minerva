const products = [
  { id: 1, name: "A", qty: 5, seuil: 10 },
  { id: 2, name: "B", qty: 12, seuil: 10 },
  { id: 3, name: "C", qty: 8, seuil: 7 },
  { id: 4, name: "D", qty: 3, seuil: 5 }
];

let reslt= products.map(x=>({...x,"status":x.qty>x.seuil?"hight":x.qty===x.seuil?"ok":"low"}));
console.log(reslt);