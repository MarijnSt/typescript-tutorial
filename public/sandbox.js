"use strict";
var greet;
greet = function () {
    console.log('ieps');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 6);
