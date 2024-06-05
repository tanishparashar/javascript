const user = {
    userbane: "Tanish",
    loginCounr: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Username is " + this.userbane);
        // console.log(this);
    }
}
// console.log(user.userbane);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise()
const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCounr = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome${this.username}`);
    }
    return this
}
const userOne = new User('Tanish',12,true)
const userTwo = new User('Tan',1,true)
console.log(userOne);