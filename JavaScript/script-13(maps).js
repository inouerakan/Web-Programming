var myMap = new Map()
var numberMap = new Map([[1,"one"],[2,"two"],[3,"three"]])
console.log(numberMap)

numberMap.set(4,'four')
numberMap.delete(1)
numberMap.get(2)
numberMap.has(2)
numberMap.size

for (let [key,value] of numberMap) {
    console.log(`${key}: ${value}`)
}
for (let value of numberMap.values()) {
    console.log(value)
}
for (let key of numberMap.keys()) {
    console.log(key)
}

numberMap.clear()
console.log(numberMap)

numberMap.set(4,'four')

var arr = Array.from(numberMap)
console.log(arr)
arr = [...numberMap]
console.log(arr)