const person = {
    name: 'Nagi',
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

person.greet()

const human = {
    name: 'Nagi',
    greet: () => console.log(`Hello, my name is ${this.name}`) // Global scope
}

human.greet()