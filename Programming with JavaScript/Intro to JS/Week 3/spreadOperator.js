// used to reduce the redundant code,
let top3 = ['Delhi', 'Amritsar', 'Gurgaon'];

function showIternary(place1, place2, place3){
    console.log(`Visit ${place1}`);
    console.log(`Then visit ${place2}`);
    console.log(`Finish with a visit to ${place3}`);
}

showIternary(...top3); // instead of writing, showIternary (top3[0], top3[1], top3[2])


// REST operator
const top7 = ['Delhi', 'Amritsar', 'Gurgaon', 'Mumbai', 'Chennai', 'Kolkata', 'Jaipur'];
const [] = top7;
const [first, second, third, ...secondVisit] = top7;

console.log(secondVisit); // ['Mumbai', 'Chennai', 'Kolkata', 'Jaipur']

function addTaxtoPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item);
}

let shoppingCart = addTaxtoPrices(1.1, 46, 89, 35 , 79);

console.log(shoppingCart);


// Using Spread and Rest
// Join arrays using rest operator

const fruits = ['apple', 'banana', 'orange'];
const berries = ['blueberry', 'strawberry', 'raspberry'];

const fruitAndBerries = [...fruits,...berries];
console.log(fruitAndBerries); // [ 'apple', 'banana', 'orange', 'blueberry', 'strawberry', 'raspberry' ]


// also easy to join objects
const flying = {wings: 2};
const car = {wheels: 4};
const flyingCar = {...flying,...car};
console.log(flyingCar); // { wings: 2, wheels: 4 }


// Add new members without the push() method

let veggies = ['onion', 'parsley']
veggies= [...veggies, 'carrot', 'beetroot' ]
console.log(veggies); // [ 'onion', 'parsley', 'carrot', 'beetroot' ]



// Convert a string to an array using the spread operator,

const myString = 'Hello World';
const arrayOfString = [...myString];

console.log(arrayOfString   ); // [ 'H', 'e', 'l', 'l', 'o','', 'W', 'o', 'r', 'l', 'd' ]


// Copy either an object or an array into a separate one
const car1 = {
    wheels: 4,
    color: 'Yellow',
    speed: 200
}
const car2 = {...car1};

car1.speed = 100;

console.log(car2.speed, car1.speed); // 200, 100