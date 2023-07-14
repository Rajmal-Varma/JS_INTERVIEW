                    // function  expreassion and declaration
 
                    //    1. function declaration
//   example-01                  
//   function  hareKrishna()    {
//     return 3+4;
//   }              
//   const op = hareKrishna();
//   console.log(op);

// //    example-02
//                      //parameter of function
// function  hareKrishna(input1 , input2)    {
//     return input1+input2;
//   }              
//  // const op = hareKrishna(3,5);  //argument passing using fuction
//   const op = hareKrishna(3)
//   console.log(op);


//    example-03
                     //parameter of function
                    //  function  EvenOdd(input1 )    {
                    //     return input1%2==0;
                    //   }              
                    //   const op = EvenOdd(5);  //argument passing using fuction
                    //   console.log(op);


                //    2 .  function Expression

 // example-01
                // const sumOfTwoNumber = function(input1 ,input2){
                //     return input1+ input2;
                // }
                // const op = sumOfTwoNumber(5,3);  //argument passing using fuction
                //   console.log(op);

// example-02    
               // given number at which index in the array print that
                  
        //    const index  =    function(arr , x){
        //         for(let i=0; i<arr.length; i++){
        //             if(arr[i]===x){
        //                 return i;
        //             }
        //         }
        //         return -1;
        //    }
                              
        //  const arr= [1,2,3,4,5,6];
        //  const op = index(arr,5);
        //  console.log(op);

        
                    //  3. Arrow Fucntion , fat arrow function
  
//    const sum = () =>{
//       return...
//    }     
//    console.log(sum)     

// Example-01

//    const sum  = number=> number%2===0; //single line arrow function
//    const op1 = sum(34);
//    console.log(op1);

// // Example-02

//    const sum  = (a,b) =>{let sum = a+b; return sum;}
//    const op = sum(34,3);
//    console.log(op);

// Example-03

//    const index = (arr,x) =>
//    {
//     for(let i=0; i<arr.length; i++){
//   if(arr[i]===x){
//     return i;
//   }
//     }
//     return -1;
//    }
//   const arr = [1,34,5,2,4,5]
//    const op = index(arr,4);
//    console.log(op);



                      // Hoisting
//   Ex-01 - in this case function will print
//    hello();
//   function hello()   {
//     console.log("hoisting")
//   }         


//   Ex-02 - in this case function will not print
//    hello();   //hello will not print calling to the function before declaration

//  const hello =  function ()   {
//     console.log("hoisting")
//   }  
//   hello()

// //   Ex-03 - in this case function will not print
//    hello();   //hello will not print calling to the function before declaration

// let hello =  function ()   {
//     console.log("hoisting")
//   }  
// //   hello()

//   Ex-04 - in this case function will not print
// hello();   //hello will not print calling to the function before declaration

// var hello =  function ()   {
//     console.log("hoisting")
//   }  
//   hello()



            //   Function inside to the function

        //       function app(){

        //         const func1 = () =>{
        //              console.log("func1");
        //              func2();
        //         }

        //         const func2 = () =>{
        //             console.log("func2");
        //             func3();
        //        }
        //        const func3 = () =>{
        //         console.log("func3");
        //    }
        //       console.log("inside app");
        //          func1();
        //       }
        //       app()

        