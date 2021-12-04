	// Создать класс Shop, инстанс которого обладает полем
// shopItems - массив объектов типа shopItem
// У инстанса класса Shop должен быть метод setSales(discountPercent),
// который устанавливает всем shopItem'ам isOnSale = true,
// а также снижает цену на discountPercent процентов.
// У инстанса также должен быть метод purchaseItem(itemName)
// которое находит в массиве shopItems, необходимый shopItem и уменьшает его
// количество на 1.
// Если количество shopItem равно нулю, то нужно выбросить ошибку о том, что
// айтемов больше нет в наличии. Обработайте эту ошибку и выведите в консоль
// сообщение что айтем нельзя заказать тк он закончился.
// У инстанса Shop также должно быть поле totalProfit - число (общее
// количество заработанных денег), в которое складывается
// цена каждого проданного айтема.

// Создать класс ShopItem, инстанс которого должен обладать полями
// itemName - название товара
// price - цена товара (не может быть меньше нуля, используйте сеттер)
// amount - количество товара (не может быть меньше нуля, используйте сеттер)
// isOnSale - булево значение

// Создать класс Clothes - который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// size - строка характеризующая размер (может принимать значения только 'S', 'M', 'L', 'XL', обрабатывать
// сеттером, иначе выбрасывать ошибку)
// material - строка характеризующая материал
// color - строка цвета
// Класс Clothes, должен обладать статическим методом .changeColor(cloth, color)
// который принимает инстанс этого класса и цвет, метод меняет инстансу цвет на color;

// Создать класс TV который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// diagonal - число
// withSmartTV - булево значение
// Оба поля должны быть недоступны для изменения, но доступны для чтения
// т.е. значения этих полей устанавливаются только в конструкторе, дальше сеттерами
// запрещаем их изменять

// Создать инстанс Shop и прокинуть в него несколько инстансов TV и Clothes
// проверить все методы на работоспособность

class Price extends Error {};
class NumberOfProductEror extends Error {};
class SizeClothesEror extends Error {};
class BooleanEror extends Error {};

class ShopItem {
	constructor (nameProduct, priceProduct, numberOfProduct){
		this.nameProduct = nameProduct;
		this.numberOfProduct = (numberOfProduct > 0) ? numberOfProduct : 0;
		if (priceProduct > 0 ) {
			this._priceProduct =  priceProduct;
		} else {
			throw new Price(`Price can't be lower than zero`)
		}
		this.isOnSale = false;
	}

	get price(){
		return `${this._priceProduct}$`;
	}

	set price(price) {
		if(price > 0 ){
			this._priceProduct = price;
		}
	}
}


class Clothes extends ShopItem {
	static #sizes = ['S', 'M', 'L', 'XL'];
	static changeColor = function (cloth, color) {
		cloth.#color = color;
	};

	#material;
	#color;
	#size;
	
	constructor (size, material, color,  ...arg){
		super(...arg);
		if(Clothes.#sizes.includes(size)){
			this.#size = size;
		} else {
			throw new SizeClothesEror(`size ${size} can't be like that`);
		}
		this.#material = material;
		this.#color = color;
	}

	set size(valueSize) {
		if(Clothes.#sizes.includes(valueSize)) {
			this.#size = valueSize;
		} else {
			throw new SizeClothesEror(`size ${valueSize} can't be like that`);
		}
	}
	get size() {
		return `size:${this.#size}`;   											//* не забывай console.log чтобы получить результат
	}
} 	
																				//todo посмотреть  try {	let ... = } catch {}
let jeans = new Clothes(`M`, `denim`, `blue`, `jeans`, 45, 3);      
jeans.size = `L`;
let sneakers = new Clothes (`S`, `rubber`, `green`, `sneakers`, 50, 2);
// console.table(sneakers);
Clothes.changeColor (sneakers, `orange`);
// console.table(sneakers);
// console.log(sneakers.size);

class TV extends ShopItem {
	#diagonal = 0;
	#withSmartTV;

	constructor(diagonal,withSmartTV, ...arg) {
		super(...arg);
		this.#diagonal = diagonal;
		if (typeof (withSmartTV) === `boolean` ) {
		this.#withSmartTV = withSmartTV;
		} else {
			throw new BooleanEror (`${this.#withSmartTV} it's not boolean`);
		}
	}
	get diagonal() { 																//* не забывай console.log чтобы получить результат
		return `diagonal:${this.#diagonal}''`;
	}
	get withSmartTV() {
		if(this.#withSmartTV === false) {
			return (`don't have smart TV`)
		} else {
			return (`have smart TV`)
		}																			//* не забывай console.log чтобы получить результат
	}
}
																					//todo  посмотреть try {	let ... = } catch {}											
let samsung = new TV (40, false, `samsungTV`, 150, 5);
let sony = new TV (65, true, `sonyTV` , 200, 2);
let sony1 = new TV (65, true, `sonyTV` , 200, 2);
// console.log(samsung);
// console.log(sony);
// console.log(sony.diagonal);
// console.log(sony.withSmartTV);

class Shop {
	#totalProfit = 0;

	constructor () {
		this.shopItems = [];
	}
	addItem(item){
		if(!this.shopItems.some( ({nameProduct}) => nameProduct === item.nameProduct)){
			this.shopItems.push(item);
		}
	}

	setSales(discountPercent) {
		this.shopItems.forEach((item) => {
			item.isOnSale = true;
			item._priceBeforeSale = item._priceProduct;
			item._priceProduct *= (100 - discountPercent)/100;
		})
	}

	offSales () {
		this.shopItems.forEach((item) => {
			item.isOnSale = false;
			item._priceProduct = item._priceBeforeSale;
		})
	}

	purchaseItem (itemName) {
		this.shopItems.forEach((item) => {
			if( item.nameProduct === itemName && item.numberOfProduct > 0){
				item.numberOfProduct--;
				this.#totalProfit += item._priceProduct;
			} else if (item.nameProduct === itemName &&  item.numberOfProduct <= 0) {
				throw new NumberOfProductEror (`${item.nameProduct} out of stock!`);
			}
		})
	}
}

const shop1 = new Shop ();
shop1.addItem (sneakers);
shop1.addItem (sony);
shop1.addItem (samsung);
shop1.addItem (sony1);
shop1.addItem (jeans);
// console.log(shop1)
shop1.setSales (30);
// console.log(shop1)
shop1.purchaseItem (`sneakers`);
shop1.purchaseItem (`sneakers`);
console.log(shop1);


// try {
// 	purchaseItem  																					 //TODO ДОПИСАТЬ!
// } catch (error) {
// 	if (error instanceof NumberOfProductEror) {
// 		console.log (`no more ${this.nameProduct}`)
// 	} else throw error;
// }