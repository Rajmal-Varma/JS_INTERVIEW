
    // 1. primitive datatype
  
let num1=10;
let num2 = num1;
// console.log(num1);  it has different place in the stack memory from n2
// console.log(num2); it is also

num1++;                //data
console.log(num1);
console.log(num2);

//   2.  reference datatype
//array is a reference datatype 

let arr1 = [1,2,3,4];
let arr2 = arr1; //it has different reference value  with respect to arr1 in the heap memory.

console.log(arr1);
console.log(arr2);
