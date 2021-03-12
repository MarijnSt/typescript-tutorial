Function signature

Beschrijft structuur van een functie: welke parameters, welke waarde er terug wordt gegeven

### Voorbeeld 1
```javascript
() => void
```
Geen parameters, functie returnt void

### Voorbeeld 2
```javascript
let greet: (a: string, b: string) => void

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}
```
* Function signature greet = twee strings als parameter, geeft void terug
* Greet declareren: moet overeen komen met signature

### Voorbeeld 3
```javascript
let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}
```
* Zonder else functie geeft het een error want je returnt geen getal

### Voorbeeld 4
Met type alias:
```javascript
let logDetails: (obj: {name: string, age: number}) => void;
type person = {name: string, age: number};
logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}
```