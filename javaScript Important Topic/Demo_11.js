                //    2. De-Structuring

                const obj1 ={
                    name1:"Rajamal",
                    id:1,
                    class1:"B tech"
                }
                // console.log(name1); // it will show erroe in the console
                    //we can get every object one by one 
                    // method= 01
                // console.log(obj1.name1);  
                // console.log(obj1.id); 
                // console.log(obj1.class1); 

                    // method= 02
                // const name1 = obj1.name1;
                // const id = obj1.id;
                // const class1 = obj1.class1;
                // console.log(name1);  
                // console.log(id); 
                // console.log(class1); 

                //    method -03

                const{name1 , id, class1}  = obj1;  // De - Structuring 
                console.log(name1,id,class1);
