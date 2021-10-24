// 1. Создать функцию, которая принимает массив и callback. Функция должна каждый элемент массива обрабатывать callback’ом.

// function goUp (array) {
//     for (let i = 0; i < array.length; i++) {
//         array.splice(i, 1, array[i].toUpperCase());
//     }
//     return array;
// }

// function goDown (array) {
//     for (let i = 0; i < array.length; i++) {
//         array.splice(i, 1, array[i].toLowerCase());
//     }
//     return array;
// }

// function main (array, getUpperDown) {
//     return getUpperDown(array);
// }
//     alert(main(["a", "b", "c", "d", "f"], goDown))

//  _________________________________________________________________________________________________________________________

// 2. Создать функцию sumTo, которая принимает два числа и callback. Задача функции складывать 2 числа, а задача callback’a заставлять функцию sumTo возвращать результат в виде числа, строки или логического типа данных.


// function inString (x) {
//     x = String(x);
//     return x;
// }

// function inNumber (x) {
//     x = Number(x);
//     return x;
// }

// function inBoolean (x) {
//     x = Boolean(x);
//     return x;
// }

// function sumTo (Number1, Number2, callback) {
//     let x = Number1 + Number2;
//     return callback(x);
// } 
// alert (sumTo(1,2, inString));
// alert (typeof ( sumTo(1,2,inString)));

//  _________________________________________________________________________________________________________________________

// 3. Создать функцию checkLogin, которая принимает 4 параметра. 1 параметр - это логин, введенный пользователем, 2 – правильный логин, 3 – callback, который вызовется если логин верный, 4 – callback, который вызовется если логин ложный.

// function checkLogin (currentLogin, correctLogin, callBackTrue, callBackFalse) {
//     function callBackTrue() {
//         alert(`Это правильный логин`);
//     }
//     function callBackFalse() {
//         alert(`Это неправильный логин`);
//     } 
//     if (currentLogin === correctLogin) {
//         callBackTrue();
//     } else {
//         callBackFalse();
//     };
// }
// alert (checkLogin (prompt(`Введите логин`), "JS"));
//  _________________________________________________________________________________________________________________________

// Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null)

// function summ (maxNumber)  {
//     let sum = 0;
//     if (maxNumber === null) {
//         return `Отменено`;
//     }
//     maxNumber = +maxNumber;
//     if ( isNaN(maxNumber) || maxNumber < 1)  {
//         return `Введите корректное число большее 1`;
//     } else {
//         for (let i = 0; i <= maxNumber; i++) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// alert (summ (prompt(`Введите максимальное число диапазона, больше 1`)));

//  _________________________________________________________________________________________________________________________

// Написать программу, которая определяет количество положительных, отрицательных чисел и нулей. В начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем вводит сами числа. Пример вывода: «Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.»

// function counter (numbers) {
//     let counterBiggerThanZero = 0;
//     let counterLowerThanZero = 0;
//     let counterZero = 0;
//     for (let i = 0; i < numbers; i++) {
//         let num = +prompt(`Введите число`);
//         if (num === 0){
//             counterZero++;
//         } else if (num > 0){
//             counterBiggerThanZero++;
//         } else if (num < 0){
//             counterLowerThanZero++;
//         }
//     }
//     return `Положительных - ${counterBiggerThanZero}, Отрицательных - ${counterLowerThanZero}, Нулей - ${counterZero}`
// }
// alert (counter(+prompt(`Введите число`)));

//  _________________________________________________________________________________________________________________________

// 6. Написать программу, которая просит ввести с клавиатуры 10 пар чисел, сравнивает эти числа и выводит большие из них. (Используйте массив)


// function defineMax (Number1, Number2) {
//     if (Number1 > Number2) {
//         return Number1;
//     } else  {
//         return Number2;
//     }
//     alert N
// } 
// defineMax (+prompt(`Введите число`),+prompt(`Введите число`));
// defineMax (+prompt(`Введите число`),+prompt(`Введите число`));
// defineMax (+prompt(`Введите число`),+prompt(`Введите число`));
// defineMax (+prompt(`Введите число`),+prompt(`Введите число`));
// defineMax (+prompt(`Введите число`),+prompt(`Введите число`));
// defineMax (+prompt(`Введите число`),+prompt(`Введите число`));
// defineMax (+prompt(`Введите число`),+prompt(`Введите число`));
// defineMax (+prompt(`Введите число`),+prompt(`Введите число`));
// defineMax (+prompt(`Введите число`),+prompt(`Введите число`));
// defineMax (+prompt(`Введите число`),+prompt(`Введите число`));


//  _________________________________________________________________________________________________________________________

// 7. Написать программу, которая выводит на экран двузначные числа, которые делятся на 4, но не делятся на 6.

// function getTrueNumbers (a,b) {
//     let arr = [];
//     for (let i = a; i >= a && i <= b; i +=2){
//         if ( i%4 === 0 && i%6 !== 0 ){
//             arr.push(i);
//         }
// } alert (arr);
// }
// getTrueNumbers (+prompt(`Введите начальное число диапазона`), +prompt(`ведите максимальное число диапазона`)); 

//  _________________________________________________________________________________________________________________________

// 8. Написать программу, которая выводит среднее арифметическое n чисел введенных пользователем. Ввод чисел прекращается тогда, когда нажали «отмена», после чего выводится среднее арифметическое.

function AverageNumber () {
    let counter = 0;
    let sum = 0;
    
    for(){}
    

    }
}