// 1. Создать функцию, которая принимает массив и callback. Функция должна каждый элемент массива обрабатывать callback’ом.
// function getUp (str) { // Элемент массива ,котторый мы должны преобразовать 
//     return str.toUpperCase(); // Возвращает преобразованный элемент (str)  массива.
// }
// function getDown (str) { 
//     return str.toLowerCase(); 
// }
// function getResult (array, callback) { //  мы принимаем массив и должны выбрать одну из написанных функций getUp или getDown
//     let arr = []; // Создали новый пустой массив для записи измененных значений принятого массива array  
//     for (let i = 0; i < array.length; i++) { 
//         arr.push(callback(array[i])); // записываем в массив arr результат функции callback, функция callback преобразует элемент массива array; 
//     } return arr;
// }
// alert(getResult(["andry", "STEPAN", "PAVEL", "olga", "alexander", "VALERA"], getDown));

//  _________________________________________________________________________________________________________________________

// 2. Создать функцию sumTo, которая принимает два числа и callback. Задача функции складывать 2 числа, а задача callback’a заставлять функцию sumTo возвращать результат в виде числа, строки или логического типа данных.

// function inString (x) {
//     return  String(x);
// }

// function inNumber (x) {
//     return Number(x);
// }

// function inBoolean (x) {
//     return Boolean(x);
// }

// function sumTo (number1, number2, callback) {
//     let x = number1 + number2;
//     return callback(x);
// } 
// alert (sumTo(1,2, inString));
// alert (typeof ( sumTo(1,2,inString)));

//  _________________________________________________________________________________________________________________________

// 3. Создать функцию checkLogin, которая принимает 4 параметра. 1 параметр - это логин, введенный пользователем, 2 – правильный логин, 3 – callback, который вызовется если логин верный, 4 – callback, который вызовется если логин ложный.

// function trueLogin () {
//     return `You input correct login!`;
// }

// function falseLogin () {
//     return `You input incorrect login!`;  
// }

// function checkLogin (userLogin, correctLogin, callbackIfTrue, callbackIfFalse) {
//     if (userLogin === correctLogin) {
//         return callbackIfTrue();
//     } else {
//         return callbackIfFalse();
//     }
// }

// alert(checkLogin (prompt(`Введите ваш логин`), "JS", trueLogin, falseLogin));


// --------------------------------------------------------/  _________________________________________________________________________________________________________________________

// 4. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
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

// 5. Написать программу, которая определяет количество положительных, отрицательных чисел и нулей. В начале программы, пользователь самостоятельно
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

    // function getBigger (number1, number2) {
    //     if (number1 > number2) {
    //     return number1;
    //     } else {
    //     return number2;
    //     }
    // }  
    // function getArr (){
    //     let arr = [];
    //     for(let i = 0; i < 10; i++){
    //         number1 = +prompt(`Введите первое число из пары`);
    //         number2 = +prompt(`Введите второе число из пары`);
    //         arr.push(getBigger(number1 ,number2));
    //     }
    //     return alert(arr);
    // }
    // getArr ();

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

// function AaverageNumber () {
// let counternumbers = 0;
// let sumNumbers = 0;
// for (;;) {
//     let currentRandomNumbers = prompt(`Введите число`);
//     sumNumbers += Number(currentRandomNumbers);
//     if (currentRandomNumbers === null || currentRandomNumbers === "") {
//         break;
//     }
//     counternumbers++;
//     } alert (sumNumbers/counternumbers);
// } 
// AverageNumber ();

// Задача: Вокруг считающего стоят N человек, один из которых назван первым, а остальные занумерованы по часовой стрелке от 2 до N. Считающий, начиная с первого, ведет счет до S. Человеку, на котором остановился счет, отрубают голову. Счет продолжается до следующего человека, и остающиеся продолжают считаться так до тех пор, пока не останется один человек. Определить порядок выбывания считающихся из круга.




// sum(1)(2) = 3

// let sum = a => b => a+b;
// console.log(sum(1)(2)); 