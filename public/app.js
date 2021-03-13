"use strict";
// class declareren
var Invoice = /** @class */ (function () {
    // readonly client: string
    // private details: string
    // public amount: number
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
// objecten aanmaken via class
var invOne = new Invoice('mario', 'webdev', 250);
var invTwo = new Invoice('luigi', 'dev', 300);
// objecten opslaan in array
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    // inv.client = 'marijn'
    console.log(inv.client, inv.amount, inv.format());
});
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
