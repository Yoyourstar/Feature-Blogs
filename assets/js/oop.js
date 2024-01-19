class Mobil {
    constructor(ban, color, type) {
        this.ban = ban
        this.color = color
        this.type = type
    }
}

const mobil1 = new Mobil(4, 'hitam', 'sedan')
const mobil2 = new Mobil(3, 'putih', 'SUV')

console.log(mobil1);
console.log(mobil2);