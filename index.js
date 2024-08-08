var object = "Halloooo";

var object = "Halloooo";
console.log(object);


let name = "Krisna";
let age = 21;
let university = "IAIN Ponorogo";
let citizen = "Ponorogo"
console.log(`Nama saya ${name}, saya berusia ${age} tahun, saya dari universitas ${university} dan berasal dari ${citizen}`);


function greet(name, type = "karnivora") {
    return `${name} merupakan binatang dengan jenis ${type}`;
}

const greeting = greet("Kucing", "karnivora");

console.log(greeting);


const friends = ["Krisna", "Jamus", "Ulfa", "Neti", "Dela"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

console.log("Perulangan Berhasil");

class Student {
    constructor(name, department) {
        this._name = name;
        this._department = department
    }

    information() {
        return `Halo, nama saya ${this._name} dan saya dari jurusan ${this._department}`;
    }
}

const student = new Student("Krisna", "Tadris IPA");
console.log(student.information());



class Perpustakaan {
    constructor() {
        this.books = [];
    }

    addbook(book) {
        this.books.push(book);
    }

    showBook(book) {
        if (this.books.length === 0) {
            console.log("Tidak ada buku di perpustakaan.");
        } else {
            console.log("Daftar buku di perpustakaan:");
            this.books.forEach((book, index) => {
                console.log(`${index + 1}. ${book}`);
            });
        }
    }
}

const perpustakaan = new Perpustakaan();
perpustakaan.addbook("Laskar Pelangi");
perpustakaan.addbook("Bumi Manusia");
perpustakaan.addbook("Filosofi Kopi");

perpustakaan.showBook();