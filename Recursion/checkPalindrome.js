// Check if the given string is palindrome or not, using recursion function

let a = "aabcbaa"
let b = "0xcodex0"


const checkPalindrome = (n, start = 0, end= n.length -1 )=>{

    if( start >= end){
        return true;
    }

    if (n[start] !== n[end]) return false; 
    
      return  checkPalindrome(n,  start+1, end-1)


}

console.log(checkPalindrome(a))
console.log(checkPalindrome(b))