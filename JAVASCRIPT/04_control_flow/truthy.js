const Useremail = function(){}
 if (Useremail){
    console.log("True");
 }else{
    console.log("FAsle");
 }

 //Falsy Values
 //False ,0,-0,BigInt 0n, "" , null , undefined , NaN

//  Truthy Values 
//  "0",'False'," ",[],{},function(){}

const emtyjob = {} 

if (Object.keys(emtyjob).length===0){
        console.log("Object IS empty");
}else {
    "not empty"
}

//Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
val1 = undefined ?? 10 
val1 = undefined ?? 10 ?? 20 

// Ternary Operator 
// Condition? true : false 

const age = 20 
age >= 18 ?console.log("allowed"): "Not alllowed"

console.log(val1);