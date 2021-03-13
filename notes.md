## Javascript Classes
* Classes zijn een blueprint voor objecten
* Helpen om herhaling te vermijden
* Properties, methods zijn hetzelfde; waardes kunnen  verschillen
```javascript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log(this.email, 'just logged in')
    }
    logout() {
        console.log(this.email, 'just logged out')
    }
}
let userOne = new User('Marijn', 'm@test.be')
```
### New keyword
* Maakt nieuw leeg object
* Geeft het nieuwe object als waarde aan this
* Constructor functie wordt uitgevoerd

### Constructor
* Geeft de waardes aan de properties van het object

### Methods
* Niet in constructor!
* Elk nieuw object heeft toegang tot dezelfde functies

## Typescript classes
```javascript
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
const invOne = new Invoice('mario', 'webdev', 250)
```
* Beginnen met properties hun type te geven
* Constructor declareren
* Properties zijn default public: je kan ze overal in de code aanpassen 

### Class objects verzamelen in array
```javascript
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)
```
* Net zoals je een normale array een bepaald type kan geven, kan je ook een class als type geven
* Nu kan je enkel objecten van die class toevoegen