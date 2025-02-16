console.log("------ Check if the given number is palindrome or not...");



let a = 212
let b = 1
let c = -3352

const isPalindrome = (x)=>{
    let reversedNumber = 0;
    let initNumber = x;
    if(x<0) return false; //negative number can never be palindrome
    if (x === 0) return true; // Special case: 0 is a palindrome

    while(x>0){
        let digit = x%10;
        reversedNumber = reversedNumber * 10 + digit;
        // x=parseInt(x/10);
        x = Math.floor(x/10) //Standard way of removing decimal in javascript;
    }

    return reversedNumber === initNumber;
}


console.log(isPalindrome(a))
console.log(isPalindrome(b))
console.log(isPalindrome(c))