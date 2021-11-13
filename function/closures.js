// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

// function toggleMe () {
//     let bool = false;
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

// ________________________________________________________________________________________________

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0

// function funxCounter (number) { 
//     if ( number >= 100) {
//     return function () {
//         if (number >= 0){
//         return number--;
//         } else { 
//             return 0;
//         }
//     }
//     } else if ( number < 100 ) {
//         return function () {
//         return number++;
//         }
//     }
// }

// const foo = funxCounter();

// function loops(){
//     for (let i = 0; i < 105 ; i++){
//         console.log (foo ());
//     }
// }

// loops();

// ________________________________________________________________________________________________________________
// препода

// function counterMaker () {
//     let counter = 0;
//     let ascend = true;

//     return (val) => {
//         if (val && val === 0) {
//             counter = val;
//             ascend = !(val >= 100);
//             return counter;
//         }

//         if (ascend) {
//             return ++counter;
//         } 
//         return --counter;      
//     };
// }

// counter = counterMaker();
// console.log(counter());
// console.log(counter());
// console.log(counter(105));
// console.log(counter());
// console.log(counter());
// console.log(counter(10));
// console.log(counter());
// console.log(counter());
// console.log(counter());


// ________________________________________________________________________________________________________________
// function funxCounter (counter = 0, toggle = true) {
//     return function (i) {
//         if (i === undefined && toggle === true) {
//             return counter++;
//         }
//         if (i === undefined && toggle === false) {
//             return counter--;
//         }
//         if(i < 100) {
//             toggle = true;
//             counter = i;
//             return counter++;
//         }
//         if (i >= 100) {
//             toggle = false;
//             counter = i;
//             return counter--;
//         }
//     }
// }

// const foo = funxCounter();

// console.log (foo());
// console.log (foo());
// console.log (foo(98));
// console.log (foo());
// console.log (foo());
// console.log (foo(110));
// console.log (foo());
// console.log (foo());
// console.log (foo(10));
// console.log (foo());
// console.log (foo());
// ________________________________________________________________________________________________________________

// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

// function classNameEditor (addClass, toggler) {
//     let oldClass = `burger `;
//     if (toggler === true) {
//         return oldClass +=addClass;
//     }
//     if (toggler === false) {
//         return oldClass;
//     }
// }

// const newClass = classNameEditor;
// console.log (newClass (prompt(`Введите имя класа`), false));


// _____________________________________________________________________________________________________
// препод решал
// function classNameEditorMaker () {
//     let className = '';

//     return function (val, isAdding) {
//         if (val && isAdding) {
//             className += ' ' + val;
//         }

//         if (val && isAdding === false) {
//             const classNameArr = className.split(' ');
//             const indexToDelete = className.indexOf(val);
//             if(indexToDelete >= 0) {
//                 classNameArr.splice(indexToDelete, 1);
//                 className = classNameArr.join(' ');
//             }
//         }   

//         return className.trim();
//     };
// }


// const classNameEd = classNameEditorMaker();

// console.log(classNameEd('test', true));
// console.log(classNameEd('smth', true));
// console.log(classNameEd('adasdsd', false));
// console.log(classNameEd
// _____________________________________________________________________________________________________


// function sum (a,b) { 
//     return a + b;      // ф-ия сумма
// }

// function sub (a,b) {
//     return a - b;    // ф-ия вычитание
// }


//функция spyMe не знает , что там написано в теле sum или sub

// function spyMe (zhertva) {    // передаем функцию , которая уже в себе осуществляет необходимое действие
//     return function (a,b) {      // вернет функция другую функцию, которая выведет НАМ слово слежка и аргументы и б
//         console.log('СЛЕЖКА!',a,b)
//         return zhertva(a,b);  // вернет  результат a и б , который хочет пользователь
//     }
// }

// const spiedSum = spyMe(sum);  // присваиваем spiedSum return SpyMe

// const result = spiedSum(10, 2); // resut будет хранить в себе return SpiedSum
// console.log('VALERCHIK',result);

// function sum (a,b) {
//     return a+b;
// }
// function minus (a,b) {
//     return a-b;
// }

// function shpion (fKotorayaZertva) {
//     return function (ab,ba) {
//         console.log (`Инфа`, ab, ba);
//         return fKotorayaZertva(ab,ba);
//     };
// }

// const summa =  shpion(sum); // как мы узнаем как называлась функция
// console.log (summa(10, 7));



// _____________________________________________________________________________________________________________________

// function avg () {
//     let args = [];

//     for (let i = 0; i < arguments.length; i++) {
//         args.push(arguments[i]);
//     }

//     console.log(args);
// }
// console.log(avg(2,3,4,3,4,5,342,4,23,423,4));
