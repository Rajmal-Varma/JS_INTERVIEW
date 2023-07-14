//1  . default parameter
//    const sum=(a , b) =>{
//     return a+b;
//    }
//   console.log(sum(4,5));
// a,b=0 are default parameter
//   const sum=(a , b=0) =>{
//     return a+b;
//    }
//   console.log(sum(4,5));

                       //   2. rest parameter

// const sum = (a, b, c) => {
//   return a + b;
// };
// console.log(sum(4, 5, 7, 5, 34, 3, 6));
//remaining parameter is know as rest parameter only starting three element sum will print

//   function sum (a ,b ,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is` ,c);
//   }
//   sum(4, 5, 7, 5, 34, 3, 6);

                  // sum of numbers
    //  function sumofarray(...numbers){
    //     let total=0
    //     for(let number of numbers){
    //     total = total+number;
    //     }
    //     return total
    //  }
    // console.log(sumofarray(4, 5, 7, 5, 34, 3, 6));


                      //parameter destructurin 
                 //this concept will be use in react jsusing object
                 
  const person ={
    name:"raj",
    age:22
  }           
          //without using destructuring concept
//   function getDetail(obj){
//     console.log(obj.age);
//     console.log(obj.name);
//     console.log(obj.degree);
//   }

//   getDetail(person);

           //using destructuring concept
  function getDetail({name , age  , degree}){
    console.log(age);
    console.log(name);
    console.log(degree);
  }

  getDetail(person);

