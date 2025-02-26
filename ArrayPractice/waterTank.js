const arr = [1,2,3,8,10,52,3,42,31]


let sum = 0;

const MaxStorageWaterTank = (arr)=>{
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){

          let area =  Math.min(arr[i], arr[j]) * (j - i)
        //   console.log(Math.min(i, j) ,"---------------------", (arr[j] - arr[i]))
        //   console.log(area)
          if(area > sum){
            sum  = area
          }
        }
    }

    return sum;
}

console.log(MaxStorageWaterTank(arr))



const MaxStorageUsingTwoSum = (arr)=>{
    let i = 0;
    let j = arr.length - 1;

    while(i<j){
        let area =  Math.min(arr[i], arr[j]) * (j - i)
        if(area>sum){
            sum = area;
        }
        if(arr[i]>arr[j]){
          j = j-1;
        } else {
            i = i + 1;
        }        
    }

    return sum;

    
}

console.log(MaxStorageUsingTwoSum(arr))
