// Q5: find the repeatative element and frequency of it's limit
const arr = [2, 3, 2, 2, 7, 6, 6, 3];
var repeatativeElem = [];

for (let i = 0; i < arr.length; i++) {
  let count = 0;

  if (repeatativeElem.includes(arr[i]) === false) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        repeatativeElem.push(arr[i]);
        count++;
      }
    }
    console.log(`Element ${arr[i]} printed ${count} times`);
  }
}