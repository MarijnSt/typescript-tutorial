Importeren en exporteren in verschillende bestanden

In tsconfig:
```
"target": es6,
"module": "es2015",
```
* Target --> modules enkel ondersteund door moderne browsers dus es6 ipv 5
 
In html aanduiden dat script een module is:
```
<script type="module" src='app.js'></script>
```

## Class exporteren uit Invoice.ts:
```javascript
export class Invoice {
    // constructor, methods van class
}
```
## Class importeren in app.ts
```javascript
import {Invoice} from './classes/Invoice.js'
```
* Binnen {} de naam van wat je export geven
* Linken naar **JS** bestand omdat het in de front niet ts maar js bestanden zijn

## Nadelen
* Modules enkel ondersteund door moderne browsers
* Meerdere bestanden linken = meerdere requests

### Oplossing: webpack
Alle bestanden samenbrengen in 1 bestand met support voor alle browsers