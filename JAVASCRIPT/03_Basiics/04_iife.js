// Immiediately Invoked Function Expressions

(function chai(){
    console.log('Hello World');
})();//idhar semicolon daalna zaroori hai 

//Arrow function as IIFE
( (name) => {
    console.log(`Hello ${name}`);
})('tanish');

( (num1,num2) => {
    console.log(`The sum is ${num1+num2}`);
})(2,3);