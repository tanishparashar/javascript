const Mynums = [1,2,3]
// const myTotal = Mynums.reduce(function (acc,currentval) {
//     return acc + currentval;
// },0);
    
 const mytotal = Mynums.reduce((acc,curr) => acc+curr,1)
console.log(mytotal);
const shopcart = [
    {itemname:"java",
    price:100},
    {itemname:'python',
    price:200},
    {itemname:"c++",
    price:300},
    {itemname:"data science",
    price:40000},

]
const total= shopcart.reduce((acc,item) => acc +item.price ,0)
console.log(total);