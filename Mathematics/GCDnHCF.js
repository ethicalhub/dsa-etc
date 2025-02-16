console.log("-------- Find HCF or GCD of the given two numbers...")

let x =20;
let y = 16;
const GCD = (x, y)=>{
    let HCF = 0;
    let isSmaller = x<y? x : y

    for(let i=isSmaller; i>=1; i--){
        if(x%i === 0 && y%i === 0){
            HCF = i;
            break;
        }
    }
    return HCF
}


// TimeComplexity - O(min of x,y)
console.log(GCD(x,y))


console.log("Now solve using Euclidean theorem...")
// Euclidean Theorem;

const EuclideanTheoremToFindHCF = (x,y)=>{
   while(x>0 && y>0){
    if(x>y){
       x =  x%y;
    } else {
        y = y%x;
    }
   }

   if(x === 0){
    return y;
   }
   return x;
}

console.log(EuclideanTheoremToFindHCF(x,y))
