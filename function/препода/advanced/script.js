// anonymous
// self invoking function
// callback коллбэки
// closure замыкание + IIFE
// recursion рекурсия
// setTimeout
// setInterval


// 1. создать функцию которая принимает имя пользователя
// и возвращает строку вида "Привет NAME"
// создать функцию которая принимает имя пользователя
// и возвращает строку вида "Hello NAME"
// создать функцию которая принимает имя пользователя
// и возвращает строку вида "Ciao NAME"

// написать функцию sayHello которая принимает имя пользователя
// и коллбэк (функция переводчик)

// при запуске sayHello она должна возвести имя пользователя в верхний регистр
// после чего передать измененное имя в КОЛБЭК

// italian('john') ===>>> 'Ciao john'
// english('joHN') ===>>> 'Hello joHN'

// sayHello('john', english) ===>>> 'Hello JOHN'
// sayHello('john', italian) ===>>> 'Ciao JOHN'

// function italian (userName) {
//     console.log(`Ciao ${userName}`);
// }

// function english (userName) {
//     console.log(`Hello ${userName}`);
// }

// function russian (userName) {
//     console.log(`Привет ${userName}`);
// }

// function sayHello(userName, language) {
//     const upperUserName = userName.toUpperCase(); // 'joHn' =====>>>> 'JOHN'
//     language(upperUserName);
// }

// sayHello('joHn', italian);

// (function () {})()


// function func (a, b) { // a = 20, b = function (10) {return 20}
//     return 20 / b(10);
// };

// console.log(
//     func(20, function (a /*10*/) {return a * 2})
// );


// function func (a, b) { // a = 20, b = function (10) {return 20}
//     return 20 / b(10);
// };

// console.log(
//     func(20, function (a /*10*/) {return a * 2})
// );


// const arr = [
//     function (a,b) {return a - b},
//     function (a,b) {return a + b},
//     func
// ];


// anonymous func self-invoking func IIFE
// (function (a,b) {
//     console.log(a+b);
// })()



// const func = function someFunc (n) {
    //     console.log(n);
    //     if (n === 0) {
    //         return n;
    //     } else {
    //         return someFunc(n - 1);
    //     }
    // };


// let i = 0;
// do {
//     console.log(i);
// // сделать чтотто
// } while (i > 2)

// let oldNum;
// let currentNum;

// for (let i = 0; i < 5; i++) {
//     currentNum = +prompt('enter number');

//    if (oldNum < currentNum || i === 0) {
//     oldNum = currentNum;
//    } else {
//        alert('ERROR');
//        break;
//    }
// }

// if (i === 0) {
//     oldNum = prompt('enter number');
// }
// 'use strict';


// function a () {}
// const foo = a;

// const arr = [
//     function () {},
//     function () {}
// ];



// function sum (a,b) {
//     return a + b;
// }

// function sub (a,b) {
//     return a - b;
// }

// function spyMe (zhertva) {
//     return function (a,b) {
//         console.log('СЛЕЖКА!',a,b)
//         return zhertva(a,b);
//     }
// }

// const spiedSum = spyMe(sum);






const result = spiedSum(10, 2);
console.log('VALERCHIK',result);


