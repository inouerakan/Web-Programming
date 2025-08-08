do {
    console.log("Hello!")
    break
} while (true)

while (true) {
    console.log("Hello!")
    break
}

const arr = [1,2,3]
for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
        console.log("Almost done!")
    }
    console.log(arr[i])
}

for (let val of arr) {
    console.log(val)
}
for (let [i,val] of arr.entries()) {
    console.log(`${i}. ${val}`)
}