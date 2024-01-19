class Mobil {
    constructor(name, color, type) {
        this.name = name
        this.color = color
        this.type = type
    }
    nyalakanMesin() {
        console.log(`Mobil ${this.name}, mesin menyala!`);
    }

    matikanMesin() {
        console.log(`Mobil ${this.name}, mesin mati!`);
    }
}

class MobilSport extends Mobil {
    constructor(name, color, type, ) {
        super(name, color, type)  
   }
}

class MobilSuv extends Mobil {
    constructor(name, color, type, ) {
        super(name, color, type)  
   }
}