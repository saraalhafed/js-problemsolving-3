// Problem Statement:

// Write a JavaScript function to check if a sentence is a Pangram (contains every letter of the alphabet at least once).

// Example:

const input = "The quick brown fox jumps over the lazy dog";
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function ispangram(str) {
  str = str.toLowerCase();
  for (let item of alphabet) {
    //a  does str has a?
    if (!str.includes(item)) {
      //if the sentence doesnt include each letter in the alphabet , return false
      return false;
    }
  }
  return true;
}
console.log(ispangram(input));


// we use this condition to check that each alphabet happened only once
// str.indexof(item)===str.lastindexOf(item) // a only happened once return true 
