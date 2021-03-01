"use strict";

let arr = [
	["item_01", 56],
	["item_02", 24],
	["item_03", 95],
	["item_04", 106],
	["item_05", 5],
	["item_06", 298]
]
let counter = 0;
function countBasketPrice() {
	for (let i = 0; i < arr.length; i++) {
		counter += arr[i][1];
	}
}
countBasketPrice();
console.log(counter);