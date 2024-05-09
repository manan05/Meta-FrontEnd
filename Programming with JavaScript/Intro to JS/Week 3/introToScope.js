var num1 = 10;          // global variable

function score() {
    num2 = 20;          // Local variable
    console.log(num2); 
}


// another example
var globalVar = 'I am in the global scope';

function scopeTest(){
    var localVar = 'I am in the local scope';
    console.log(localVar);
}

// console.log(localVar);  // as this is local scope, this gives not defined error 
scopeTest();

console.log(globalVar);