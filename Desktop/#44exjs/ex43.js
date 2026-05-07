const items = [  { name: "Pen", price: 10, qty: 2 }, 
     { name: "Book", price: 50, qty: 1 }, 
      { name: "Eraser", price: 5, qty: 0 }];

      let total=items.reduce((acc,x)=>{
        acc+=(x.price*x.qty)
        return acc;
      },0);

      let reslt= Math.max(...items.map(w=>w.price));
let nmm=items.map(s=>s.name);
            console.log(nmm);
