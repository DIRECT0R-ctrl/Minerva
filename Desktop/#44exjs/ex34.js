const items = [{ name: "Pen", price: 10, qty: 2 },
     { name: "Book", price: 50, qty: 1 },
      { name: "Eraser", price: 5, qty: 0 }];
       let result = items.reduce((acc,item)=>acc+(item.price*item.qty),0);

       console.log(result);
