  //nested if else 

  let age=10;
 let userguess = prompt("guess the number")
   if(age>userguess){
    // Document.getElementById("root").innerHTML()="age is correct"
    console.log("age is correct")
   }else{
     if(3<age<userguess){
        // Document.getElementById("root").innerHTML()="age is wrong"
        console.log("age is wrong")
     }else{
        // Document.getElementById("root").innerHTML()="age is not exist"
        console.log("age is waiting form")
     }
   }