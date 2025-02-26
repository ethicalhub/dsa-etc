console.log("------ convert the number provided with base 10, to base 2 i.e. binary")


let a = 2;

const convertToBinary = (x)=>{
    if (x === 0) return "0";
    let binary = ""
    while(x>0){
        binary = binary + x%2;        
        x= Math.floor(x/2);
    }

    return binary.split("").reverse().join("");
}


console.log(convertToBinary(a))

