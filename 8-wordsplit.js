/* Challenge 8: Word Split
Problem Statement:

Write a JavaScript function WordSplit(strArr) that takes an array of strings strArr, where the first element is a sequence of characters, and the second element is a long string of comma-separated words in alphabetical order, representing a dictionary. The goal is to determine if the first element in the input can be split into two words, where both words exist in the provided dictionary. If so, return the two words separated by a comma. If there's no valid split, return "not possible".

Example:

const strArr1 = ['hellocat', 'apple, bat,cat,goodbye,hello,yellow,why'];
const strArr2 = ['hellobook', 'book,hello'];
const strArr3 = ['testword', 'book,cat,dog,test,word'];
const strArr4 = ['helloworld', 'apple, bat,goodbye,yellow,why'];

function WordSplit(strArr) {
  // Your code here
}

console.log(WordSplit(strArr1)); // Expected Output: "hello, cat"
console.log(WordSplit(strArr2)); // Expected Output: "hello, book"
console.log(WordSplit(strArr3)); // Expected Output: "test, word"
console.log(WordSplit(strArr4)); // Expected Output: "not possible" */
const strArr1 = ["hellocat", "apple, bat,cat,goodbye,hello,yellow,why"];
const strArr2 = ["hellobook", "book,hello"];
const strArr3 = ["testword", "book,cat,dog,test,word"];
const strArr4 = ["helloworld", "apple, bat,goodbye,yellow,why"];
function wordsplit(strArr) {
    const findword = strArr[0];
    const words = strArr[1].split(","); //["apple","bat","cat"....]
  
    for (let i = 0; i < words.length; i++) {
      //apple
      for (let j = i + 1; j < words.length; j++) {
          //bat
          if(words[i]+words[j]===findword){  //we concat  each word with others word and compaer it with the string hellocat//apple+bat ===heloocat?
              //apple+bat ===heloocat
              //apple+cat====hellocat
            return `${words[i]}, ${words[j]}`
          }
          if (words[j] + words[i] === findword) {
            //bat+apple===hellocat
            //cat+apple=helolocat
            return `${words[j]},${words[i]}`;
          }
        }
      }
      return `not possible`;
    }
    
    console.log(wordsplit(strArr1)); //hello,cat
    console.log(wordsplit(strArr2));  //hello,book
    console.log(wordsplit(strArr3));   //test,word
    