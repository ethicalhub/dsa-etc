// Sum of the integer digits in the number

let a = 1234 //output --> 10
let b = 3523 //output --> 13

const sumOfDigits = (n)=>{
    if(n<=0){
        return 0;
    }
    return n%10 + sumOfDigits(Math.floor(n/10)) 
}


console.log(sumOfDigits(1234))


let count = 0;
const countDigits = (n)=>{
    if(n<=0){
        return 0;
    }
    count++;
    countDigits(Math.floor(n/10)); 

    return count;
}

console.log(countDigits(1234))

