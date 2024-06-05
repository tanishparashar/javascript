const coding = ["js", "ruby", "java", "python", "cpp"]
//for each doesnt return any value
// coding.forEach(function (val) {
//     console.log(val);
// })

// As an arrow function
coding.forEach((item) => {
    // console.log(item);
})

function printme(item) {
    // console.log(item);
}
// passsing function as a param to an array
// coding.forEach(printme) 

coding.forEach((index, i, arr) => {
    console.log(index, i, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=> {
    console.log(`${item.languageName}: ${item.languageFileName}`);
})