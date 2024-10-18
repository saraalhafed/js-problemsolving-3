/* Challenge 12: Largest Product of Three Integers
Problem Statement:

Given a list of integers, return the largest product that can be made by multiplying any three integers.

Examples:

function largestProductOfThree(nums) {
  // Your code here
}

console.log(largestProductOfThree([-10, -10, 5, 2])); // Expected Output: 500
console.log(largestProductOfThree([1, 2, 3])); // Expected Output: 6
console.log(largestProductOfThree([-1, -2, -3, -4])); // Expected Output: -6
console.log(largestProductOfThree([10, 7, 3, 5, 1])); // Expected Output: 350 */
//if i have at the first nigative numbers   i should to calculate the product for them [-10,-10,1,2,3]
//  1*2*3 =6
//-10*-10*3= 300

function largestProductOfThree(nums) {
    // Your code here
    nums.sort((a, b) => a - b);
    const product1 =
      nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    const product2 = nums[nums.length - 1] * nums[0] * nums[1]; //maybe nigative numbers so it can give larger product
    return Math.max(product1, product2);
  }
  
  console.log(largestProductOfThree([-10, -10, 5, 2])); // Expected Output: 500
  console.log(largestProductOfThree([1, 2, 3])); // Expected Output: 6
  console.log(largestProductOfThree([-1, -2, -3, -4])); // Expected Output: -6
  console.log(largestProductOfThree([10, 7, 3, 5, 1])); //350
  /*1- we sort array of num (list )wich is the input 
  2-we have to: take the 3 last number and calculate the product 
                       than take the first one with second one (becase can they nigativ so it can be larger product)with last one togother and clculate their product
                       i dont take the first 3 numbers because it sorted array  
  3-             i take the max of them throw Math.max()       */
  //