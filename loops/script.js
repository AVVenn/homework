// ______________________________________________________________________________________________
// 1. Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.

// let n = +prompt (`Введите число`);
// while (n) {
//     alert(n);
//     n--;
// }

// ______________________________________________________________________________________________

// 2. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// let n = 10
// while ( n >= 10 && n <= 99) {
//     if ( (n%4 === 0) && (n%6 !==0) ){
//     alert(n);
// }   n +=2;
// }

// ______________________________________________________________________________________________
// 3. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// let usersNumber = +prompt(`Введите сколько чисел вы хотите ввести`);
// let counterPositiveNumbers = 0;
// let  counterNegativeNumbers = 0;
// let counterZero = 0;
// while (usersNumber--) {  //* 0 == false так что так сойдет
//     randomNumber = +prompt ('Введите ваше число');
//     if ( randomNumber > 0) {
//         counterPositiveNumbers++;
//     } else if  ( randomNumber < 0) {
//         counterNegativeNumbers++;
//     } else {
//         counterZero++
//     }
// }
// alert (`Количество нулей: ${counterZero}`);
// alert (`Количество положительных: ${counterPositiveNumbers}`);
// alert (`Количество отрицательных: ${counterNegativeNumbers}`);

// ______________________________________________________________________________________________

// 1. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// let counternumbers = 0;
// let sumNumbers = 0;
// for (;;) {
//     let currentRandomNumbers = prompt(`Введите число`);
//     sumNumbers += Number(currentRandomNumbers);
//     if (currentRandomNumbers === null || currentRandomNumbers === "") {
//         break;
//     }
//     counternumbers++;
// } alert (sumNumbers/counternumbers);

// ______________________________________________________________________________________________

// 2. Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5

// let n = +prompt (`Введите минимальное число диапазона`);
// let m = +prompt (`Введите максимальное число диапазона`);
// for ( let i = n; i <= m; i++ ) {
// let squareI = i*i;
// alert (squareI);
// }

// ______________________________________________________________________________________________

// 3. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

// let currentNumber;
// let lastNumber;
// for (let i = 0; i < 5; i++) {
// 	currentNumber =  +prompt(`Введите число`);
// 	if (currentNumber >= lastNumber || lastNumber === undefined) { 			//* Обрати внимание на вторую проверку
// 		lastNumber = currentNumber;
// 	} else {
// 		alert(`Ошибка`);
// 		break;
// 	}
// } 
// console.log(lastNumber);
// ______________________________________________________________________________________________
// 4. Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"

// let i = "";
// let randomNumber = +prompt (`Введите число равное "за"`);
// for( let countrerIterations = 0 ;countrerIterations < randomNumber ; ++countrerIterations){
//     i +="за";
// } alert (`${i}ика`);

