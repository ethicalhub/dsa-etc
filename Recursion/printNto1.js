// Print n to 1, using recursive function where n>0

let x = 5;

const nTo1 = (n)=>{
    if(n === 0){
        return;
    }
    console.log(n)
    nTo1(n-1)
    
}


const oneToN = (n)=>{
    if(n === 0){
        return;
    }
    nTo1(n-1)
    console.log(n)
  
    
}

// iterative approach
// for(let i=x; i>0;i--){
//     console.log(i)
// }

nTo1(x)
oneToN(x)