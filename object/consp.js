
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

// rest, spread
// arrays, object destucturization

// spread, rest

// const person = {
//     name: 'John',
//     age: 23,
//     stack: ['HTML', 'CSS', 'JS']
// };

// const copy = [...arr, false , ...arr2, 'asdasd', false];
// const programmer = {
//     ...person,
//     isProgrammer: true,
//     stack: [...person.stack]
// };

// programmer.stack.push('blabla');

// console.log(person);

// const foo = (muha, ...kotlety) => {
//     console.log(muha);
// };

// .call(this, arg1, arg2, arg3)
// .splice(2, 1, 'asd', 'asdasd', 'zxcxzc', 'asdasd')

// foo(person);

// destucturization

// const person = {
//     age: 23,
//     name: 'John',
//     stack: ['HTML', 'CSS', 'JS'],
//     city: 'Gomel',
//     // size: {
//     //     // width: 100,
//     //     height: 200
//     // }
// };

// const {
//     // city: gorod = "Eremino",
//     city = 'Eremino',
//     stack: [, CSS],
//     size: {width:shirina = 0},
//     ...urezannyjPerson
//    } = person;
// const imya = person.name;
// const vozrast = person.age;
// const age = person.age;

// console.log(person)
// console.log(size);



// const arr = [2,3,12,312,3213,12,3];
// const someArr = [1,2,100];
// // let one = arr[0];
// // const two = arr[1];
// let [zero, one, two = 0, ...ostalnoe] = someArr; // [2,3,12,312,3213,12,3]

// console.log(two)



