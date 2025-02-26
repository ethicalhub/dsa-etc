let input = 50;
let temp = 0;
let sum = 0;
const fibonacciUsingRecursion = (n, temp)=>{
    if(n<1) return 0;
    if (n===1) return 1;

    return fibonacciUsingRecursion(n-1) + fibonacciUsingRecursion(n-2)
}

console.log(fibonacciUsingRecursion(input))

// 0, 1, 1, 2, 3,5,8,13