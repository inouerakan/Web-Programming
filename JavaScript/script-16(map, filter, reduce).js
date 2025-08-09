const numbers = [1,2,3,4]
const doubled = numbers.map(num => num * 2) // Iterate through the array
console.log(doubled)

const users = [
    {name: "Nagi", age: 20},
    {name: "Mitsuki", age: 20}
]

const names = users.map(user => user.name)
console.log(names)

const numbers2 = [1,2,3,4]
const sum = numbers2.reduce((acc, num) => acc + num, 0)
console.log(sum)

const numbers3 = [1,2,3,4]
const evenNumbers = numbers3.filter(num => num % 2 === 0)
console.log(evenNumbers)