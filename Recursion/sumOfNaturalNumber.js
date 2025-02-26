// Question: Let's create a recursive function for sum of natural number till the given number n

const sumToN = (n)=>{
    if(n===0){
        return 0;
    }

   return n + sumToN(n-1); 
}

console.log(sumToN(4))

// Time comlexity = O(n)
// Space complexity = O(n)