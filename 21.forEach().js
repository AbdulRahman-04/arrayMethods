// forEach():

/*

the foreach() method calls a function for each element in an array. the foreach() method is not
executed for empty elements.

Always remember that it doesn't return anything and if you try to get value it will be undefined

the foreach() method is used to execute a provided function once for each array element. 
its generally used when you need to perform a side effect (e.g , logging, updating a ui) rather
than transforming the array itself, as it doesn't return a new array.



forEach() is one of the most important method in js.

*/

// let num = [13, 29, 43, 26, 82];
// num.forEach((value, index) => {
//     // console.log(value, index);
// })

// let n1 = [53, 111, 16, 25, 86, 95];
// n1.forEach((value, index) => {
//     console.log(value, index);
    
// })

// let Num = [1, 2, 3, 4];

// Num.forEach((x) => console.log(x));

// let n = [1, 2, 3, 4, 5, 6];
// n.forEach((x, y) => console.log(x, y));

// // forEach does not return value
// console.log(n.forEach((x) => x));

// let send = n.forEach((x) => x);
// console.log(send);

// there are 4 points in forEach()
// 1. the returning value == X (for each cant do this)
// 2. ability to chain other methods == X (for each can't do this)
// 3. Performance speed


// forEach() doesn't returns a value;
// forEach can only print value one time and can't return it
// let a = [12, 43, 23, 65];
// a.forEach((v, i) => {
//     return v, i;
// })

// the ability to chain other methods == X (for each can't do this) 

// let myArr = [12, true, "hi", 123, 12];
// myArr.forEach((x) => console.log(x).find((y) => { return y>0}))

// let Arr = [12, 526, 87, 10, 27 ];
// Arr.forEach((x)=> console.log(x).findIndex((z) => { return z>0}))

// let myArr = [ 12, 14, 16, 18];
// myArr.forEach((x) => console.log(x).every((z) => { return z >5}))


// Performance speed:

// let startSpeed = performance.now()

// let arr1 = [1, 3, 5, 8, 9];
// arr1.forEach((x) => {
//     console.log(x);
    
// })

// let endSpeed = performance.now();
// let totalTime = endSpeed - startSpeed;
// console.log(totalTime);


let arr2 = [1, 2, 3, 5];
// arr2.forEach((x) => {return x});

let arr3 = [12, true , false , 113];
// arr3.forEach((x) => console.log(x).findIndex(3))

// forEach() method is used to check the value and index value of an array
// this method can't return any value and can only print the values using console
// this method can't chain other methods with it
// we can check the performance of an array using performance.now, by which we get to know how fast 
// is this forEach () method.