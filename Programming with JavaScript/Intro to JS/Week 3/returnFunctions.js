
// Functions in JS and using ouptuts of one function with the other function
function doubler(val){
    return val *2;
}

function objectMaker(val){
    return {manan: val};
}

console.log(objectMaker(10));

console.log(doubler(100));

console.log(objectMaker(doubler(100)));

