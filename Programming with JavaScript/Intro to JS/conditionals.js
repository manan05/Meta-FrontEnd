// if else condition

var result = 30;
if(result > 40){
    console.log("You passed the test");
}else{
    console.log("You did not pass the test");
}

// if, else, if, else
// more options

var place = 'first';
if(place == 'first'){
    console.log('Gold');
} else if(place == 'second'){
    console.log('Silver');
} else if(place == 'third'){
    console.log('Bronze');
}else{
    console.log('No medal');
}


// switch statement
var place = 'first';

switch(place){
    case 'first':
        console.log('Gold');
        break;
    case'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
        break;  
}


// Exercise: Practice conditional statements
var age = 10
if(age >= 65){
    console.log('You get your income from your pension');
} else if(age < 65 && age >= 18){
    console.log('Each month you get a salary');
} else if(age<18){
    console.log('You get an allowance');
} else{
    console.log('The value of age variable is not numerical');
}

// Loops in JS
// For loop
for(var i =0; i<10;i++){
    console.log(i);
}

// 10 seconds countdown to happy new year
for(var i = 10; i>0; i--){
    console.log(i);
}
console.log('Happy New Year!');


// while loops
var j = 10;
while(j>0){
    console.log(j);
    j--;
}

// 10 second to happy new year

var counter = 10;
while(counter>0){
    console.log(counter);
    counter--;
}
console.log('Happy New Year!');

// nested loop
//2 week plan eg, week1-day1, week1-day2 ---

for(var i = 1; i<=2; i++){
    for(var j = 1; j<=5; j++){
        console.log('Week',i,'- day',j);
    }
}