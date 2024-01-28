// Strings behave like Arrays

// For loop over arrays
var letters = ['a', 'b', 'c'];
for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

// for loop over strings
var string = "abc";
for (var i = 0; i < string.length; i++) {
  console.log(string[i]);
}
console.log(string.length);

// Strings != arrays

var greet = "Hello";
var user = 'Lisa';

console.log(greet + user);
console.log(greet.concat(user));

// String cheat sheet

var greet = "Hello, ";
var place = "World"

// length of the string 
console.log(greet.length);

// reading a specific index in a string
console.log(greet.charAt(4));

// concatenating the strings
console.log('Wo'.concat("rl").concat("d"));


// indexOf returns the location of the first position that matches the character
var newStr = "ho-ho-ho";
console.log(newStr.indexOf('h'));
console.log(newStr.indexOf('o'));
console.log(newStr.indexOf('-'));


// split method chops the string into an array of subStrings
console.log(newStr.split('-'));

// Exercise: Creating arrays and objects

var clothes = [];
clothes.push("shirt");
clothes.push("pant");
clothes.push("tShirt");
clothes.push("tracksuit");
clothes.push("shoes");

clothes.pop()

clothes.push("Sneakers");

console.log(clothes[2]);

var favCar = {};

favCar.color = "black";
favCar.convertible = true;
console.log(favCar);