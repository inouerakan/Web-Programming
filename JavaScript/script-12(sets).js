var mySet = new Set([1,2,3])
console.log(mySet)
mySet.add(1)
console.log(mySet)
mySet.delete(1)
console.log(mySet)
mySet.has(1)
mySet.size

for (let value of mySet) {
    console.log(value)
}

mySet.clear()
console.log(mySet)

mySet = new Set([1,2,3])
arr = Array.from(mySet)
console.log(arr)
arr2 = [...mySet]
console.log(arr2)