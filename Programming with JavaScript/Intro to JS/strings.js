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
console.log(clothes);
clothes.pop()
console.log(clothes);
clothes.push("Sneakers");
console.log(clothes);
console.log(clothes[2]);

var favCar = {};

favCar.color = "black";
favCar.convertible = true;
console.log(favCar);

// Object Methods

var car = {};
car.color = "red";

// adding a method to the car object so that it can be called as car.turnkey()
car.turnkey = function() {
  console.log('engine running');
}

var car = {};
car.mileage = 98765;
car.color = 'red';
console.log(car);
// adding the turnkey method to the car object
car.turnkey = function() {
  console.log('the engine is running');
}
console.log(car);

car.lightsOn = function(){
  console.log('The lights are on');
}

console.log(car);
car.turnkey();
car.lightsOn();

// typeOf operator

var test = typeof("what is this?");
console.log(test);

var test = typeof(10);
console.log(test);

var test = typeof(3.14);
console.log(test);

var test = typeof(true);
console.log(test);

var test = typeof(false);
console.log(test);

var test = typeof('1 < 2');
console.log(test);

var test = typeof([1,2,3,4]);
console.log(test);

var test = typeof({firstProperty:1});
console.log(test);

var test = typeof(function man(){console.log('manan');});
console.log(test);

var test = typeof(null);
console.log(test);

var test = typeof(undefined);
console.log(test);
