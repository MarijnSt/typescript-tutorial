let greet: Function

greet = () => {
    console.log('ieps')
}

const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
    console.log(c)
}

add(5, 6)


const minus = (a: number, b:number) => {
    return a - b
}

let result = minus(3,1)
// result = 'marijn'