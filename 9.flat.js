/*
 the flat() method creates a new array with all sub array elements concatenated into it recursively
 up to the specified depth.

*/

let nestedArray = [1, 2, [3,4], ["hey", "a"], [13,[14, 15]], [16]]
// console.log(nestedArray.flat(5));


let arr = [1, 12, 16, 18, [19, [ 21, [18, [69, [56, [79]]]]]], [199, [18]]]
// console.log(arr.flat(8));

let newFlat = [12, 0, [11, true, ["hey", false, undefined, [null, [1111, [887, [190, [1256]]]]]] ]]
// console.log(newFlat.flat(7));
