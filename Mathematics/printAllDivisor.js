console.log("------ print all the divisor of a given number...");

// Solution 1 with Time comlexity O(n)

let a = 36;
let b = 0;


const allDivisor = (x)=>{
    if (x <= 0) return console.log("Input should be a positive integer");

    for(let i=1; i<=x; i++){
       if(x%i === 0) console.log(i)
    }
}


allDivisor(a)
allDivisor(b)

// ----------------------------------------

// Solution 2 with lesser Time complexity (optimised solution)


let c = 36;
let d = 71;

// The number will be repeating after the square root of the number...

console.log("Optimized Solution")
const allDivisorOptimized = (x)=>{
    if (x <= 0) return console.log("Input should be a positive integer");

    for(let i=1; i<=Math.floor(Math.sqrt(x)); i++){
       if(x%i === 0) {
        console.log(i)

        if(i !== (x/i)){
            console.log(x/i)
        }
       }
        ;
    }
}


allDivisorOptimized(c)
allDivisorOptimized(d)
