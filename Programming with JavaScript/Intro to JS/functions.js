// a function to add 2 numbers 

function addTwoNums(a,b){
    var c = a+ b;
    console.log(c);
}
// calling the function that we just created
addTwoNums(100,150)

// Storing data in Arrays
// as sense of belonging
var train1 = ['wheat', 'barley','potato','salt','rocks']
console.log(train1);

// Exercise: Practicing with functions

function letterFinder(word, match){
    for(var i = 0; i<= word.length ; i++){
        if(word[i] == match){
            console.log('Found the', match, 'at', i)
        }else{
            console.log('---No match found at',i)
        }
    }
}

letterFinder("test", "t")