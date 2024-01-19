// 1.Buat class Kendaraan
class Kendaraan {
    constructor(merk, tahunProduksi) {
        this.merk = merk
        this.tahunProduksi = tahunProduksi
    }

}

class Mobil extends Kendaraan {
    constructor(merk, tahunProduksi) {
        super(merk, tahunProduksi)
    }
}

class Motor extends Kendaraan {
    constructor(merk, tahunProduksi) {
        super(merk, tahunProduksi)
    }
}
