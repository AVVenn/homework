//1. пользователь вводит 2 числа, вывести в консоль большее из них

// let randomNumberOne = prompt (`Введите ваше число`);
// let randomNumberTwo = prompt (`Введите ваше число`);
// if (randomNumberOne === null || randomNumberTwo === null || randomNumberOne === "" || randomNumberTwo === "" ) {
//     console.log ('Вы ничего не ввели или отменили!');
// } else if ( isNaN(randomNumberOne) || isNaN(randomNumberTwo)){
//     console.log (`Введенные число(а) ${randomNumberOne} или ${randomNumberTwo} некорректны`);
// } else if (randomNumberOne>randomNumberTwo) {
//     console.log (`Первое введенное число больше второго на ${randomNumberOne-randomNumberTwo}`); 
// } else if (randomNumberOne<randomNumberTwo) { 
//     console.log (`Второе введенное число больше первого на ${Math.abs(randomNumberOne-randomNumberTwo)}`);
// }

//2. пользователь вводит 3 числа, первые два это числа которые он хочет перемножить
// третье число, это результат умножения по мнению пользователя
// выяснить правильно ли ответил пользователь и вывести в консоль ОК если правильно
// NOT OK {rightAnswer} если неправильно

// let randomNumberOne = prompt (`Введите число которое хотите умножить`);
// let randomNumberTwo = prompt (`Введите число которое хотите умножить`);
// let userResult = prompt (`Введите предполагаемый ответ`);
// if (randomNumberOne === null || randomNumberOne === "" || randomNumberTwo === null || randomNumberTwo === "") {
//     console.log (`Вы ничего не ввели или отменили!`);
// } else if (isNaN (randomNumberOne) || isNaN (randomNumberTwo)) {
//     console.log (`Введенные числа ${randomNumberOne} или ${randomNumberTwo} некорректны`);
// } else if ( (randomNumberOne*randomNumberTwo) === +userResult ) {
//     console.log (`Ок`);
// } else if ( (randomNumberOne*randomNumberTwo) !== +userResult) {
//     console.log ('Не Ок');
// }


// Решение препода 
// let num1 = +prompt('enter num1');
// let num2 = +prompt('enter num2');

// if (num1 > num2) {
//     console.log(num1);
// } else if (num2 > num1) {
//     console.log(num2);
// } else {
//     console.log('they are equal');
// }

// const num1 = +prompt('enter num1');
// const num2 = +prompt('enter num2');
// const userResult = +prompt('enter result');

// const rightAnswer = num1 * num2;

// if (userResult === rightAnswer) {
//     console.log('OK');
// } else {
//     console.log(`NOT OK ${rightAnswer}`);
// }
