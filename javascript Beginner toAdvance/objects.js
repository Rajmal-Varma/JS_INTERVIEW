 // how to create an object
//   const obj = {
//     name:"rajmal",
//     age:22,
//     "my petname":"rkd",
//     subject:["p" , "c" , "m"],
//     obj2:{
//         myname:"alok mishra",
//         myclass:"b tech"
//     }
//   }
//   console.log(typeof obj);
//   console.log(obj);

  //how to access properties of object

//   console.log(obj.name);
//   console.log(obj["age"]);

//   console.log(obj.my petname);    it is wrong way
// console.log(obj["my petname"]);   it is correct way

//   console.log(obj.obj2.myname);

// obj1["degree"] = "B Tech";  
 //new key value is defined in the object for accessing

// console.log(obj1.degree);


                     // 2. how to iterate object
   
                    //  using for in loop
    
    const person = {
        name:"harshit",
        age:22,
        "person hobbies":["guitar" , "issleeping" , "listening"]
    }
 
  for(let key in person)    {
         
    //    console.log(`${key}`  , ":" , `${person[key]}`);
    //    console.log(key , ":" , person[key]);
  }


              /// 2. object.keys ka use karke

            //    console.log(typeof (Object.keys(person)));
            //    console.log(Array.isArray(Object.keys(person)));
    //   for(let key of Object.keys(person))   {
    //       console.log(key);
    //       console.log(person[key]);
    //   }     

    //    3. key and values ki help se object buildjl

                 // const key1 = 1;
                 // const key2 = 2;
                 // const value1 = "rajmal";
                 // const value2 = "dhakad";

                     // const obj ={};
                     // obj[key1] = value1;
                     // obj[key2]= value2;
                     // console.log(obj);

    //    4. spread operator in object , array and string 
                       
                          // 1. Array
              //  const arr = ["rajmal", 1 , 3 ];
              //  const arr1 = ["rajmal" , 1 , 3, 'c'];
      
              //   console.log(...arr , ...arr1);

                            //  2. String
              // const strings = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              //   console.log(...strings);

                           // 3. object
            
              const obj1 = {
                key1:"rajmal",
                key2:"ajendra"
              } 
              
              const obj2 = {
                key3:"raj",
                key4:"aje"
              } 

              // const newobj = {...obj1, ...obj2, newkey:"radhe radhe"}
              // const newobj = {..."rajmal"}
              // const newobj = {...["rajmal" , "dhakad" , "b Tech"]}
              // console.log(newobj);



              //    5 . Object Destructuring


//     const band = {
//       bandname:"radhe radhe",
//       song:"hare krishna",
//       year:"infinite Time",
//       anotherfamoussong:"bhajman govinda"
//     };

// const{bandname , song ,...remaining} = band;
// console.log(bandname );
// console.log(remaining);

               // 6. Object Inside to the Array
 
//  const users = [
//   {name:"rkd" , id : 1 , gender:"male"},
//   {name:"akd" , id : 2 , gender:"male"},
//   {name:"rkd" , id : 3 , gender:"female"}
//  ]          ;
 
    // access element of object using array

    // for(let user of users){
    //   // console.log(user);
    //   console.log(user.gender);

    // }

                   //7 . Nested Destructuring 

                   const users = [
                    {name:"rkd" , id : 1 , gender:"male"},
                    {name:"akd" , id : 2 , gender:"male"},
                    {name:"rkd" , id : 3 , gender:"female"}
                   ];

                  //  const[{name:firstname, id:idfirstuse,gender:firstgender}, , {gender:thiedgneder}] = users;
                  //  console.log(firstname);
                  //  console.log(firstgender);
                  //  console.log(thiedgneder);
 
                   
               