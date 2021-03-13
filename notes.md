L12 geskipt in branches

## Access modifier
```javascript
class Invoice {
    readonly client: string;
    private details: string;
    public amount: number;

    constructor (c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
```
* Public (default): property lees- en aanpasbaar **binnen en buiten class**
* Readonly: property **leesbaar** binnen en buiten class, niet meer aan te passen
* Private: property lees- en aanpasbaar **enkel binnen class**

## Shorthand voor classes
Je kan een shorthand schrijven wanneer je access modifiers gebruikt voor je properties
```javascript
class Invoice {
    constructor (
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}
```
Zal automatisch de waardes van de parameters toekennen aan de properties