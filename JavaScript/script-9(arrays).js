const arr = []
const arr2 = new Array(5)
console.log(arr2)
console.log(arr2[2])

const arr3 = Array.from("Rakan")
console.log(arr3)

arr3[0] = "P"
console.log(arr3)
console.log(arr3[arr3.length - 1])
console.log(arr3[100])

arr3[arr3.length + 5] = "Shaka"
console.log(arr3)

arr2.push("Yoo!")
console.log(arr2)
arr2.pop()
console.log(arr2)
arr3.shift()
console.log(arr3)
arr3.unshift("R")
console.log(arr3)

console.log(arr3.indexOf("Shaka"))
console.log(arr3.lastIndexOf("Shaka"))
console.log(arr3.includes("Shaka"))

const newArr = arr2.concat(arr3)
console.log(newArr)
const newStr = arr3.join("")
console.log(newStr)
const newStr2 = arr3.join("|")
console.log(newStr2)

const ar4 = arr3.slice(0, 4) // The end index is not included
console.log(ar4)
const arr5 = arr3.splice(0, 4)
console.log(arr5)
console.log(arr3)

var [x,y] = [1,2]
console.log(x, y)
var [x,z,...y] = [1,2,3,4,5]
console.log(x, z, y)

var x = [1,2,3,4,5]
var y = x
y[0] = 100
console.log(x, y)
var x = [1,2,3,4,5]
var y = [...x] // Copy individual elements
y[0] = 100
console.log(x, y)