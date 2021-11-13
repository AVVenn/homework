
// 1. Напишите функцию, которая вычисляет длину линий в
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


// function Line (x, y, a, b) {
//     this.point1 = {
//         x: x,
//         y: y,
//     },
//     this.point2 = {
//         x: a,
//         y: b
//     }
// }
// Line.prototype.getLineLenght = function () {
//     this.lenghtLine = Math.sqrt((this.point1.x-this.point2.x)**2+(this.point1.y-this.point2.y)**2);
// }

// const line1 = new Line (1, 2, 5, 5);
// const line2 = new Line (3, 8, 2, 1);
// const line3 = new Line (0, 4, 3, 6);

// line1.getLineLenght();
// line2.getLineLenght();
// line3.getLineLenght();

// function canTriniagle (line1, line2, line3) {
//     if(line1 < line2 + line3 && line2 < line1 + line3 && line3 < line1 + line2) {
//         return console.log(`lines can make triniagle`);
//     } else {
//         return console.log(`lines can't make triniagle`)
//     }
// }
// console.log(line1);
// console.log(line2);
// console.log(line3);
// canTriniagle (line1.lenghtLine, line2.lenghtLine, line3.lenghtLine);
// ___________________________________________________________________________________

// 2. Создать конструктор Car, который принимает параметры
// model, color, price. Конструктор должен возвращать объект в
// котором присутствуют вышеназванные поля со значениями.
// Каждый представитель класса Car должен обладать методом
// run() который выводит сообщение вида : MODEL + “ ” +
// COLOR + ” is running”.

// function Car (model, color, price) {
//     this.model = model;
//     this.color = color;
//     this.price = price;
// }

// Car.prototype.run = function () {
//     console.log(`${this.model} ${this.color} is running`);
// };

// const mercedes = new Car (`Mercedes`, `black` , 1000000);
// const lexus = new Car (`Lexus`, `white`, 60000);
// const tesla = new Car (`Tesla`, `metalic`, 30000);

// console.log(mercedes);
// console.log(lexus);
// console.log(tesla);

// mercedes.run();
// lexus.run();
// tesla.run();

// ___________________________________________________________________________________
// 3. Создать конструктор Book, с помощью этого конструктора
// создать массив из 8 книг (объектов). Каждая книга должна
// представлять из себя объект, в котором есть три поля:
// author, bookName, pageAmount.
// Создать функцию getBiggerBook(), которая принимает
// массив книг и возвращает ОДНУ книгу с наибольшим
// количеством страниц

// let arr = [];
// function Book (author, bookName, pageAmount){
//     this.books = {
//         author: author,
//         bookName: bookName,
//         pageAmount: pageAmount
//     }
//     return arr.push(this.books);
// }

// const book1 = new Book (`Джек Лондон `,`Мартин Иден`, 400);
// const book2 = new Book (`Дэниел Киз `,`Цветы ля Э́лджернона`, 300);
// const book3 = new Book (`Рэй Брэдбери`,`451 градус по Фаренгейту`, 350);
// const book4 = new Book (`Джордж Оруэлл `,`1984`, 250);
// const book5 = new Book (`Джордж Оруэлл`,`Скотный двор`, 300);
// const book6 = new Book (`Рэй Брэдбери `,`Вино из одуванчиков`, 270);
// const book7 = new Book (` Джордж Самюэль Клейсон`,`Самый богатый человек в Вавилоне`, 180);
// const book8 = new Book (`Оскар Уайльд`,`Портрет Дориана Грея`, 380);

// console.log(arr);

// function getBiggerBook (array) {
//     let [itemArray] = array;
//     let max = array[0].pageAmount;
//     for (let i = 0; i < array.lenght; i++) {
//         if (max < array[i].pageAmount){
//             max = array[i].pageAmount;
//             itemArray = array[i];
//         }
//     }
//     console.log(max);
//     return itemArray;
// }

// console.log (getBiggerBook (arr));  

//---------------------------------------------------------------
// function getBiggerBook (array) {
//         array.reduce ((accum, item) => {
//             if (item.pageAmount > accum) { 
//                 accum = item.pageAmount;
//             }
//         });
//     };
//     console.log (getBiggerBook (arr));  // UNDEFINED  
// ___________________________________________________________________________________

// 4. Создать класс Timer, инстанс которого запускает таймер и выводит в консоль
// прошедшее время в секундах (1 2 3 4 5 и тд)
// инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер
// а также методом .reset() который сбрасывает таймер на 0.
// С помощью Timer вы должны создать несколько таймеров и убедится в том, что они 
// работают независимо друг от друга.
// останавливайте таймер через некоторое время после запуска с помощью setTimeout()

// let time = 0;
// function timer () {
//     time++;
//     console.log(time);
// }

// let id = setInterval(timer, 1000);
// clearInterval(id, 5000);






// ___________________________________________________________________________________
// let dwayne = {};
// let daniel = { firstName: 'Daniel'};
// let jason = {key: 'jason'};

// dwayne[daniel]=123;
// dwayne[jason]=456;

// console.log(dwayne[daniel]);