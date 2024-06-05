const nyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums =nyNumbers.map((num)=>{return num+10})
const newnums = nyNumbers
                .map((num)=> num *10)
                .map((num)=>num*10)
                .filter((num)=> num >500)
console.log(newnums);