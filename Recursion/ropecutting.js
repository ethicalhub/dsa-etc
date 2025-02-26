// Rope cutting

const ropeCutting  = (n, a,b,c)=>{
    let result = 0;

    // 23,12,9,11
    let first = Math.floor(n/a) 
    if(n%a !==0){
        if(n%a === b){
            first = first + b;
        }

        if(n%a === c){
            first++
        }
    }
    let second = Math.floor(n/b) 
    if(n%b === a){
        second = second + a;
    }

    if(n%b === c){
        first = first + c;
    }

    let third = Math.floor(n/c) 

    if(n%c === b){
        first = first + b;
    }

    if(n%c === a){
        first = first + a;
    }

    console.log(first, second, third)
    return result;
}


// console.log(ropeCutting(5,2,5,1))
console.log(ropeCutting(23,12,9,11))