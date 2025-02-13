const arr1 = [2, 7, 6, 8, 1];

// Q1 : print all sub array

for (let i = 0; i < arr1.length; i++) {
  let subArray = [];
  for (let j = i; j < arr1.length; j++) {
    subArray.push(arr1[j]);
    console.log(subArray);
  }
}