/* Challenge 5: Find Common Elements
Problem Statement:

Write a JavaScript function to find the common elements between two arrays.

Example:

Input: [1, 2, 3, 4, 5], [3, 4, 5, 6, 7] Output: [3, 4, 5] */
// Example:
"strict";
const input1 = [1, 2, 3, 4, 5];
const input2 = [3, 4, 5, 6, 7];
// Output: [3, 4, 5]

const result=input1.filter((item)=> input2.includes(item));
console.log(result);

//2nd way using sets
const set1 = new Set(input1);
const set2 = new Set(input2);
//console.log(set1.intersection(set2));give us common item in both
//const inter = new Set([...set1].filter((item) => set2.has(item)));//we use spread opre [...set1] to make it an array to use filtert  has( )to give 
//console.log(inter);//Set(3) { 3, 4, 5 }

const inter = [...set1].filter((item) => set2.has(item));// has()method for obj 
console.log(inter);//[ 3, 4, 5 ]
