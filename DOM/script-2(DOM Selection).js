// DOM Selection
// getElementById - Mengembalikan elemen
const judul = document.getElementById('judul');
judul.style.color = 'purple';
judul.style.backgroundColor = "yellow";
judul.innerHTML = 'Nogizaka46';

// getElementsByTagName - Mengembalikan HTMLCollection
const p = document.getElementsByTagName('p');
let isYellow = false;
setInterval(function() {
    if (isYellow) {
        for (let i = 1; i < p.length; i++) {
            p[i].style.backgroundColor = '';
        }
    } else {
        for (let i = 1; i < p.length; i++) {
            p[i].style.backgroundColor = 'yellow';
        }
    }
    isYellow = !isYellow;
}, 1000);
p[0].style.backgroundColor = 'lightblue'

const h1 = document.getElementsByTagName('h1')[0]; // Supaya yang diambil jadi elemen (bukan HTMLCollection)
h1.style.fontSize = '5em';

// getElementsByClassName - Mengembalikan HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari JavaScript';