// class declareren
class Invoice {
    // readonly client: string
    // private details: string
    // public amount: number

    constructor (
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

// objecten aanmaken via class
const invOne = new Invoice('mario', 'webdev', 250)
const invTwo = new Invoice('luigi', 'dev', 300)

// objecten opslaan in array
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    // inv.client = 'marijn'
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