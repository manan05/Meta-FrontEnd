// 2 type of programming
// 1. Functional Programming 
// 2. Object Oriented programming

// Functional programming
var shoes = 100;    // data
var stateTax = 1.1;     // data

function totalPrice(price, tax){
    return price * stateTax;                // FUNCTION
}

var toPayForShoes = totalPrice(shoes, stateTax);
console.log(toPayForShoes);


// Explore the use of functional programming style to calculate currency coversion

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate){
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);


// Return values from functions
console.log('Hello');

// output in the browser is like this
/*
Hello
undefined
*/

// but if we write the same into a function the output will be different
function consoleLog(val){
    console.log(val);
    return val
}
consoleLog("hello!");