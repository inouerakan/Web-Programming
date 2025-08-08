const obj = {
    name: 'Nagi',
    age: 20,
    generation: 5,
    nyan: function() {
        return 'nyan nyan nyagi'
    },
    career: {
        idol: 2022
    }
}

obj.age = '二十'
obj.centerSenbatsu = ['Ohitorisama Tengoku','Cheat Day','Navel Orange']
obj['name'] = '和'
console.log(obj)

delete obj.career 
console.log(obj)

console.log(Object.keys(obj))
console.log(Object.values(obj))

for (let key in obj) {
    console.log(key)
}

var obj2 = {
    name: 'Nogizaka46',
    members: 39,
    generation: 5
}

const obj3 = {...obj,...obj2} // Careful when there is another object in the object. It will be overwritten when you change the value
console.log(obj3)

const {name, age} = obj3
console.log(name, age)