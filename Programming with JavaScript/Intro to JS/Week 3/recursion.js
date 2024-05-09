// Function Calling and recursion

function example(){
    console.log("line 1");
    console.log("line 2");
    console.log("line 3");
}

// example();

// for example we have the below code, which can be considered a Recursive call and 
// running indefinitely

function example2(){
    console.log("line 1");
    console.log("Line 2");
    console.log("Line 3");
    example2();
}

// example2(); this call is a recursive call with Infinite loop


let counter = 3;

function example3(){
    console.log(counter);
    counter = counter - 1;
    if(counter === 0){
        return;
    }
    example3();
}

example3();