
/* Challenge 1: Reverse an Array
Problem Statement:Challenge 1: Reverse an Array
Problem Statement:

Write a JavaScript function to reverse an array in place (without creating a new array).

Example:

Input: [1, 2, 3, 4, 5] Output: [5, 4, 3, 2, 1]

Write a JavaScript function to reverse an array in place (without creating a new array).

Example:

Input: [1, 2, 3, 4, 5] Output: [5, 4, 3, 2, 1] */
// Write a JavaScript function to reverse an array in place (without creating a new array).

// Example:

const Input=  [1, 2, 3, 4, 5]
//1st solution:without create an new map , when we want to creat new one we use map()
console.log(Input.reverse());
// Output: [5, 4, 3, 2, 1]

// 2nd solution using push
const arr = [1, 2, 3, 4, 5];
const result = [];
for (let i = arr.length - 1; i >= 0; i--) {
  result.push(arr[i]);
}
console.log(result);
// 3rd way is swapping
let left = 0;
let right = arr.length - 1;

while (left < right) {
  const temp = arr[left]; //1
  arr[left] = arr[right];
  arr[right] = temp;
  left++;
  right--;
}
console.log(arr);

