// Challenge 4: Remove Duplicates from Array
// Problem Statement:

// Write a JavaScript function to remove duplicate values from an array while preserving the order of the remaining elements.

// Example:

const input = [1, 2, 3, 2, 4, 5, 3];
//  Output: [1, 2, 3, 4, 5]
// 1-
const newset = new Set(input);//create an obj with uniqe items
console.log(newset);//Set(5) { 1, 2, 3, 4, 5 }
// 2-
const result = [];
for (let item of input) {
  if (!result.includes(item)) {
    result.push(item);
  }
}
// console.log(result);
//3
input.forEach((element) => {
  if (!result.includes(element)) {
    result.push(element);
  }
});
// console.log(result);//[ 1, 2, 3, 4, 5 ]
//4
const newarr = input.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
  console.log(newarr);
  //5
  const newArray = input.reduce(
    (acc, item) => (!acc.includes(item) ? [...acc, item] : acc),  //we keep everything inside the acc than we add the item 
    []
  );
  console.log(newArray);
  /* when  */