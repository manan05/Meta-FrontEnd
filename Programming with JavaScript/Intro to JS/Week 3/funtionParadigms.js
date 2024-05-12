// in functional programming we use a lot of functions

function getTotal(a,b){
    var total = a+b;
    return total;
}

var num1 = 10;
var num2 = 20;
// console.log(getTotal(num1,num2));

// another example
function getDistance(mph,h){
    return mph*h;
}

var mph = 60;
var h = 2;

var distance = getDistance(mph,h);
// console.log(distance); 

// if we want to try object oriented paradigm,
// for example, we can gieve a property and method to an object

var virtualPet = {
    sleepy: true,
    nap: function(){
        this.sleepy = false;
        console.log('nap');
    }
}

// now if I first print the value of sleepy, it will print true but after runnign the function "nap" it will update the value of sleepy to false

// console.log(virtualPet.sleepy);
// virtualPet.nap();
// console.log(virtualPet.sleepy);

// output of above lines will be, 
// true
// nap
// false


// FIRST CLASS CITIZENS - Functions

function addTwoNums(a,b){
    console.log(a+b);
}

function randomNum(){
    return Math.floor((Math.random()*10) + 1);
}

function specificNum(num){
    return 50;
}

var useRandom = true; 

var getNumber;

if(useRandom){
    getNumber = randomNum;
}else{
    getNumber = specificNum;
}

addTwoNums(getNumber(),getNumber());