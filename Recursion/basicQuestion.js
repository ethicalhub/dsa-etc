// Reverse an array using recursion...
const arr = [1,2,3,4,5]

let i = 0;
let temp = arr[0]
let j = arr.length -1;

const reverseArrayUsingRecursion = (arr,temp, i, j)=>{
    if(i>=j){
        return;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];


 reverseArrayUsingRecursion(arr,temp, i+1, j-1)
 return(arr)

}


console.log(reverseArrayUsingRecursion(arr, temp, i, j ))

//1. Print name n times using recursion


// const printNameNTimes = (name, n)=>{
//     if(n<1){
//         return;
//     }
//     console.log(name);
//     return printNameNTimes(name, n-1)
// }


// console.log(printNameNTimes('yasir', 5))


//1. Print 1 to n using recursion


// const print1toN = (n)=>{
//     if(n<1){
//         return;
//     }
  
//     print1toN(n-1)
//     console.log(n)
   
// }

// print1toN(5)

