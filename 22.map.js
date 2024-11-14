/*

 the map method is used to transform each element in an array and returns a new array with the 
 transformed elements. its useful when you want to apply a function to each element and store the
 result in a new array.


*/

let arr = [12, 223, true, "hey"];
arr.map((x) => console.log(x));


let number = [1, 2, 3, 4, 5];
// console.log(number.forEach((x) => x*x)).filter((x) => x>9));
console.log(number.map((x) => x*x). filter((x) => x >= 9));

let num = [12, 14, 16, 19, 21];
num.map((x) => console.log(x));

let newNum = [12, 24];
let totalNum = console.log(newNum.map((x) => console.log(x)).filter((x) => { return x>10}))