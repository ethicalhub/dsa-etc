const arr1 = [2, 7, 6, 8, 1];

// Q2 : sum of all sub array

for (let i = 0; i < arr1.length; i++) {
  let sum = 0;
  for (let j = i; j < arr1.length; j++) {
    sum = sum + arr1[j];
    console.log(sum);
  }
}
