const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby', 
    swift:"Swift by apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcuut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java","c++","python"]

for (const key in programming){
    console.log(programming[key]);
}

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"Unites States OF america")
map.set("FR" , "France")
map.set('IN',"INDIA")

for (const key in map) {
    console.log(key);
}
