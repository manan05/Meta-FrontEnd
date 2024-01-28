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
    speed: 500,
    score: 1
}
console.log(game.Score); // undefined


// Exercise: Error prevention
function addTwoNums(a, b) {
    try {
        if (typeof a != 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof b != 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }

}

addTwoNums(5, '5');
console.log("It still works");


// Exercise: Defensive programming

function letterFinder(word, match) {
    var condition1 = typeof word == 'string' && word.length >= 2;
    var condition2 = typeof match == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    else{
        console.log('Please pass correct arguments to the function.');
    }
}

letterFinder(1,2);
letterFinder('hello', 'o');
