//DATES

// let mydtae = new Date()
// console.log(mydtae.toString())
// console.log(mydtae.toISOString())
// console.log(mydtae.toJSON())
// console.log(mydtae.toLocaleDateString())
// console.log(typeof mydtae)

// let myCreatedDate= new Date(2023, 0 , 23)
// let myCreatedDate= new Date(2023, 0 , 23 , 5 , 3)
// let myCreatedDate= new Date("2023-01-14")
let myCreatedDate= new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toLocaleString());




let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getDay());
 console.log(newDate.getMonth()+1);


 newDate.toLocaleString('default',{weekday:"long"
        });