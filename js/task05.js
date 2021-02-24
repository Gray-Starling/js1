"use strict";

alert("Задание 5");

// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function sum(arg1, arg2) {
	return (arg1 + arg2);
}
function dif(arg1, arg2) {
	return (arg1 - arg2);
}
function mul(arg1, arg2) {
	return (arg1 * arg2);
}
function div(arg1, arg2) {
	return (arg1 / arg2);
}

let a = parseInt(Math.random() * 100);
let b = parseInt(Math.random() * 100);

document.write(`Сумма чисел ${a} и ${b} равняется ${sum(a, b)}.<br>`);
document.write(`Разница чисел ${a} и ${b} равняется ${dif(a, b)}.<br>`);
document.write(`Произведение чисел ${a} и ${b} равняется ${mul(a, b)}.<br>`);
document.write(`Операция деления чисел ${a} и ${b} равняется ${div(a, b)}.<br>`);