class Student {

    #nama;
    #kelas;
    #gender;
    constructor(nama, kelas, gender) {
        this.name = nama
        this.kelas = kelas
        this.gender = gender
    }

    helloSiswa() {
        console.log(`Hallo ${this.name}, Selamat Malam`);
    }
}

const student_func_1 = new Student("Opick", "Bisnis Analisis", "L");
const student_func_2 = new Student("Kautsar", "Product Manager", "L");
const student_func_3 = new Student("Fahmi", "Backend Developer", "L");
const student_func_4 = new Student("Sinta", "QA", "P");

console.log(student_func_1);
console.log(student_func_2);
console.log(student_func_3);
console.log(student_func_4);

student_func_1.helloSiswa();
student_func_2.helloSiswa();
student_func_3.helloSiswa();
student_func_4.helloSiswa();