"use strict";

class Product {
	constructor(id, name, price, discount, quantity, color, manufacturer) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.discount = discount;
		this.quantity = quantity;
		this.color = color;
		this.manufacturer = manufacturer;
	}
	downgradeQuantity() {
		this.quantity -= 1;
		return quantity;
	}
	makeDiscount(discount) {
		this.price = this.price - (this.price / 100 * discount);
	};
}

//Блок с категориями
const tops = {
	items: [],
	addItemToTops(item) {
		this.items.push(item);
	},
	delItemsFromTops(item) {
		let index = this.items.indexOf(item);
		if (index > -1) {
			this.items.splice(index, 1);
		}
	}
}

const jeans = {
	items: [],
	addItemToJeans(item) {
		this.items.push(item);
	},
	delItemsFromJeans(item) {
		let index = this.items.indexOf(item);
		if (index > -1) {
			this.items.splice(index, 1);
		}
	}
}
//корзина тоже своего рода категория
const basket = {
	items: [],
	addItemToBasket(item) {
		this.items.push(item);
	},
	delItemsFromBasket(item) {
		let index = this.items.indexOf(item);
		if (index > -1) {
			this.items.splice(index, 1);
		}
	},
	getTotalSum() {
		let totalSum = 0;
		this.items.forEach(item => {
			totalSum += item.price;
		});
		return totalSum;
	}
};

//Административная часть

let product01 = new Product(10, "Топ со стразами", 1990, 0, 12, "white", "H&M");
let product02 = new Product(11, "Укороченный топ", 1690, 0, 7, "pink", "Zara");
let product03 = new Product(12, "Топ свободного кроя", 2360, 0, 2, "green", "Mango");
let product04 = new Product(13, "Скини джинсы", 790, 0, 30, "grey", "H&M");


//добавляем товар в определенную категорию, в дальнейшем добавление должно быть реализованно в автоматическом режими
tops.addItemToTops(product01);
tops.addItemToTops(product02);
tops.addItemToTops(product03);
jeans.addItemToJeans(product04);

//Удаляем товар если его this.quantity = 0; В дальнейшем должно быть автоматически от действий пользователя

tops.delItemsFromTops(product03);

//Работа с корзиной

product01.makeDiscount(20);

basket.addItemToBasket(tops.items[0]);
basket.addItemToBasket(tops.items[1]);
basket.addItemToBasket(jeans.items[0]);

console.log(basket.getTotalSum());

basket.delItemsFromBasket(tops.items[1]);

console.log(basket.getTotalSum());





