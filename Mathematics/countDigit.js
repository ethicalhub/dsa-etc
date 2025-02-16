console.log("------ Count the number of digits of a given number without converting them into string or array")


let a = 0
let b = 2346030
let c = -2354
// digitCount = Math.floor( log10(x) + 1) if the log10 is available... because the number of time any digit are divisible by 10 is the answer.


const countDigit = (x)=>{
    let digitCount = 0;
    if(x===0) return 1; // Special case for 0


    // To handle negative integers but it can also be handles with Math.abs()
    // if(x<0) {
    //     x = -x;
    // }

    x = Math.abs(x) 
    
    while(x>0){
        x = Math.floor(x/10);  
        digitCount++;
    }
    return digitCount;
}


console.log(countDigit(a))
console.log(countDigit(b))
console.log(countDigit(c))


// Time Complexity - O(log10(N))
