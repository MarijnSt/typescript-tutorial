import {Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice ('yoshi', 'webdev', 250)
// docTwo = new Payment ('mario', 'plumbing', 200)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)

// objecten aanmaken via class
// const invOne = new Invoice('mario', 'webdev', 250)
// const invTwo = new Invoice('luigi', 'dev', 300)

// objecten opslaan in array
// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let doc: HasFormatter

    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    console.log(doc)
})