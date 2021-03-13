"use strict";
// class declareren
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
// objecten aanmaken via class
var invOne = new Invoice('mario', 'webdev', 250);
var invTwo = new Invoice('luigi', 'dev', 300);
console.log(invOne, invTwo);
// objecten opslaan in array
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// waardes van properties aanpassen
invOne.client = 'yoshi';
invTwo.amount = 200;
console.log(invOne, invTwo);
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value);
    console.log(toFrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
