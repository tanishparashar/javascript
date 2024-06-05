const myArr=[0,1,2,3,4,5]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1]);
// console.log(myArr2[1]);

// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

//  unshift is used to add at index 0  

// myArr2.unshift(10)
// console.log(myArr2);
// myArr2.shift()

// console.log(myArr.includes(9));
// console.log(myArr2.indexOf(3));

const myna= myArr.join()
console.log(myna);

// slice and spice 
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

