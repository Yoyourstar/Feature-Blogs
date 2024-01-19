// 1.Buat class Kendaraan
class Kendaraan {
    constructor(merk, tahunProduksi) {
        this.merk = merk
        this.tahunProduksi = tahunProduksi
    }
    // 3. Buat Function hitung usia kendaraan
    hitungUsia() {
        const usia = new Date().getFullYear() - this.tahunProduksi;
        console.log(`Usia kendaraan ${this.merk} adalah ${usia} tahun.`);
    }

}

// 2. Buat class mobil dan motor
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

const avanza = new Mobil("Toyota", 2010)
console.log(avanza);
avanza.hitungUsia()

const beat = new Motor("Honda", 2015)
console.log(beat);
beat.hitungUsia()
