// es5

// function Animal (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Animal.rename = function (animal) {
//     animal.name = 'blabla';
// };

// Animal.prototype.eat = function (food) {
//     return `${this.name} eats ${food}`;
// };

// Animal.prototype.sleep = function () {
//     return `${this.name} sleeps`;
// };

// const dog = new Animal('bobik', 23);
// // console.log(dog);

// function Human (name, age, job) {
//     // this = {};
//     Animal.call(this, name, age);
//     this.job = job;
// }

// Human.prototype = Object.create(Animal.prototype); 
// Human.prototype.constructor = Human;

// Human.prototype.learn = function () {
//     return `${this.name} learns JS`;
// };

// const h1 = new Human('John', 23, 'bus driver');

// создать класс Programmer 
// инстанс которого должен иметь метод code
// и поле isProgrammer = true
// отнаследовать Programmer от Human

// function Programmer (name,age,job) {
//     Human.apply(this, [name,age,job]);
//     this.isProgrammer = true;
// }   

// Programmer.prototype = Object.create(Human.prototype);
// Programmer.prototype.constructor = Programmer;

// Programmer.prototype.code = function () {
//     return `${this.name} codes`;
// };


// const p1 = new Programmer('David', 53, 'js-developer');

// console.log(p1);
// console.log(p1.code());
// console.log(p1.learn());
// console.log(p1.sleep());


// class Animal {
//     constructor (name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat () {
//         return `${this.name} eats`;
//     }
// }

// // const dog = new Animal('Tuzik',10);

// class Human extends Animal {
//     constructor (job, ...args) { // [name, age]
//         super(...args);
//         this.job = job;
        
//     }

//     learn (technology){
//         console.log(super.eat());
//         return `${this.name} learns ${technology}`;
//     }

//     eat () {
//         const eatAsAnimal = super.eat();
//         return eatAsAnimal + ' with a fork';
//     }
// }

// const h1 = new Human('bus-driver', 'David', 23);

// console.log(h1.eat());





