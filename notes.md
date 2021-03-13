### Interface HasFormatter.ts
```javascript
export interface HasFormatter {
    format (): string
}
```
* In de interface definiëer je alle props en methods dat de var, die de interface implementeert, minstens moet hebben
* Hier enkel format method verplicht

### Interface implementeren in class Invoice.ts
```javascript
import {HasFormatter} from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter  {
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
* Interface importeren
* Implementeert de interface succesvol dankzij format functie die string returnt

### Interface toepassen op array
```javascript
let docs: HasFormatter[] = []
docs.push(docOne)
```