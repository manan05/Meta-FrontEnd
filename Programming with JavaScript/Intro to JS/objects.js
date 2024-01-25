// building objects in js
var user = {}

// creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills:30,
    streetSmarts:30,
    health:40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

//creating an object table
var table = {
    legs:3,
    color: 'brown',
    priceUSD: 100,
}
// printing the entire table object
console.log(table);

// printing only certain values of the table
console.log(table.color);


// creating an object with name as house
var house = {
    rooms: 3,
    color: 'Brown',
    priceUSD: 100000
}

console.log(house);


// alternative approach to create an object
var house2 = {}
house2.rooms = 5;
house2.color = 'pink'
house2.priceUSD = 150000

console.log(house);
console.log(house2);

// adding a new entry into house
console.log(house);
house.windows = 10;
console.log(house);

// using the brackets notation
var house2 = {}
house2["rooms"] = 4;
house2['color'] = 'pink'
house2['priceUSD'] = 12345
console.log(house2);

// traversing the object values using a loop

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed:100,
    altitude: 200,
    color: 'red'
}
for(var i=0; i<arrOfKeys.length; i++){
    console.log(drone[arrOfKeys[i]]);
}
// output for the above will be: 100,200,red


// Arrays
/*Arrays are also objects, 
they have some built in properties like, push and pop  
 */

// push method
var fruits = [];
fruits.push("orange");
fruits.push("ananas");
console.log(fruits);

// pop method
fruits.pop()
console.log(fruits);

// building a function that takes all its arguments and pushes them into the array
function arrayBuilder(one,two,three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var newArr = arrayBuilder(1,2,3);
console.log(newArr);

// Built in Math class or object 
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN10);

// Random method
// returns a random number between 0 and 1
var decimal = Math.random();
console.log(decimal);

// to get a random number between 1 and 10
console.log(Math.ceil(decimal * 10));
