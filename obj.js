// object.keys()
// console.log(Object.keys(myDetails));
// console.log(Object.keys(myDetails));
// console.log(Object.keys(myDetails));
// console.log(Object.keys(myDetails));
// console.log(Object.keys(myDetails));


// object.values()
// console.log(Object.values(myDetails));
// console.log(Object.values(myDetails));
// console.log(Object.values(myDetails));
// console.log(Object.values(myDetails));
// console.log(Object.values(myDetails));



// object.entries()     //this array method converts an object into an array
// console.log(Object.entries(myDetails));
// console.log(Object.entries(myDetails));
// console.log(Object.entries(myDetails));
// console.log(Object.entries(myDetails));
// console.log(Object.entries(myDetails));

// object.fromentries:      // this obj method converts an array into an object
// let arr = [["name", "rahman"], ["rollno:", 49], ["location", "Hyderabad"]];
// console.log(Object.fromEntries(arr));
// console.log(Object.fromEntries(arr));
// console.log(Object.fromEntries(arr));
// console.log(Object.fromEntries(arr));
// console.log(Object.fromEntries(arr));


// object.assign() :       //this method is used to assign one obj elements into the another
// let obj1 = {
//     name1: "ab",
//     marks: 92
// }
// let obj2 = {
//     isPass: true
// }
// console.log(Object.assign(obj1, obj2));
// console.log(Object.assign(obj1, obj2));
// console.log(Object.assign(obj1, obj2));
// console.log(Object.assign(obj1, obj2));
// console.log(Object.assign(obj1, obj2));




// object.is():   //this object method is used to compare two values strictly just like (===)
// let a =12;
// let b = 12;
// console.log(Object.is(a,b));
// console.log(Object.is(a,b));
// console.log(Object.is(a,b));
// console.log(Object.is(a,b));
// console.log(Object.is(a,b));


// object.create():   //this obj method creates a clone of existing obj with which we can access elemets of og
                       // object.
                       
// let copyMyDetails = Object.create(myDetails);
// console.log(copyMyDetails.name);
// console.log(copyMyDetails.rollNo);
// console.log(copyMyDetails.name);
// console.log(copyMyDetails.rollNo);
// console.log(copyMyDetails.name);
// console.log(copyMyDetails.rollNo);


//object.freeze(): this obj method freezes your obj which means you can neither update the existing key:values
//                  nor you can add any new key: values and neither delete any.
// let myDetails = {
//     name: "rahman",
//     rollNo: 49
// }

// console.log(Object.freeze(myDetails));
// myDetails.name = "syed";
// myDetails.rollNo = 5049;
// console.log(myDetails);



// object.seal: this obj method seals the object whichmeans you can just update the existing key: value but can't
//               add new key:value pairr nor delete it.
// let myDetails = {
//     name: "rahman",
//     rollNo: 49
// }
// console.log(Object.seal(myDetails));
// myDetails.location = "hyd";
// myDetails.name = "Syed";
// myDetails.rollNo = 5049;
// console.log(myDetails);



// object.tostring(): it converts one numbersysteminto another e.g: binary to octal etc
// let a = 12;
// let b = a.toString(16);
// console.log(b);

// object.isSealed && Object.isFrozen: these two object methods checks if an object is frozen or Sealed

// let myClass = {
//     name: "ab",
//     marks: 92
// }
// console.log(Object.freeze(myClass));
// console.log(Object.seal(myClass));

// console.log(Object.isFrozen(myClass));
// console.log(Object.isSealed(myClass));























