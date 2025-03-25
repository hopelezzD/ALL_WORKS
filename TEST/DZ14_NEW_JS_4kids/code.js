// #1. Математические расчеты и функции
// Создайте две функции, add и multiply; пусть каждая принимает
// по два аргумента. Функция add должна складывать аргументы
// и возвращать результат, а функция multiply — перемножать
// аргументы.
// С помощью только этих двух функций вычислите следующее
// несложное выражение:
// 36325 * 9824 + 777

const add = function(arg1, arg2){
    return arg1+arg2;
}
const multiply = function(arg1,arg2){
    return arg1*arg2;
}

console.log(add(multiply(36325,9824),777));


// #2. Совпадают ли массивы?
// Напишите функцию areArraysSame, которая принимает два
// массива с числами в качестве аргументов. Она должна возвращать true, если эти массивы одинаковые (то есть содержат одни
// и те же числа в одном и том же порядке), или false, если массивы различаются. Убедитесь, что ваша функция работает правильно, запустив такой код:
// areArraysSame([1, 2, 3], [4, 5, 6]);
// false
// areArraysSame([1, 2, 3], [1, 2, 3]);
// true
// areArraysSame([1, 2, 3], [1, 2, 3, 4]);
// false

const areArraysSame = function(arr1,arr2){
    if(arr1.length!=arr2.length){
        return false;
    }
    for(let i =0; i<arr1.length;i++){
       if(arr1[i]!=arr2[i]) {
        return false;
       }
    }
    return true;
}

console.log( areArraysSame([1, 2, 3], [4, 5, 6]));
console.log( areArraysSame([1, 2, 3], [1, 2, 3]));
console.log( areArraysSame([1, 2, 3], [1, 2, 3, 4]));
console.log( areArraysSame([1, 2, 3,4], [1,2,3]));