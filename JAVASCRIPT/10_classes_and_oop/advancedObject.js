const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'iced Latte',
    price: '250Rs',
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    enumerable: false,
    writable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}