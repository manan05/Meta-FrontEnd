var bird = {
    hasWings: true,
    canFly : true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);  // creating an object eagle1 of object bird

console.log(eagle1); // {}

// the object eagle1 inherits the properties of the object bird as,

console.log("eagle1 has wings: ", eagle1.hasWings); // true
console.log("eagle1 can fly: ", eagle1.canFly); // true
console.log("eagle1 has feathers: ", eagle1.hasFeathers); // true


// creating another object eagle2
var penguin1 = Object.create(bird);
penguin1.canFly = false;

console.log(penguin1);
console.log("penguin1 has wings: ", penguin1.hasWings); // true
console.log("penguin1 can fly: ", penguin1.canFly); // false
console.log("penguin1 has feathers: ", penguin1.hasFeathers); // true