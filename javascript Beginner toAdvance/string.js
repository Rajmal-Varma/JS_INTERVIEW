//1.  trim method

let s = "rajmal    ";  //lenth =10

console.log(s.length);
console.log(s.trim());
console.log(s.length); // string is immutable so it will not be change 

let c = s.trim();

console.log(c);
console.log(c.length);