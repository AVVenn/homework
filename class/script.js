// 1. Создать класс House, инстанс которого иммет поля
// adress: {city:, street:, number:}
// apartments: Apartment[]
// maxApartments: number
// метод addApartment который принимает объект Apartment
// и добавляет его в массив apartments
// добавлять квартир больше чем maxApartments - запрещено
// добавлять квартиру без владельца запрещено
// добавлять квартиру без номера - запрещено
// нельзя добавлять квартиру если квартира с таким номером уже существует
// в массиве.
// Создать класс Apartment, интсанс которого имеет поля
// apartmentNumber: number
// owner: string // по умолчанию - пустая строка
// и метод setOwner('Vasya')
// [
//     {apartmentNumber:2, owner:'Vasya'},
//     {apartmentNumber:3, owner:'Petya'}
// ]
// _________________________________________________________________________________________________________________________
// class Apartments {
//     constructor (apartmentNumber) {
//         this.apartmentNumber = apartmentNumber;
//         this.owner = ``;
//     }
//     setOwner (ownerName) {
//         this.owner = ownerName;
//     }
// };

// const ap1 = new Apartments(1);
// const ap2 = new Apartments(2);
// const ap3 = new Apartments(1);
// const ap4 = new Apartments(4);

// ap1.setOwner(`Vasiliy`);
// ap2.setOwner(`George`);
// ap3.setOwner(`John`);
// ap4.setOwner(`Elena`);

// class House {
//     constructor (city, street, number, maxApartments) {
//         this.adress = {
//             city,
//             street,
//             number
//         };
//         this.maxApartments = maxApartments;
//         this.apartments = [];
//     }
//     addApartment (hata) { 
//         if ( hata.owner !== ``
//             && this.apartments.length < this.maxApartments
//             && !this.apartments.some( item => (item.apartmentNumber === hata.apartmentNumber))
//         ) {
//         this.apartments.push(hata);
//         }
//     }
// };

// let h1 = new House (`Homel`,`Osipova`, 7 , 3);

// h1.addApartment (ap1);
// h1.addApartment (ap2);
// h1.addApartment (ap3);
// h1.addApartment (ap4);

// console.log (h1);

// ____________________________________________________________________________________________________________________________________________
// 2. Создать класс Device, который имеет параметр isOn (по 
//         умолчанию false), метод callSmbd, который принимает имя 
//         вызываемого абонента и метод switchDevice, который 
//         переключает параметр isOn. Позвонить абоненту можно 
//         только тогда, когда параметр isOn == true, иначе вывести 
//         сообщение, что звонок невозможен. Необходимо также 
//         создать классы Smartphone(принимает имя и диагональ 
//         экрана(не может быть больше 8)) и Tablet(принимает имя и 
//         диагональ экрана (не может быть меньше 8)), которые 
//         наследуют от класса Device

// class Device {
//     constructor (){
//         this.isOn = false;
//     }

//     callSmbd (calName){
//         if(this.isOn === false) {
//             console.log(`I can't call ${calName}`)
//         } else {
//             console.log(`calling ${calName}`)
//         }
//     }

//     switchDevice(){
//         this.isOn = !this.isOn;
//     }
// };

// let device = new Device ();
// device.callSmbd(`AvveN`);
// device.callSmbd(`AvveN`, 1);


// class Smartphone extends Device {
//     constructor (name, screenDiagonal) {
//         super();
//         this.name = name;
// 		this.screenDiagonal = 'can`t be bigger than 8' ;
//         if (screenDiagonal < 8) {
//             this.screenDiagonal = screenDiagonal;
//         }
//     }
// };

// class Tablet extends Device {
//     constructor (name, screenDiagonal) {
//         super();
//         this.name = name;
//         this.screenDiagonal = 'can`t be smaller than 8' ;
//         if (screenDiagonal > 8) {
//             this.screenDiagonal = screenDiagonal;
//     	}
//     }
// };

// const apple = new Tablet (`Apple`, 9);
// console.log (apple);
// apple.callSmbd(`Andrey`);
// apple.callSmbd(`Andrey`, 1);
// console.log (apple);

// ____________________________________________________________________________________________________________________________________________
// 3. Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100). Создать класс Device, 
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две 
// батарейки). Создать класс Gamepad, который наследует от 
// Device. Класс Gamepad должен содержать поле model, поле 
// isConnected (boolean) и методы connectTo(), который 
// принимает название другого девайса и выводит сообщение 
// типа “gamepadModel connected to TV”, метод disconnect(), 
// который отключает Gamepad и метод play(), который  
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно 
// поле batteryType у Device и type у Battery не совпадают, то 
// вывести сообщение что батарейки не вставлены. 
// Подключить один девайс к другому можно только если есть 
// 2 батарейки. Подключить Gamepad можно только если 
// isConnected == false. Если заряд батареек == 0, то метод 
// play вернет сообщение с требованием замены батареек

// class Battery {
//     constructor (type) {
//         this.type = type;
//         this.energy = 100;
//     }
// };

// const battery1 =  new Battery(`XL`);
// const battery2 =  new Battery(`XL`);
// const battery3 = new Battery(`XXL`);

// class Device{
//     constructor (batteryType) {
//          this.batteryType = batteryType;
//     }

//     insertBattery (bat1, bat2) {
//         this.bat1 = bat1;
//         this.bat2 = bat2;
//     }
// }

// class Gamepad extends Device {
//     constructor (model, ...arg) {
//         super(...arg);
//         this.model = model;
//         this.isConnected = false;
//     }

//     connectTo(nameDevice){
// 		if (this.bat1 !== undefined 
// 			&& this.bat2 !== undefined
// 			&& this.isConnected === false){
// 			this.isConnected = true;
//             console.log(`gamepad ${this.model} connected to ${nameDevice}`);
//         } else {
//             console.log(`Connection failed`);
//         }
//     }

//     disconnect (nameDevice) {
// 		this.isConnected = false;
//         console.log(`gamepad ${this.model} diconnected from ${nameDevice}`)
//     }

// 	play () {
// 		if (this.bat1.type !== this.batteryType                
// 			|| this.bat2.type !== this.batteryType) {
//         	console.log (`${this.bat1.type} or ${this.bat2.type} is not ${this.batteryType}`)
// 		} 
// 		if (this.bat1.energy === 0 
// 			|| this.bat2.energy === 0) {
//             console.log(`Заряд батареек равен 0`) 
//         } else {
//             this.bat1.energy -=10; 
// 			this.bat2.energy -=10; 
//         }
//     }
// }

// const gamepad = new Gamepad (`HOBA`, `XL`);

// gamepad.insertBattery(battery1, battery2);
// console.log(gamepad);
// // gamepad.insertBattery(battery1, battery3);
// gamepad.connectTo(`TV`);
// gamepad.disconnect(`TV`);
// gamepad.connectTo(`PC`);
// console.log(gamepad);
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play(); // Заряд батареек равен 0
// ____________________________________________________________________________________________________________________________________________
// 2. Создать класс Device, который имеет параметр isOn (по 
//     умолчанию false), метод callSmbd, который принимает имя 
//     вызываемого абонента и метод switchDevice, который 
//     переключает параметр isOn. Позвонить абоненту можно 
//     только тогда, когда параметр isOn == true, иначе вывести 
//     сообщение, что звонок невозможен. Необходимо также 
//     создать классы Smartphone(принимает имя и диагональ 
//     экрана(не может быть больше 8)) и Tablet(принимает имя и 
//     диагональ экрана (не может быть меньше 8)), которые 
//     наследуют от класса Device

// class Device {
//     constructor () {
//         this.isOn = false;
//     }

//     callSmbd (who) {
//         if (this.isOn) {
//             console.log(`you are calling ${who}`);
//         } else {
//             console.log(`You cant call anyone`);
//         }
//     }

//     switchDevice () {
//         this.isOn = !this.isOn;
//     }
// }

// class Smartphone extends Device {
//     constructor (name, diag) {
//         super();
//         this.name = name;
//         if (diag > 8) {
//             this.diag = 8;
//         } else {
//             this.diag = diag;
//         }
//     }
// }

// class Samsung extends Smartphone {
//     constructor (name, diag) {
//         super(name, diag);
//     }
// }

// const dev = new Device();
// dev.switchDevice();
// dev.callSmbd('Oleg');
// ____________________________________________________________________________________________________________________________________________


// 3. Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100). Создать класс Device, 
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две 
// батарейки). Создать класс Gamepad, который наследует от 
// Device. Класс Gamepad должен содержать поле model, поле 
// isConnected (boolean) и методы connectTo(), который 
// принимает название другого девайса и выводит сообщение 
// типа “gamepadModel connected to TV”, метод disconnect(), 
// который отключает Gamepad и метод play(), который 
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно 
// поле batteryType у Device и type у Battery не совпадают, то 
// вывести сообщение что батарейки не вставлены. 
// Подключить один девайс к другому можно только если есть 
// 2 батарейки. Подключить Gamepad можно только если 
// isConnected == false. Если заряд батареек == 0, то метод 
// play вернет сообщение с требованием замены батареек

// class Battery {
//     constructor (type) {
//         this.type = type;
//         this.energy = 100;
//     }
// }

// class Device {
//     constructor (type) {
//         this.batteryType = type;
//         this.btrs = [];
//     }

//     insertBattery (b1,b2) {
//         if (b1.type !== this.batteryType
//             || b2.type !== this.batteryType) {
//                 console.error(`you cant insert type because batteries have different types: ${b1.type} and ${b2.type}`);
//         } else {
//             this.btrs.push(b1,b2);
//         }
//     }
// }

// class Gamepad extends Device {
//     constructor (model, type) {
//         super(type);
//         this.model = model;
//         this.isConnected = false;
//     }

//     connectTo (deviceName) {
//         if (!this.isConnected       
//             && this.isAllBatteriesCharged()) {
//                 this.isConnected = true;
//                 console.log('connected! to ' + deviceName);
//         } else {
//             console.log('could not connect!');
//         }
//     }
    
//     disconnect () {
//         this.isConnected = false;
//         console.log('Device disconnected!');
//     }

//     play () {
//         if (this.btrs.length > 1 
//             && this.isAllBatteriesCharged() ) {
//             console.log('you play game!');
//             this.btrs = this.btrs.map((btr) => ({
//                 ...btr,
//                 energy: btr.energy <= 0 ? 0 : btr.energy - 10
//             }))
//         } else {
//             console.error('you cant play due to batteries, change them!');
//         }
//     }

//     isAllBatteriesCharged () {
//         return this.btrs.every(({energy}) => energy > 0 );
//     }
// }

// const b1 = new Battery ('AAA');
// const b2 = new Battery ('AAA');
// const b3 = new Battery ('BBB');

// const ps5gamepad = new Gamepad('ps5', 'AAA');

// ps5gamepad.insertBattery(b1,b2);
// ps5gamepad.connectTo('ps5');
// ps5gamepad.disconnect();
// ps5gamepad.connectTo('xbox');
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();


// ____________________________________________________________________________________________________________________________________________

// class Human {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi () {
//         return `Hello!, ${this.name}!`;
//     }
// }
// const vasya = new Human (`Vasya`, 20);
// vasya.sayHi();

// class Programmer extends Human {
//     constructor (name, age, ...tehnologies) {
//         super(name, age);
//         this.tehnologies = tehnologies;  
//     }
//     startCoding() {
//         return console.log(`${this.name} is coding using ${this.tehnologies}`)
//     }
// }

// let leha = new Programmer (`Leha`, 30, `html`, `css`, `js`);
// leha.startCoding();


// class Sportsman extends Human {
//     constructor (medal, ...arg) {
//         super(...arg)
//         this.medal = medal;
//     }
// }

// let valera = new Sportsman(5, `Valera`, 25)
// valera.sayHi();

// class FootballPlayer extends Sportsman {
//     constructor (team,...arg) {
//         super(...arg)
//         this.team = team;
//     }
//     run (speed) {
//         return `${this.name} is running ${speed} kmph`
//     }
// }
// let valeriy = new FootballPlayer(`Lester`,5, `Valeriy`, 25);
// console.log(valeriy.run(35));
// console.log(valeriy);

// class HockeyPlayer extends Sportsman {
//     constructor (weight, ...arg) {
//         super(...arg);
//         this.weight = weight;
//     }
//     pushOpponents(opponentName) {
//         return `${this.name} pushed ${opponentName} and used ${this.weight}`
//     }
// }






















// ____________________________________________________________________________________________________________________________________________

// class Human {
//     constructor (name, age){
//         this.name= name;
//         this._age =age;
//     }

//     get age () {
//         return this._age;
//     }

//     set age (value){
//         if (value < 20) {
//             console.log (`his age more than 20!`);
//             return;
//         }
//         this._age = value;
//     }
    
//     showInfo () {
//         return `${this.age} age:${this.age}`
//     }
// }
// let andr = new Human(`Andrey`, 23);

// Object.defineProperty(andr, "name", {
//     value: `Andrew`,
//     enumerable: true,   // если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
//     writable: false,  //  если true, свойство можно изменить, иначе оно только для чтения.
//     configurable: true // если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
// });
// let descriptor = Object.getOwnPropertyDescriptor(andr, "name");
// console.log(descriptor);
// andr.name = `Andrey`;  // осталось Andrew

// // for (let key in andr){
// //     console.log(key);
// // };


// Object.defineProperty (andr, `name`,{
//     enumerable:false                            // поле name теперь в цикле  выводиться не будет
// })

// for (let key in andr){
//     console.log(key);
// };
// console.log(andr) 



// console.log(andr.age);
// andr.age = 27;
// console.log(andr.age);

// ____________________________________________________________________________________________________________________________________________
// Object.defineProperties(user, {
//     name: { value: "John", writable: false },
//     surname: { value: "Smith", writable: false },
//     // ...
//   });