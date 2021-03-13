## Verschillen met class
* Wordt niet gebruikt om een object te genereren
* Wordt gebruikt om structuur te geven aan object of class

```javascript
interface isPerson {
    name: string,
    age: number,
    speak (a: string): void
    spend (a: number): number
}
```
Wanneer je een variabele maakt met type isPerson, moet die voldoen aan de gegeven properties en methods 

### Voorbeelden
Interface op object toepassen
```javascript
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
```

Interface als type aan lege var geven
```javascript
let diejen: isPerson
```

Interface aan functie parameter geven
```javascript
const greetPerson = (person: isPerson) => {
    console.log('Hello', person.name)
}
greetPerson(me)
```