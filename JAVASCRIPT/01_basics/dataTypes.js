// DATA TYPES 
// 1)PRIMITIVE
// 2)NON-PRIMITIVE

// -->PRIMITIVE(call by values)/* 
// 7 types :
//String, number, boolean, null , undefined , symbol , big int

//NON PREMITIVE call by REFERENCE
// Array, objects, functions

let a = [345]; // array is non primitive type because it contains reference to other memory location.

const score = 100
const scoreValue = 100

let Undefines= undefined;

const IslogggedIn = false 
const outsideTemp = null 
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id=== anotherId);
console.log(id); 
console.log(anotherId); 


// NON PRIMITIVE

const heros=["Shaktimaan", "Naagraj", "doga"]
let myObj={
    name: "Hitesh",
    age:23
}

const myFunction = function () 
{
console.log("Hello world");    
}
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof Undefines);
console.log(typeof heros);
console.log(typeof id);