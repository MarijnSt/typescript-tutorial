const me = {
    name: 'Marijn',
    age: 28,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
let diejen;
const greetPerson = (person) => {
    console.log('Hello', person.name);
};
greetPerson(me);
import { Invoice } from './classes/Invoice.js';
// objecten aanmaken via class
const invOne = new Invoice('mario', 'webdev', 250);
const invTwo = new Invoice('luigi', 'dev', 300);
// objecten opslaan in array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(toFrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
