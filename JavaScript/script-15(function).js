function greet(name, greeting='Hello') {
    console.log(`${greeting}, ${name}!`)
}

const sapa = function(name) {
    return `Hello, ${name}!`
}

greet('Nagi')
var sapaan = sapa('Nagi')
console.log(sapaan)

const anotherGreet = (name) => name + '!'

function addNums(...number) {
    for (let val of number) {
        console.log(val)
    }
}

addNums(1,2,3,4,5)