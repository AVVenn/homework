// __________________________________________________________________________________
// 1. Напишите функцию isEmptyObj(), которая проверяет пуст
// объект или нет. Если объект пуст, функция вернет true, если в
// объекте есть хотя бы одно поле, функция вернет false.


// function isEmptyObj() {
//     let hz = {
//         name: `andrey`
//     };
//     for( let key in hz) {
//         return false;
//     }
//     return true;
// }
// console.log(isEmptyObj());

// ___________________________________________________________________________________
// 2.Создайте объект shtuchki. Добавьте в объект поля shtuchka1:
// 200, shtuchka2: 521, shtuchka3: 113, shtuchka4: 314, shtuchka5:
// 871. Напишите программу, которая выведет на экран
// наибольшую штучку (программа должна быть универсальна
// и выводить наибольшую штучку даже если поменяются
// значения)


// let shtuchki = {
//     shtuchka1: 200,
//     shtuchka2: 521,
//     shtuchka3: 113,
//     shtuchka4: 314,
//     shtuchka5: 871
// };


// function maxValue (object) {
//     let max;
//     for(let key in object){
//         if ( max < object[key] || max === undefined) {
//             max = object[key];
//         }
//     }
//     return console.log(max);
// }

// maxValue (shtuchki);
// ___________________________________________________________________________________
// 3. Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа).

// let student = { math: 5, biology: 3, language: 2, isOboltus: `yes` };
// function var1 (object) {
//     for ( let key in object) {
//         if ( typeof object[key] === `number`) {
//             object[key] *=2;
//         }
//     }
//     return console.log(object);
// }
// var1(student);

// ___________________________________________________________________________________

// const arr = [
//     {a: 2, b: 1},
//     {a: 5, b: 12},
//     {a: 95, b: 7}
// ];
//   Используя ТОЛЬКО методы массивов (циклы запрещены):
//   1. Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b

// ___________________________________________________________________________________
// 1.1 
// function validOrNo (array) {
//     let result = true;
//     array.forEach(item => {    // forEach в любом случае возвращает undefined поэтому let c = array.forEach будет бессмысленным - c будет = undefined
//         if (item.a < item.b) {
//             result = false;
//         } 
//         });
//         if (result === true) {
//             return console.log(`its valid`);
//         } else {
//             return console.log(`its no valid`);
//         }
// }
// validOrNo (arr);
// ___________________________________________________________________________________
// 2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат

// let arr = [
//     {a: 2, b: 1},   
//     {a: 5, b: 12},
//     {a: 95, b: 7}
// ]

// const arr2 = [];  

// function getNewArray (array){
//     const arr2 = array.map(getNeWObj);
//     console.log(arr);
//     return console.log(arr2);
// }
// function getNeWObj (object) {
//     let newObj = {};
//     newObj.a = object.a;
//     newObj.b = object.b**2;
//     arr2.push(newObj);
// }
// getNewArray (arr);
// ------------------------------------------------
// 2 вариант
// const arr = [
// 	{a:2, b:1},
// 	{a:5, b: 12},
// 	{a:95, b:7}
// ];
// const arr2 =arr.map(item => item = {a:item.a, b:item.b**2});
// console.log(arr);
// console.log(arr2);

// ___________________________________________________________________________________

//   3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
//   пример получившегося массива: [2,1,5,12,95,7]
//   можно делать копию


// const arr = [
//     {a: 2, b: 1},
//     {a: 5, b: 12},
//     {a: 95, b: 7}
// ]

// function getNewArray (array) {
//     let newArr = (arr.map( item => Object.values(item)));
//     return console.log(newArr = newArr.flat());

    //// let newArr = (arr.map( item => Object.values(item))).flat();  // сложно написано
    //// return console.log(newArr);
// }
// getNewArray (arr);

// ___________________________________________________________________________________
// На паре
// const person = {
//     name: `John`,
//     age: 23,
//     stack: [`HTML`, `CSS`, `JS`],
//     showStack () {
//         this.stack.forEach( (item) => console.log(item));
//     }
// }

// const person2 = {
//     name: `David`,
//     age: 24,
//     stack: [`C++`, `JAVA`, `SQL`],
//     run: function (){
//         console.log(`${this.name} runs`);
//     },
//     showStack () {
//         this.stack.forEach( (item) => console.log(item));
//     }
// };

// let showStack = person.showStack.bind(person);
// let showStack2 = person2.showStack.bind(person2);


// setTimeout (showStack, 1000);
// setTimeout (showStack2, 2000);

// setTimeout(() => person.showStack(), 1000); 
// setTimeout(() => person2.showStack(), 2000); 

// ___________________________________________________________________________________
// Препод
// function showStack () {
//     this.stack.forEach((item) => {
//         console.log(item);
//     });    
// }

// const person = {
//     name: 'John',
//     age: 23,
//     stack: ['HTML', 'CSS', 'JS'],
//     showStack
// };

// const person2 = {
//     name:'David',
//     age: 24,
//     stack: ['C++', 'JAVA', 'SQL'],
//     showStack,
//     run: function () {
//         console.log(`${this.name} runs`);
//     }
// };

// // person.showStack()
// // person2.showStack()

// setTimeout(() => {
//     person.showStack();
// },1000); // person showStack
// setTimeout(person2.showStack.bind(person2),1000 ); // person2 showStack
// ___________________________________________________________________________________


// 1. Дан объект:
// var person = {
// name:’Pablo Picasso’
// }
// Создайте функцию addName(obj, name), которая
// добавляет в список имя name, но только если его там еще
// нет:
// addName(person, 'Garcia');
// person.name=>'Pablo Picasso Garcia'
// addName(person, 'Pablo');
// без изменений (имя уже существует)
// addName(person, 'Rodrigez');
// person.name=>'Pablo Picasso Garcia Rodrigez'

// 1
// let person = {
//     name: `Pablo Picasso`, 
// }

// function addName (obj, name){
//     let arr = obj.name.split(" "); 
//     if ( arr.includes(name) === true ) {
//         console.log(`без изменений (имя уже существует)`);
//         return (obj.name);
//     } 
//     obj.name +=" " + name;
//     console.log(obj.name);
// }

// addName (person, 'Pablo');
// addName (person, 'Garsia');
// addName (person, 'Pablo');
// addName (person, `Picasso`);
// addName (person, 'Petrov');
// console.log (person);

// 2
// function removeName (obj, name) {
//     let arr = obj.name.split(" "); 
//     if ( arr.indexOf(name) === -1 ) {                // findIndex тут был бы кстати
//         console.log(`без изменений (такого имени нет)`);
//         return (obj.name);
//     } 
//     arr.splice(arr.indexOf(name), 1);
//     obj.name = arr.join (' ');
//     console.log (obj.name);
// }

// removeName (person, 'Garsia');
// removeName(person, 'Akakij');
// removeName(person, 'Petrov');
// console.log (person);

// ___________________________________________________________________________________

// 3. Существует массив(длина: 4) футболистов (каждый
//     футболист – это объект). Напишите функцию
//     addAbility(array), которая добавляет к каждому
//     объекту массива функцию run(), при запуске которой
//     выводится сообщение (“ИМЯ_ФУТБОЛИСТА is
//     running”)

// let arr = [
//     {name: `Ronaldo`},
//     {name: `Rooney`},
//     {name:` Gerald`},
//     {name: `Lampard`}
// ];

// function addAbility (arr) {
//     arr.forEach ( item => item.run = function() {
//         console.log (`${this.name} is running`) 
//     },);
// }

// addAbility(arr);
// console.log (arr);
// arr[3].run()

// if (Object.keys(item).includes(run))

// ___________________________________________________________________________________
//  4. Напишите функцию, которая вычисляет длину линий в
// стандартной двухмерной системе координат. Координаты
// начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью функции
//  Проверьте, могут ли три линии сформировать
// треугольник
// Помните:
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина
// каждой стороны треугольника должны быть меньше суммы
// длин остальных сторон.


// const lines = {
//     line1: {
//         point1: {x: 1, y: 2},
//         point2: {x: 5, y: 5}
//     },
//     line2: {
//         point1: {x: 3, y: 8},
//         point2: {x: 2, y: 1}
//     },
//     line3: {
//         point1: {x: 0, y: 4},
//         point2: {x: 3, y: 6}
//     },
//     arr: [],
//     getLineLenght (toshkaA, toshkaB) {
//         result = Math.sqrt((toshkaA.x-toshkaB.x)**2+(toshkaA.y-toshkaB.y));
//         console.log(result);
//         return this.arr.push(result);
//     }, 
//     canTriniagle (array){
//         if(Math.max(...array) < (this.arr.reduce((accum, item) => accum += item) - Math.max(...array))) {
//             return console.log(`lines can make triniagle`);
//         } else {
//             return console.log(`lines can't make triniagle`)
//         }
//     }
// }
// lines.getLineLenght(lines.line1.point1,lines.line1.point2);
// lines.getLineLenght(lines.line2.point1,lines.line2.point2);
// lines.getLineLenght(lines.line3.point1,lines.line3.point2);
// lines.canTriniagle (lines.arr);
// console.log (lines);