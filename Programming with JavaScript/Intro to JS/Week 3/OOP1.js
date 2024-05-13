// OOP 1
var purchase1 = {
    shoes: 100,
    stateTax : 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price: ', calculation);
    }
}

purchase1.totalPrice(); // 120


// OOP 2
var purchase2 = {
    shoes: 50,
    stateTax : 1.2,
    totalPrice: function(){
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price: ', calculation);
    }
}

purchase2.totalPrice(); // 60


// OOP 3
var purchase3 = {
    shoes: 120,
    stateTax : 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this. stateTax;
        console.log('Total price: ', calculation);
    }
}

purchase3.totalPrice(); // 144