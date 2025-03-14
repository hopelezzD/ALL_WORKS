for (let index = 3; index < 10000; index = index * 3) {
    console.log(index);

}
let x = 3;
while (x < 10000) {
    console.log(x);
    x = x * 3;
}

const animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (let i = 0; i < animals.length; i++) {
    animals[i] += " - прекрасное животное";
}
console.log(animals);

let resString = "";
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
for (let i = 0; i < 10; i++) {
    resString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(resString);

// 3 case

var input = "javascript is awesome";
var output = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
        output += '4';
    }
    else if (input[i] === 'e') {
        output += '3';

    }
    else if (input[i] === 'i') {
        output += '1';

    }
    else if (input[i] === 'o') {
        output += '0';

    }
    else {
        output += input[i];
    }
}
console.log(output);

var input = "javascript is awesome";
var output = "";
for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
        case "a": output += '4';
            break;
        case 'e': output += '3';
            break;
        case 'i': output += '1';
            break;
        case 'o': output += '0';
            break;
        default: output += input[i];
            break;
    }
}
console.log(output);
