let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

}



// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "hitesh"

    function two() {
        const website1 = "youtube"
        console.log(username);
    }
    //  console.log(website1);

    two()

}

// console.log(one());
if (true) {
    const username = "tanish"
    if (username === "tanish") {
        const website1 = "Youtube"
        console.log(username + website1);
    }
    // console.log(website1);
}
// console.log(username);



// ++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(5));
function addone(num) {
    return num + 1;
}

const addtwo = function (num) {
    return num + 2;
}
console.log(addtwo(4));