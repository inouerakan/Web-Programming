const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// Mencari >= 3
// for
const new_angka = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        new_angka.push (angka[i]);
    }
}
console.log(new_angka);
// filter
const angka_baru = angka.filter(item => item >= 3); // Sekalian pakai arrow function
console.log(new_angka)



// map
// Kalikan semua angka dengan 2
let angka_baru_lagi = angka.map(item => item * 2);
console.log(angka_baru_lagi);



// reduce
// Jumlahkan seluruh elemen pada array
angka_baru_lagi = angka.reduce((acumulator, current_val) => acumulator + current_val); // Bisa pakai nilai awal dengan cara tambahkan ,(angka)
console.log(angka_baru_lagi);



// Method Chaining
// Cari angka yang lebih besar dari 5 -> Kalikan dengan tiga -> Jumlahkan semuanya
let hasil = angka.filter(item => item > 5)
.map(item => item * 3)
.reduce((acumulator, current_val) => acumulator + current_val);
console.log(hasil);