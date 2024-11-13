// sort method: 

/*

the sort method sorts the elements of an array in place and returns the sorted array. 
by default, it sorts elements as strings in ascending order, which can sometimes give unexpected
results when sorting numbers.

syntax: array.sort(compareFunction)

*/

let fruits = ["dk", "ck", "ak", "bk"];
fruits.sort();
// console.log(fruits);


// sort is only used to sort strings and if you want to sort numbers
let numbers = [25, 45, 10, 1,99, 100, 1000, 0, 65];
numbers.sort((a,b) => b - a);
console.log(numbers);



// let numbers = [10, 3, 15, 7];
// numbers.sort((a,b) => a - b);
// console.log(numbers);

let str = ["b", "c", "a", "d","z", "x"];
str.sort();
console.log(str);

let str2 = ["z", "g", "h", "i", "n", "k"]
str2.sort();
console.log(str2);

let a = [21, 13, 28, 36, 99, 152, 12, 1, 189, 18];
a.sort((b,a) => b-a)
console.log(a);





