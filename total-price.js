const products =[
    {name:'laptop', price:45000},
    {name:'Shirt', price:400},
    {name:'Watch', price:4500},
    {name:'phone', price:50000},
]
let totalprice = 0;
for(const product of products){
    totalprice = totalprice + product.price;
}
// console.log(totalprice);

const cart =[
    {name:'laptop', price:45000, quantity:3} ,
    {name:'Shirt', price:400, quantity:2} ,
    {name:'Watch', price:4500, quantity:4} ,
    {name:'phone', price:50000, quantity:1} ,
]

let subtotal = 0;
for(const product of cart){
    const productTotal = product.price * product.quantity;
    subtotal = subtotal + productTotal;
}

console.log(subtotal);
