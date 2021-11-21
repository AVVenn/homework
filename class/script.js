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
//     switchDevice(){
//         this.isOn = !this.isOn;
//     }
//     callSmbd (calName,switchDevice){
// 		if (switchDevice) {
// 			this.switchDevice();
// 		}
//         if(this.isOn === false) {
//             console.log(`I can't call ${calName}`)
//         } else {
//             console.log(`calling ${calName}`)
//         }
//     }
// };

// let device = new Device ();
// device.callSmbd(`AvveN`);
// device.callSmbd(`AvveN`, 1);


// class Smartphone extends Device {
//     constructor (name, screenDiagonal, ...arg) {
//         super(...arg);
//         this.name = name;
// 		this.screenDiagonal = 'can`t be bigger than 8' ;
//         if (screenDiagonal < 8) {
//             this.screenDiagonal = screenDiagonal;
//         }
//     }
// };

// class Tablet extends Device {
//     constructor (name, screenDiagonal, ...arg) {
//         super(...arg);
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
//         this.batteryType = batteryType;
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


// let n = +prompt(`Введите число человек`);
// let arr = [];
// let s = +prompt(`Каждый s умрет`);
// let arr2;
// for (let i = 1; i <= n; i++) {
//     arr.push(i);
// }
// for (let i = 0; i < n ; i++) {
//    arr2 = arr.splice(i,s-1);
// }
// console.log(arr2);

