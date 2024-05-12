// Comparing var, let and const

// VAR keyword

// 1. We CAN access a var variable before init, as long as the var variable is EVENTUALLY init ANYWHERE in the code
console.log(user);
// 2. We CAN reassign a var variable
var user = 'Manan';
var user = 'Sahil';
var user = 'GK';

console.log(user);
var user;