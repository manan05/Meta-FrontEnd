// let keyword

// 1. We CANNOT access a let variable before we declare it
// console.log(user);
// let user;        // this code produces error as, Cannot access 'user' before init


// 2. We can declare an unassigned variable with let; 
let user ;
console.log(user); // undefined

// 3. We CANNOT redeclare a let variable;

// let user = 'Manan';  // produces a compilation error

// 4. But we can reassign it
user = 'Manan';
console.log(user); // Manan