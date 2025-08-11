class Angkot {
    constructor(sopir, trayek, kas) {
    this.sopir = sopir
    this.trayek = trayek
    this.penumpang = []
    this.kas = kas
    }

    penumpang_naik(nama_penumpang) {
        if (this.penumpang.includes(nama_penumpang)) {
            console.log(`Penumpang bernama ${nama_penumpang} sudah ada di angkot`)
            return
        }
        let kosong = this.penumpang.findIndex(orang => orang === undefined)
        if (kosong !== -1) {
            this.penumpang[kosong] = nama_penumpang
        } else {
            this.penumpang.push(nama_penumpang)
        }
    }

    penumpang_turun(nama_penumpang, bayar) {
        if (!this.penumpang.includes(nama_penumpang)) {
            console.log(`Penumpang bernama ${nama_penumpang} tidak ada di angkot`)
            return
        }
        for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] === nama_penumpang) {
                this.penumpang[i] = undefined
                this.kas += bayar
                return
            }
        }
        console.log(`Angkot ini belum ada penumpang`)
    }
}

var angkot1 = new Angkot('Asep', ['Ciwastra','Leuwipanjang'], 0)
var angkot2 = new Angkot('Tom', ['Cicaheum','Cibiru'], 0)

angkot1.penumpang_naik('Rakan')
angkot1.penumpang_naik('Shaka')
angkot1.penumpang_naik('Raufa')
console.log(angkot1)
angkot1.penumpang_turun('Shaka', 5000)
console.log(angkot1)
angkot1.penumpang_turun('Shaka', 5000)
console.log(angkot1)
angkot1.penumpang_turun('Raufa', 5000)
console.log(angkot1)