function sayMyName() {
    console.log("T");
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
}

// sayMyName()

function addTwo (n1,n2){
    let Result = n1 + n2 
 // return is used to stop the function and send back a value from it 
    return Result
    console.log("unreachable code to make it reachable write it above return");
}

const Result = addTwo(3,4)
console.log(Result);

function LoginUserMessage(Username = "sam") {
    if (!Username) {
        console.log("Please enter a usename");
        return
    }
    return `${Username} Just logged in `
}

// console.log(LoginUserMessage("Tanish"));
// console.log(LoginUserMessage("Tanish"));

function shoppingCart(val1,val2,...num1) {
    return num1
}
// console.log(shoppingCart(1,2,3,4,5,6,7,8));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));