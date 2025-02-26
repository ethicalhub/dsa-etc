console.log("------ Print All Prime Numbers in Range Given");

let x = 5;
let y = 2;

const arr = [2,3,4,5,6,10]

const listPrimeNumber = (x,y) =>{
    let min = x > y? y: x;
    let max = x < y? y:x;
    let resultArray = []

    for(let i = min; i*i < max; i++){
        console.log(arr[i])
    }
}

console.log(listPrimeNumber(x,y))