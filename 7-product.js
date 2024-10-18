/* Challenge 7: Product of All Elements Except the One at Index i
Problem Statement:

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

Example:

const inputArray1 = [1, 2, 3, 4, 5];
const inputArray2 = [3, 2, 1];

function productExceptSelf(nums) {
  // Your code here
}

const result1 = productExceptSelf(inputArray1);
const result2 = productExceptSelf(inputArray2);

console.log(result1); // Expected Output: [120, 60, 40, 30, 24]
console.log(result2); // Expected Output: [2, 3, 6] */

const inputArray1 = [1, 2, 3, 4, 5];
function product(nums) {
  let product = 1;
  for (item of nums) { //or reduce 
    product *= item;
  }
  const result = [];
  for (item of nums) {
    result.push(product / item);
  }
  return result;
}
console.log(product(inputArray1));
// [120, 60, 40, 30, 24];
// 2nd solution
function product2(nums) {  //or we use 2 loop  we multiplay allof them expect the num itself
    const results = []; 
    for (let i = 0; i < nums.length; i++) {
      let product = 1;
      for (let j = 0; j < nums.length; j++) {
        if (i !== j) {
          product *= nums[j];
        }
      }
      results.push(product);
    }
    return results;
  }
  
  console.log(product2(inputArray1));
  