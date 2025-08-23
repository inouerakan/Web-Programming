// const tampil_nama = function(nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampil_nama('Nagi'))



// const tampil_nama = (nama) => {return `Halo, ${nama}`;}

// console.log('Nagi')



// const tampil_nama = (waktu, nama) => {return `Selamat ${waktu}, ${nama}`;}

// console.log(tampil_nama('Pagi', 'Nagi'))



// // Implisit return
// const tampil_nama = nama => `Halo, ${nama}`;

// console.log(tampil_nama('Nagi'))



// const tampil_nama = () => `Hello, World!`;

// console.log(tampil_nama())



let member = ['Inoue Nagi','Masuda Mirine','Setoguchi Mitsuki'];

// let jumlah_huruf = member.map(function (nama) {
//     return nama.length;
// });

// let jumlah_huruf = member.map(nama => nama.length)

let jumlah_huruf = member.map(nama => ({nama: nama, jumlah_huruf: nama.length}))

console.table(jumlah_huruf)