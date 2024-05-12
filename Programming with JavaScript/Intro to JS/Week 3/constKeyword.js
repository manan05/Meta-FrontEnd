// Const keyword

// 1. The const variable must be init

// console.log(user);
// const user;  // shows compilation error that missing initializer in const declaration


// 2. We cannot access the const variable before init

// console.log(user);   // shows error that cannot access 'user' before init
const user  = "Manan"; 

// 3.. We CANNOT redeclare a const variable

user = "Sahil";  // error: Assignment to constant variable