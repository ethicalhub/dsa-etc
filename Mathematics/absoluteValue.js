// You are given an interger I, find the absolute value of the interger I.

// Input:
// I = -32
// Output: 32
// Explanation: 
// The absolute value of -32 is 32.


// Input:
// I = 45
// Output: 45
// Explanation: 
// The absolute value of 45 is 45 itself.


// first is using inbuilt Math.abs() function

let n = 50;
const absolute = (i)=>{
    if(i>=0) return i;
    return -i;
}

absolute(n)