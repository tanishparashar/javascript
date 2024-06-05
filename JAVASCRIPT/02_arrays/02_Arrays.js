const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["Superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// const n1 = marvel_heros.flat(Infinity);
// console.log(n1);

// console.log(marvel_heros[3][2]);

// all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); 

// const all_new_heros = [...dc_heros,...marvel_heros]
// console.log(all_new_heros);

console.log(Array.isArray("thor"));
console.log(Array.from("tanish"));
console.log(Array.from({bame:"tanish"}));//intresting

let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1,score2,score3));