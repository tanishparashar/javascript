const user = {
    username: "Tanish",
    price: 69,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to youtube`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="Pinky"
// user.welcomeMessage()

// console.log(this);

// function chai () {
//     let username = "Tanish"
//     console.log(this.username);
// }



// const chai = function (){
//     let username = "Tanish"
//     console.log(this); 
// } 
const chai = () => {
    let username = "Tanish"
    console.log(this.username);
}
// chai()
// const addtwo = (num1, num2) => (num1 + num2)
//  const addtwo = (num1, num2) => num1 + num2
  const addtwo = (num1, num2) => ({username: "Tanish"})


console.log(addtwo(4,5));