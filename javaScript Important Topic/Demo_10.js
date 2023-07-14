                // Spread Operator or ... operator
let arr = [1,2,3,4,5,6,7]; 
//only three value of arr will pass throgh the function it will not show error

function Avg(a,b,c){
    return (a+b+c)/3;
}
// let a = Avg(...arr);  // operation-01 of spread operator   ...arr =(1,2,3,4,5,6,7) 
// console.log(a);
// console.log(...arr);
// let a = [21,34,...arr,23];
// let a2= [12,1,3,14,];
// let a = [...arr,...a2];
// console.log(a);

const obj1 = {
    name:"Rajmal",
    id:1,
    Degree:"B.Tech"
}
// const obj2 = {};
// obj2.name = obj1.name;
// obj2.id = obj1.id;
// obj2.Degree = obj1.Degree
const obj2 = {...obj1 , Degree:"M Tech"};  //using spread operator 

console.log(obj2);