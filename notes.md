## Arrays
```javascript
let names = ['luigi', 'mario', 'yoshi']
names.push('toad')
names.push(3)
```
* TS geeft error op laatste push
* Geen mixed array gedeclareerd dus alles moet hetzelfde type zijn

## Objects
```javascript
let ninja = {
    name: 'marijn',
    belt: 'black',
    age: 23
}

ninja.name = 'Mario'
ninja.skills = ['alles', 'niets']
```
* Je kan properties aanpassen zolang je in hetzelfde type blijft
* Je kan geen properties meer toevoegen nadat je object hebt gedeclareerd