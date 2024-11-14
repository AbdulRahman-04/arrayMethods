/*
  some method: 
   it checks every element of the array and if ek b mmatch hogya toh true aajata output warna 
   false.


*/

let num = [1, 3, 5, 7, 9];

let check = num.some((a) => a %2 == 0)

// console.log(check);

let n1 = [3, 5, 5, 9, 7];
let check1 = n1.some((a) => a%2 ==0 )
// console.log(check1);

let n3 = [2, 4, 6, 8]
let checkn3 = n3.some((a) => { return a%2 != 0})
// console.log(checkn3);
