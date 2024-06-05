// for
// for (let i = 0; i<11; i++){
//     const element = i;
//     if (i==5) {
//         console.log("5 is the number");
//     }
//     console.log(i);
// }

// 
// let myarr = ["flash", "Superman" , "Batman"]
// console.log(myarr.length);
// for(let i = 0; i<myarr.length; i++){
//     console.log(myarr[i]);
// }
// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("value detected: 5");
//         break;
//     }
//     console.log(`Value of i is ${index}`);

// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("value detected: 5");
        continue;
    }
    console.log(`Value of i is ${index}`);

}
