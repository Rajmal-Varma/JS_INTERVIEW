 //Array - it is the collection of data

    // let  fruits = ["banana" , "grapes" , "mango"];
    //  console.log(fruits);
    // fruits[1] = "papaya";
    // console.log(fruits);

    // console.log(typeof fruits); //it is aobject
    // console.log(Array.isArray(fruits));

    //   let obj = {};  //literal object 
    //   console.log(typeof obj);
    //   console.log(Array.isArray(obj))


        //push pop shift and unshift function
    
//    1. push()     
        //  fruits.push("orange")  ;
        //  console.log(fruits);  
//    2. pop()  
        //  let poppedout = fruits.pop() ;  
        //  console.log(poppedout);
        //  console.log(fruits); 
//    3.  unshift
        // fruits.unshift("orange")
        // console.log(fruits); 
 //    4. shift
    //     fruits.shift("orange")
    //   console.log(fruits);        



    // clone array , concat , spread operator

        // 1. clone of array
    //  let arr1 = [1,2,3,4];
    //  let arr2=[1,2,3,4];
  // both are different different array
 //  for making clone of arr1 
    //  console.log((arr1===arr2));   // this method is not good
    //  for making clone  we will use slice()  method
//    let arr2= arr1.slice(0);
//    console.log((arr1===arr2)); 
   
     //2.  concating of array

    //  let arr1 = [1,2,3,4];
    //  let arr2=[1,2,3,4];

    //  console.log(arr1.concat(arr2));

     //3. spread operator 
    //  let arr3 = [...arr1 , ...arr2];
    //  console.log(arr3);

       //4. for loop using in the array

    //  let arr = [1,2,3,4,5,6,7];
    //  // for loop
    //  for(let i=0; i<arr.length; i++){
    //     console.log(arr[i]);
    //  }

    //  let  fruits = ["banana" , "grapes" , "mango"];
//      let fruits2=[];
//      for(let i=0; i<fruits.length; i++){
//         fruits2.push(fruits[i].toUpperCase());
//          }
//    console.log(fruits2);
   

      //const keyword using in array
// const  fruits = ["banana" , "grapes" , "mango"];
// here we can push or pop but we can't use reinitialize to the value in the array

//    fruits.push("papaya");
//    console.log(fruits);
//    fruits.pop();
//    console.log(fruits);

//  fruits =["radhe rahde "] ;// don't do this
//   console.log(fruits); 

  
            //2. while loop
            
// const  fruits = ["banana" , "grapes" , "mango"];
// let i=0;
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++
// }

         // 3. for of loop

         
// const  fruits = ["banana" , "grapes" , "mango"];
// const fruits2=[];
// for(let fruit of fruits){
//     // console.log(fruit.toUpperCase());
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2)

      // 4. for in loop

    // for(let index in fruits){
    //     console.log(fruits[index].toUpperCase());
    // }