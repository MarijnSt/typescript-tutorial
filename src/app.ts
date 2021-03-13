// class declareren
class Invoice {
    client: string
    details: string
    amount: number

    constructor (c: string, d: string, a: number) {
        this.client = c
        this.details = d
        this.amount = a
    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

// objecten aanmaken via class
const invOne = new Invoice('mario', 'webdev', 250)
const invTwo = new Invoice('luigi', 'dev', 300)
console.log(invOne, invTwo)

// objecten opslaan in array
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)
console.log(invoices)

// waardes van properties aanpassen
invOne.client = 'yoshi'
invTwo.amount = 200
console.log(invOne, invTwo)

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