console.log(nama);
var nama = 'Rakan';
// Creation Phase pada Global Context.
// var = undefined
// function = fn()
// Hoisting
// windows = global object
// this = global object



// Execution Phase
var nama = 'Rakan';
var umur = 16;
console.log(sayHello());

function sayHello() {
    return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
}
// Function membuat local Execution Context yang didalamnya terdapat Creation dan Execution phase.
// Bisa akses window
// Bisa akses arguments
// Hoisting