let student_1 = {
    name: "Hendar",
    class: "Fullstack Web Developer",
    gender: "Laki-laki" 
}

let student_2 = {
    name: "Hendry",
    class: "Fullstack Web Developer",
    gender: "Laki-laki"
}

let student_3 = {
    name: "Fitri",
    class: "Fullstack Web Developer",
    gender: "Perempuan"
}

console.log(student_1);
console.log(student_2);
console.log(student_3);

console.log("____________________________________________________________");
function Student(nama, kelas, gender) {
    this.name = nama;
    this.class = kelas;
    this.gender = gender;
    
};

const student_func_1 = new Student("Hendar", "Fullstack Web Developer", "Laki-laki");
const student_func_2 = new Student("Kautsar", "Product Manager", "Laki-laki");
const student_func_3 = new Student("Fahmi", "Backend Developer", "Laki-laki");
const student_fucn_4 = new Student("Sinta", "QA", "Perempuan");

console.log(student_func_1);
console.log(student_func_2);
console.log(student_func_3);
console.log(student_fucn_4);

//membuat Function dalam Function Constructor
function Facil(nama, kelas, gender) {
    this.nama = nama;
    this.kelas = kelas;
    this.gender = gender;
    this.helloStudent = (nama, gender) => {
        const title = (gender === "L") ? "Mas." : "Mba.";
        console.log(`Hallo ${title} ${nama}, Selamat Malam`);
    }
}

const facil_1 = new Facil("Siti", "FWA", "Perempuan");
console.log(facil_1);
facil_1.helloStudent("Hendar", "L");

