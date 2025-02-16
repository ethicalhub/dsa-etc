console.log("------ Reverse the number given, without using string or array")


let a = 341
let b = 2346030
let c = -3352


const reverseNumber = (x)=>{
    let reversedNumber = 0;
    let isNegative = x<0;
    if(x === 0) return 0;

    x = Math.abs(x)
    while(x>0){
        let digit = x%10;
        reversedNumber = digit +  reversedNumber * 10;
        x = parseInt(x/10) 

    }


    if(isNegative){
        return -reversedNumber;
    }
    return reversedNumber;
}



console.log(reverseNumber(a))
console.log(reverseNumber(b))
console.log(reverseNumber(c))

 
// Time Complexity - O(log10(n))
