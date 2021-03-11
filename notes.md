## Explicit Types
Hoe geef je type aan een variabele die je zonder waarde declareerde?
```javascript
let charachter: string
let age: number
let loggedIn: boolean
```

## Arrays
```javascript
let ninja: string[]
let ninja: string[] = []
```
* Eerste wijst type van array met strings toe aan var
* Maakt er geen lege array van dus push method zal niet werken
* Een lege array initialiseren doe je dus op de tweede manier

## Union Types
Je kan meerdere types toewijzen aan var/array dankzij union types
```javascript
let mixed: (string|number|boolean)[] = []
mixed.push('marijn')
mixed.push(23)
mixed.push(true)
console.log(mixed)

let uid: (string|boolean)
```

## Objects
```javascript
let ninjaOne: object
ninjaOne = {
    name: 'marijn',
    age: 23
}

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}
```
* ninjaOne: object type toekennen zonder properties een type te geven
* ninjaTwo: object type, properties en hun type toekennen 