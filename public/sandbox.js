"use strict";
// let greet: Function
// voorbeeld 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// voorbeeld 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// voorbeeld 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
