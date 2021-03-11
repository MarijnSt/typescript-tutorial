// explicit type
let charachter: string
let age: number
let loggedIn: boolean

age = 24

// arrays
// let ninja: string[]
let ninja: string[] = []

// mixed array via union type
let mixed: (string|number|boolean)[] = []
mixed.push('marijn')
mixed.push(23)
mixed.push(true)
console.log(mixed)


// object
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