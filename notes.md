Grotere projecten hebben een betere structuur nodig aangezien je meerdere ts en js bestanden in verschillende folders zal hebben

tsconfig.json geeft je de mogelijkheid om je project te structureren en genereer je via de console:
`tsc --init``

### Root en output folder instellen
```
"outDir": "./public",
"rootDir": "./src",
```

Compile command in console is nu

`tsc`

of

`tsc -w'

### Bestanden buiten root folder
Wanneer je op project root een ts bestand maakt, zal dit ook gecompileerd worden naar je output folder, ookal gaf je een andere root folder aan.

Extra optie in config toevoegen om dit te voorkomen:

`"include": ["src"]`