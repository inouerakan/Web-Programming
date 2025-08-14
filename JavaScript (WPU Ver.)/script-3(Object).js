// Literal Object - Tidak efektif untuk object yang banyak.
// let mahasiswa1 = {
//     nama: 'Teresa',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi += porsi
//         console.log(`Selamat makan, ${this.nama}!`)
//     }
// }

// let mahasiswa2 = {
//     nama: 'Runa',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi += porsi
//         console.log(`Selamat makan, ${this.nama}!`)
//     }
// }



// Function Declaration - Mengatasi masalah tidak efektif dari Literal Object di interface, namun tetap memakan memori di belakang layar.
// let mahasiswa_method = { // Ini salah satu cara supaya masalah di belakang layar teratasi, yaitu dengan membuat object terpisah untuk method.
//     makan: function(porsi) {
//         this.energi += porsi
//         console.log(`Selamat makan, ${this.nama}`)
//     },
//     main: function(jam) {
//         this.energi -= jam
//         console.log(`Selamat bermain, ${this.nama}`)
//     },
//     tidur: function(jam) {
//         this.energi += 2 * jam
//         console.log(`Selamat tidur, ${this.nama}`)
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(mahasiswa_method) // Mirip warisan. Tapi ini juga terkadang tidak oke, ketika kita hanya butuh satu object.
//     mahasiswa.nama = nama
//     mahasiswa.energi = energi
//     // mahasiswa.makan = mahasiswa_method.makan
//     // mahasiswa.main = mahasiswa_method.main // Namun sayangnya masih tidak efesien karena harus menulis lagi di object utama jika ada object baru yang ditambahkan di objek method. Ada cara untuk mengatasi hal ini yakni dengan cara di line paling atas fungsi ini.

//     return mahasiswa
// }

// let teresa = Mahasiswa('Teresa', 15)
// let runa = Mahasiswa('Runa', 15)

// console.log(teresa)



// function Mahasiswa(nama, energi) {
//     // let this = Object.create(Mahasiswa.prototype); - Di belakang layar seperti ini.
//     this.nama = nama;
//     this.energi = energi;
    
//     // return mahasiswa; - Di belakang layar seperti ini.
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Selamat makan, ${this.nama}`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Selamat bermain, ${this.nama}`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Selamat tidur, ${this.nama}`;
// }

// let teresa = new Mahasiswa('Teresa', 20)


// Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama
//     this.energi = energi

//     this.makan = function(porsi) {
//         this.energi += porsi
//         console.log(`Selamat makan, ${this.nama}`)
//     }

//     this.main = function(jam) {
//         this.energi -= jam
//         console.log(`Selamat bermain, ${this.nama}`)
//     }
// }

// let teresa = new Mahasiswa('Teresa', 15)



// Versi Class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Selamat makan, ${this.nama}`;
    }
}

let teresa = new Mahasiswa('Teresa', 20);
let runa = new Mahasiswa('Runa', 15);

console.log(teresa)
console.log(runa)