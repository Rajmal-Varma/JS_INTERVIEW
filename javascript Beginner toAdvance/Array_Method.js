                //1. forEach method
   
    //  let arr = [1,2,3,4,5] ;
    //  function multiplyBy2(number , index) {
    //     console.log(`number is ${number} at index ${index} and ${number}*2 =  ${number*2}`);
    //  }     
     
    //  multiplyBy2(arr[0] , 0);

    //  ye kam baar karne ke liye we will use loop

    let arr = [1,2,3,4,5] ;
    // function multiplyBy2(number , index) {
    //     console.log(`number is ${number} at index ${index} and ${number}*2 =  ${number*2}`);
    // }  
    //for loop   
    // for(let i=0 ; i<arr.length; i++){
    // multiplyBy2(arr[i] , i);
    // }

     // same work using forEach loop - it is callback to the function

                   //  arr.forEach(multiplyBy2); //first way to write forEach loop
    
    //  arr.forEach(function(number , index) // second way to write forEach loop
    //  {
    //     console.log(`number is ${number} at index ${index} and ${number}*2 =  ${number*2}`);
    //  }
    //  );

       
    //   arr.forEach(function(number) // third way to write forEach loop
    //  {
    //     console.log(number*2);
    //  }
    //  );

    //fourth way to write forEach loop

    // const detail =[
    //     {name:"raj" , age:22},
    //     {name:"taj" , age:21},
    //     {name:"jaj" , age:20}
    //                      ]  ;
    //      //access element using forEach loop
    //      detail.forEach(function(user){
    //         console.log(user.name);
    //      })     
              
                  //Anoumous function ki jagah we will use arrow function
        //     detail.forEach((user , index)=>{
        //     console.log(` ${user.name} at index ${index}`);
        //  }) 
         
    //       //access element using forof loop
    //       for(let user of detail){
    //         console.log(user.name);
    //       }

     

                        //map method
        
    //  const user =
    //  [
    //     {name:"rajmal" ,  age:21},
    //     {name:"ajendra" , age:22},
    //     {name:"ruby" , age:23}
    //  ]     ;
     
    // const username =  user.map((user,index)=>{
    // //   return `${user.name} `;
    // console.log(user.name , index)
    //  })
          
    // //  console.log(username);


                      // filter method

//     const ar = [2,3,4,5,6]    ; 
    
//   const isEven =   function(number){
//         return number%2==0;
//     }
        
//     const Evenvalue  = ar.filter(isEven);

//     console.log(Evenvalue);


                                // reduce method (important for react)
 
//  const ar = [1,2,3,4,5]  ;
 
//   const sum  = ar.reduce((accumlator , curruntvalue)=>{
//    return accumlator+curruntvalue;
//  } , 0 )
//  console.log(sum);


//  const product = [
//     {productid:1  , productname:"tv"  , price:12000},
//     {productid:2  , productname:"mobile"  , price:22000},
//     {productid:3  , productname:"watch"  , price:2000},
//  ];

//   const totalprice  = product.reduce((price , currentproduct)=>{
//           return price+ currentproduct.price;
//  } , 0);

//  console.log(totalprice);
                                
