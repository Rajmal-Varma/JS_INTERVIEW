
    //  1. callBack Function
    // baar baar callback function ke
    // andar callback function ka use karenege - to callBack hell ho jayega to uski jagah
    // promises use karenge 
// let fs = require("fs");

// fs.readFile("file.text", "utf-8",(err , data)=>{
//   console.log(err, data);
// });
// console.log("here we have use call Back function ")


    //    2. promises

    let fs = require("fs/promises");
// let a = fs.readFile("file.text", "utf-8");
//       // console.log(a);
// a.then((data)=>{
//     console.log(data);
// })
// console.log("here we have use promises function ")

    //   3. Async-Await
    const readThree=async(file1,file2,file3)=>{
 let a1  = fs.readFile(file1 , "utf-8");
 let a2 =  fs.readFile(file2 , "utf-8");
 let a3  = fs.readFile(file3 , "utf-8");
 let c2 = await a2;
console.log(c2);
 let c1 = await a1;
 console.log(c1);
// let c2 = await a2;
// console.log(c2);
let c3 = await a3;
console.log(c3); 
    }
    console.log("Async-Await function")
    readThree("file1.text", "file2.text", "file3.text");