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
    console.log(letter);
}

// We can use this concept to iterate over an object...

// some methods, Object.keys(), Object.values(), Object.entries()

