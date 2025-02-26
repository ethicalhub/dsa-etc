const array = [12, 5, 6, 10, 16, 1, 19]

const stockMarketProfit = (arr) =>{
    let difference = 0;
    for(let i=0; i < arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] - arr[i] > difference){
                difference = arr[j] - arr[i]
            }
        }
    }

    return difference
}



console.log(stockMarketProfit(array))


const stockMarketProfitTwoSum = (arr) =>{
    let i = 0;
    let j = i+1;
   let min = arr[0];
   let max = 0; 

   while(i < j){
    if(arr[i]>arr[i+1]){
       
        min = arr[i+1]
        console.log(min)
        i++;
    }

   }
   
}

console.log(stockMarketProfitTwoSum(array))
