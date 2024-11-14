// reduce method: the reduce method executes a reducer function on each element of the array, 
// resulting in a single output value.
//  its commonly used to accumulate values (e.g. summing numbers, concatenating strings)


let num = [10, 20, 30, 40, 50];
let totalNum = [num.reduce((acc, curr) => acc + curr, 0)]
// console.log(totalNum);

let num2 = [1, 2, 3, 4, 5]
let totalNum2 = num2.reduce((acc, curr) => acc + curr, 0);
// console.log(totalNum);

let n3 = [2, 4, 6, 8 , 10];
let totaln3 = n3.reduce((acc, curr) => acc + curr, 0);
// console.log(totaln3);


