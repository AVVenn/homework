// 1. Создайте путой массив. С помощью цикла заполните массив числами, где каждое число
// равно квадрату своего номера. (длина массива должна быть 10)

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(i**2);
// }   alert (arr);
//     alert (arr.length);

// Вариант через Math.pow(число, степень) 

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.pow(i,2));
// }   alert (arr);
//     alert (arr.length);



// 2. Создать случайный массив из 10 чисел. Вывести на экран
// количество четных чисел из этого массива.
// let counter = 0;
// let arr = [2,5,7,6,10,4,14,20,12,23];
// for (let i = 0 ; i < arr.length ; i++) {
//     if (arr[i] % 2 === 0 ) { 
//         counter++;
//     }
// } alert (counter);


// 3. Создать случайный массив из 10 чисел. Вывести на экран
// наибольшее число из этого массива.

// let arr = [2,5,7,6,23,4,14,20,12,10];
// function SelectionSort(arr)       // A - массив, который нужно
// {                               // отсортировать по возрастанию.
//     let n = arr.length;
//     for (let i = 0; i < n-1; i++) {
//         let min = i;
//         for (let j = i+1; j < n; j++) { 
//             if (arr[j] < arr[min]) min = j;
//         } 
//         let t = arr[min]; arr[min] = arr[ i ]; arr[ i ] = t;
//     }                    
//     return arr;    // На выходе сортированный по возрастанию массив arr.
// }
// SelectionSort(arr);
// alert (arr[arr.length - 1]);
// alert (arr);

// 4. Дана строка «Мы любим JavaScript». Используя
// метод split, создайте на основе это строки
// массив.(Вывод данных: Мы,любим,JavaScript).

// let arr = "Мы любим JavaScript".split (" ");
// alert (arr); 

// 5.Дан массив ["Мы","любим","JavaScript"]. Используя
// метод join, создайте и выведите строку. В качестве
// разделителя используйте "!" (Вывод данных: Мы!любим!JavaScript).

// let arr = ["Мы", "любим", "JavaScript"];
// alert(arr.join("!"));


// 6.Дан массив ["Я","великий","программист!"] с
// помощью метода indexOf, вывести на экран
// номер позиции строки "программист!"

// let arr = ["Я","великий","программист!"];
// alert (arr.indexOf("программист!"));

// _________________________________________________________________________________________________________________
// Задачи на новые методы


// 2. Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

// const arr = [1, 11, 24, 48, 8 , 66 ,73, 37 , 96 , 108, 102];
// let arr2 = arr.filter( function(number) {
//     if (number%2 === 0 && (number > 9 && number < 100)) {
//         return true;
//     }
// })   

// console.log (arr2);
// console.log (arr);
// _____________________________________________________________________________________________________
// 3. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// // people2.push (`Cемён`);
// let result = people2.some ( function (item){
//     if (item === `Cемён`) {
//         return true;
//     }
// });
// console.log (result);

// _____________________________________________________________________________________________________
// 4. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// const arr = [1, 24, 48, ,73, 37, 102];
// let result = arr.reduce( function (accum, item) {
//     if (item % 2 === 0) {
//         accum += item;
//     } 
//     return accum
// },0 );
// console.log (result);
// _____________________________________________________________________________________________________
// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

// let arr = [];
// for (let i = 0; i < 3; i++){
//     arr.push(+prompt(`Введите число`));
// }
// let result = arr.every (function (item){
//     if(item === +item){
//         return true;
//     }
// });

// console.log (result);
// _____________________________________________________________________________________________________
// 1. Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1.1 Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// 1.2 Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// 1.3 Создайте массив только из тех имен, которые совпадают в обоих массивах.
// 1.4 Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// 1.5 Отсортируйте получившийся массив по алфавиту


let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let currentName = prompt(`Введите имя`);

// 1.1
// let checkcurrentName = people1.map( function (item){
//     if (currentName === item){
//         return people2.push(currentName);
//     }
// });
// console.log(people2);
// _____________________________________________________________________________________________________
// 1.2
// let checkcurrentName = people2.map( function(item, index) {
//     if (currentName === item) {
//         return people2.splice(index,1);
//     }
// });
// console.log(people2);
// console.log(checkcurrentName);
// _____________________________________________________________________________________________________
// 1.3
// let resultArray = [];
// let theSameElements = [].concat (people1, people2);
// theSameElements.filter(function (item, index){
//     if (theSameElements.indexOf(item,index+1) > -1){
//         return resultArray.push(item)
//     }
// })
// console.log(theSameElements);
// console.log(resultArray);
// _____________________________________________________________________________________________________

// 1.4 
// let withoutDuplicates = people1.filter (function(item){
//     if (people2.includes(item) === false){
//         people2.push(item);
//     }
// })
// console.log(people2);
// console.log(people2.sort());    //1.5



// _____________________________________________________________________________________________________