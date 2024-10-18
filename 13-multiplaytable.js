/* Challenge 13: Multiplication Table Count
Problem Statement:

Given integers N and X, write a function that returns the number of times X appears as a value in an N by N multiplication table.

Examples:

function countXInMultiplicationTable(N, X) {
  // Your code here
}

console.log(countXInMultiplicationTable(6, 12)); // Expected Output: 4
console.log(countXInMultiplicationTable(3, 9)); // Expected Output: 1
console.log(countXInMultiplicationTable(4, 7)); // Expected Output: 0
console.log(countXInMultiplicationTable(5, 25)); // Expected Output: 1 */


function Countin(n,x){                  //Countin(6,12)
    let count = 0;
    for(let i=0;i<=n;i++){ //n=6 , x=12  2*6=12 first apear 6*2=12 seconde appear 
        if (x % i === 0 && x / i <= n) { //( i will expcpect i=1 ,in the loop i=1  than 12/1=12 so false we dont increase the counter in this case) because i dont want table 1  (12*1=12 ) i want know how many appearing 12 in table 6  ,second condition is neccesery
            count++;
          }
        }
        return count;
      }
      /* i=0 nothing happend
          i=1 12%1===0 && 12/1 < =6  no is not in the table
          i=2 12%2===0 && 12/2 < =6  yes  (first appearing  will be count=1) */
      /* the time apearing for 12 are 4 in the table 6 , 
      4 time  we inclue the second condition wich doesnt take 12/1 =12  is not <=n,   */

      console.log(Countin(6, 12));//4 
      console.log(Countin(3, 9))
      console.log(Countin(4, 7))
      /* 4,1,0 */


      /* table 6:
      1 2 3 4 5 6
      -----------
1-    1  2  3   4   5   6
2-    2  4  6   8   10  12     <- here first apearing
3-    3  6  9   12  15  18       <- here second apearing
4-          12                     <- here thired apearing
5-      
6-      12                          <- here fored apearing
     */
    /* if n=x=6 for example the second conditon will be not neccessery  */