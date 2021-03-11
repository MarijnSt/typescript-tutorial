## Probleem
```javascript
const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello!`)
}
```
Een bestand wordt al snel rommelig met veel herhalingen als je alle parameters van een functie zo noteert

## Type aliases
Je kan types declareren:
```javascript
type stringOrNum = string | number;
type objWithName = {name: string, uid: stringOrNum};

const logDetails = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello!`);
}
```
Document blijft zo een pak overzichtelijker als je meerdere functies hebt met uitgebreide parameters