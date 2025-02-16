import { countDigit } from "./countDigit.js";

console.log("------ Check if the given number is armstrong number or not...");
// An Armstrong number (also known as a Narcissistic number, Pluperfect Digital Invariant (PPDI), or 
// Number of Power) is a number that is equal to the sum of its own digits, each raised to the power of the number of digits in the number.

let a = 0
let b = 9474
let c = 1634


const isArmstrongNumber = (x)=>{
    if (x < 0) return false;
    let initNumber = x;
    let sumOfNumber = 0;

    // Calculate the number of Digits
    let count = countDigit(x)

    x = Math.abs(x)
    while(x>0){
        let digit = x%10;
        sumOfNumber = sumOfNumber + Math.pow(digit, count)
        x = Math.floor(x/10);
    }


    return sumOfNumber === initNumber;
}

console.log(isArmstrongNumber(a))
console.log(isArmstrongNumber(b))
console.log(isArmstrongNumber(c))