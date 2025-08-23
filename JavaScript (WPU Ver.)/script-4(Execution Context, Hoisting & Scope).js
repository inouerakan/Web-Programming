// console.log(nama);
// var nama = 'Rakan';
// Creation Phase pada Global Context.
// var = undefined
// function = fn()
// Hoisting
// windows = global object
// this = global object



// Execution Phase
// console.log(sayHello());
// var nama = 'Rakan';
// var umur = 16;
// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }
// Function membuat local Execution Context yang didalamnya terdapat Creation dan Execution phase.
// Bisa akses window
// Bisa akses arguments
// Hoisting



// var nama = 'Nagi';
// var username = 'nagi.i_official';
// function cetak_url() {
//     console.log(arguments)
//     var instagram_url = 'http://instagram.com/';
//     return instagram_url + username;
// }
// console.log(cetak_url('saka.evr'));



// function a() {
//     console.log('Ini a');
//     function b() {
//         console.log('Ini b');
//         function c() {
//             console.log('Ini c');
//         }
//         c();
//     }
//     b();
// }
// a();



function satu() {
    var nama = 'Nagi';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Rakan';
satu();
dua('Mirine');
console.log(nama);