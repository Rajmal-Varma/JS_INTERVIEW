
     // callBack function

    //  function myfunc2(){
    //     console.log("inside to the myfunc2");
    //  }

    //  function myfunc(callback){
    //     console.log("call back function will call now");
    //    callback();
    //  }
    //  myfunc(myfunc2)

                     //1 . callback functio ke through argument pass karna
    // function myfunc2(name){
    //         console.log("inside to the myfunc2");
    //         console.log(`my name is ${name}`);
    //      }
    
    //      function myfunc(callback){
    //         console.log("call back function will call now............");
    //        callback("rajmal dhakad");
    //      }
    //      myfunc(myfunc2)


                         // 2. function returning function
//normal function
// function myfunc(){
//        return "hello world"
// }
// const ans = myfunc();
// console.log(ans);

                    //     function myfunc(){
                    //       function add(a,b){
                    //       // return a+b;
                    //        console.log(a+b);
                    //             }
                    //         return add;
                    //           }
                    //    const ans = myfunc();
                    //   // console.log(ans(2,3));
                    //           ans(4,5);
