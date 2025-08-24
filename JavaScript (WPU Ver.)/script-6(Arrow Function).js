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



// let member = ['Inoue Nagi','Masuda Mirine','Setoguchi Mitsuki'];

// let jumlah_huruf = member.map(function (nama) {
//     return nama.length;
// });

// let jumlah_huruf = member.map(nama => nama.length)

// let jumlah_huruf = member.map(nama => ({nama: nama, jumlah_huruf: nama.length}))

// console.table(jumlah_huruf)



// Konsep this pada arrow function
// Constructor function
// const Member = function() {
//     this.nama = 'Nagi';
//     this.umur = 20;
//     this.halo = function() {
//         console.log(`Halo nama saya, ${this.nama}. Saya ${this.umur} tahun.`);
//     }
// }

// const nagi = new Member();

// Arrow function
// const Member = function() {
//     this.nama = 'Nagi';
//     this.umur = 20;
//     this.halo = () => {
//         console.log(`Halo nama saya, ${this.nama}. Saya ${this.umur} tahun.`);
//     }
// }

// const nagi = new Member();
// nagi.halo()

// Object literal
// const nagi = {
//     nama: 'Inoue Nagi',
//     umur: 20,
//     halo: () => {console.log(`Halo nama saya, ${this.nama}. Saya ${this.umur} tahun`);} // Akan undefined karena arrow function tidak memiliki konsep this
// }

// nagi.halo()



// Kasus lain di constructor function
// const Member = function() {
//     this.nama = 'Nagi';
//     this.umur = 20;
//     this.halo = function() {
//         console.log(`Halo nama saya, ${this.nama}. Saya ${this.umur} tahun.`);
//     }

//     setInterval(function() {
//         console.log(this)
//     }, 500)

//     setInterval(() => {
//         console.log(this);
//     }, 500);
// }

// const nagi = new Member();



const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size'
    let dua = 'caption'
    if (this.classList.contains(satu)) {
        [satu,dua] = [dua,satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600)
})