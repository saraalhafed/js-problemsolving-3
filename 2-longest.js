// Problem Statement:

// Write a JavaScript function to find the longest word in a sentence.

// Example:

const input = "This is a simple example sentence";
// Output: "example";
function longestfun(str) {
    const words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  console.log(longestfun(input));
  
/* for of just used with string and array  not with obj */
