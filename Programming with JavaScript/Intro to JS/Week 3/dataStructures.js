// how to represent data 
// types of data structures available, objects, arrays, sets, maps

// Object - unordered, non-iterable collection of key-value pairs, only strings and symbols can be keys
const car = {
    owner: 'Manan', 
    color: 'Red',
    engineOn: function(){
        console.log('Engine is on')
    }
}

// Array - Ordered iterable collection of items
const elements = [1,2,3,4,5,6] 

// Map - iterable, consists of Key-Value pairs, any value can be key

// Set - each item is unique in the collection.

// Examples - reading 
// Working with arrays in JS
// 1. forEach method - To loop over each of their members
// It accepts a function that will work on each array item. That functions first parameter is the current array item itself, and the second parameter is the index 

const fruits = ['apple', 'banana', 'orange', 'kiwi', 'pineapple'];
function appendIndex(fruit, index){
    console.log(`${index}. ${fruit}`);
}

fruits.forEach(appendIndex);

const veggies = ['carrot', 'potato', 'onion', 'tomato', 'pepper'];
veggies.forEach(function (veggies, index){
    console.log(`${index}. ${veggies}`);
});


// 2. filter() method - filters the array based on a specific test
const nums = [0,10,20,30,40,50,60];
const filteredNums = nums.filter(function(nums){
    return nums > 20;
});

console.log(filteredNums); //[ 30, 40, 50, 60 ]

// 3. map() method - used to map each array item over to another array's item.

const arr = [0,1,2,3,4,5,6,7,8,9];
const squared = arr.map(function(elem){
    return elem**2;
});

console.log(squared); // [ 0, 1, 4, 9, 16, 25, 36, 49, 64, 81 ]


// Working with objects in JS
// taks below is to convert an object to an array
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(i){
    result.push(i, drone[i]);
});
console.log(result); // [ 'speed', 100, 'color', 'yellow' ]


// Working with maps in JS
// Make a new map,
// similar to Object but does not have any inheritance

let bestBoxers = new Map();
bestBoxers.set(1, 'The champion');
bestBoxers.set(2, 'The second');
bestBoxers.set(3, 'The third');
console.log(bestBoxers); //Map(3) { 1 => 'The champion', 2 => 'The second', 3 => 'The third' }

// specific ouput for a particular key,
console.log(bestBoxers.get(2)); // 'The second'


// Working with sets in JS
const repeatedFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repeatedFruits);
console.log(repeatedFruits); // [ 'apple', 'pear', 'apple', 'pear', 'plum', 'apple' ]
console.log(uniqueFruits); // Set(3) { 'apple', 'pear', 'plum' }



