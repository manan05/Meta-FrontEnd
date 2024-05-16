// we cannot loop over an object using for of

const car = {
    speed : 100,
    color : "red",
}

// for(const key of car){
//     console.log(key); // Error: car is not iterable
// }

// but on the contrary, arrays are iterable,
const letters = ['a', 'b', 'c', 'd'];
for (var letter of letters){
    // console.log(letter);
}

// We can use this concept to iterate over an object...

// some methods, Object.keys(), Object.values(), Object.entries()

// Object.keys() method

const car2 = {
    speed: 200,
    color: "red"
}

console.log(Object.keys(car2)); // [ 'speed', 'color' ]


// Object.values() method

console.log(Object.values(car2)); // [ 200, 'red' ]


// Object.entries() method

console.log(Object.entries(car2)); // [ ['speed', 200 ], [ 'color','red' ] ]


// Example:

// ingredients that  we need to loop over any object's own property keys and values
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for(const key of Object.keys(clothingItem)){
    console.log(key, ":" , clothingItem[key]);
}


// Video examples

const newCar = {
    engine: true,
    steering: true,
    speed: 'slow'
}

const sportsCar = Object.create(newCar);
sportsCar.speed = 'fast';
console.log("The sportsCar object = ", sportsCar);

console.log('for - in is unrelaible, ');
for(prop in sportsCar){
    console.log(prop);
}

console.log("FOR IN iterates over its own properties, and it's inherited properties as well!!");

console.log('for - of is relaible');

for(prop of Object.keys(sportsCar)){
    console.log(prop, ":", sportsCar[prop]);
}   

console.log("Now it is iterating over ITS OWN properties!!");