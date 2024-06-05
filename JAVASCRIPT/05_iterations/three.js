arr=[1,2,3,4,5]
for (const num of arr) 
{
    // console.log(num);   
}


const greeting = "HelloWorld"
for(const i of greeting){
    console.log(`Each character is ${i}`);
}
//MAPS

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"Unites States OF america")
map.set("FR" , "France")
map.set('IN',"INDIA")

// console.log(map);
for (const [key,Value] of map) {
    console.log(key, ':-' , Value);
}

const myObject = {
    game1 : 'NFS',
    game2 : 'CSGO' 
}

for (const [key,Value] of myObject) {
    console.log(key, ':-' , Value);
}