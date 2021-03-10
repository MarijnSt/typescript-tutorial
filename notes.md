## Type basics
* Je kan waardes van vars aanpassen maar types niet
* Type van var blijft het type van bij declaratie

### Type inference
* Legt type van var vast op basis van toegekende waarde

### Types van functie argumenten
```javascript
const circ = (diameter: number) => {
    return diameter * Math.PI
}
console.log(circ(3))
```