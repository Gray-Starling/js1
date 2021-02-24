"use strict";

alert("Задание 6");

/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из задания 5) 
и вернуть полученное значение (использовать switch).
*/
let a;
let b;
let oper;

do {
	a = +prompt("Ввелите значение первого аргумента");
	b = +prompt("Введите значение второго аргумента");
	oper = prompt("Введите желаемое действие:\n sum - для сложения\n dif - для вычитания\n mul - для умножения\n div - для деления");
} while (isNaN(a) || isNaN(b) || oper != "sum" && oper != "dif" && oper != "mul" && oper != "div")

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "sum":
			function sum(arg1, arg2) {
				return (arg1 + arg2);
			}
			document.write(`Сумма чисел ${arg1} и ${arg2} равняется ${sum(arg1, arg2)}.`);
			break;
		case "dif":
			function dif(arg1, arg2) {
				return (arg1 - arg2);
			}
			document.write(`Разница чисел ${arg1} и ${arg2} равняется ${dif(arg1, arg2)}.`);
			break;
		case "mul":
			function mul(arg1, arg2) {
				return (arg1 * arg2);
			}
			document.write(`Произведение чисел ${arg1} и ${arg2} равняется ${mul(arg1, arg2)}.`);
			break;
		case "div":
			function div(arg1, arg2) {
				return (arg1 / arg2);
			}
			document.write(`Операция деления чисел ${arg1} и ${arg2} равняется ${div(arg1, arg2)}.`);
			break;
	}
}

mathOperation(a, b, oper);