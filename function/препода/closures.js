// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

// function toggleMe () {
//     bool = false;
//     return function () {
//         bool = !bool;
//         return bool;
//     }
// }

// const toggle = toggleMe();

// console.log(toggle());
// console.log(toggle());
// console.log(toggle());
// console.log(toggle());


// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0

// function funcCounter () {
//     let counter = 0;
//     return function (value) {
//         counter = value;
//         if (value) { if (value < 100){
//             counter++;
//             return counter;
//         } else { counter--;
//             return counter;
//         }
//         }
//     }
// }

// const foo = funcCounter();

// console.log(foo(10));
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());


