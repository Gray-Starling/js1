"use strict";

alert("Задание 7");

//Сравнить null и 0. Попробуйте объяснить результат.

let a = null;
let b = 0;
let c = undefined;

let comp1 = a > b;
let comp2 = a < b;
let comp3 = a >= b;
let comp4 = a <= b;
let comp5 = a == b;
let comp6 = a != b;
let comp7 = a === b;
let comp8 = a !== b;

let comp9 = a == c;

console.log(`a > b будет ${comp1}`); // false 0 не больще 0.
console.log(`a < b будет ${comp2}`); // false 0 не меньше 0.
console.log(`a >= b будет ${comp3}`); // true 0 равен 0.
console.log(`a <= b будет ${comp4}`); // true 0 равен 0.
console.log(`a == b будет ${comp5}`); // false 0 равен 0, но значения undefined и null равны друг другу и не равны ничему другому. (только при не строгом и строгом равенствах)
console.log(`a != b будет ${comp6}`); // true так как null не равен 0, то это выражение верно.
console.log(`a === b будет ${comp7}`);
console.log(`a !== b будет ${comp8}`);

console.log(`a == c будет ${comp9}`); // true undefined и null равны между собой.