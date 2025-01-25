// this array method is used to update and delete some elements in the existing array

let arr = [1, 2, 4, 5, 6, 8];
arr.splice(2, 3, "hey");
console.log(arr);


let arr1 = ["hyderabad", 29, true];
arr1.splice(0, 1, "mumbai");
console.log(arr1);

let arr3 = [true, 'hey', 55, 'hey']
arr3.splice(1,2, false);
console.log(arr3);
