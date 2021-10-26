



// 1. 
// switcher() // true
// switcher() // false
// switcher() // true
// switcher() // false
// switcher() // true

function switcherMaker () {
    let val = false;
    return function () {
        val = !val;
        return val;
    };
}

const switcher = switcherMaker();

// console.log(switcher());
// console.log(switcher());
// console.log(switcher());
// console.log(switcher());

// 2. 
// count() // 1
// count() // 2
// count(50) // 51
// count() // 52
// count() // 53


function countMaker () {
    let n = 0;

    return function (val) {
        if (val) {
            n = val;
        }
        n = n + 1;
        return n;
    };
}

const count = countMaker();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count(50));
console.log(count());
console.log(count());



// function countMaker () {
//     let n = 0;
//     return function () {
//         return Boolean(n);
//     } 
// }
// const switcher = countMaker ();
// // const count = countMaker ();

// console.log (switcher ());
