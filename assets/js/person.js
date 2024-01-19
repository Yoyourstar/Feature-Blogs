const persons = [];

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        // 1. set value gender
        
    }

    setTitle() {
        // 2. tambahkan argument untuk set title, jika L = "Tuan" apabila P = "Nyonya", maka nilai
        // namenya menjadi contoh  name = Tuan Jhon
        if (this.gender === "L") {
            this.name = "Tuan " + this.name;
        }
        else {
            this.name = "Nyonya " + this.name;
            
        }
    }

    static find(name) {
        // 6. tambahakan argument fungsi  pencarian dari array persons berdasarkan nama
        return persons.find((item) => item.name = name)
    }

    
}

// 3. buatkan 2 object person
    // satu laki laki
    // paggil sungsi setTitle dari object person
    // satu perempuan
    // paggil fungsi setTitle dari object person
    const person1 = new Person("Dio", "L");
    person1.setTitle()
    const person2 = new Person("Vira", "P");
    person2.setTitle()
// 4. setiap object person nya ditambahkan ke array object person
    persons.push(person1);
    persons.push(person2);

// 5. tampilkan object person
    console.log(persons);

// 7. paggil fungsi Person.find(name) berdasarkan nama yang di input

const foundPerson = Person.find("Dio");
console.log(foundPerson);
const foundPerson2 = Person.find("Vira");
console.log(foundPerson2);