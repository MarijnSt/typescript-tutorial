//interface
interface isPerson {
    name: string,
    age: number,
    speak (a: string): void
    spend (a: number): number
}

const me: isPerson = {
    name: 'Marijn',
    age: 28,
    speak (text: string): void {
        console.log(text)
    },
    spend (amount: number): number {
        console.log('I spent', amount)
        return amount
    }
}

let diejen: isPerson

const greetPerson = (person: isPerson) => {
    console.log('Hello', person.name)
}

greetPerson(me)

import {Invoice} from './classes/Invoice.js'

// objecten aanmaken via class
const invOne = new Invoice('mario', 'webdev', 250)
const invTwo = new Invoice('luigi', 'dev', 300)

// objecten opslaan in array
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(type.value)
    console.log(toFrom.value)
    console.log(details.value)
    console.log(amount.valueAsNumber)
})