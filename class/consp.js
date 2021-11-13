
// 1. Написать конструктор товара который принимает 3 параметра
// название 
// цвет
// цена
// Добавить в прототип классу метод showPrice ===>>> "товар ИМЯ стоит ЦЕНА"

// function Product (name, color, prise) {
//     this.name = name,
//     this.color = color,
//     this.prise = prise
// }

// Product.prototype.showPrice = function () {
//     console.log(`товар ${this.name} стоит ${this.prise} рублей`)
// }

// const product = new Product ('Альпен гольд', `белый`, 5);
// const product2 = new Product ('Спартак', `зеленый`, 7);

// product.showPrice();
// product2.showPrice();
// _______________________________________________________________________________________________________________________
// 2. Создать класс Device у инстансов которого есть поле isON (boolean)
// В прототипе класса Device создайте метод .switch() который переключает
// поле инстанса в true/false при каждом вызове

// function Device (bool) {
//     this.isON = bool;
// };

// Device.prototype.switch = function () {
//     this.isON = !this.isON; 
//     return console.log(this.isON);
// };

// const change = new Device (true);

// change.switch();
// change.switch();
// change.switch();
// change.switch();
// _______________________________________________________________________________________________________________________