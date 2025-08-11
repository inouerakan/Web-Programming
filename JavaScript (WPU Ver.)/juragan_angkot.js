var penumpang = ['Rakan',undefined,'Shaka']
function tambah_penumpang(nama_penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(nama_penumpang)
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === undefined) {
                penumpang[i] = nama_penumpang
                return
            } else if (penumpang[i] === nama_penumpang) {
                console.log(`Penumpang bernama ${nama_penumpang} sudah ada di angkot`)
                return
            } else if (i === penumpang.length - 1) {
                penumpang.push(nama_penumpang)
                return
            }
        }
    }
}

function kurangi_penumpang(nama_penumpang) {
    if (penumpang.length === 0) {
        console.log('Angkot masih kosong')
        return
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === nama_penumpang) {
                penumpang[i] = undefined
                return
            }
        }
        console.log(`Tidak ada penumpang bernama ${nama_penumpang}`)
    }
}

tambah_penumpang('Asep')
console.log(penumpang)
tambah_penumpang('Asep')
console.log(penumpang)
tambah_penumpang('Yama')
console.log(penumpang)

kurangi_penumpang('Asep')
console.log(penumpang)
kurangi_penumpang('Asep')
console.log(penumpang)