// Singleton 
// Object.create (LATER)

// Object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "John",
    "full name": "John Wick",
    [mySym]:"Mysym1",
    age:18,
    location:"Indore",
    isloggedIn:"False",
    LastloggedIn:['Monday','Sunday']
}

// console.log(Jsuser["full name"]);
 console.log(Jsuser.location);
 console.log(Jsuser["full name"]);

Jsuser.location="USA"
//console.log(Jsuser);
//Object.freeze(Jsuser)
Jsuser.greeting=function(){
    console.log("Hello JS user");
}
Jsuser.greetingtwo = function () {
    console.log(`Hello JS user,${this.name}`);
}
 console.log(Jsuser.greeting());
 console.log(Jsuser.greetingtwo());
