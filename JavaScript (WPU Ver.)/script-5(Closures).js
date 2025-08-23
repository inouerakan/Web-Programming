// function init() {
//     let nama = 'Mirine';
//     return function tampil_nama() {
//         console.log(nama);
//     }
//     // return tampil_nama;
// }
// let panggil_nama = init();

// panggil_nama()



// function ucapkan_salam(waktu) {
//     return function(nama) {
//         return `Halo ${nama}, Selamat ${waktu}. Semoga harimu menyenangkan!`;
//     }
// }
// let selamat_pagi = ucapkan_salam('Pagi');
// let selamat_siang = ucapkan_salam('Siang');
// let selamat_malam = ucapkan_salam('Malam');

// console.log(selamat_malam('Mirine'));
// console.log(selamat_malam('Nagi'));



let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();
ounter = 100

console.log(add())
console.log(add())
console.log(add())