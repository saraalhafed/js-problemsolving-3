/* Challenge 11: Balanced Brackets
Problem Statement:

Given a string containing round, curly, and square open and closing brackets, determine if the brackets are balanced (well-formed).

Examples:

function areBracketsBalanced(str) {

}

console.log(areBracketsBalanced('([])')); // Expected Output: true
console.log(areBracketsBalanced('([)]')); // Expected Output: false
console.log(areBracketsBalanced('((()')); // Expected Output: false
console.log(areBracketsBalanced('{[()]}')); // Expected Output: true */
/* if we have at the end with empty " " than it is balanced */
function areBracketsBalanced(str) {
    while (str.includes("()") || str.includes("[]") || str.includes("{}")) {
      str = str.replace("()", "");
      str = str.replace("[]", "");
      str = str.replace("{}", "");
    }
    return str.length ? `not balanced` : `balanced`; // we stop when the str will be  empty so it balanced
  }
  console.log(areBracketsBalanced("([])")); // Expected Output: true
console.log(areBracketsBalanced("([)]")); // Expected Output: false
console.log(areBracketsBalanced("((()")); // Expected Output: false
console.log(areBracketsBalanced("{[()]}"));

//way2
 function areBracketsBalanced2(str) { //"([])"
     const stack = [];
     const pairs = { '(': ')', '[': ']', '{': '}' };
   for (let char of str) { //first char ( in str
  //     //? check if current char is an openning pair
  // step 1:it checks if it's an opening bracket by seeing if it's a key in the pairs object.
      if (pairs[char]) {// pairs["("]  than  pairs["["] than pairs["]"] here will go to else
        //console.log(pairs[char]);
        stack.push(char);  //stack=[ (]  stack=[([]
      } else {
  //       //? if it is a closing one, then check the last opening in stack, if the last pair is not equal to the current closing then it is not well formed
        const last = stack.pop();  // delet the last one from stack :stack=[(]  last=[,  pairs["]"] here will go to else , 
        if (pairs[last] !== char) {  // pairs["["]  == "["  and containue the loop
      // char is the current closing bracket in the string.
      // pairs[last] gives the matching closing bracket for the last opening bracket in the stack.
      
          return false;
        }
       }
    }
    return stack.length ? false : true;
  }
  
  
  console.log(areBracketsBalanced2("([])"));
  console.log(areBracketsBalanced2("([)]"));
 
  
  
  /* 1-empty arr 
  2-obj inclue key :value  
  for (let char of str)
  if (paire[char]) exist :  push the char to arr  
                 not exist (else): pop from the arr  than check if pair[last] !== char than return false
  
  
  4- check arr.length  if empty return true  */
  
  