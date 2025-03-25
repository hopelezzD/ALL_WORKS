let num1, num2, operand;
const htmlResult = document.getElementById("result");
do {
    num1 = parseFloat(prompt("введите первое число :", num1));
    num2 = parseFloat(prompt("введите второе число :", num2));
    operand = prompt("введите оператор :", operand);
} while (isNaN(num1) || isNaN(num2));

const add = (a, b) => {
    return a + b;
}
const del = (a, b) => {
    if (b === 0) {
        console.error("Error! B= 0");
        return;
    }
    return a / b;
}
const mult = (a, b) => {
    return a * b;
}
const minus = (a, b) => {
    return a - b;
}

const show = (text) => {
    htmlResult.innerHTML += text;
}

function calculate(num1, num2, callback, show) {
    show(callback(num1, num2));
}

switch (operand) {
    case "/": calculate(num1, num2, del, show)
        break;
    case "-": calculate(num1, num2, minus, show)
        break;
    case "*": calculate(num1, num2, mult, show)
        break;
    case "+": calculate(num1, num2, add, show)
        break;
    default: htmlResult.innerHTML += "Error, Not an operand";
}




// const reMap = function (arr) {

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] *= arr[i];
//     }
//     return arr;
// }
// const map = function (callback, array) {
//   return  callback(array);

// }

// console.log(map(reMap, [1, 2, 3]));

const myFunc = (num) => {
    return num * num;
}
const map = (callback, array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
    return array;
}

console.log(map(myFunc, [1, 2, 3, 6]));

function checkAge(age) {
    return age > 18 ? true : confirm('Батьки дозволили?');
}

htmlResult.innerHTML += "<br><hr>";
const age = parseInt(prompt("введите возраст : "));
htmlResult.innerHTML += checkAge(age);


htmlResult.innerHTML += "<br><hr>";

function checkAgeSecond(age) {
   return (age>18 ||confirm('Батьки дозволили?'))
}

htmlResult.innerHTML += checkAgeSecond(age);