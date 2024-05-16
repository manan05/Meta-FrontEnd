// Before ES6, Strings were build in JS as, 
const greet1= "Hello Manan";
const greet2 = 'Hello Manan';

// With ES6, backticks were introduced,
const greet3 = `Hello Manan`;

console.log(greet1, greet2, greet3);


// Differences between template and regular string,

//1. allows variable interpolation

let greet = 'Hello';
let person = 'Sahil';

console.log(`${greet} ${person}, How are you?`);

//2. can span multiple lines,
const newStr = `Hello
How 
Are
You` 
console.log(newStr);

//3. Template literals allow us to do expression evaluation
console.log(`${1+1+1+1+1} Stars`);


// Working with template literals

let noMultiLine = "No mult-line strings in ES5";
console.log("Did you know? " + noMultiLine);

let multipline = `
Using ES6
Backticks,
multi-line
strings are
possible!
`;

console.log(multipline);

let first = `He said, "Dont't you know? ES6, it's got some great features!"`;
let second = `"Wouldn't you want to learn more?", he asked.`;

console.log(`${first} - and I got curious. ${second}`);