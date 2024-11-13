/* the filter method creates a new array with all elements that pass a test(provided as fucntion)
   

  definition: Filters elements from an array based on a condition, returning a new array with 
              elements that satisfy the condition.

  syntax: arrayName.filter(callback(element, index, array))



*/

let numbers = [1, 2, 3, 4, 5, 6];

// Filter Out numbers greater than 3
let check = numbers.filter(x => x >3);   //this is one line arrow function
// console.log(check);

// let array = [23, 31,222, 11, 19];
// console.log(array.filter((x) => {
//     return x>30
// }));

// let myArray = [ 15, 25, 45, 85, 100];
// console.log(myArray.filter((x) => {
//     return x>=100
// }));

// let myArr = [11, 22, 45];
// console.log(myArr.filter((x) => {
//     return x > 25
// }));
