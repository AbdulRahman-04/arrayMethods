/*

 the lastIndexOf() method in javascript is used to find the last occurence 
 of a specified element in an array. it returns the index of that element's last occurence, 
 or -1 if the element is not found.

*/

// opposite of indexof(), array k last se dekhlete hue aata k first kaha pr h value

let numbers = [1, 2, 3, 4, 3, 5]

//find the last occurence of the number 3
let lastIndex = numbers.lastIndexOf(3);
// console.log(lastIndex);  //output is 4

let myNum = [10, 20, 30 , 40, 50];
let sum = myNum.lastIndexOf(4);
console.log(sum);


let number = [11, 22, 13, 56, 64];
console.log(number.lastIndexOf(2));
