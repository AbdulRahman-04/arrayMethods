// Fill

/*
  the fill method changes all elements/values in an array to a static value, from a start index
  (default 0) to an end index (default array.length).
  definition: fills all or part of an array with a specified value.

  syntax: arrName.fill(value, start, end)


*/

const arr = [ 1 , 2 , 3 , 4 , 5]
//             0   1   2   3  4   --> start mai 0th index se start hota  indexing
//            1    2    3  4   5   --> end mai 1 st index se start hota

arr.fill("hello", 2, 4)
// console.log(arr);


let Arr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(Arr.fill("hi", 2, 6));

let newArr = [12, 23, 13, 15, 18];
// console.log(newArr.fill("hull", 1, 4));

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr1.fill(true, 2, 6));


