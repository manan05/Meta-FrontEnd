// Syntax

// this is a single line comment in JS
console.log('Hello World')

/**
 * 
 * This is a multiple line
 * comment in JS
 */

console.log("%cHello World", "color: blue; font-size:40px");

// Output Multiple words into the console using +
console.log("Hello" + "there," + " Manan")

// Output multiple words into the console using ,
// With comma (,) even if we don't add space then also space is being added
console.log("Manan", "Arora");


// Variables 

// save the variable and us eit in future
var person;
person = "Manan"
console.log("Hello" ,person)

var greeting = "Hello"
console.log(greeting , person);

person = "Sahil"
console.log(person, greeting);

// Exercise: Declaring Varibales, 

var petDog = 'Rex'
var petCat = 'Pepper'
console.log(petDog);
console.log(petCat);
console.log('My pet dog\'s name is:', petDog);
console.log('My pet cat\'s name is:', petCat);

var catSound = 'purr'
var dogSound = 'woof'
console.log(petDog , 'says' , dogSound);
console.log(petCat , 'says' , catSound);

catSound = 'Meow'
console.log(petCat , 'now says' , catSound);

var petDog = 'Rex'; // Task 1 solution
console.log(petDog);