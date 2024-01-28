// a sample try catch block

try {
    throw new Error();
} catch (error) {
    console.log('Please check again');
}

// block of code
try {
    console.log(a + b);
}
catch (err) {
    console.log(err); // prints the error
    console.log("There was an error");
    console.log("the error was saved in the error log");
}
console.log('My program doesnt stop');

// undefined data type vs null data type vs empty strings

// null - intentional absence of any object value

var letters = 'abc';
console.log(letters.match(/a/));

console.log(letters.match(/d/)); // absence of an object

// undefined - has only 1 value
// all functions return undefined by default

// when var is declared without its value
// acts as a placeholder
var man;
console.log(man); // undefined

// also and object attribute that does not exist
 var game = {
    speed : 500,
    score : 1
 }
 console.log(game.Score); // undefined
