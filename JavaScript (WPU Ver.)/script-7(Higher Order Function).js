// Ketika sebuah function menggunakan function lain sebagai argumen.
function kerjakan_tugas(mata_kuliah, selesai) {
    console.log(`Mulai mengerjakan mata kuliah ${mata_kuliah}`);
    selesai();
}

function selesai() {
    console.log(`Selesai mengerjakan tugas!`);
}

kerjakan_tugas("Pemrograman Web", selesai);



// Ini juga termasuk higher order function karena menggunakan function sebagai argumen.
setTimeout(function() {
    console.log("Nagiii");
}, 1000)



// Ini juga bisa dianggap higher order function karena memiliki return value yang merupakan function.
function ucapkan_salam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, selamat ${waktu}. Semoga harimu menyenangkan!`)
    }
}

let selamat_malam = ucapkan_salam("Malam");
selamat_malam("Nagi")