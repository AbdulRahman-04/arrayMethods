/*
 the join () method joins all elements of an array into a string, with optional seperator.
*/

let color = ["black", "green", "yellow"];
let colorString = color.join(`-`);
// console.log(colorString);  //output black-green-yellow


let Num = [1, 12, 14, 122, 56, 89];
let totalNum = Num.join(` | `);
// console.log(totalNum);

let fruits =  [`apple`, `banana`, `grapes`, `mango`];
let fruitList = fruits.join(`, `);
console.log(fruitList);

let emoji = ['😂', '🤣', '😘', '👍'];
// console.log(emoji.join(" ❤ "));
// console.log(emoji.join(" 🤣 "));

