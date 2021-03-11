## Functie declareren
```javascript
let greet: Function
greet = () => {
    console.log('ieps')
}
```

## Optioneel parameter
```javascript
let add: Function
const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b)
    console.log(c)
}

add(5, 6)
```
* Print 11 en undefined


## Default value
```javascript
let add: Function
const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
    console.log(c)
}

add(5, 6)
```
* Print 11 en 10

## Return type
```javascript
const minus = (a: number, b:number) => {
    return a - b
}

let result = minus(3,1)
result = 'marijn'
```
Aanpassing van result zal een error geven want het neemt automatisch het type van de return in de functie over

Aangeven welk type return heeft in functie:
```javascript
const minus = (a: number, b:number): number => {
    return a - b
}
```
Handig als extra controle of om snel aan te duiden voor andere devs wat functie terug geeft

## Void
```javascript
const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
    console.log(c)
}
```
Geeft technisch gezien wel een waarde terug: **void**
```javascript
const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b)
    console.log(c)
}
```