/* Challenge 10: Longest Substring with At Most K Distinct Characters
Problem Statement:

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

Examples:

function longestSubstringKDistinct(s, k) {
  // Your code here
}

console.log(longestSubstringKDistinct('abcba', 2)); // Expected Output: 3 ("bcb")
console.log(longestSubstringKDistinct('eceba', 2)); // Expected Output: 3 ("ece")
console.log(longestSubstringKDistinct('aa', 1)); // Expected Output: 2 ("aa") */

//k how many characters we have, no problem if they repeated
function longestsubstring(s, k) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {//j=i+1 because  cant be slice(0,0) slice(0,1)
      const slice = s.slice(i, j); //a                               abcaababc  =>  aaba  [a,b}]
      const set = new Set(slice);//to get uneq chars inside this obj   i slice first time the  first 1 char than  the first 2 chars than 3 ...          
      if(set.size===k&&slice.length>longest.length){//size for set like lenght for aerr
        longest = slice;           //abb>ab  we need 2 charctr nor broblem if repeated

      }
    }
  }
  return longest;
}

console.log(longestsubstring("absba", 2));
console.log(longestsubstring("abbcea", 2));
// Example Walkthrough
// Input:
// s = "abcabc"
// k = 2
// Step 1: Initialize Variables
// longest = '' (to keep track of the longest valid substring)
// Step 2: Outer Loop (i)
// Start with i = 0.
// Step 3: Inner Loop (j)
// For j = 1, slice = "a" (distinct characters = 1, not equal to k)
// For j = 2, slice = "ab" (distinct characters = 2, and length = 2, so longest = "ab") 
// For j = 3, slice = "abc" (distinct characters = 3, exceeds k)
// For j = 4, slice = "abca" (distinct characters = 3, exceeds k)set=3  slice=4
// For j = 5, slice = "abcab" (distinct characters = 3, exceeds k)
// For j = 6, slice = "abcabc" (distinct characters = 3, exceeds k)

/* slice.length>longest.length i need that because:
 abb slice.length=3  k=2 set.size=2  ab*/

 //Example walkthrough
// input:
// s:abbcba
// k=2
// for j=1 slice= a
// for j=2  slice="ab"       k=2  set.size=2  slice.size=2  longest=ab
// for j=3  slice="abb"        k=2  set.size=2   slice.size=3  >longest.length    longest=abb
