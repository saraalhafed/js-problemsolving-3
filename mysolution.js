//--6--
const str="This is a sample sentence."
function count(str){
    const arr=str.split(" ");//[This , is,a, sample, sentence]
  return arr.length
}
//console.log(count(str))

//---5---
//way1 filter
const arr1=[1, 2, 3, 4, 5]
const arr2= [3, 4, 5, 6, 7]
function common(arr1,arr2){
    const newar =arr1.filter((item)=> arr2.includes(item))
    return newar
}
//console.log(common(arr1,arr2));//[ 3, 4, 5 ]
//way2 reduce
/* function common1(arr1,arr2){
    
    const newar =arr1.reduce((acc,item)=> 
        if(arr2.includes(item))
            {
                acc.push(item)
            }
            return acc ,[])
    return newar
}
 */

//13
function multi(n,x){
    let count=0;
    for(i=0;i<=n;i++){
        if(x%i===0 ){
            count++;
        }
    }
    return count;
}
// console.log(multi(5,25))
console.log(multi(6,12))
console.log(multi(4,7))
console.log(multi(3,9))
//console.log(multi(3,3));
//12
function largProduct(nums){
    const num= nums.sort((a,b)=>a-b);
    const product1= num[num.length-1]* num[num.length-2]* num[num.length-3];
    const product2 = num[num.length-1]* num[0]*num[1]
    return Math.max(product1,product2);
}
const arr=[-10, -10, 5, 2]
const arr11=[1, 2, 3]
const arr12=[-1, -2, -3, -4]
const arr13=[10, 7, 3, 5, 1]
console.log(largProduct(arr))//500
console.log(largProduct(arr11))//6
console.log(largProduct(arr12))//-6
console.log(largProduct(arr13))//350
//11-
function balanced(str){
    const stack=[]
    const paires={  "(" : ")" , "{" : "}" , "[" :"]"}
    for(let char of str){
      if(paires[char]){
        stack.push(char);
      }else{
        let last=stack.pop()
        if (paires[last] !==char){
            return false
        }
      }
    }
    return stack.length ? false :true
}
console.log(balanced('([])'))
console.log(balanced('([)])'))
console.log(balanced('(])'))
console.log(balanced('([]'))
//way2 while 
function bala(str){
    while(str.includes("{}") || str.includes("()") || str.includes("[]")){
        str=str.replace("{}","");
        str=str.replace("()","");
        str=str.replace("[]","");
    }
    return str.length ? `notbalanced` : `balanced`
}
console.log(bala('([])'))
console.log(bala('([)])'))
console.log(bala('(])'))
