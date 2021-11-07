// const sizes = [34,51,64];


const person = {
    name: 'John',  
    age: 23,
    size: {
        height: 23,
        width: 41
    },
    stack: ['HTML', 'CSS', 'JS'],
    run: function () {
        console.log('I RUN!');
    },
    // test: undefined
};

// for (let key in person) {
//     console.log( person[key] );
// }

// const arr = [{a:2},{a:54},{a:51}];

// const keys = Object.keys(person); // keys = ['name', 'age', 'size']
// console.log(keys.slice(2,3));

// for (let i = 0; i < keys.length; i++) {
//     console.log( person[ keys[i] ] );
// }

// создайте объект пупырки
// blue: 234,
// red: 214,
// orange: 23,
// purple: 124

// напишите программу которая выведет в консоль сумму всех пупырок


// const pupyrki = {
//     blue: 234,
//     red: 214,
//     orange: 23,
//     purple: 124
// };

// const sum = Object.keys(pupyrki).reduce((sum, pup) => sum + pupyrki[pup] ,0);
// console.log(sum);

// let sum = 0;

// for (let key in pupyrki) {
//     sum += pupyrki[key];
// }
