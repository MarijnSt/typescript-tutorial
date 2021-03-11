## Dynamic Type
'any' type: var kan eender welk type toegewezen krijgen
```javascript
let age: any = 25
age = 'marijn '
console.log(age)

let mixed: any[] = []
let object: { name: any, age: any}
```
Neemt de voordelen van typescript weg dus is het niet zo handig om te gebruiken