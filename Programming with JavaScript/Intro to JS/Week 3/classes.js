// Creating classes

class Train{
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn =!this.lightsOn;
    }
    lightsStatus(){
        console.log('Lights are on ?', this.lightsOn);
    }
    getSelf(){
        console.log(this);
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}


var newTrain = new Train("red", true);
console.log(newTrain);      // Train { color: 'red', lightsOn: true }


var train4 = new Train('red', false);

train4.toggleLights(); // undefined
train4.lightsStatus(); // 'Lights are on ? true'
train4.getSelf(); // Train {color: 'red' , lightsOn: 'true'}
train4.getPrototype(); // {}


// we can also use extends keyword,

class HighSpeedTrain extends Train{
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn); // to specify that this property gets inherited from the super class
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }

    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status: ', this.highSpeedOn);
    }

    // if we want to implement a different functionality of a function of the super class, 
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}


// building objects of train and high speed train

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.



// Default parameters,

function noDefaultParams(number) {
    console.log('Result:', number * number)
}

// if we run the function without any parameters, 
noDefaultParams(); // Result: NaN

// this is not good so we can assign default parameters of any function using,

function withDefaultParams(number = 1) {
    console.log('Result:', number * number)
}

// now if we run the funciton without any parameters
withDefaultParams(); // Result: 1