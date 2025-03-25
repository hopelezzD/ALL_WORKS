function Worker(name, surname, rate, days) {
    this.name = name,
        this.surname = this.surname,
        this.rate = rate,
        this.days = days,
        this.getSalary = function () {
            console.log(`Зарплата ${this.name} равно :  ${this.rate * this.days}`)
        }
}
Worker.prototype.getSalary2 = function () {
    console.log(`Зарплата ${this.name} равно (вывод 2) :  ${this.rate * this.days}`)
}

const worker1 = new Worker('Tom', 'Tomasson', 2500, 10);
const worker2 = new Worker('Tom2', 'Tomasson2', 2600, 100);
worker1.getSalary();
worker2.getSalary();
worker1.getSalary2();
worker2.getSalary2();


class Worker2 {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = this.surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary3() {
        console.log(`Зарплата ${this.name} равно :  ${this.rate * this.days}`);
    }
}

const wokrer3 = new Worker2('petya', 'Worker3', 10, 25);
const wokrer4 = new Worker2('vovka', 'Worker4', 10, 30);
wokrer3.getSalary3();
wokrer4.getSalary3();



class MyString {
    constructor(str = 'brrr') {
        this.str = str;
    }

    reverse() {

        return this.str.split("").reverse().join("");

    }
    ucFirst() {
        return this.str[0].toUpperCase() + this.str.slice(1);
    }
    ucWords() {
        let resStr = "";
        for (const el of this.str.split(" ")) {
            resStr += el[0].toUpperCase() + el.slice(1) + " ";
        }
        return resStr;
    }
}

const str = new MyString("hello world");
console.dir(str);
console.log(str.reverse());
console.log(str.ucFirst());
console.log(str.ucWords());

function MyString2(str) {
    this.str = str;
}

MyString2.prototype.reverse = function () {
    return this.str.split("").reverse().join("");
}

MyString2.prototype.ucFirst = function () {
    return this.str[0].toUpperCase() + this.str.slice(1);
}

MyString2.prototype.ucWords = function () {
    let resStr = "";
    for (const el of this.str.split(" ")) {
        resStr += el[0].toUpperCase() + el.slice(1) + " ";
    }
    return resStr;
}


const str2 = new MyString2("hello world 2");
console.dir(str2);
console.log(str2.reverse());
console.log(str2.ucFirst());
console.log(str2.ucWords());