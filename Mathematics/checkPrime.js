console.log("------ Check if the number is prime or not")


let a = 11
let b = 14
let c = 1


export const checkPrime = (x)=>{
    if(x<2) return false;
    for (let i = 2; i * i <= x; i++) {
        if (x % i === 0) {
            return false; 
        }
    }
    return true;
}


console.log(checkPrime(a))
console.log(checkPrime(b))
console.log(checkPrime(c))
